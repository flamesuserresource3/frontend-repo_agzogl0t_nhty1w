import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <section id="get-started" className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-extrabold">Ready to grow smarter?</h3>
              <p className="mt-3 text-lg text-gray-600">Sign up to access crop and weather predictions, disease detection tips, vibrant community discussions, and a trusted marketplace.</p>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-6 grid gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" required placeholder="you@example.com" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" placeholder="Your name" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Region</label>
                  <input type="text" placeholder="e.g., Punjab, IN" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
              </div>
              <button className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-md bg-green-600 text-white font-medium hover:bg-green-700">
                Create free account
              </button>
              <p className="text-xs text-gray-500">By signing up you agree to our Terms and Privacy Policy.</p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
