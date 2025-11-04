function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-green-600 text-white grid place-items-center font-bold">Ag</div>
            <span className="text-lg font-semibold text-gray-800">AgriSphere</span>
          </div>
          <p className="mt-3 text-gray-600">Tools and community to help farmers thrive.</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-900">Contact</h4>
          <ul className="mt-3 space-y-2 text-gray-600 text-sm">
            <li>Email: support@agrisphere.app</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Hours: Mon–Fri, 9am–6pm</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-900">Legal</h4>
          <ul className="mt-3 space-y-2 text-gray-600 text-sm">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Refund Policy</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AgriSphere. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
