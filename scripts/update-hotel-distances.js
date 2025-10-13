// Script para atualizar distâncias reais dos hotéis usando APIs GRATUITAS
// ✅ 100% GRATUITO - Sem necessidade de API Key!
// Usa: Nominatim (OpenStreetMap) + OSRM (Open Source Routing Machine)
// 
// Instalar: npm install axios
// Executar: node scripts/update-hotel-distances.js

const axios = require('axios');
const fs = require('fs');

// Local do evento (Casa do Storytelling)
const eventLocation = {
  name: 'Casa do Storytelling',
  address: 'Alphaville Conde II, Barueri, SP',
  // Coordenadas aproximadas (obtidas do link do Google Maps fornecido)
  lat: -23.5086372,
  lon: -46.8559453
};

// Hotéis para calcular distância
// Coordenadas obtidas do Google Maps para maior precisão
const hotels = [
  {
    name: 'Blue Tree Alphaville',
    address: 'Av. Marcos Penteado de Ulhôa Rodrigues, 939',
    searchQuery: 'Av. Marcos Penteado de Ulhôa Rodrigues, 939, Alphaville, Barueri, São Paulo',
    coords: { lat: -23.4957, lon: -46.8495 },
    category: '4 estrelas',
    amenities: 'Café da manhã incluso'
  },
  {
    name: 'Radisson Hotel Alphaville',
    address: 'Alameda Rio Negro, 1030',
    searchQuery: 'Alameda Rio Negro, 1030, Alphaville, Barueri, São Paulo',
    coords: { lat: -23.4972, lon: -46.8503 },
    category: '4 estrelas',
    amenities: 'Opção business'
  },
  {
    name: 'Comfort Suites Alphaville',
    address: 'Alameda Rio Negro, 333',
    searchQuery: 'Alameda Rio Negro, 333, Alphaville, Barueri, São Paulo',
    coords: { lat: -23.4989, lon: -46.8563 },
    category: '4 estrelas',
    amenities: 'Excelente custo-benefício'
  },
  {
    name: 'HB Hotels Sequoia Alphaville',
    address: 'Alameda Madeira, 292',
    searchQuery: 'Alameda Madeira, 292, Alphaville, Barueri, São Paulo',
    coords: { lat: -23.4945, lon: -46.8489 },
    category: '4 estrelas',
    amenities: 'Academia e restaurante no local'
  }
];

// Geocodificar endereço usando Nominatim (OpenStreetMap) - GRATUITO
async function geocode(address) {
  const url = 'https://nominatim.openstreetmap.org/search';
  
  try {
    const response = await axios.get(url, {
      params: {
        q: address,
        format: 'json',
        limit: 1,
        countrycodes: 'br'
      },
      headers: {
        'User-Agent': 'MedicinaDePrecisao/1.0' // Obrigatório para Nominatim
      }
    });

    if (response.data && response.data.length > 0) {
      return {
        lat: parseFloat(response.data[0].lat),
        lon: parseFloat(response.data[0].lon)
      };
    }
    
    return null;
  } catch (error) {
    console.error(`Erro ao geocodificar: ${error.message}`);
    return null;
  }
}

// Calcular distância usando OSRM (Open Source Routing Machine) - GRATUITO
async function getDistance(origin, destination, profile) {
  // profile: 'driving' ou 'foot' (a pé)
  const url = `http://router.project-osrm.org/route/v1/${profile}/${origin.lon},${origin.lat};${destination.lon},${destination.lat}`;
  
  try {
    const response = await axios.get(url, {
      params: {
        overview: false,
        steps: false
      }
    });

    if (response.data.code === 'Ok' && response.data.routes && response.data.routes.length > 0) {
      const route = response.data.routes[0];
      const distanceKm = (route.distance / 1000).toFixed(1); // metros para km
      const durationMin = Math.round(route.duration / 60); // segundos para minutos
      
      return {
        distance: `${distanceKm} km`,
        duration: `${durationMin} min`,
        formatted: `${durationMin} min (${distanceKm} km)`
      };
    }
    
    return null;
  } catch (error) {
    console.error(`Erro ao calcular rota: ${error.message}`);
    return null;
  }
}

async function updateHotelDistances() {
  console.log('🚀 Buscando distâncias reais dos hotéis usando APIs GRATUITAS...');
  console.log('📡 APIs: Nominatim (OpenStreetMap) + OSRM\n');

  const results = [];

  for (const hotel of hotels) {
    console.log(`📍 Processando: ${hotel.name}`);

    // 1. Tentar geocodificar endereço do hotel
    console.log(`   🔍 Buscando coordenadas via Nominatim...`);
    let hotelCoords = await geocode(hotel.searchQuery);
    
    // Se não encontrar, usar coordenadas fixas
    if (!hotelCoords && hotel.coords) {
      console.log(`   ⚠️  Nominatim não encontrou, usando coordenadas aproximadas`);
      hotelCoords = hotel.coords;
    }
    
    if (!hotelCoords) {
      console.log(`   ❌ Não foi possível obter coordenadas\n`);
      continue;
    }

    console.log(`   ✅ Coordenadas: ${hotelCoords.lat}, ${hotelCoords.lon}`);

    // Aguardar 1 segundo (política de uso justo do Nominatim)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // 2. Calcular distância de carro
    console.log(`   🚗 Calculando rota de carro...`);
    const driving = await getDistance(hotelCoords, eventLocation, 'driving');
    
    // 3. Calcular distância a pé
    console.log(`   🚶 Calculando rota a pé...`);
    let walking = await getDistance(hotelCoords, eventLocation, 'foot');
    
    // Se o tempo a pé for muito similar ao de carro (erro comum do OSRM)
    // calculamos baseado em velocidade média de caminhada (5 km/h)
    if (driving && walking) {
      const drivingMinutes = parseInt(driving.duration);
      const walkingMinutes = parseInt(walking.duration);
      
      // Se a diferença for menor que 2x, recalcular baseado em velocidade média
      if (walkingMinutes < drivingMinutes * 1.5) {
        const distanceKm = parseFloat(driving.distance);
        const walkingTimeMin = Math.round((distanceKm / 5) * 60); // 5 km/h média
        walking = {
          ...walking,
          duration: `${walkingTimeMin} min`,
          formatted: `${walkingTimeMin} min (${driving.distance})`
        };
      }
    }

    if (driving && walking) {
      const result = {
        name: hotel.name,
        address: hotel.address,
        distanceDriving: driving.formatted,
        distanceWalking: walking.formatted,
        category: hotel.category,
        amenities: hotel.amenities
      };
      
      results.push(result);
      
      console.log(`   ✅ De carro: ${result.distanceDriving}`);
      console.log(`   ✅ A pé: ${result.distanceWalking}\n`);
    } else {
      console.log(`   ❌ Não foi possível calcular as rotas\n`);
    }

    // Aguardar entre hotéis
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // Gerar código para copiar e colar
  console.log('\n' + '='.repeat(70));
  console.log('✅ Distâncias calculadas com sucesso!');
  console.log('='.repeat(70) + '\n');
  
  console.log('📋 Copie e cole no arquivo src/components/EventLocation.tsx:\n');
  console.log('const nearbyHotels = [');
  
  results.forEach((hotel, index) => {
    console.log(`  {`);
    console.log(`    name: "${hotel.name}",`);
    console.log(`    address: "${hotel.address}",`);
    console.log(`    distanceDriving: "${hotel.distanceDriving}",`);
    console.log(`    distanceWalking: "${hotel.distanceWalking}",`);
    console.log(`    category: "${hotel.category}",`);
    console.log(`    amenities: "${hotel.amenities}",`);
    console.log(`    mapUrl: "https://www.google.com/maps/dir/${encodeURIComponent(hotel.name + ' ' + hotel.address)}/Casa+do+Storytelling,+Alphaville"`);
    console.log(`  }${index < results.length - 1 ? ',' : ''}`);
  });
  
  console.log('];\n');

  // Salvar em arquivo JSON
  const outputFile = 'hotel-distances.json';
  fs.writeFileSync(
    outputFile,
    JSON.stringify({
      generatedAt: new Date().toISOString(),
      eventLocation: eventLocation,
      hotels: results
    }, null, 2)
  );
  
  console.log(`💾 Dados salvos em: ${outputFile}`);
  console.log('\n' + '='.repeat(70));
  console.log('🎉 Pronto! Agora é só copiar e colar no código.');
  console.log('='.repeat(70) + '\n');
}

// Executar o script
console.log('╔════════════════════════════════════════════════════════════════╗');
console.log('║  🗺️  CALCULADOR DE DISTÂNCIAS - 100% GRATUITO                 ║');
console.log('║  Usando OpenStreetMap (Nominatim + OSRM)                      ║');
console.log('║  Sem necessidade de API Key! 🎉                               ║');
console.log('╚════════════════════════════════════════════════════════════════╝\n');

updateHotelDistances().catch(error => {
  console.error('\n❌ Erro ao executar o script:', error.message);
  process.exit(1);
});

