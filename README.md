# Landing MVP - Tu Equipo Dev

Landing page profesional en Next.js 14 optimizada para conversión y SEO.

## 🚀 Quick Start

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar en desarrollo
npm run dev

# 3. Abrir http://localhost:3000
```

## 📦 Stack Tecnológico

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS**
- **Framer Motion** (animaciones)

## ✅ Checklist de Personalización

### Contenido a Personalizar

- [ ] **Logo y nombre**: Cambiar "Tu Equipo Dev" por vuestro nombre
- [ ] **Imágenes**: Reemplazar placeholders con fotos reales del equipo
- [ ] **Textos**: Adaptar descripciones a vuestros servicios específicos
- [ ] **Portfolio**: Añadir screenshots de proyectos reales
- [ ] **Contacto**: Actualizar email, teléfono, ubicación
- [ ] **Links**: Añadir vuestros perfiles de GitHub, LinkedIn
- [ ] **Dominio**: Actualizar en `app/layout.js` metadataBase

### SEO Crítico

En `app/layout.js` actualizar:
- `title`
- `description`
- `keywords`
- `metadataBase` (vuestro dominio)
- `openGraph.url`
- Images en `/public/og-image.jpg` (1200x630px)

### Funcionalidad del Formulario

El formulario actualmente solo hace console.log. Necesitáis integrar:

**Opción 1: Resend (Recomendada - Gratis hasta 100 emails/día)**
```bash
npm install resend
```

Crear `/app/api/contact/route.js`:
```javascript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const data = await request.json();
  
  try {
    await resend.emails.send({
      from: 'Onboarding <onboarding@resend.dev>',
      to: ['tu@email.com'],
      subject: `Nuevo lead: ${data.name}`,
      html: `
        <h2>Nuevo Lead Recibido</h2>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Proyecto:</strong> ${data.projectType}</p>
        <p><strong>Presupuesto:</strong> ${data.budget}</p>
        <p><strong>Mensaje:</strong> ${data.description}</p>
      `
    });
    
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
```

Actualizar en `app/page.js` el handleSubmit:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  setFormStatus('sending')
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    
    if (response.ok) {
      setFormStatus('success')
      // Reset form
    }
  } catch (error) {
    setFormStatus('error')
  }
}
```

**Opción 2: Formspree (Sin código)**
1. Ir a https://formspree.io
2. Crear formulario gratis
3. Reemplazar action del form

## 📊 Google Analytics

Añadir en `app/layout.js` antes de `</head>`:

```javascript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## 🎨 Personalización de Diseño

### Colores
Editar en `tailwind.config.js`:
- `primary`: Color principal (azul por defecto)
- `accent`: Color de acento (rosa por defecto)
- `dark`: Escala de grises

### Fuentes
Cambiar en `app/globals.css`:
- Google Fonts URLs
- Variables CSS

## 🚀 Deployment

### Vercel (Recomendado - Gratis)

1. Crear cuenta en https://vercel.com
2. Conectar repositorio GitHub
3. Deploy automático en cada push

```bash
# O usar CLI
npm i -g vercel
vercel
```

### Variables de Entorno

Crear `.env.local`:
```
RESEND_API_KEY=tu_api_key
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

En Vercel: Settings → Environment Variables

## 📱 Responsive

La landing es completamente responsive:
- Mobile-first design
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Testeado en iOS y Android

## ⚡ Performance

Optimizaciones incluidas:
- Next.js Image optimization
- CSS optimizado (Tailwind purge)
- Lazy loading de componentes
- Animaciones CSS cuando sea posible

## 🔒 Legal

Crear páginas:
- `/app/aviso-legal/page.js`
- `/app/privacidad/page.js`
- `/app/cookies/page.js`

Templates: https://www.iubenda.com/es (generador gratis)

## 📞 Soporte

Si tenéis dudas:
1. Revisar este README
2. Consultar roadmap completo
3. Compartir documento en nueva conversación con Claude

## 🎯 Siguiente Paso

Seguir el roadmap:
- **Día 3**: Continuar con tracking (GA4, Meta Pixel)
- **Día 4**: SEO on-page
- **Día 5**: Estrategia de ads

---

**Notas:**
- Todo el código está comentado
- Diseño profesional y distintivo
- Optimizado para conversión
- SEO-friendly desde día 1
