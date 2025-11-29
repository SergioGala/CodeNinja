'use client'

import { useState, lazy, Suspense, useEffect } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { trackFormSubmit, trackCTAClick, trackScroll50, trackTimeOnSite, trackMetaLead, trackGoogleAdsConversion } from './lib/analytics'

// Lazy load del logo (no es crítico para LCP)
const JEGSLogo = dynamic(() => import('./components/JEGSLogo'), {
  loading: () => <div className="w-full aspect-square max-w-lg mx-auto bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl animate-pulse" />,
  ssr: false
})

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

  // ============================================
  // TRACKING DE SCROLL
  // ============================================
  useEffect(() => {
    let scrollTracked = false;

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 50 && !scrollTracked) {
        trackScroll50();
        scrollTracked = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ============================================
  // TRACKING DE TIEMPO EN SITIO
  // ============================================
  useEffect(() => {
    const startTime = Date.now();
    let tracked30s = false;
    let tracked60s = false;

    const timer = setInterval(() => {
      const timeOnSite = Math.floor((Date.now() - startTime) / 1000);
      
      if (timeOnSite >= 30 && !tracked30s) {
        trackTimeOnSite(30);
        tracked30s = true;
      } else if (timeOnSite >= 60 && !tracked60s) {
        trackTimeOnSite(60);
        tracked60s = true;
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.projectType || !formData.budget || !formData.description || !formData.privacy) {
      alert('⚠️ Por favor completa todos los campos obligatorios.')
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert('⚠️ El email no es válido.')
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setFormStatus('sending')

    try {
      const response = await fetch('https://formspree.io/f/mqavqyyw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.name,
          empresa: formData.company,
          email: formData.email,
          telefono: formData.phone,
          tipoProyecto: formData.projectType,
          presupuesto: formData.budget,
          timeline: formData.timeline,
          descripcion: formData.description,
          _subject: `🚀 Nuevo contacto: ${formData.name}`,
          _replyto: formData.email,
        }),
      })

      if (response.ok) {
        setFormStatus('success')
        
        // ✅ TRACKING DE CONVERSIÓN
        trackFormSubmit(formData)
        trackMetaLead(formData)
        trackGoogleAdsConversion(formData)
        
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
        setTimeout(() => setFormStatus(''), 5000)
      } else {
        setFormStatus('error')
        setTimeout(() => setFormStatus(''), 5000)
      }
    } catch (error) {
      console.error('Error:', error)
      setFormStatus('error')
      setTimeout(() => setFormStatus(''), 5000)
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* Background estático optimizado - solo CSS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] opacity-30" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] opacity-30" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-display text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              JEG Studios
            </div>

            <div className="hidden md:flex space-x-8">
              {['Servicios', 'Portfolio', 'Proceso', 'Contacto'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-cyan-400 transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* ✅ CTA NAV - TRACKING AÑADIDO */}
            <a
              href="#contacto"
              onClick={() => trackCTAClick('nav_cta')}
              className="relative group px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
            >
              Hablemos
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - OPTIMIZADO */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-cyan-400 font-medium text-sm mb-6 border border-cyan-500/30 bg-cyan-500/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                </span>
                Respuesta en menos de 24h
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block">Desarrollo Web y</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Apps Móviles
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Equipo de desarrolladores senior especializados en <span className="text-cyan-400 font-semibold">React</span>, <span className="text-purple-400 font-semibold">Python</span> y <span className="text-cyan-400 font-semibold">Node.js</span>.
                <br />Lanzamos tu MVP en 4-6 semanas con calidad asegurada.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* ✅ CTA HERO PRIMARY - TRACKING AÑADIDO */}
                <a
                  href="#contacto"
                  onClick={() => trackCTAClick('hero_primary')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
                >
                  Solicitar Presupuesto
                </a>

                {/* ✅ CTA HERO SECONDARY - TRACKING AÑADIDO */}
                <a
                  href="#portfolio"
                  onClick={() => trackCTAClick('hero_secondary')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-cyan-500/30 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                >
                  Ver Portfolio
                </a>
              </div>

              {/* Stats - SIMPLIFICADO */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-cyan-500/10">
                <div>
                  <div className="font-display text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">15+</div>
                  <div className="text-gray-500 text-sm mt-1">Años Experiencia</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">4-6</div>
                  <div className="text-gray-500 text-sm mt-1">Semanas MVP</div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">50+</div>
                  <div className="text-gray-500 text-sm mt-1">Proyectos</div>
                </div>
              </div>
            </div>

            {/* Logo con lazy loading */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl animate-pulse" />}>
                  <JEGSLogo />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Las 3B - SIMPLIFICADO */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Nuestro Eslogan: Las 3B
            </h2>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-semibold">
              <span className="text-cyan-400">Bueno</span>, <span className="text-purple-400">Bonito</span> y <span className="text-cyan-400">Barato</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Bueno',
                subtitle: 'Calidad Profesional',
                description: 'Code review exhaustivo, testing automatizado y documentación completa.',
                gradient: 'from-cyan-500 to-cyan-600',
              },
              {
                title: 'Bonito',
                subtitle: 'Diseño Moderno',
                description: 'Interfaces elegantes y experiencias de usuario excepcionales.',
                gradient: 'from-purple-500 to-purple-600',
              },
              {
                title: 'Barato',
                subtitle: 'Precio Justo',
                description: 'Precios competitivos sin sacrificar calidad.',
                gradient: 'from-cyan-600 to-purple-500',
              }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition`} />
                <div className="relative bg-[#0f0f1a] rounded-2xl p-8 border border-cyan-500/10 h-full">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center border-2 border-white/20 shadow-2xl mb-6`}>
                    <span className="font-display text-5xl font-black text-white">B</span>
                  </div>
                  <h3 className="font-display text-3xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-4 font-semibold">{item.subtitle}</p>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - SIMPLIFICADO */}
   {/* Services - CON ENLACES A PÁGINAS ESPECÍFICAS */}
<section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 relative">
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="text-center mb-16">
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Nuestros Servicios
      </h2>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">
        Tecnología moderna para proyectos que escalan
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {[
        {
          title: 'Desarrollo Web',
          techs: ['React', 'Next.js', 'Tailwind'],
          time: '4-8 semanas',
          price: 'Desde 3.000€',
          description: 'Aplicaciones web modernas y SEO-optimizadas.',
          link: '/desarrollo-web-react',  // ← NUEVO
        },
        {
          title: 'Apps Móviles',
          techs: ['React Native', 'iOS', 'Android'],
          time: '6-12 semanas',
          price: 'Desde 5.000€',
          description: 'Apps nativas con una sola base de código.',
          link: '/desarrollo-app-movil',  // ← NUEVO
        },
        {
          title: 'Backend & APIs',
          techs: ['Python', 'Node.js', 'PostgreSQL'],
          time: '3-6 semanas',
          price: 'Desde 2.500€',
          description: 'Arquitecturas escalables y seguras.',
          link: '/desarrollo-backend-python',  // ← NUEVO
        },
        {
          title: 'Consultoría Técnica',
          techs: ['Architecture', 'Code Review'],
          time: 'Flexible',
          price: 'Desde 1.000€',
          description: 'Auditoría y optimización de código.',
          link: '#contacto',  // ← Sin página específica
        }
      ].map((service, index) => (
        <div key={index} className="group relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition" />
          <div className="relative bg-[#0f0f1a] rounded-2xl p-8 border border-cyan-500/10 h-full">
            <div className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold text-sm mb-4">
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
              {/* ✅ ENLACE A PÁGINA ESPECÍFICA O CONTACTO */}
              <Link 
                href={service.link}
                onClick={() => trackCTAClick(`service_${service.title.toLowerCase().replace(/ /g, '_')}`)}
                className="text-cyan-400 font-semibold hover:text-purple-400 transition-colors inline-flex items-center gap-1"
              >
                {service.link.startsWith('#') ? 'Solicitar' : 'Más info'}
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Portfolio - OPTIMIZADO con priority en primera imagen */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Proyectos Destacados
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'SportBar League',
                url: 'https://sample-service-name-2ppv.onrender.com/',
                category: 'Web',
                description: 'Web social de grupos y eventos abiertos.',
                tech: ['React', 'Python'],
                image: '/Bar.webp',
              },
              {
                name: 'Sentya',
                url: 'https://sentya.aossa.es/',
                category: 'Web',
                description: 'Plataforma de gestión de talleres sociales.',
                tech: ['React', 'Python'],
                image: '/Sentya.webp',
              },
              {
                name: 'Futuro estudio',
                url: 'https://web-dev-two-livid.vercel.app/',
                category: 'web',
                description: 'Futuro estudio del grupo.',
                tech: ['React', 'Node.js'],
                image: '/Monks.webp',
              },
            ].map((project, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition" />
                <div className="relative bg-[#0f0f1a] rounded-2xl overflow-hidden border border-cyan-500/10 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                      priority={index === 0}
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-display text-xl font-bold text-white">{project.name}</h3>
                      {/* ✅ PORTFOLIO LINK - TRACKING AÑADIDO */}
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={() => trackCTAClick(`portfolio_${project.name.toLowerCase().replace(/ /g, '_')}`)}
                        className="text-cyan-400 hover:text-purple-400 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                    <p className="text-gray-400 text-sm mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs border border-cyan-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - SIMPLIFICADO */}
      <section id="proceso" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Cómo Trabajamos
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultoría Inicial', description: 'Llamada gratuita de 30 minutos.' },
              { step: '02', title: 'Propuesta', description: 'Propuesta detallada en 48h.' },
              { step: '03', title: 'Desarrollo', description: 'Sprints de 2 semanas.' },
              { step: '04', title: 'Entrega', description: '30 días de soporte incluido.' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="relative bg-[#0f0f1a] rounded-2xl p-6 border border-cyan-500/10">
                  <div className="font-display text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form - OPTIMIZADO */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Solicita tu Presupuesto
            </h2>
            <p className="text-xl text-gray-400">
              Respuesta en menos de 24 horas
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition" />
            <form onSubmit={handleSubmit} className="relative bg-[#0f0f1a] rounded-3xl p-8 md:p-12 border border-cyan-500/10">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">Nombre *</label>
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
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">Email *</label>
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
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-gray-300 mb-2">Tipo de Proyecto *</label>
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
                  <label htmlFor="budget" className="block text-sm font-semibold text-gray-300 mb-2">Presupuesto *</label>
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
                <label htmlFor="description" className="block text-sm font-semibold text-gray-300 mb-2">Cuéntanos sobre tu proyecto *</label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={5}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-cyan-500/20 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all resize-none text-white placeholder-gray-500"
                  placeholder="Describe tu proyecto..."
                />
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
                    Acepto la política de privacidad *
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-bold text-lg text-white hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {formStatus === 'sending' ? 'Enviando...' : 'Solicitar Presupuesto'}
              </button>

              {formStatus === 'success' && (
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center">
                  ✓ ¡Mensaje enviado! Te responderemos pronto.
                </div>
              )}

              {formStatus === 'error' && (
                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center">
                  ⚠️ Error al enviar. Por favor, inténtalo de nuevo.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer - SIMPLIFICADO */}
      <footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="font-display text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                JEG Studios
              </div>
              <p className="text-gray-400 mb-4">Desarrollo web y móvil profesional.</p>
            </div>

           <div>
  <h4 className="font-display font-bold mb-4 text-white">Servicios</h4>
  <ul className="space-y-2 text-gray-400">
    <li>
      <Link  
        href="/desarrollo-web-react" 
        onClick={() => trackCTAClick('footer_servicios_web')}
        className="hover:text-cyan-400 transition-colors"
      >
        Desarrollo Web React
      </Link>
    </li>
    <li>
      <Link  
        href="/desarrollo-app-movil"  
        onClick={() => trackCTAClick('footer_servicios_mobile')}
        className="hover:text-cyan-400 transition-colors"
      >
        Apps Móviles React Native
      </Link>
    </li>
    <li>
      <Link  
        href="/desarrollo-backend-python"  
        onClick={() => trackCTAClick('footer_servicios_backend')}
        className="hover:text-cyan-400 transition-colors"
      >
        Backend Python
      </Link>
    </li>
  </ul>
</div>
            <div>
              <h4 className="font-display font-bold mb-4 text-white">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a 
                    href="#portfolio"
                    onClick={() => trackCTAClick('footer_portfolio')}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a 
                    href="#proceso"
                    onClick={() => trackCTAClick('footer_proceso')}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Proceso
                  </a>
                </li>
                <li>
                  <a 
                    href="#contacto"
                    onClick={() => trackCTAClick('footer_contacto')}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold mb-4 text-white">Contacto</h4>
              <a 
                href="mailto:jegstudiotech@gmail.com"
                onClick={() => trackCTAClick('footer_email')}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                jegstudiotech@gmail.com
              </a>
            </div>
          </div>

          <div className="border-t border-cyan-500/10 pt-8 text-center">
            <p className="text-gray-500 text-sm">© 2025 JEG Studios. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}