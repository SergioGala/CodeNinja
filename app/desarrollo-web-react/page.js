import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Desarrollo Web React Madrid | Next.js, Tailwind | JEG Studios',
  description: 'Desarrollo web profesional con React y Next.js en Madrid. Aplicaciones web rápidas, modernas y SEO-optimizadas. Presupuesto desde 3.000€. Consultoría gratuita.',
  keywords: [
    'desarrollo web react madrid',
    'programadores react madrid',
    'desarrollo nextjs madrid',
    'crear página web react',
    'desarrollo web profesional react',
    'empresa desarrollo react madrid'
  ],
  openGraph: {
    title: 'Desarrollo Web React Madrid | JEG Studios',
    description: 'Desarrollo web profesional con React y Next.js en Madrid. Presupuesto desde 3.000€.',
    url: 'https://jegsdev.com/desarrollo-web-react',
  },
}

export default function DesarrolloWebReact() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Nav simple */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-display text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              JEG Studios
            </Link>
            <Link href="/#contacto" className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:opacity-90">
              Solicitar Presupuesto
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 font-medium text-sm mb-6">
            Desarrollo Web React • Madrid
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Desarrollo Web Profesional con <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">React</span> en Madrid
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Creamos aplicaciones web modernas, rápidas y escalables con <strong className="text-white">React</strong>, <strong className="text-white">Next.js</strong> y <strong className="text-white">Tailwind CSS</strong>. 
            Entrega en 4-6 semanas desde 3.000€.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contacto" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:opacity-90">
              Solicitar Presupuesto Gratis
            </Link>
            <Link href="/#portfolio" className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500/30 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-500/10">
              Ver Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Por qué React */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            ¿Por qué React para tu Proyecto Web?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Performance',
                description: 'React es ultrarrápido. Virtual DOM optimiza renderizado. Tus usuarios notan la diferencia.',
                icon: '⚡'
              },
              {
                title: 'SEO Optimizado',
                description: 'Con Next.js conseguimos SSR nativo. Google indexa tu contenido perfectamente.',
                icon: '🔍'
              },
              {
                title: 'Escalable',
                description: 'Componentes reutilizables. Fácil mantener y expandir. Tu web crece contigo.',
                icon: '📈'
              },
              {
                title: 'Ecosistema Rico',
                description: 'Miles de librerías probadas. Integraciones con cualquier servicio.',
                icon: '🔧'
              },
              {
                title: 'Mobile Ready',
                description: 'Responsive desde día 1. Mismo código para web y móvil (React Native).',
                icon: '📱'
              },
              {
                title: 'Comunidad',
                description: 'Usado por Facebook, Netflix, Airbnb. Documentación excelente.',
                icon: '👥'
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition" />
                <div className="relative bg-[#0f0f1a] rounded-2xl p-6 border border-cyan-500/10 h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f1a]/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Nuestro Stack React
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0a0a0f] rounded-xl p-6 border border-cyan-500/10">
              <h3 className="font-display text-xl font-bold text-white mb-4">Frontend</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-3">
                  <span className="text-cyan-400">✓</span>
                  <span><strong className="text-white">React 18</strong> - Virtual DOM, Hooks, Context</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-cyan-400">✓</span>
                  <span><strong className="text-white">Next.js 14</strong> - SSR, SSG, App Router</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-cyan-400">✓</span>
                  <span><strong className="text-white">Tailwind CSS</strong> - Diseño rápido y moderno</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-cyan-400">✓</span>
                  <span><strong className="text-white">TypeScript</strong> - Code seguro y mantenible</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#0a0a0f] rounded-xl p-6 border border-cyan-500/10">
              <h3 className="font-display text-xl font-bold text-white mb-4">Integraciones</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span><strong className="text-white">APIs REST</strong> - Axios, Fetch API</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span><strong className="text-white">Estado Global</strong> - Zustand, Context API</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span><strong className="text-white">Autenticación</strong> - NextAuth, Firebase</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span><strong className="text-white">Pagos</strong> - Stripe, PayPal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos React */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Proyectos React Realizados
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition" />
              <div className="relative bg-[#0f0f1a] rounded-2xl overflow-hidden border border-cyan-500/10">
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900">
                  <Image src="/Sentya.webp" alt="Sentya" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-white mb-2">Sentya</h3>
                  <p className="text-gray-400 text-sm mb-4">Plataforma de gestión de talleres sociales con React y Python.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs border border-cyan-500/20">React</span>
                    <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs border border-cyan-500/20">Tailwind</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition" />
              <div className="relative bg-[#0f0f1a] rounded-2xl overflow-hidden border border-cyan-500/10">
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900">
                  <Image src="/Bar.webp" alt="SportBar" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-white mb-2">SportBar League</h3>
                  <p className="text-gray-400 text-sm mb-4">Red social de eventos deportivos con React y backend Python.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs border border-cyan-500/20">React</span>
                    <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs border border-cyan-500/20">Python</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precios */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f1a]/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Precio Desarrollo Web React
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#0a0a0f] rounded-xl p-6 border border-cyan-500/10">
              <div className="text-center">
                <h3 className="font-display text-xl font-bold text-white mb-2">Landing Page</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  3.000€
                </div>
                <ul className="text-sm text-gray-400 space-y-2 text-left">
                  <li>✓ 5-7 secciones</li>
                  <li>✓ Responsive</li>
                  <li>✓ SEO básico</li>
                  <li>✓ Formulario contacto</li>
                  <li>✓ 2 semanas</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl p-6 border-2 border-cyan-500/30 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-xs font-bold">
                MÁS POPULAR
              </div>
              <div className="text-center">
                <h3 className="font-display text-xl font-bold text-white mb-2">Web Completa</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  6.000€
                </div>
                <ul className="text-sm text-gray-400 space-y-2 text-left">
                  <li>✓ Multi-página</li>
                  <li>✓ CMS integrado</li>
                  <li>✓ Autenticación</li>
                  <li>✓ Dashboard admin</li>
                  <li>✓ 4-6 semanas</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#0a0a0f] rounded-xl p-6 border border-cyan-500/10">
              <div className="text-center">
                <h3 className="font-display text-xl font-bold text-white mb-2">E-commerce</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  12.000€
                </div>
                <ul className="text-sm text-gray-400 space-y-2 text-left">
                  <li>✓ Catálogo productos</li>
                  <li>✓ Carrito + Checkout</li>
                  <li>✓ Stripe/PayPal</li>
                  <li>✓ Panel vendedor</li>
                  <li>✓ 8-12 semanas</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/#contacto" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:opacity-90">
              Solicitar Presupuesto Personalizado
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-6">
            ¿Listo para tu Proyecto React?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Primera consultoría <strong className="text-white">gratis</strong>. Presupuesto en <strong className="text-white">48 horas</strong>.
          </p>
          <Link href="/#contacto" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-lg hover:opacity-90">
            Hablar con el Equipo
          </Link>
        </div>
      </section>

      {/* Footer simple */}
      <footer className="border-t border-cyan-500/10 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2025 JEG Studios - Desarrollo Web React Madrid</p>
          <p className="mt-2">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Inicio</Link>
            {' • '}
            <Link href="/#servicios" className="hover:text-cyan-400 transition-colors">Servicios</Link>
            {' • '}
            <Link href="/#contacto" className="hover:text-cyan-400 transition-colors">Contacto</Link>
          </p>
        </div>
      </footer>
    </main>
  )
}