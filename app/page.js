'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import JEGSLogo from './components/JEGSLogo'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 100])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

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
    setTimeout(() => {
      setFormStatus('success')
      console.log('Form data:', formData)
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
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* Tech Grid Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="font-display text-xl font-bold"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                JEG Studios
              </span>
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {['Servicios', 'Portfolio', 'Proceso', 'Contacto'].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-cyan-400 transition-colors font-medium relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>
            
            <motion.a 
              href="#contacto"
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative px-6 py-2 bg-[#0a0a0f] rounded-lg font-semibold">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Hablemos
                </span>
              </div>
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-cyan-400 font-medium text-sm mb-6 border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(6,182,212,0)",
                    "0 0 0 10px rgba(6,182,212,0)",
                    "0 0 0 0 rgba(6,182,212,0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Respuesta en menos de 24h
              </motion.div>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Desarrollo Web y
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Apps Móviles
                </motion.span>
              </h1>
              
              <motion.p 
                className="text-xl text-gray-400 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Equipo de 4 desarrolladores senior especializados en <span className="text-cyan-400 font-semibold">React</span>, <span className="text-purple-400 font-semibold">Python</span> y <span className="text-cyan-400 font-semibold">Node.js</span>. 
                <br/>Lanzamos tu MVP en 4-6 semanas con calidad asegurada.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.a 
                  href="#contacto"
                  className="group relative inline-flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-white">
                    Solicitar Presupuesto
                  </div>
                </motion.a>
                
                <motion.a 
                  href="#portfolio"
                  className="group relative inline-flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative px-8 py-4 bg-transparent border border-cyan-500/30 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-500/10 transition-all backdrop-blur-sm">
                    Ver Portfolio
                  </div>
                </motion.a>
              </motion.div>
              
              {/* Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-cyan-500/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {[
                  { value: '15+', label: 'Años Experiencia' },
                  { value: '4-6', label: 'Semanas MVP' },
                  { value: '50+', label: 'Proyectos' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="font-display text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* NUEVO LOGO JEGS */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <JEGSLogo />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition - Las 3B */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Nuestro Eslogan: Las 3B
              </span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-semibold">
              <span className="text-cyan-400">Bueno</span>, <span className="text-purple-400">Bonito</span> y <span className="text-cyan-400">Barato</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                letter: 'B',
                title: 'Bueno',
                subtitle: 'Calidad Profesional',
                description: 'Code review exhaustivo, testing automatizado y documentación completa. Tu proyecto será mantenible, escalable y profesional.',
                gradient: 'from-cyan-500 to-cyan-600',
                letterGradient: 'from-cyan-400 to-cyan-600'
              },
              {
                letter: 'B',
                title: 'Bonito',
                subtitle: 'Diseño Moderno',
                description: 'Interfaces elegantes y experiencias de usuario excepcionales. Diseño responsive que se ve perfecto en cualquier dispositivo.',
                gradient: 'from-purple-500 to-purple-600',
                letterGradient: 'from-purple-400 to-purple-600'
              },
              {
                letter: 'B',
                title: 'Barato',
                subtitle: 'Precio Justo',
                description: 'Precios competitivos sin sacrificar calidad. Equipo eficiente que maximiza tu inversión y entrega resultados.',
                gradient: 'from-cyan-600 to-purple-500',
                letterGradient: 'from-cyan-400 to-purple-400'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-300`}></div>
                <div className="relative bg-[#0f0f1a] backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/10 h-full">
                  {/* Letra B grande de fondo */}
                  <div className="absolute top-4 right-4 opacity-5 select-none pointer-events-none">
                    <span className={`font-display text-[160px] font-bold bg-gradient-to-br ${item.letterGradient} bg-clip-text text-transparent`}>
                      {item.letter}
                    </span>
                  </div>
                  
                  {/* Letra B destacada con efecto */}
                  <div className="relative mb-6">
                    <motion.div
                      className="relative inline-block"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Glow de fondo */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl opacity-50`}></div>
                      
                      {/* Letra B principal */}
                      <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center border-2 border-white/20 shadow-2xl`}>
                        <span className="font-display text-5xl font-black text-white drop-shadow-lg">
                          B
                        </span>
                      </div>
                      
                      {/* Badge número pequeño */}
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-lg">
                        <span className={`font-display text-sm font-bold bg-gradient-to-br ${item.letterGradient} bg-clip-text text-transparent`}>
                          {index + 1}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  <h3 className={`font-display text-3xl font-bold mb-2 bg-gradient-to-r ${item.letterGradient} bg-clip-text text-transparent`}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-4 font-semibold">
                    {item.subtitle}
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA adicional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-6">
              No tienes que elegir entre calidad, diseño y precio. Con nosotros lo tienes todo.
            </p>
            <motion.a
              href="#contacto"
              className="inline-flex items-center gap-2 relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-semibold text-white">
                Solicitar Presupuesto Gratis
              </div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Nuestros Servicios
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
                description: 'Aplicaciones web modernas, rápidas y SEO-optimizadas.',
                gradient: 'from-cyan-500 to-cyan-600'
              },
              {
                title: 'Apps Móviles',
                techs: ['React Native', 'iOS', 'Android'],
                time: '6-12 semanas',
                price: 'Desde 5.000€',
                description: 'Apps nativas con una sola base de código.',
                gradient: 'from-purple-500 to-purple-600'
              },
              {
                title: 'Backend & APIs',
                techs: ['Python', 'Node.js', 'FastAPI', 'PostgreSQL'],
                time: '3-6 semanas',
                price: 'Desde 2.500€',
                description: 'Arquitecturas escalables y seguras.',
                gradient: 'from-cyan-600 to-purple-500'
              },
              {
                title: 'Consultoría Técnica',
                techs: ['Architecture', 'Code Review', 'Performance'],
                time: 'Flexible',
                price: 'Desde 1.000€',
                description: 'Auditoría y optimización de código.',
                gradient: 'from-purple-600 to-cyan-500'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-300"></div>
                <div className="relative bg-[#0f0f1a] backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/10 h-full">
                  <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${service.gradient} text-white font-semibold text-sm mb-4`}>
                    {service.time}
                  </div>
                  <h3 className="font-display text-3xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.techs.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-lg text-sm border border-cyan-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-6 border-t border-cyan-500/10">
                    <span className="font-display text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {service.price}
                    </span>
                    <motion.a 
                      href="#contacto"
                      className="text-cyan-400 font-semibold hover:text-purple-400 transition-colors flex items-center gap-2 group"
                      whileHover={{ x: 5 }}
                    >
                      Solicitar
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Proyectos Destacados
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Resultados reales de nuestros clientes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Tu Proyecto 1',
                url: 'https://tuproyecto1.com',
                category: 'E-commerce',
                description: 'Plataforma de ventas online con integración de pagos y gestión de inventario.',
                tech: ['Next.js', 'Stripe', 'Tailwind'],
                metric: '150% ↑ conversión',
                image: 'https://via.placeholder.com/600x400/0ea5e9/ffffff?text=Proyecto+1',
                gradient: 'from-cyan-500 to-blue-500'
              },
              {
                name: 'Tu Proyecto 2',
                url: 'https://tuproyecto2.com',
                category: 'SaaS',
                description: 'Dashboard analítico con visualización de datos en tiempo real.',
                tech: ['React', 'Python', 'PostgreSQL'],
                metric: '10K+ usuarios',
                image: 'https://via.placeholder.com/600x400/9333ea/ffffff?text=Proyecto+2',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                name: 'Tu Proyecto 3',
                url: 'https://tuproyecto3.com',
                category: 'App Móvil',
                description: 'Aplicación móvil para gestión de tareas con sincronización en la nube.',
                tech: ['React Native', 'Node.js', 'MongoDB'],
                metric: '4.8★ rating',
                image: 'https://via.placeholder.com/600x400/06b6d4/ffffff?text=Proyecto+3',
                gradient: 'from-cyan-500 to-purple-500'
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-300"></div>
                <div className="relative bg-[#0f0f1a] backdrop-blur-xl rounded-2xl overflow-hidden border border-cyan-500/10 h-full flex flex-col">
                  
                  {/* Screenshot del proyecto */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                    
                    {/* Placeholder - Aquí irá tu screenshot real */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="text-4xl mb-2">🖼️</div>
                        <p className="text-sm text-gray-400">Reemplaza con screenshot</p>
                        <p className="text-xs text-gray-500 mt-1">de {project.name}</p>
                      </div>
                    </div>

                    {/* Overlay en hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group/btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-60"></div>
                        <div className="relative px-6 py-3 bg-white rounded-lg font-semibold text-gray-900 flex items-center gap-2">
                          Ver Proyecto
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </div>
                      </motion.a>
                    </motion.div>

                    {/* Badge de categoría */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white shadow-lg backdrop-blur-sm`}>
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-display text-xl font-bold text-white">
                        {project.name}
                      </h3>
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-purple-400 transition-colors"
                        whileHover={{ rotate: 45 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    </div>

                    <p className="text-gray-400 text-sm mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs border border-cyan-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Métrica destacada */}
                    <div className="pt-4 border-t border-cyan-500/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-green-400 font-semibold text-sm">
                          {project.metric}
                        </span>
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gray-500 hover:text-cyan-400 transition-colors truncate max-w-[150px]"
                      >
                        {project.url.replace('https://', '')}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Nota para reemplazar con proyectos reales */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/10 border border-cyan-500/20 rounded-full backdrop-blur-sm">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-gray-400">
                <span className="text-cyan-400 font-semibold">Tip:</span> Reemplaza los datos de ejemplo con tus proyectos reales (nombre, URL, screenshot)
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section id="proceso" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Cómo Trabajamos
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Proceso transparente desde el día uno
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultoría Inicial',
                description: 'Llamada gratuita de 30 minutos.',
                icon: '💬'
              },
              {
                step: '02',
                title: 'Propuesta',
                description: 'Propuesta detallada en 48h.',
                icon: '📋'
              },
              {
                step: '03',
                title: 'Desarrollo',
                description: 'Sprints de 2 semanas.',
                icon: '⚙️'
              },
              {
                step: '04',
                title: 'Entrega',
                description: '30 días de soporte incluido.',
                icon: '🚀'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent z-0"></div>
                )}
                <div className="relative bg-[#0f0f1a] backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                  <div className="font-display text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                    {item.step}
                  </div>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Solicita tu Presupuesto
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Respuesta en menos de 24 horas. Primera consultoría gratis.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <form onSubmit={handleSubmit} className="relative bg-[#0f0f1a] backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-cyan-500/10">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-black/30 border border-cyan-500/20 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white placeholder-gray-500"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-300 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-black/30 border border-cyan-500/20 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white placeholder-gray-500"
                    placeholder="Tu empresa"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-black/30 border border-cyan-500/20 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white placeholder-gray-500"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-black/30 border border-cyan-500/20 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white placeholder-gray-500"
                    placeholder="+34 600 000 000"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-gray-300 mb-2">
                    Tipo de Proyecto *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-black/30 border border-cyan-500/20 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white"
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
                  <label htmlFor="budget" className="block text-sm font-semibold text-gray-300 mb-2">
                    Presupuesto *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-black/30 border border-cyan-500/20 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white"
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
                <label htmlFor="timeline" className="block text-sm font-semibold text-gray-300 mb-2">
                  Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-cyan-500/20 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white"
                >
                  <option value="">Selecciona...</option>
                  <option value="urgente">Urgente (menos de 4 semanas)</option>
                  <option value="normal">Normal (4-8 semanas)</option>
                  <option value="flexible">Flexible (más de 8 semanas)</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="description" className="block text-sm font-semibold text-gray-300 mb-2">
                  Cuéntanos sobre tu proyecto *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={5}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-cyan-500/20 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all resize-none text-white placeholder-gray-500"
                  placeholder="Describe tu proyecto..."
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
                    className="mt-1 w-5 h-5 rounded border-cyan-500/30 bg-black/30 text-cyan-500 focus:ring-cyan-500"
                  />
                  <span className="text-sm text-gray-400">
                    Acepto la <a href="#" className="text-cyan-400 hover:text-purple-400 underline">política de privacidad</a> *
                  </span>
                </label>
              </div>

              <motion.button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full relative group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-bold text-lg text-white">
                  {formStatus === 'sending' ? 'Enviando...' : 'Solicitar Presupuesto'}
                </div>
              </motion.button>

              {formStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center backdrop-blur-sm"
                >
                  ✓ ¡Mensaje enviado! Te responderemos pronto.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="font-display text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  JEG Studios
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Desarrollo web y móvil profesional.
              </p>
              <div className="flex gap-4">
                <motion.a 
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </motion.a>
                <motion.a 
                  href="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </motion.a>
              </div>
            </div>

            <div>
              <h4 className="font-display font-bold mb-4 text-white">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Desarrollo Web</a></li>
                <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Apps Móviles</a></li>
                <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Backend & APIs</a></li>
                <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Consultoría</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold mb-4 text-white">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a></li>
                <li><a href="#proceso" className="hover:text-cyan-400 transition-colors">Proceso</a></li>
                <li><a href="#contacto" className="hover:text-cyan-400 transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold mb-4 text-white">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📧 hola@jegstudios.com</li>
                <li>📱 +34 600 000 000</li>
                <li>📍 Madrid, España</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-cyan-500/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 JEG Studios. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-gray-500 text-sm">
              <a href="#" className="hover:text-cyan-400 transition-colors">Aviso Legal</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}