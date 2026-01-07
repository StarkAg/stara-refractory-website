import Image from 'next/image';

export default function Industries() {
  return (
    <section className="py-24 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Industries & Applications
            <br />
            <span className="text-blue-400">We Serve</span>
          </h2>
        </div>

        <div className="relative mb-16 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10" />
          <div className="aspect-[3/2] relative">
            <Image
              src="/images/2.png"
              alt="Integrated steel plant with continuous casting line"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-6 text-blue-400">Steel Manufacturing Sector</h3>
            <p className="text-gray-300 mb-6 leading-relaxed font-light">
              We support integrated steel plants, mini-mills, and specialty steel producers with refractory consumables for multiple process stages:
            </p>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li className="flex items-start"><span className="text-blue-400 mr-3 font-bold">•</span><div><strong className="text-white">Induction Melting:</strong> Ramming mass and maintenance materials for medium and high-frequency furnaces</div></li>
              <li className="flex items-start"><span className="text-blue-400 mr-3 font-bold">•</span><div><strong className="text-white">Secondary Metallurgy:</strong> Ladle refractories, tundish boards, and flow control systems</div></li>
              <li className="flex items-start"><span className="text-blue-400 mr-3 font-bold">•</span><div><strong className="text-white">Continuous Casting:</strong> Mould flux, nozzle systems, and transfer refractories</div></li>
              <li className="flex items-start"><span className="text-blue-400 mr-3 font-bold">•</span><div><strong className="text-white">Ingot Casting:</strong> Insulating and exothermic sleeve systems for static casting operations</div></li>
            </ul>
            <p className="text-gray-300 leading-relaxed font-light">
              Our products support production of carbon steels, low-alloy steels, stainless steels, and specialty alloy grades across various tonnage scales and casting configurations.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-6 text-blue-400">Foundry Industry Applications</h3>
            <p className="text-gray-300 mb-6 leading-relaxed font-light">
              Serving grey iron, ductile iron, steel, and non-ferrous foundries with furnace and casting consumables:
            </p>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li className="flex items-start"><span className="text-blue-400 mr-3 font-bold">•</span><div><strong className="text-white">Melting Operations:</strong> Induction furnace linings for coreless and channel furnace systems</div></li>
              <li className="flex items-start"><span className="text-blue-400 mr-3 font-bold">•</span><div><strong className="text-white">Metal Transfer:</strong> Ladle refractories and pouring equipment protection</div></li>
              <li className="flex items-start"><span className="text-blue-400 mr-3 font-bold">•</span><div><strong className="text-white">Casting Systems:</strong> Insulating materials for ingot and shape casting</div></li>
              <li className="flex items-start"><span className="text-blue-400 mr-3 font-bold">•</span><div><strong className="text-white">Maintenance Materials:</strong> Repair compounds and protective coatings</div></li>
            </ul>
            <p className="text-gray-300 leading-relaxed font-light">
              We understand the operational demands of foundry environments: rapid thermal cycling, varied alloy chemistries, and the need for reliable consumable performance in high-utilisation production schedules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
