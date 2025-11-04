function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50" />
      <div className="relative max-w-6xl mx-auto px-4 pt-20 pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              The modern platform for farmers
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Predict better harvests, understand weather, detect crop diseases early,
              connect with peers, and sell your produce — all in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#community"
                className="inline-flex items-center px-5 py-3 rounded-md bg-green-600 text-white font-medium shadow hover:bg-green-700 transition-colors"
              >
                Join the community
              </a>
              <a
                href="#marketplace"
                className="inline-flex items-center px-5 py-3 rounded-md bg-white text-gray-900 font-medium border border-gray-200 shadow-sm hover:bg-gray-50"
              >
                Explore marketplace
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900">50k+</div>
                <div className="text-sm text-gray-500">Farmers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">120+</div>
                <div className="text-sm text-gray-500">Regions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-500">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-72 sm:h-80 md:h-96 rounded-2xl bg-white border border-gray-200 shadow-xl p-4">
              <div className="h-full w-full rounded-xl bg-gradient-to-br from-green-100 via-emerald-100 to-blue-100 grid place-items-center text-center px-6">
                <div>
                  <div className="text-6xl">🌾☀️🛒💬</div>
                  <p className="mt-4 text-gray-700 font-medium">AI-powered tools to grow, protect, and sell — designed for the future of agriculture.</p>
                </div>
              </div>
            </div>
            <div className="absolute -z-0 inset-0 blur-3xl opacity-50 bg-gradient-to-r from-green-200 via-emerald-200 to-blue-200 translate-x-8 translate-y-8 rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
