import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Desarrollo App Móvil Madrid | React Native iOS Android | JEG Studios',
  description: 'Desarrollo de aplicaciones móviles con React Native en Madrid. Apps nativas para iOS y Android con una sola base de código. Presupuesto desde 1.999€.',
  keywords: [
    'desarrollo app móvil madrid',
    'react native madrid',
    'crear app móvil',
    'desarrollo aplicaciones móviles madrid',
    'cuánto cuesta app móvil',
    'programadores react native madrid'
  ],
  openGraph: {
    title: 'Desarrollo App Móvil Madrid | JEG Studios',
    description: 'Apps móviles nativas con React Native. iOS y Android. Desde 1.999€.',
    url: 'https://jegsdev.com/desarrollo-app-movil',
  },
}

export default function DesarrolloAppMovil() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
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

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 font-medium text-sm mb-6">
            Desarrollo Apps Móviles • Madrid
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Desarrollo de <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Apps Móviles</span> en Madrid
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Creamos aplicaciones móviles nativas con <strong className="text-white">React Native</strong>. 
            Un solo código para <strong className="text-white">iOS</strong> y <strong className="text-white">Android</strong>. 
            Entrega en 2-6 semanas desde 1.999€.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contacto" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:opacity-90">
              Solicitar Presupuesto Gratis
            </Link>
            <Link href="/#portfolio" className="inline-flex items-center justify-center px-8 py-4 border border-purple-500/30 rounded-lg font-semibold text-purple-400 hover:bg-purple-500/10">
              Ver Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            ¿Por qué React Native?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Una Base de Código',
                description: 'Escribimos el código una vez. Funciona en iOS y Android. Ahorro del 50% en costes.',
                icon: '📱'
              },
              {
                title: 'Nativo Real',
                description: 'No es WebView. Son componentes nativos reales. Performance como app nativa pura.',
                icon: '⚡'
              },
              {
                title: 'Hot Reload',
                description: 'Desarrollo ultrarrápido. Cambios visibles al instante. Más iteraciones, mejor app.',
                icon: '🔄'
              },
              {
                title: 'Comunidad Enorme',
                description: 'Usado por Instagram, Facebook, Discord. Miles de librerías disponibles.',
                icon: '👥'
              },
              {
                title: 'Updates OTA',
                description: 'Actualiza tu app sin pasar por App Store. Fixes instantáneos.',
                icon: '🚀'
              },
              {
                title: 'Reutilizar Código Web',
                description: 'Si tienes web React, compartimos lógica. Desarrollo aún más rápido.',
                icon: '🔧'
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition" />
                <div className="relative bg-[#0f0f1a] rounded-2xl p-6 border border-purple-500/10 h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f1a]/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Precio Desarrollo App Móvil
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#0a0a0f] rounded-xl p-6 border border-purple-500/10">
              <div className="text-center">
                <h3 className="font-display text-xl font-bold text-white mb-2">App Básica</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  1.999€
                </div>
                <ul className="text-sm text-gray-400 space-y-2 text-left">
                  <li>✓ 3-5 pantallas</li>
                  <li>✓ iOS + Android</li>
                  <li>✓ Backend básico</li>
                  <li>✓ Auth usuarios</li>
                  <li>✓ 1 mes soporte</li>
                  <li>✓ Desarrollo ágil 2 a 6 semanas</li>
                  <li>✓ Documentación</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-xl p-6 border-2 border-purple-500/30 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-xs font-bold">
                MÁS POPULAR
              </div>
              <div className="text-center">
                <h3 className="font-display text-xl font-bold text-white mb-2">App Completa</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  2.999€
                </div>
                <ul className="text-sm text-gray-400 space-y-2 text-left">
                  <li>✓ 8-10 pantallas</li>
                  <li>✓ API completa</li>
                  <li>✓ Push notifications</li>
                  <li>✓ Integraciones API</li>
                  <li>✓ Google Analytics Base</li>
                  <li>✓ 1 mes soporte</li>
                  <li>✓ Pagos integrados</li>
                  <li>✓ Documentación</li>
                  <li>✓ Plazo de producción 6-8 semanas</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#0a0a0f] rounded-xl p-6 border border-purple-500/10">
              <div className="text-center">
                <h3 className="font-display text-xl font-bold text-white mb-2">App Compleja</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  +5.000€
                </div>
                <ul className="text-sm text-gray-400 space-y-2 text-left">
                  <li>✓ Social features complejas</li>
                  <li>✓ Backend incluido</li>
                  <li>✓ Tiempo real</li>
                  <li>✓ Geolocalización</li>
                  <li>✓ Admin dashboard</li>
                  <li>✓ Google Analytics</li>
                  <li>✓ Traking de eventos</li>
                  <li>✓ Pagos in-app</li>
                  <li>✓ 2 meses soporte</li>
                  <li>✓ Documentación</li>
                  <li>✓ Tu proyecto listo de uno a tres meses (o más según alcance)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/#contacto" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg font-semibold hover:opacity-90">
              Solicitar Presupuesto Personalizado
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-6">
            ¿Lista tu Idea de App?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Consultoría gratuita de <strong className="text-white">30 minutos</strong>. 
            Te ayudamos a definir tu <strong className="text-white">MVP</strong>.
          </p>
          <Link href="/#contacto" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg font-semibold text-lg hover:opacity-90">
            Hablar con el Equipo
          </Link>
        </div>
      </section>

      <footer className="border-t border-purple-500/10 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2026 JEG Studios - Desarrollo Apps Móviles Madrid</p>
          <p className="mt-2">
            <Link href="/" className="hover:text-purple-400 transition-colors">Inicio</Link>
            {' • '}
            <Link href="/#servicios" className="hover:text-purple-400 transition-colors">Servicios</Link>
            {' • '}
            <Link href="/#contacto" className="hover:text-purple-400 transition-colors">Contacto</Link>
          </p>
        </div>
      </footer>
    </main>
  )
}