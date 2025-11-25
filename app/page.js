'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    privacy: false,
  })

  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('sending')
    
    // Aquí integraréis con vuestro backend o servicio de email
    // Por ahora simulamos el envío
    setTimeout(() => {
      setFormStatus('success')
      console.log('Form data:', formData)
      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: '',
        privacy: false,
      })
    }, 1500)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 border-b border-dark-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-display text-2xl font-bold gradient-text">
              Tu Equipo Dev
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#servicios" className="text-dark-700 hover:text-primary-600 transition-colors">Servicios</a>
              <a href="#portfolio" className="text-dark-700 hover:text-primary-600 transition-colors">Portfolio</a>
              <a href="#proceso" className="text-dark-700 hover:text-primary-600 transition-colors">Proceso</a>
              <a href="#contacto" className="text-dark-700 hover:text-primary-600 transition-colors">Contacto</a>
            </div>
            <a href="#contacto" className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-all hover:scale-105">
              Presupuesto Gratis
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-primary-50 rounded-full text-primary-700 font-medium text-sm mb-6">
                ⚡ Respuesta en menos de 24 horas
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-dark-900 mb-6 leading-tight">
                Desarrollo Web y <span className="gradient-text">Apps Móviles</span> para Startups y PYMEs
              </h1>
              <p className="text-xl text-dark-600 mb-8 leading-relaxed">
                Equipo de 4 desarrolladores senior especializados en React, Python y Node.js. 
                Lanzamos tu MVP en 4-6 semanas con calidad asegurada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contacto" className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transition-all hover:scale-105 hover:shadow-xl text-center">
                  Solicitar Presupuesto Gratis
                </a>
                <a href="#portfolio" className="bg-white border-2 border-dark-200 text-dark-900 px-8 py-4 rounded-full font-semibold hover:border-primary-600 hover:text-primary-600 transition-all text-center">
                  Ver Portfolio
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-dark-200">
                <div>
                  <div className="font-display text-3xl font-bold text-dark-900">15+</div>
                  <div className="text-dark-600 text-sm">Años Experiencia</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-dark-900">4-6</div>
                  <div className="text-dark-600 text-sm">Semanas MVP</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-dark-900">50+</div>
                  <div className="text-dark-600 text-sm">Proyectos</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Placeholder for team image */}
              <div className="relative w-full h-[600px] rounded-3xl bg-gradient-to-br from-primary-500 to-accent-500 p-1">
                <div className="w-full h-full rounded-3xl bg-dark-50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">👨‍💻</div>
                    <p className="text-dark-600">Aquí va la foto de vuestro equipo</p>
                    <p className="text-dark-400 text-sm mt-2">Recomendación: foto profesional del equipo trabajando</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-500 rounded-2xl rotate-12"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-500 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-900 mb-4">
              Por qué elegirnos
            </h2>
            <p className="text-xl text-dark-600 max-w-2xl mx-auto">
              Combinamos velocidad, calidad y escalabilidad para hacer realidad tu proyecto
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Entrega Rápida',
                description: 'MVP funcional en 4-6 semanas. Metodología ágil con entregas cada 2 semanas para que veas el progreso real.',
                color: 'from-primary-500 to-primary-600'
              },
              {
                icon: '💰',
                title: 'Escalable y Flexible',
                description: 'Base de desarrolladores junior supervisada por seniors. Podemos escalar tu equipo según las necesidades del proyecto.',
                color: 'from-accent-500 to-accent-600'
              },
              {
                icon: '🛡️',
                title: 'Calidad Garantizada',
                description: 'Code review exhaustivo, testing automatizado y documentación completa. Tu código será mantenible y profesional.',
                color: 'from-primary-600 to-accent-500'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 card-hover border border-dark-100"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl mb-6`}>
                  {item.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-dark-900 mb-4">{item.title}</h3>
                <p className="text-dark-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-dark-600 max-w-2xl mx-auto">
              Tecnología moderna para proyectos que escalan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Desarrollo Web',
                techs: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS'],
                time: '4-8 semanas',
                price: 'Desde 3.000€',
                description: 'Aplicaciones web modernas, rápidas y SEO-optimizadas. Desde landing pages hasta plataformas complejas.',
                gradient: 'from-primary-500 to-primary-600'
              },
              {
                title: 'Apps Móviles',
                techs: ['React Native', 'iOS', 'Android'],
                time: '6-12 semanas',
                price: 'Desde 5.000€',
                description: 'Aplicaciones móviles nativas con una sola base de código. Experiencia fluida en iOS y Android.',
                gradient: 'from-accent-500 to-accent-600'
              },
              {
                title: 'Backend & APIs',
                techs: ['Python', 'Node.js', 'FastAPI', 'PostgreSQL'],
                time: '3-6 semanas',
                price: 'Desde 2.500€',
                description: 'Arquitecturas escalables y seguras. APIs REST, GraphQL, integración de servicios y bases de datos.',
                gradient: 'from-primary-600 to-accent-500'
              },
              {
                title: 'Consultoría Técnica',
                techs: ['Architecture', 'Code Review', 'Performance'],
                time: 'Flexible',
                price: 'Desde 1.000€',
                description: 'Auditoría de código, optimización de rendimiento, definición de arquitectura y mentoría técnica.',
                gradient: 'from-accent-600 to-primary-500'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-dark-100 card-hover"
              >
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${service.gradient} text-white font-semibold text-sm mb-4`}>
                  {service.time}
                </div>
                <h3 className="font-display text-3xl font-bold text-dark-900 mb-3">{service.title}</h3>
                <p className="text-dark-600 mb-6">{service.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.techs.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-dark-50 text-dark-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-6 border-t border-dark-100">
                  <span className="font-display text-2xl font-bold text-dark-900">{service.price}</span>
                  <a href="#contacto" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                    Solicitar →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-900 mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-xl text-dark-600 max-w-2xl mx-auto">
              Algunos de nuestros trabajos recientes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'E-commerce Fashion',
                category: 'Web App',
                tech: 'Next.js, Stripe, Tailwind',
                result: '150% aumento en conversión',
                image: '🛍️'
              },
              {
                title: 'App Fitness Tracking',
                category: 'Mobile App',
                tech: 'React Native, Node.js',
                result: '10K usuarios en 3 meses',
                image: '💪'
              },
              {
                title: 'SaaS Analytics Platform',
                category: 'Full Stack',
                tech: 'React, Python, PostgreSQL',
                result: '500+ empresas usando',
                image: '📊'
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden card-hover border border-dark-100"
              >
                <div className="h-64 bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-8xl">
                  {project.image}
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary-600 font-semibold mb-2">{project.category}</div>
                  <h3 className="font-display text-2xl font-bold text-dark-900 mb-3">{project.title}</h3>
                  <p className="text-dark-600 text-sm mb-4">{project.tech}</p>
                  <div className="pt-4 border-t border-dark-100">
                    <div className="text-accent-600 font-semibold">✓ {project.result}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-dark-500 italic">
              Nota: Reemplazar con screenshots reales de vuestros proyectos
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="proceso" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-900 mb-4">
              Cómo Trabajamos
            </h2>
            <p className="text-xl text-dark-600 max-w-2xl mx-auto">
              Proceso transparente y colaborativo desde el día uno
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultoría Inicial',
                description: 'Llamada gratuita de 30 minutos para entender tu proyecto, objetivos y presupuesto.',
                icon: '💬'
              },
              {
                step: '02',
                title: 'Propuesta & Presupuesto',
                description: 'En 48h recibes propuesta detallada con scope, timeline y precio fijo.',
                icon: '📋'
              },
              {
                step: '03',
                title: 'Desarrollo Iterativo',
                description: 'Sprints de 2 semanas con entregas frecuentes. Ves el progreso en tiempo real.',
                icon: '⚙️'
              },
              {
                step: '04',
                title: 'Entrega & Soporte',
                description: 'Deployment, documentación completa y 30 días de soporte post-lanzamiento incluido.',
                icon: '🚀'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent"></div>
                )}
                <div className="bg-white rounded-2xl p-6 border border-dark-100">
                  <div className="font-display text-5xl font-bold gradient-text mb-4">{item.step}</div>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-display text-xl font-bold text-dark-900 mb-3">{item.title}</h3>
                  <p className="text-dark-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-900 mb-4">
              Conoce al Equipo
            </h2>
            <p className="text-xl text-dark-600 max-w-2xl mx-auto">
              4 desarrolladores senior con +15 años de experiencia combinada
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl p-12 border border-dark-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-display text-3xl font-bold text-dark-900 mb-6">
                  Especialistas en Tecnología Moderna
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">⚛️</span>
                    </div>
                    <div>
                      <div className="font-semibold text-dark-900 mb-1">Frontend</div>
                      <div className="text-dark-600">React, Next.js, Vue, Tailwind CSS, TypeScript</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🐍</span>
                    </div>
                    <div>
                      <div className="font-semibold text-dark-900 mb-1">Backend</div>
                      <div className="text-dark-600">Python, Node.js, FastAPI, PostgreSQL, MongoDB</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div>
                      <div className="font-semibold text-dark-900 mb-1">Mobile</div>
                      <div className="text-dark-600">React Native, iOS, Android</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-dark-100">
                  <div className="flex gap-4">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-dark-900 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-dark-400 hover:text-dark-900 transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative w-full h-96 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 p-1">
                  <div className="w-full h-full rounded-2xl bg-dark-50 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">👥</div>
                      <p className="text-dark-600">Foto del equipo</p>
                      <p className="text-dark-400 text-sm mt-2">Recomendación: foto grupal profesional</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-dark-900 mb-4">
              Solicita tu Presupuesto
            </h2>
            <p className="text-xl text-dark-600">
              Respuesta en menos de 24 horas. Primera consultoría totalmente gratis.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 border border-dark-100 shadow-xl">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark-900 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-dark-900 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-dark-900 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    placeholder="+34 600 000 000"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-dark-900 mb-2">
                    Tipo de Proyecto *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  >
                    <option value="">Selecciona...</option>
                    <option value="web">Web Corporativa</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="app">App Móvil</option>
                    <option value="backend">Backend/API</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-dark-900 mb-2">
                    Presupuesto Estimado *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  >
                    <option value="">Selecciona...</option>
                    <option value="<3000">Menos de 3.000€</option>
                    <option value="3000-6000">3.000€ - 6.000€</option>
                    <option value="6000-12000">6.000€ - 12.000€</option>
                    <option value=">12000">Más de 12.000€</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="timeline" className="block text-sm font-semibold text-dark-900 mb-2">
                  Timeline Deseado
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                >
                  <option value="">Selecciona...</option>
                  <option value="urgente">Urgente (menos de 4 semanas)</option>
                  <option value="normal">Normal (4-8 semanas)</option>
                  <option value="flexible">Flexible (más de 8 semanas)</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-semibold text-dark-900 mb-2">
                  Cuéntanos sobre tu proyecto *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={5}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-dark-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                  placeholder="Describe tu proyecto, objetivos, funcionalidades que necesitas..."
                ></textarea>
              </div>

              <div className="mb-8">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="privacy"
                    required
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-dark-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="text-sm text-dark-600">
                    Acepto la <a href="#" className="text-primary-600 hover:text-primary-700 underline">política de privacidad</a> y el tratamiento de mis datos personales *
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'sending' ? 'Enviando...' : 'Solicitar Presupuesto Gratis'}
              </button>

              {formStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-center">
                  ✓ ¡Mensaje enviado! Te responderemos en menos de 24 horas.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="font-display text-2xl font-bold mb-4">Tu Equipo Dev</div>
              <p className="text-dark-300 mb-4">
                Desarrollo web y móvil profesional. React, Python, Node.js.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-dark-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="#" className="text-dark-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-display font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-dark-300">
                <li><a href="#servicios" className="hover:text-white transition-colors">Desarrollo Web</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Apps Móviles</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Backend & APIs</a></li>
                <li><a href="#servicios" className="hover:text-white transition-colors">Consultoría</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-dark-300">
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#proceso" className="hover:text-white transition-colors">Proceso</a></li>
                <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-dark-300">
                <li>📧 hola@tuequipo.dev</li>
                <li>📱 +34 600 000 000</li>
                <li>📍 Madrid, España</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-dark-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-400 text-sm">
              © 2024 Tu Equipo Dev. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-dark-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
