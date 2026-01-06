import Image from 'next/image';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Request Technical Information<br />
            <span className="text-blue-400">& Quotation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            We welcome enquiries from steel manufacturing facilities, foundries, and industrial operations requiring 
            refractory and metallurgical consumables. Our technical team can discuss your specific application requirements, 
            provide product recommendations, and prepare detailed quotations for evaluation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Enquiry Information */}
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8 text-blue-400">Enquiry Information</h3>
            <p className="text-gray-300 mb-8 leading-relaxed font-light">
              To support an efficient technical discussion and accurate quotation, please provide:
            </p>
            <ul className="space-y-4 text-gray-300 mb-8">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 font-bold text-xl">•</span>
                <span className="font-light">Product category of interest and intended application</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 font-bold text-xl">•</span>
                <span className="font-light">Process details (furnace type, steel grades, operating temperatures, casting configuration)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 font-bold text-xl">•</span>
                <span className="font-light">Current material specifications or performance requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 font-bold text-xl">•</span>
                <span className="font-light">Estimated consumption volumes and delivery scheduling requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 font-bold text-xl">•</span>
                <span className="font-light">Technical contacts for detailed discussions</span>
              </li>
            </ul>
            <p className="text-gray-400 italic font-light">
              For urgent technical support or existing customer service matters, please contact us directly via telephone 
              during business hours.
            </p>
          </div>

          {/* Contact Details */}
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8 text-blue-400">Business Contact Details</h3>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-xl mb-4 text-white">Technical Enquiries & Quotations:</h4>
                <p className="text-gray-300 mb-2">
                  <a href="mailto:yash@staragroup.in" className="text-blue-400 hover:text-blue-300 underline font-semibold text-lg transition-colors">
                    yash@staragroup.in
                  </a>
                </p>
                <p className="text-gray-300">
                  <a href="tel:+917004856516" className="text-blue-400 hover:text-blue-300 underline font-semibold text-lg transition-colors">
                    +91 7004856516
                  </a>
                </p>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-4 text-white">Business Hours:</h4>
                <p className="text-gray-300 font-light">Monday–Friday: 09:00–18:00</p>
                <p className="text-gray-300 font-light">Saturday: 09:00–13:00</p>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-4 text-white">Manufacturing Facility:</h4>
                <p className="text-gray-300 font-light">Jamshedpur, Jharkhand - 831001, India</p>
              </div>
              <div className="pt-4">
                <a
                  href="mailto:yash@staragroup.in?subject=RFQ - Technical Enquiry"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-lg font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 hover:scale-105 uppercase tracking-wide"
                >
                  Submit RFQ via Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
