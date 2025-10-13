# 🗺️ Script para Atualizar Distâncias dos Hotéis - 100% GRATUITO!

## ✨ Destaques

- ✅ **100% GRATUITO** - Sem necessidade de API Key!
- ✅ **Sem cadastro** - Funciona direto
- ✅ **Sem cartão de crédito** - Zero custo
- ✅ **Open Source** - Usa OpenStreetMap (Nominatim + OSRM)

## 📋 Pré-requisitos

1. **Node.js** instalado (v14 ou superior)
2. **axios** instalado (já foi instalado anteriormente)

## 🚀 Como Executar o Script

### Super Simples - Apenas 1 comando!

```bash
node scripts/update-hotel-distances.js
```

**É isso! Sem API Key, sem configuração! 🎉**

## 🔧 Tecnologias Utilizadas

### 1. **Nominatim (OpenStreetMap)**
- API de geocodificação gratuita
- Converte endereços em coordenadas geográficas
- Política de uso justo (1 req/segundo)

### 2. **OSRM (Open Source Routing Machine)**
- Motor de roteamento gratuito
- Calcula rotas de carro e a pé
- Sem limite de requisições
- URL: http://router.project-osrm.org/

## ✅ O que o Script Faz

1. 🔍 Geocodifica os endereços dos hotéis usando **Nominatim**
2. 🗺️ Obtém coordenadas precisas
3. 🚗 Calcula rota de carro usando **OSRM**
4. 🚶 Calcula rota a pé usando **OSRM**
5. 📊 Exibe no console formatado
6. 💾 Salva em `hotel-distances.json`
7. 📋 Gera código pronto para copiar e colar

## 📄 Exemplo de Saída

```
╔════════════════════════════════════════════════════════════════╗
║  🗺️  CALCULADOR DE DISTÂNCIAS - 100% GRATUITO                 ║
║  Usando OpenStreetMap (Nominatim + OSRM)                      ║
║  Sem necessidade de API Key! 🎉                               ║
╚════════════════════════════════════════════════════════════════╝

🚀 Buscando distâncias reais dos hotéis usando APIs GRATUITAS...
📡 APIs: Nominatim (OpenStreetMap) + OSRM

📍 Processando: Blue Tree Premium Alphaville
   🔍 Buscando coordenadas...
   ✅ Coordenadas: -23.5123, -46.8342
   🚗 Calculando rota de carro...
   🚶 Calculando rota a pé...
   ✅ De carro: 5 min (2.3 km)
   ✅ A pé: 28 min (2.3 km)

======================================================================
✅ Distâncias calculadas com sucesso!
======================================================================

📋 Copie e cole no arquivo src/components/EventLocation.tsx:

const nearbyHotels = [
  {
    name: "Blue Tree Premium Alphaville",
    distanceDriving: "5 min (2.3 km)",
    distanceWalking: "28 min (2.3 km)",
    category: "4 estrelas",
    mapUrl: "https://www.google.com/maps/dir/..."
  }
];

💾 Dados salvos em: hotel-distances.json

======================================================================
🎉 Pronto! Agora é só copiar e colar no código.
======================================================================
```

## 💰 Custo

- **R$ 0,00** - Completamente gratuito! 🎉
- Sem taxas ocultas
- Sem necessidade de cartão de crédito
- Sem limites rígidos (apenas uso justo)

## 🐛 Troubleshooting

### Erro de rede ou timeout
- Verifique sua conexão com a internet
- Os serviços estão online? (Nominatim e OSRM)

### Coordenadas não encontradas
- Verifique o nome do hotel
- Tente adicionar "Barueri, SP" ao endereço

### Rotas não calculadas
- As coordenadas estão corretas?
- Tente novamente em alguns segundos

## ⏱️ Tempo de Execução

- **~8-12 segundos** para processar 4 hotéis
- Inclui delays de 1 segundo entre requisições (política do Nominatim)

## 📚 Documentação

- Nominatim API: https://nominatim.org/release-docs/latest/api/Overview/
- OSRM API: http://project-osrm.org/docs/v5.5.1/api/
- OpenStreetMap: https://www.openstreetmap.org/

---

**Desenvolvido para Medicina de Precisão** 🎯

