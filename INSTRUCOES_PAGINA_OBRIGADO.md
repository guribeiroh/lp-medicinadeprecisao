# Página de Agradecimento - Medicina de Precisão

## 📍 Como Acessar

A página de agradecimento está disponível em:
```
https://seu-dominio.com/obrigado
```

## 🔧 Configuração Necessária

### 1. Número do WhatsApp de Suporte

Edite o arquivo `app/obrigado/page.tsx` e substitua o número do WhatsApp:

```typescript
const eventDetails = {
  // ... outras configurações
  whatsappSupport: "5511999999999", // ← SUBSTITUIR PELO NÚMERO REAL
}
```

**Formato do número:**
- Código do país (55 para Brasil)
- DDD (11, 21, etc.)
- Número completo (9 dígitos para celular)
- Exemplo: `5511987654321`

### 2. Redirecionamento Pós-Compra

Configure seu sistema de pagamento (Stripe, Mercado Pago, etc.) para redirecionar para:
```
https://seu-dominio.com/obrigado
```

## ✨ Funcionalidades da Página

### 1. **Confirmação Visual**
- Ícone de check animado
- Mensagem de confirmação clara
- Design moderno e profissional

### 2. **Detalhes do Evento**
- 📅 Data: 20 e 21 de Novembro de 2025
- ⏰ Horário: 8h às 18h
- 📍 Local: Av. Sagitário, 138 - Alphaville

### 3. **Botão "Adicionar à Agenda"**
- Abre o Google Calendar
- Evento pré-preenchido com todos os detalhes
- Data, hora, local e descrição incluídos

### 4. **Botão "Suporte WhatsApp"**
- Abre conversa direta no WhatsApp
- Mensagem pré-formatada automática
- Facilita contato imediato

### 5. **Informações Importantes**
- Lista de instruções para o participante
- Lembretes sobre credenciamento
- Informações sobre estacionamento

## 🎨 Personalização

### Alterar Cores
As cores seguem o padrão da landing page:
- Azul: `#2563eb`, `#3b82f6`, `#0ea5e9`
- Verde (sucesso): `#10b981`, `#059669`

### Alterar Textos
Todos os textos estão no objeto `eventDetails` e podem ser facilmente modificados.

## 🚀 Próximos Passos

1. ✅ Substituir número do WhatsApp
2. ✅ Configurar redirecionamento pós-compra
3. ✅ Testar a funcionalidade de adicionar à agenda
4. ✅ Testar o botão do WhatsApp
5. ✅ Ajustar textos conforme necessário

## 📱 Responsividade

A página é totalmente responsiva:
- ✅ Mobile (smartphones)
- ✅ Tablet
- ✅ Desktop

## 🔗 Integração com Sistemas de Pagamento

### Exemplo com formulário:
```html
<form action="https://payment-provider.com/checkout">
  <input type="hidden" name="success_url" value="https://seu-dominio.com/obrigado">
  <!-- outros campos -->
</form>
```

### Exemplo com JavaScript:
```javascript
// Após confirmação de pagamento
window.location.href = '/obrigado';
```

---

**Desenvolvido para Medicina de Precisão** 🎯

