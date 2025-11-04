import { Sprout, CloudSun, Stethoscope, MessageSquare, ShoppingCart, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: Sprout,
    title: 'Crop Prediction',
    desc: 'Choose the right crop for your soil and climate using data-driven recommendations.',
  },
  {
    icon: CloudSun,
    title: 'Weather Insights',
    desc: 'Hyperlocal forecasts and irrigation alerts to plan field work with confidence.',
  },
  {
    icon: Stethoscope,
    title: 'Disease Detection',
    desc: 'Early diagnosis guidance from leaf images and best-practice treatment steps.',
  },
  {
    icon: MessageSquare,
    title: 'Community Forums',
    desc: 'Ask questions, share experiences, and learn from farmers in your region.',
  },
  {
    icon: ShoppingCart,
    title: 'Marketplace',
    desc: 'List produce and agri-inputs, compare prices, and transact securely.',
  },
  {
    icon: ShieldCheck,
    title: 'Advisory & Safety',
    desc: 'Seasonal advisories, subsidy updates, and safe pesticide usage guidelines.',
  },
]

function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Everything farmers need in one place</h2>
          <p className="mt-4 text-lg text-gray-600">A complete toolkit to help you plan, protect, and prosper — built for all farm sizes.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-green-100 text-green-700 grid place-items-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
              <div className="mt-4 text-sm font-medium text-green-700 group-hover:underline">Learn more →</div>
            </div>
          ))}
        </div>

        <div id="community" className="mt-16 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
          <h3 className="text-2xl font-bold text-emerald-900">A thriving community</h3>
          <p className="mt-2 text-emerald-800 max-w-3xl">Connect with farmers nearby, post photos of your crops, and discuss techniques. Build reputation and get faster answers with upvotes.</p>
        </div>

        <div id="marketplace" className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8">
          <h3 className="text-2xl font-bold text-amber-900">Trustworthy marketplace</h3>
          <p className="mt-2 text-amber-800 max-w-3xl">Browse inputs, seeds, and equipment. Verify sellers, compare prices, and choose local pickup or delivery.</p>
        </div>
      </div>
    </section>
  )
}

export default Features
