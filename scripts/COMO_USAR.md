# 🚀 Como Usar o Script de Distâncias

## ⚡ Resumo Rápido

### 1️⃣ Obter API Key (5 minutos)
1. Acesse: https://console.cloud.google.com/
2. Crie um novo projeto
3. Ative: **Distance Matrix API**
4. Vá em Credenciais → Criar credenciais → Chave de API
5. Copie a chave

### 2️⃣ Instalar Axios (já feito ✅)
```bash
npm install axios
```

### 3️⃣ Executar Script

**Windows (PowerShell):**
```powershell
$env:GOOGLE_MAPS_API_KEY="SUA_CHAVE_AQUI"
node scripts/update-hotel-distances.js
```

**Ou edite o arquivo e coloque a chave:**
- Abra: `scripts/update-hotel-distances.js`
- Linha 10: Cole sua API key
- Execute: `node scripts/update-hotel-distances.js`

### 4️⃣ Copiar Resultado
- O script vai exibir o código pronto
- Copie e cole em: `src/components/EventLocation.tsx`
- Substitua o array `nearbyHotels`

## 📊 Custo
- **GRÁTIS** (Google dá $200/mês de crédito)
- Este script custa ~$0.04 (8 requisições)

## 📖 Documentação Completa
Veja: `scripts/README_API.md`

