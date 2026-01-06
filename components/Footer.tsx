export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-extrabold mb-4">
              <span className="text-blue-400">STARA</span> GROUP
            </h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Precision Refractory Solutions for Steel & Foundry Operations
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Contact</h3>
            <p className="text-gray-400 mb-2">
              <a href="mailto:yash@staragroup.in" className="hover:text-blue-400 transition-colors font-light">
                yash@staragroup.in
              </a>
            </p>
            <p className="text-gray-400 mb-2">
              <a href="tel:+917004856516" className="hover:text-blue-400 transition-colors font-light">
                +91 7004856516
              </a>
            </p>
            <p className="text-gray-400 font-light">
              Jamshedpur, Jharkhand - 831001, India
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#overview" className="text-gray-400 hover:text-blue-400 transition-colors font-light">
                  Overview
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-blue-400 transition-colors font-light">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors font-light">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="font-light">&copy; {new Date().getFullYear()} Stara Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
