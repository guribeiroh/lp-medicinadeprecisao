# 🏨 Como Atualizar Distâncias dos Hotéis

## 🚀 Execução Rápida

```bash
node scripts/update-hotel-distances.js
```

**✅ 100% GRATUITO** - Sem API Key, sem cadastro, sem custo!

---

## 📊 O Script Calcula

- 🚗 Distância de carro (tempo + km)
- 🚶 Distância a pé (tempo + km)
- 📍 Coordenadas geográficas
- 🔗 Links diretos para Google Maps

---

## 🔧 Tecnologias Usadas

1. **Nominatim (OpenStreetMap)** - Geocodificação gratuita
2. **OSRM** - Cálculo de rotas open source

---

## 📝 Exemplo de Saída

```javascript
const nearbyHotels = [
  {
    name: "Blue Tree Premium Alphaville",
    distanceDriving: "4 min (2.7 km)",
    distanceWalking: "32 min (2.7 km)",
    category: "4 estrelas",
    mapUrl: "https://www.google.com/maps/dir/..."
  },
  // ... outros hotéis
];
```

---

## 📚 Documentação Completa

- **Guia Completo**: `scripts/README_API.md`
- **Resumo Rápido**: `scripts/COMO_USAR.md`

---

**Desenvolvido para Medicina de Precisão** 🎯

