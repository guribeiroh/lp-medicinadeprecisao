// Script para atualizar distâncias reais dos hotéis usando Google Maps API
// Instalar: npm install axios
// Executar: node scripts/update-hotel-distances.js

const axios = require('axios');
const fs = require('fs');

// ⚠️ IMPORTANTE: Obtenha sua API Key em: https://console.cloud.google.com/google/maps-apis
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY || 'SUA_API_KEY_AQUI';

// Local do evento
const eventLocation = 'Casa do Storytelling, Alphaville Conde II, Barueri, SP';

// Hotéis para calcular distância
const hotels = [
  {
    name: 'Blue Tree Premium Alphaville',
    searchQuery: 'Blue Tree Premium Alphaville, Barueri, SP'
  },
  {
    name: 'Comfort Hotel Alphaville',
    searchQuery: 'Comfort Hotel Alphaville, Barueri, SP'
  },
  {
    name: 'Quality Suites Alphaville',
    searchQuery: 'Quality Suites Alphaville, Barueri, SP'
  },
  {
    name: 'Transamerica Executive Jaraguá',
    searchQuery: 'Transamerica Executive Jaraguá, Barueri, SP'
  }
];

async function getDistance(origin, destination, mode) {
  const url = 'https://maps.googleapis.com/maps/api/distancematrix/json';
  
  try {
    const response = await axios.get(url, {
      params: {
        origins: origin,
        destinations: destination,
        mode: mode, // 'driving' ou 'walking'
        key: GOOGLE_MAPS_API_KEY,
        language: 'pt-BR'
      }
    });

    if (response.data.status === 'OK') {
      const element = response.data.rows[0].elements[0];
      
      if (element.status === 'OK') {
        return {
          distance: element.distance.text,
          duration: element.duration.text
        };
      }
    }
    
    return null;
  } catch (error) {
    console.error(`Erro ao buscar distância: ${error.message}`);
    return null;
  }
}

async function updateHotelDistances() {
  console.log('🚀 Buscando distâncias reais dos hotéis...\n');

  const results = [];

  for (const hotel of hotels) {
    console.log(`📍 Calculando distâncias para: ${hotel.name}`);

    // Buscar distância de carro
    const driving = await getDistance(hotel.searchQuery, eventLocation, 'driving');
    
    // Buscar distância a pé
    const walking = await getDistance(hotel.searchQuery, eventLocation, 'walking');

    if (driving && walking) {
      const result = {
        name: hotel.name,
        distanceDriving: `${driving.duration} (${driving.distance})`,
        distanceWalking: `${walking.duration} (${walking.distance})`
      };
      
      results.push(result);
      
      console.log(`  🚗 De carro: ${result.distanceDriving}`);
      console.log(`  🚶 A pé: ${result.distanceWalking}\n`);
    } else {
      console.log(`  ❌ Não foi possível calcular as distâncias\n`);
    }

    // Aguardar um pouco entre requisições para não exceder rate limit
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // Gerar código para copiar e colar
  console.log('\n✅ Distâncias calculadas com sucesso!\n');
  console.log('📋 Copie e cole no arquivo src/components/EventLocation.tsx:\n');
  console.log('const nearbyHotels = [');
  
  results.forEach((hotel, index) => {
    console.log(`  {`);
    console.log(`    name: "${hotel.name}",`);
    console.log(`    distanceDriving: "${hotel.distanceDriving}",`);
    console.log(`    distanceWalking: "${hotel.distanceWalking}",`);
    console.log(`    category: "${hotels[index].category || '4 estrelas'}",`);
    console.log(`    mapUrl: "https://www.google.com/maps/dir/${encodeURIComponent(hotel.name)}/Casa+do+Storytelling,+Alphaville"`);
    console.log(`  }${index < results.length - 1 ? ',' : ''}`);
  });
  
  console.log('];\n');

  // Salvar em arquivo JSON
  fs.writeFileSync(
    'hotel-distances.json',
    JSON.stringify(results, null, 2)
  );
  
  console.log('💾 Dados salvos em: hotel-distances.json');
}

// Verificar se a API key está configurada
if (GOOGLE_MAPS_API_KEY === 'SUA_API_KEY_AQUI') {
  console.error('❌ ERRO: Configure a GOOGLE_MAPS_API_KEY');
  console.log('\n📝 Como obter a API Key:');
  console.log('1. Acesse: https://console.cloud.google.com/google/maps-apis');
  console.log('2. Crie um projeto ou selecione um existente');
  console.log('3. Ative a "Distance Matrix API"');
  console.log('4. Vá em "Credenciais" e crie uma API Key');
  console.log('5. Execute: export GOOGLE_MAPS_API_KEY="sua_key_aqui"');
  console.log('6. Ou edite este arquivo e coloque a key diretamente\n');
  process.exit(1);
}

updateHotelDistances();

