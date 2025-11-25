# 🚀 INICIO RÁPIDO - DÍA 1-2

## ✅ Lo que ya tenéis listo:
- ✓ Landing page completa en Next.js
- ✓ Diseño profesional y responsive
- ✓ Formulario de contacto
- ✓ SEO básico configurado
- ✓ Animaciones y efectos

## 🎯 SIGUIENTE: Personalizar y Deployar (2-3 horas)

### 1. Descomprimir y Setup (15 min)
```bash
# Descomprimir
tar -xzf landing-mvp.tar.gz
cd landing-mvp

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

Abrir http://localhost:3000 y verificar que funciona.

### 2. Personalización Crítica (1 hora)

**app/page.js** - Buscar y reemplazar:
- "Tu Equipo Dev" → Vuestro nombre
- "+34 600 000 000" → Vuestro teléfono
- "hola@tuequipo.dev" → Vuestro email
- "Madrid, España" → Vuestra ubicación

**app/layout.js** - SEO:
```javascript
// Línea 5
title: 'VUESTRO TÍTULO AQUÍ'
// Línea 6  
description: 'VUESTRA DESCRIPCIÓN AQUÍ'
// Línea 8
keywords: 'vuestras, keywords, aquí'
// Línea 12
metadataBase: new URL('https://vuestrodominio.com')
```

**Fotos del equipo:**
- Sacar foto profesional del equipo (móvil OK)
- Guardar en `/public/team.jpg`
- Reemplazar placeholders en código

### 3. Comprar Dominio (15 min)

**Opción 1: Namecheap (recomendado)**
- Ir a https://www.namecheap.com
- Buscar dominio .com o .es
- Comprar (~10-12€/año)

**Opción 2: GoDaddy, Google Domains, etc.**

### 4. Deploy en Vercel (30 min)

**Setup Git:**
```bash
git init
git add .
git commit -m "Initial commit"
```

**Crear repo en GitHub:**
1. Ir a https://github.com/new
2. Crear repositorio privado
3. Seguir instrucciones para push

**Deploy:**
1. Ir a https://vercel.com
2. Sign up con GitHub
3. "Import Project" → Seleccionar vuestro repo
4. Deploy automático
5. Conectar dominio custom

### 5. Configurar Dominio (15 min)

En Vercel:
- Settings → Domains
- Add domain
- Copiar DNS records

En vuestro proveedor de dominio (Namecheap, etc):
- Ir a DNS settings
- Añadir records de Vercel
- Esperar 10-30 minutos

## 🎉 ¡LISTO! Landing en producción

URL temporal: `tu-proyecto.vercel.app`
URL custom: `tudominio.com` (tras configurar DNS)

## 📋 DÍA 3: Tracking & Analytics

**Siguiente paso del roadmap:**
1. Configurar Google Analytics 4
2. Instalar Meta Pixel
3. Google Ads Conversion Tracking

Ver roadmap completo para detalles.

## 🆘 Problemas Comunes

**Error: "Module not found"**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Error: "Port 3000 already in use"**
```bash
npm run dev -- -p 3001
```

**Formulario no envía emails**
- Es normal, está en modo demo
- Ver README.md sección "Funcionalidad del Formulario"
- Configurar Resend API (gratis)

## 📞 Contacto

Si algo falla, compartid el error específico en nueva conversación.

---

**Tiempo total estimado: 2-3 horas**
**Después de esto: Landing profesional en producción ✅**
