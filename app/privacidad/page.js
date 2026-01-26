import Link from 'next/link'

export const metadata = {
  title: 'Política de Cookies | JEG Studios',
  description: 'Política de cookies de JEG Studios. Información sobre qué cookies utilizamos y cómo gestionarlas.',
  robots: 'noindex, follow',
}

export default function PoliticaCookies() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="font-display text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              JEG Studios
            </Link>
            <Link href="/#contacto" className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:opacity-90">
              Contacto
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Política de Cookies
          </h1>
          
          <p className="text-gray-400 mb-8">
            Última actualización: Enero 2025
          </p>

          <div className="prose prose-invert prose-cyan max-w-none space-y-8">
            
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                1. ¿Qué son las cookies?
              </h2>
              <p className="text-gray-300">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, móvil o tablet) 
                cuando visitas un sitio web. Permiten que el sitio recuerde tus acciones y preferencias durante un período 
                de tiempo, para que no tengas que volver a introducirlas cada vez que vuelvas al sitio o navegues de una 
                página a otra.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                2. ¿Qué tipos de cookies utilizamos?
              </h2>
              
              <div className="bg-[#0f0f1a] rounded-xl p-6 border border-cyan-500/10 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <h3 className="font-semibold text-white text-lg">Cookies necesarias (siempre activas)</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Son esenciales para el funcionamiento del sitio web. Sin ellas, el sitio no funcionaría correctamente.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-cyan-500/20">
                        <th className="text-left py-2 text-cyan-400">Cookie</th>
                        <th className="text-left py-2 text-cyan-400">Proveedor</th>
                        <th className="text-left py-2 text-cyan-400">Duración</th>
                        <th className="text-left py-2 text-cyan-400">Finalidad</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-400">
                      <tr className="border-b border-cyan-500/10">
                        <td className="py-2 font-mono text-xs">cookie_consent_jegs</td>
                        <td className="py-2">JEG Studios</td>
                        <td className="py-2">1 año</td>
                        <td className="py-2">Guarda tus preferencias de cookies</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-[#0f0f1a] rounded-xl p-6 border border-cyan-500/10 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <h3 className="font-semibold text-white text-lg">Cookies analíticas</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Nos ayudan a entender cómo los visitantes interactúan con el sitio web.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-cyan-500/20">
                        <th className="text-left py-2 text-cyan-400">Cookie</th>
                        <th className="text-left py-2 text-cyan-400">Proveedor</th>
                        <th className="text-left py-2 text-cyan-400">Duración</th>
                        <th className="text-left py-2 text-cyan-400">Finalidad</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-400">
                      <tr className="border-b border-cyan-500/10">
                        <td className="py-2 font-mono text-xs">_ga</td>
                        <td className="py-2">Google Analytics</td>
                        <td className="py-2">2 años</td>
                        <td className="py-2">Distinguir usuarios únicos</td>
                      </tr>
                      <tr className="border-b border-cyan-500/10">
                        <td className="py-2 font-mono text-xs">_ga_*</td>
                        <td className="py-2">Google Analytics</td>
                        <td className="py-2">2 años</td>
                        <td className="py-2">Mantener el estado de la sesión</td>
                      </tr>
                      <tr className="border-b border-cyan-500/10">
                        <td className="py-2 font-mono text-xs">_clck</td>
                        <td className="py-2">Microsoft Clarity</td>
                        <td className="py-2">1 año</td>
                        <td className="py-2">Almacenar ID de usuario</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-[#0f0f1a] rounded-xl p-6 border border-cyan-500/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <h3 className="font-semibold text-white text-lg">Cookies de marketing</h3>
                </div>
                <p className="text-gray-400 mb-4">
                  Se utilizan para mostrar anuncios relevantes.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-cyan-500/20">
                        <th className="text-left py-2 text-cyan-400">Cookie</th>
                        <th className="text-left py-2 text-cyan-400">Proveedor</th>
                        <th className="text-left py-2 text-cyan-400">Duración</th>
                        <th className="text-left py-2 text-cyan-400">Finalidad</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-400">
                      <tr className="border-b border-cyan-500/10">
                        <td className="py-2 font-mono text-xs">_gcl_au</td>
                        <td className="py-2">Google Ads</td>
                        <td className="py-2">90 días</td>
                        <td className="py-2">Seguimiento de conversiones</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                3. Google Consent Mode v2
              </h2>
              <p className="text-gray-300 mb-4">
                Utilizamos Google Consent Mode v2 para gestionar el consentimiento de cookies de forma compatible 
                con las regulaciones europeas (GDPR).
              </p>
              <div className="bg-[#0f0f1a] rounded-xl p-6 border border-cyan-500/10">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span><strong className="text-white">ad_storage:</strong> Cookies publicitarias</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span><strong className="text-white">ad_user_data:</strong> Datos para publicidad</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span><strong className="text-white">ad_personalization:</strong> Personalización de anuncios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span><strong className="text-white">analytics_storage:</strong> Cookies analíticas</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                4. ¿Cómo gestionar las cookies?
              </h2>
              <div className="space-y-4">
                <div className="bg-[#0f0f1a] rounded-xl p-6 border border-cyan-500/10">
                  <h3 className="font-semibold text-cyan-400 mb-2">Desde nuestro banner</h3>
                  <p className="text-gray-400">
                    Puedes cambiar tus preferencias en cualquier momento desde el banner de cookies.
                  </p>
                </div>
                <div className="bg-[#0f0f1a] rounded-xl p-6 border border-cyan-500/10">
                  <h3 className="font-semibold text-cyan-400 mb-2">Desde tu navegador</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Safari</a></li>
                    <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Microsoft Edge</a></li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                5. Contacto
              </h2>
              <p className="text-gray-300">
                Si tienes preguntas, contacta en:{' '}
                <a href="mailto:jegstudiotech@gmail.com" className="text-cyan-400 hover:underline">
                  jegstudiotech@gmail.com
                </a>
              </p>
            </section>

            <section className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-6 border border-cyan-500/20">
              <p className="text-gray-300">
                Para más información, consulta nuestra{' '}
                <Link href="/privacidad" className="text-cyan-400 hover:underline font-semibold">
                  Política de Privacidad
                </Link>.
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-cyan-500/10">
            <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-purple-400 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>

      <footer className="border-t border-cyan-500/10 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2025 JEG Studios. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  )
}