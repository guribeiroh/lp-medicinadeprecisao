# 📍 Como Atualizar Distâncias Reais dos Hotéis

## ⚠️ IMPORTANTE
As distâncias dos hotéis precisam ser atualizadas com dados REAIS do Google Maps.

## 🔍 Passo a Passo para Cada Hotel

### 1. Blue Tree Premium Alphaville

**Como buscar:**
1. Acesse: https://www.google.com/maps
2. Digite: `De Blue Tree Premium Alphaville para Casa do Storytelling, Alphaville`
3. Clique em "Rotas" ou "Directions"
4. Veja o tempo **DE CARRO** (ícone 🚗)
5. Mude para **A PÉ** (ícone 🚶) e veja o tempo

**Formato para inserir no código:**
```javascript
distanceDriving: "X min (X.X km)",  // Ex: "5 min (2.3 km)"
distanceWalking: "XX min (X.X km)", // Ex: "28 min (2.3 km)"
```

**Link direto:**
https://www.google.com/maps/dir/Blue+Tree+Premium+Alphaville/Casa+do+Storytelling,+Alphaville

---

### 2. Comfort Hotel Alphaville

**Link direto:**
https://www.google.com/maps/dir/Comfort+Hotel+Alphaville/Casa+do+Storytelling,+Alphaville

**Anotar:**
- 🚗 De carro: ___ min (___ km)
- 🚶 A pé: ___ min (___ km)

---

### 3. Quality Suites Alphaville

**Link direto:**
https://www.google.com/maps/dir/Quality+Suites+Alphaville/Casa+do+Storytelling,+Alphaville

**Anotar:**
- 🚗 De carro: ___ min (___ km)
- 🚶 A pé: ___ min (___ km)

---

### 4. Transamerica Executive Jaraguá

**Link direto:**
https://www.google.com/maps/dir/Transamerica+Executive+Jaraguá/Casa+do+Storytelling,+Alphaville

**Anotar:**
- 🚗 De carro: ___ min (___ km)
- 🚶 A pé: ___ min (___ km)

---

## 📝 Onde Atualizar no Código

Arquivo: `src/components/EventLocation.tsx`

Procure por:
```javascript
const nearbyHotels = [
```

Exemplo de como deve ficar:
```javascript
{
  name: "Blue Tree Premium Alphaville",
  distanceDriving: "5 min (2.3 km)",  // ✅ DADOS REAIS
  distanceWalking: "28 min (2.3 km)", // ✅ DADOS REAIS
  category: "4 estrelas",
  mapUrl: "..."
}
```

---

## ✅ Checklist

Após buscar no Google Maps, atualize:

- [ ] Blue Tree Premium Alphaville
  - [ ] Distância de carro
  - [ ] Distância a pé
  
- [ ] Comfort Hotel Alphaville
  - [ ] Distância de carro
  - [ ] Distância a pé
  
- [ ] Quality Suites Alphaville
  - [ ] Distância de carro
  - [ ] Distância a pé
  
- [ ] Transamerica Executive Jaraguá
  - [ ] Distância de carro
  - [ ] Distância a pé

---

## 💡 Dica

Use o Google Maps no modo **"Melhor rota"** para obter os tempos mais precisos considerando o trânsito típico da região de Alphaville.

---

**Desenvolvido para Medicina de Precisão** 🎯

