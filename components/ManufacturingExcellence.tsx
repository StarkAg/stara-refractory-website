export default function ManufacturingExcellence() {
  return (
    <section id="overview" className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">
            Manufacturing Excellence
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-6 mb-8 tracking-tight">
            Comprehensive Refractory &<br />Metallurgical Solutions
          </h2>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Industries We Serve</h3>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-light">
                Our technical consumables support critical operations across steel manufacturing and foundry applications.
                From induction furnace operations to continuous casting lines, we deliver consistent material performance
                where process reliability matters most.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                We understand the operational challenges faced by metallurgical facilities: thermal management, metal quality
                control, process efficiency, and uptime requirements. Our product portfolio addresses these fundamental needs
                with proven engineering solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Operational Focus</h4>
              <ul className="space-y-3 text-gray-700 font-light">
                <li>• Thermal management and heat containment</li>
                <li>• Metal quality and cleanliness control</li>
                <li>• Process efficiency and casting speed</li>
                <li>• Uptime and maintenance reliability</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-10">Core Product Categories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Insulating & exothermic sleeves for ingot casting",
              "Casting powder and mould flux systems",
              "Ramming mass for induction furnace maintenance",
              "Tundish and ladle refractory boards",
              "Flow control refractories and nozzle compounds",
              "Specialised castables for high-temperature applications"
            ].map((product, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                  <p className="text-gray-800 font-medium leading-relaxed">{product}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
