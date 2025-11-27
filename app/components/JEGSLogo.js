'use client'

export default function JEGSLogo() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.25))' }}
      >
        <defs>
          <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
          <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        {/* Líneas estáticas - SIN animaciones */}
        <g opacity="0.5" stroke="url(#cyanGlow)" strokeWidth="2" fill="none">
          <line x1="80" y1="80" x2="320" y2="80" />
          <line x1="320" y1="80" x2="320" y2="320" />
          <line x1="320" y1="320" x2="80" y2="320" />
          <line x1="80" y1="320" x2="80" y2="80" />
        </g>

        {/* Orbe central - estático */}
        <circle cx="200" cy="200" r="25" fill="url(#cyanGlow)" opacity="0.8" />
        <circle cx="200" cy="200" r="15" fill="#ffffff" opacity="0.9" />

        {/* Letras - SIN animaciones */}
        <text x="80" y="90" fontSize="60" fontWeight="bold" fill="url(#purpleGlow)" textAnchor="middle">J</text>
        <text x="320" y="90" fontSize="60" fontWeight="bold" fill="url(#cyanGlow)" textAnchor="middle">G</text>
        <text x="320" y="330" fontSize="60" fontWeight="bold" fill="url(#purpleGlow)" textAnchor="middle">S</text>
        <text x="80" y="330" fontSize="60" fontWeight="bold" fill="url(#cyanGlow)" textAnchor="middle">E</text>

        {/* Solo 4 partículas estáticas */}
        {[0, 90, 180, 270].map((angle, i) => {
          const x = 200 + Math.cos((angle * Math.PI) / 180) * 80
          const y = 200 + Math.sin((angle * Math.PI) / 180) * 80
          return <circle key={i} cx={x} cy={y} r="2" fill={i % 2 === 0 ? '#06b6d4' : '#9333ea'} opacity="0.4" />
        })}
      </svg>

      {/* Glow de fondo - estático */}
      <div 
        className="absolute inset-0 -z-10" 
        style={{ background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1), transparent 70%)' }} 
      />
    </div>
  )
}