import Link from 'next/link'

export const metadata = {
  title: 'Desarrollo Backend Python Madrid | FastAPI, Django | JEG Studios',
  description: 'Desarrollo backend profesional con Python y FastAPI en Madrid. APIs REST escalables, microservicios y arquitecturas cloud. Desde 2.500€.',
  keywords: [
    'desarrollo backend python madrid',
    'programadores python madrid',
    'desarrollo api python',
    'fastapi madrid',
    'backend freelance python',
    'desarrollo microservicios python'
  ],
  openGraph: {
    title: 'Desarrollo Backend Python Madrid | JEG Studios',
    description: 'Backend profesional con Python y FastAPI. APIs escalables desde 2.500€.',
    url: 'https://jegsdev.com/desarrollo-backend-python',
  },
}

export default function DesarrolloBackendPython() {
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
          <div className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 font-medium text-sm mb-6">
            Desarrollo Backend Python • Madrid
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Desarrollo Backend con <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Python</span> en Madrid
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Arquitecturas backend escalables con <strong className="text-white">Python</strong>, <strong className="text-white">Flask</strong>, <strong className="text-white">FastAPI</strong> y <strong className="text-white">PostgreSQL</strong>. 
            APIs REST, microservicios y cloud. Desde 2.500€.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contacto" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:opacity-90">
              Solicitar Presupuesto Gratis
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            ¿Por qué Python para Backend?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Rápido de Desarrollar', description: 'Sintaxis clara. Menos código = menos bugs. MVP en semanas.' },
              { title: 'Escalable', description: 'De startup a unicornio. Instagram, Spotify, Netflix usan Python.'},
              { title: 'Ecosistema Rico', description: 'Librerías para TODO. ML, Data, APIs, automation.' },
              { title: 'Async Nativo', description: 'FastAPI es async por defecto. Miles de requests/segundo.'},
              { title: 'Type Safety', description: 'Con Pydantic. Catch errors antes de deploy.' },
              { title: 'Comunidad', description: 'Stack Overflow enorme. Soluciones probadas.' }
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f1a]/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Stack Python
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0a0a0f] rounded-xl p-6 border border-cyan-500/10">
              <h3 className="font-display text-xl font-bold text-white mb-4">Backend</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-3">
                  <span className="text-cyan-400">✓</span>
                  <span><strong className="text-white">FastAPI</strong> - Async, rápido, moderno</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-cyan-400">✓</span>
                  <span><strong className="text-white">Django</strong> - Full-featured, admin incluido</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-cyan-400">✓</span>
                  <span><strong className="text-white">Pydantic</strong> - Validación de datos</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-cyan-400">✓</span>
                  <span><strong className="text-white">SQLAlchemy</strong> - ORM potente</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#0a0a0f] rounded-xl p-6 border border-cyan-500/10">
              <h3 className="font-display text-xl font-bold text-white mb-4">Infraestructura</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span><strong className="text-white">PostgreSQL</strong> - Base de datos robusta</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span><strong className="text-white">Redis</strong> - Cache y sessions</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span><strong className="text-white">Docker</strong> - Deploy reproducible</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span><strong className="text-white">AWS/GCP</strong> - Cloud escalable</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Precio Desarrollo Backend
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#0f0f1a] rounded-xl p-6 border border-cyan-500/10">
              <div className="text-center">
                <h3 className="font-display text-xl font-bold text-white mb-2">API Básica</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  2.500€
                </div>
                <ul className="text-sm text-gray-400 space-y-2 text-left">
                  <li>✓ CRUD completo</li>
                  <li>✓ Autenticación JWT</li>
                  <li>✓ PostgreSQL</li>
                  <li>✓ Documentación</li>
                  <li>✓ 3-4 semanas</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl p-6 border-2 border-cyan-500/30 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-xs font-bold">
                MÁS POPULAR
              </div>
              <div className="text-center">
                <h3 className="font-display text-xl font-bold text-white mb-2">API Completa</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  5.000€
                </div>
                <ul className="text-sm text-gray-400 space-y-2 text-left">
                  <li>✓ Multi-endpoints</li>
                  <li>✓ Websockets</li>
                  <li>✓ Cache Redis</li>
                  <li>✓ Testing completo</li>
                  <li>✓ 4-6 semanas</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#0f0f1a] rounded-xl p-6 border border-cyan-500/10">
              <div className="text-center">
                <h3 className="font-display text-xl font-bold text-white mb-2">Microservicios</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  +10.000€
                </div>
                <ul className="text-sm text-gray-400 space-y-2 text-left">
                  <li>✓ Arquitectura distribuida</li>
                  <li>✓ Message queues</li>
                  <li>✓ Monitoring</li>
                  <li>✓ CI/CD</li>
                  <li>✓ 8+ semanas</li>
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f1a]/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-6">
            ¿Necesitas una API Robusta?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Arquitectura escalable desde el <strong className="text-white">día uno</strong>. 
            Primera consultoría <strong className="text-white">gratis</strong>.
          </p>
          <Link href="/#contacto" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-lg hover:opacity-90">
            Hablar con el Equipo
          </Link>
        </div>
      </section>

      <footer className="border-t border-cyan-500/10 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2025 JEG Studios - Desarrollo Backend Python Madrid</p>
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