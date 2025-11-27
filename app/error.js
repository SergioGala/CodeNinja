export default function Error() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-display text-9xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
          500
        </h1>
        <h2 className="font-display text-3xl font-bold mb-4">
          Error del servidor
        </h2>
        <p className="text-gray-400 mb-8">
          Algo salió mal. Estamos trabajando en solucionarlo.
        </p>
        <a
          href="/"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  )
}