'use client'

import { motion } from 'framer-motion'

export default function JEGSLogo() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 0 40px rgba(6, 182, 212, 0.5))' }}
      >
        <defs>
          {/* Gradientes para las letras */}
          <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="1" />
            <stop offset="100%" stopColor="#9333ea" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="1" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
          </linearGradient>

          {/* Filtros de glow */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="strongGlow">
            <feGaussianBlur stdDeviation="8" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradiente animado para líneas */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9333ea">
              <animate
                attributeName="stop-color"
                values="#9333ea; #06b6d4; #9333ea"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#06b6d4">
              <animate
                attributeName="stop-color"
                values="#06b6d4; #9333ea; #06b6d4"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#9333ea">
              <animate
                attributeName="stop-color"
                values="#9333ea; #06b6d4; #9333ea"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>

        {/* Líneas conectoras con animación */}
        <g opacity="0.8">
          {/* Línea superior: J -> G */}
          <motion.line
            x1="80"
            y1="80"
            x2="320"
            y2="80"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Línea derecha: G -> S */}
          <motion.line
            x1="320"
            y1="80"
            x2="320"
            y2="320"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
          />

          {/* Línea inferior: S -> E */}
          <motion.line
            x1="320"
            y1="320"
            x2="80"
            y2="320"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
          />

          {/* Línea izquierda: E -> J */}
          <motion.line
            x1="80"
            y1="320"
            x2="80"
            y2="80"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
          />

          {/* Líneas diagonales al centro */}
          <motion.line
            x1="80"
            y1="80"
            x2="200"
            y2="200"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            opacity="0.6"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
          />

          <motion.line
            x1="320"
            y1="80"
            x2="200"
            y2="200"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            opacity="0.6"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.9, ease: "easeInOut" }}
          />

          <motion.line
            x1="320"
            y1="320"
            x2="200"
            y2="200"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            opacity="0.6"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
          />

          <motion.line
            x1="80"
            y1="320"
            x2="200"
            y2="200"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            opacity="0.6"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.1, ease: "easeInOut" }}
          />
        </g>

        {/* Orbe central con múltiples capas */}
        <g>
          {/* Anillos externos pulsantes */}
          <motion.circle
            cx="200"
            cy="200"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="1"
            initial={{ r: 40, opacity: 0.3 }}
            animate={{ 
              r: [40, 60, 40],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.circle
            cx="200"
            cy="200"
            fill="none"
            stroke="#9333ea"
            strokeWidth="1"
            initial={{ r: 35, opacity: 0.4 }}
            animate={{
              r: [35, 50, 35],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{
              duration: 2,
              delay: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Orbe principal con glow */}
          <motion.circle
            cx="200"
            cy="200"
            r="25"
            fill="url(#cyanGlow)"
            filter="url(#strongGlow)"
            initial={{ opacity: 0.9 }}
            animate={{
              opacity: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Centro brillante */}
          <circle cx="200" cy="200" r="15" fill="#ffffff" opacity="0.9" filter="url(#strongGlow)" />

          {/* Rayos de luz */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <motion.line
              key={i}
              x1="200"
              y1="200"
              x2={200 + Math.cos((angle * Math.PI) / 180) * 60}
              y2={200 + Math.sin((angle * Math.PI) / 180) * 60}
              stroke="#06b6d4"
              strokeWidth="1.5"
              opacity="0.4"
              filter="url(#glow)"
              animate={{
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </g>

        {/* Letras en las esquinas */}
        {/* J - Arriba Izquierda (Purple) */}
        <motion.text
          x="80"
          y="90"
          fontSize="60"
          fontWeight="bold"
          fill="url(#purpleGlow)"
          textAnchor="middle"
          filter="url(#strongGlow)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          J
        </motion.text>

        {/* G - Arriba Derecha (Cyan) */}
        <motion.text
          x="320"
          y="90"
          fontSize="60"
          fontWeight="bold"
          fill="url(#cyanGlow)"
          textAnchor="middle"
          filter="url(#strongGlow)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.7 }}
        >
          G
        </motion.text>

        {/* S - Abajo Derecha (Purple) */}
        <motion.text
          x="320"
          y="330"
          fontSize="60"
          fontWeight="bold"
          fill="url(#purpleGlow)"
          textAnchor="middle"
          filter="url(#strongGlow)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.9 }}
        >
          S
        </motion.text>

        {/* E - Abajo Izquierda (Cyan) */}
        <motion.text
          x="80"
          y="330"
          fontSize="60"
          fontWeight="bold"
          fill="url(#cyanGlow)"
          textAnchor="middle"
          filter="url(#strongGlow)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2.1 }}
        >
          E
        </motion.text>

        {/* Partículas flotantes alrededor del orbe */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180
          const radius = 80
          const initialX = 200 + Math.cos(angle) * radius
          const initialY = 200 + Math.sin(angle) * radius
          const finalX = 200 + Math.cos(angle + (i * 0.1)) * (radius + 10)
          const finalY = 200 + Math.sin(angle + (i * 0.1)) * (radius + 10)
          
          return (
            <motion.circle
              key={i}
              r="2"
              fill={i % 2 === 0 ? '#06b6d4' : '#9333ea'}
              initial={{ cx: initialX, cy: initialY, opacity: 0.3 }}
              animate={{
                cx: [initialX, finalX, initialX],
                cy: [initialY, finalY, initialY],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )
        })}
      </svg>

      {/* Glow effect de fondo */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.2) 0%, transparent 70%)',
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}