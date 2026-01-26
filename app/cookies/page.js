import Link from 'next/link'

export const metadata = {
  title: 'Política de Privacidad | JEG Studios',
  description: 'Política de privacidad de JEG Studios. Información sobre cómo recopilamos, usamos y protegemos tus datos personales.',
  robots: 'noindex, follow',
}

export default function PoliticaPrivacidad() {
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
            Política de Privacidad
          </h1>
          
          <p className="text-gray-400 mb-8">
            Última actualización: Enero 2025
          </p>

          <div className="prose prose-invert prose-cyan max-w-none space-y-8">
            
            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                1. Responsable del tratamiento
              </h2>
              <div className="bg-[#0f0f1a] rounded-xl p-6 border border-cyan-500/10">
                <p className="text-gray-300 mb-2"><strong className="text-white">Identidad:</strong> JEG Studios</p>
                <p className="text-gray-300 mb-2"><strong className="text-white">Email:</strong> jegstudiotech@gmail.com</p>
                <p className="text-gray-300 mb-2"><strong className="text-white">Ubicación:</strong> Madrid, España</p>
                <p className="text-gray-300"><strong className="text-white">Web:</strong> jegsdev.com</p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                2. Datos que recopilamos
              </h2>
              <div className="space-y-4">
                <div className="bg-[#0f0f1a] rounded-xl p-6 border border-cyan-500/10">
                  <h3 className="font-semibold text-cyan-400 mb-2">Datos proporcionados por ti</h3>
                  <p className="text-gray-400">
                    Cuando rellenas el formulario de contacto: email, tipo de proyecto y descripción del mismo.
                  </p>
                </div>
                <div className="bg-[#0f0f1a] rounded-xl p-6 border border-cyan-500/10">
                  <h3 className="font-semibold text-cyan-400 mb-2">Datos recopilados automáticamente</h3>
                  <p className="text-gray-400">
                    Información técnica como dirección IP, tipo de navegador, páginas visitadas y tiempo de permanencia 
                    (solo si aceptas las cookies analíticas).
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                3. Finalidad del tratamiento
              </h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Responder a tus consultas y solicitudes de presupuesto</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Enviarte información sobre nuestros servicios (solo si das tu consentimiento)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Analizar el uso del sitio web para mejorarlo (con cookies analíticas)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Mostrarte publicidad personalizada (con cookies de marketing)</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                4. Base legal
              </h2>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span><strong className="text-white">Consentimiento:</strong> Cuando rellenas el formulario de contacto o aceptas las cookies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span><strong className="text-white">Interés legítimo:</strong> Para mejorar nuestros servicios y la experiencia del usuario.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">•</span>
                  <span><strong className="text-white">Ejecución contractual:</strong> Cuando contratamos un servicio.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                5. Destinatarios de los datos
              </h2>
              <div className="space-y-4">
                <div className="bg-[#0f0f1a] rounded-xl p-6 border border-cyan-500/10">
                  <h3 className="font-semibold text-white mb-2">Google (Analytics y Ads)</h3>
                  <p className="text-gray-400 text-sm">
                    Para análisis de tráfico y publicidad. Cumple con el EU-US Data Privacy Framework.
                  </p>
                </div>
                <div className="bg-[#0f0f1a] rounded-xl p-6 border border-cyan-500/10">
                  <h3 className="font-semibold text-white mb-2">Formspree</h3>
                  <p className="text-gray-400 text-sm">
                    Para procesar los formularios de contacto.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                6. Tus derechos
              </h2>
              <p className="text-gray-300 mb-4">
                De acuerdo con el RGPD, tienes derecho a:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Acceso', desc: 'Conocer qué datos tenemos sobre ti' },
                  { title: 'Rectificación', desc: 'Corregir datos inexactos' },
                  { title: 'Supresión', desc: 'Solicitar que eliminemos tus datos' },
                  { title: 'Oposición', desc: 'Oponerte al tratamiento de tus datos' },
                  { title: 'Portabilidad', desc: 'Recibir tus datos en formato digital' },
                  { title: 'Limitación', desc: 'Limitar el uso de tus datos' },
                ].map((right, i) => (
                  <div key={i} className="bg-[#0f0f1a] rounded-xl p-4 border border-cyan-500/10">
                    <h3 className="font-semibold text-cyan-400 mb-1">{right.title}</h3>
                    <p className="text-gray-400 text-sm">{right.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-gray-300 mt-4">
                Para ejercer estos derechos: <a href="mailto:jegstudiotech@gmail.com" className="text-cyan-400 hover:underline">jegstudiotech@gmail.com</a>
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                7. Conservación de datos
              </h2>
              <p className="text-gray-300">
                Conservamos tus datos durante el tiempo necesario para cumplir con la finalidad para la que fueron 
                recogidos y los plazos legalmente establecidos.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                8. Seguridad
              </h2>
              <p className="text-gray-300">
                Implementamos medidas técnicas y organizativas para proteger tus datos, incluyendo cifrado SSL/TLS 
                para todas las comunicaciones.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                9. Cookies
              </h2>
              <p className="text-gray-300">
                Utilizamos cookies propias y de terceros. Para más información, consulta nuestra{' '}
                <Link href="/cookies" className="text-cyan-400 hover:underline">
                  Política de Cookies
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-white mb-4">
                10. Reclamaciones
              </h2>
              <p className="text-gray-300">
                Si consideras que el tratamiento de tus datos no es adecuado, puedes presentar una reclamación 
                ante la Agencia Española de Protección de Datos (AEPD):{' '}
                <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                  www.aepd.es
                </a>
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