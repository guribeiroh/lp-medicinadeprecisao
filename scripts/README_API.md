# 🗺️ Script para Atualizar Distâncias dos Hotéis com Google Maps API

## 📋 Pré-requisitos

1. **Node.js** instalado (v14 ou superior)
2. **Google Maps API Key** (gratuito até certo limite)

## 🔑 Como Obter a Google Maps API Key

### Passo 1: Criar Conta Google Cloud
1. Acesse: https://console.cloud.google.com/
2. Faça login com sua conta Google
3. Aceite os termos de serviço

### Passo 2: Criar Projeto
1. Clique em "Selecionar projeto" no topo
2. Clique em "Novo projeto"
3. Nome do projeto: "Medicina de Precisão"
4. Clique em "Criar"

### Passo 3: Ativar APIs
1. No menu, vá em: **APIs e Serviços** > **Biblioteca**
2. Procure por: **Distance Matrix API**
3. Clique em "Ativar"
4. Procure por: **Geocoding API** (opcional, mas recomendado)
5. Clique em "Ativar"

### Passo 4: Criar API Key
1. No menu, vá em: **APIs e Serviços** > **Credenciais**
2. Clique em "+ Criar credenciais"
3. Selecione "Chave de API"
4. Copie a chave gerada
5. (Recomendado) Clique em "Restringir chave" e limite ao Distance Matrix API

### Passo 5: Ativar Faturamento (Necessário mas tem crédito grátis)
1. Google oferece **$200 de crédito gratuito por mês**
2. O Distance Matrix API custa muito pouco (este script usa ~4 requisições)
3. Vá em "Faturamento" e adicione um cartão
4. Você não será cobrado dentro do limite gratuito

## 🚀 Como Executar o Script

### Opção 1: Com variável de ambiente (Recomendado)

**Windows (PowerShell):**
```powershell
$env:GOOGLE_MAPS_API_KEY="SUA_API_KEY_AQUI"
node scripts/update-hotel-distances.js
```

**Linux/Mac:**
```bash
export GOOGLE_MAPS_API_KEY="SUA_API_KEY_AQUI"
node scripts/update-hotel-distances.js
```

### Opção 2: Editando o arquivo diretamente

1. Abra: `scripts/update-hotel-distances.js`
2. Encontre a linha:
```javascript
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY || 'SUA_API_KEY_AQUI';
```
3. Substitua `'SUA_API_KEY_AQUI'` pela sua chave real
4. Execute:
```bash
node scripts/update-hotel-distances.js
```

## 📦 Instalar Dependências

```bash
npm install axios
```

## ✅ O que o Script Faz

1. 🔍 Busca distâncias reais no Google Maps
2. 🚗 Calcula tempo de carro
3. 🚶 Calcula tempo a pé
4. 📊 Exibe no console
5. 💾 Salva em `hotel-distances.json`
6. 📋 Gera código pronto para copiar e colar

## 📄 Exemplo de Saída

```
🚀 Buscando distâncias reais dos hotéis...

📍 Calculando distâncias para: Blue Tree Premium Alphaville
  🚗 De carro: 5 min (2.3 km)
  🚶 A pé: 28 min (2.3 km)

✅ Distâncias calculadas com sucesso!

📋 Copie e cole no arquivo src/components/EventLocation.tsx:

const nearbyHotels = [
  {
    name: "Blue Tree Premium Alphaville",
    distanceDriving: "5 min (2.3 km)",
    distanceWalking: "28 min (2.3 km)",
    ...
  }
];
```

## 🔒 Segurança

- ⚠️ **NÃO** commite a API Key no Git
- ⚠️ Adicione ao `.gitignore`:
  ```
  .env
  hotel-distances.json
  ```
- ✅ Use variáveis de ambiente
- ✅ Restrinja a API Key no Google Console

## 💰 Custo

- **Gratuito** até $200/mês de uso
- Este script usa ~4 requisições × 2 modos = 8 requisições
- Distance Matrix API: $0.005 por requisição
- **Custo total**: ~$0.04 (praticamente grátis)

## 🐛 Troubleshooting

### Erro: "API key not valid"
- Verifique se a API está ativada no Google Console
- Aguarde alguns minutos após criar a key

### Erro: "REQUEST_DENIED"
- Ative o faturamento no Google Cloud
- Ative a Distance Matrix API

### Erro: "OVER_QUERY_LIMIT"
- Aguarde alguns minutos
- Você pode ter excedido o limite gratuito

## 📚 Documentação

- Google Distance Matrix API: https://developers.google.com/maps/documentation/distance-matrix
- Preços: https://developers.google.com/maps/billing/understanding-cost-of-use

---

**Desenvolvido para Medicina de Precisão** 🎯

