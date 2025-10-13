# Instruções para Gerar Favicons

## 📋 Favicon SVG Criado

Foi criado um favicon SVG de ingresso em `public/favicon.svg` com:
- Gradiente azul (cores do evento)
- Número "50" (quantidade de ingressos)
- Cruz médica
- Design de ingresso com cortes laterais

## 🔧 Como Gerar os Favicons PNG

### Opção 1: Usar Ferramenta Online (Recomendado)

1. **Acesse**: https://realfavicongenerator.net/
2. **Upload**: `public/favicon.svg`
3. **Gere** todos os tamanhos necessários
4. **Baixe** e substitua os arquivos em `/public/`

### Opção 2: Usar ImageMagick (Terminal)

```bash
# Instalar ImageMagick (se necessário)
# Windows: choco install imagemagick
# Mac: brew install imagemagick
# Linux: sudo apt-get install imagemagick

# Navegar até a pasta public
cd public

# Gerar favicon.ico
magick favicon.svg -resize 32x32 favicon.ico

# Gerar PNG 16x16
magick favicon.svg -resize 16x16 favicon-16x16.png

# Gerar PNG 32x32
magick favicon.svg -resize 32x32 favicon-32x32.png

# Gerar Apple Touch Icon 180x180
magick favicon.svg -resize 180x180 apple-touch-icon.png

# Gerar Android Chrome 192x192
magick favicon.svg -resize 192x192 android-chrome-192x192.png

# Gerar Android Chrome 512x512
magick favicon.svg -resize 512x512 android-chrome-512x512.png
```

### Opção 3: Usar Node.js Sharp

```bash
# Instalar sharp
npm install sharp-cli -g

# Gerar todos os tamanhos
sharp -i public/favicon.svg -o public/favicon.ico --resize 32,32
sharp -i public/favicon.svg -o public/favicon-16x16.png --resize 16,16
sharp -i public/favicon.svg -o public/favicon-32x32.png --resize 32,32
sharp -i public/favicon.svg -o public/apple-touch-icon.png --resize 180,180
sharp -i public/favicon.svg -o public/android-chrome-192x192.png --resize 192,192
sharp -i public/favicon.svg -o public/android-chrome-512x512.png --resize 512,512
```

## 📁 Arquivos Necessários

Todos devem estar em `/public/`:

- ✅ `favicon.svg` - Criado
- ⏳ `favicon.ico` - Gerar (32x32)
- ⏳ `favicon-16x16.png` - Gerar
- ⏳ `favicon-32x32.png` - Gerar
- ⏳ `apple-touch-icon.png` - Gerar (180x180)
- ⏳ `android-chrome-192x192.png` - Gerar (opcional)
- ⏳ `android-chrome-512x512.png` - Gerar (opcional)
- ✅ `site.webmanifest` - Criado

## ✨ SEO Atualizado

O arquivo `app/layout.tsx` foi atualizado com:

- ✅ **Título**: "Medicina de Precisão | Evento Exclusivo para 50 Médicos - 20 e 21 Nov 2025"
- ✅ **Descrição**: Otimizada para SEO com palavras-chave
- ✅ **Open Graph**: Tags para redes sociais
- ✅ **Twitter Card**: Configurado
- ✅ **Robots**: Indexação habilitada
- ✅ **Idioma**: pt-BR
- ✅ **Keywords**: medicina de precisão, evento médico, carreira médica, etc.

## 🎨 Design do Favicon

O favicon tem:
- **Cor primária**: Azul #2563eb (cor do evento)
- **Número**: 50 (quantidade de ingressos)
- **Símbolo**: Cruz médica
- **Formato**: Ingresso com cortes laterais

## 🚀 Testar

Após gerar os favicons:

1. Limpe o cache do navegador
2. Acesse o site
3. Verifique o favicon na aba
4. Teste compartilhamento em redes sociais
5. Valide com: https://realfavicongenerator.net/favicon_checker

---

**Desenvolvido para Medicina de Precisão** 🎯

