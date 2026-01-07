import Image from 'next/image';

export default function QualityControl() {
  const qualityPoints = [
    {
      title: "Raw Material Control",
      description:
        "Qualified supplier base with incoming inspection protocols. Chemical and physical testing of key raw materials before production release."
    },
    {
      title: "Laboratory Testing",
      description:
        "In-house analytical capabilities for chemical composition, physical properties, and performance characteristics relevant to application requirements."
    },
    {
      title: "Production Monitoring",
      description:
        "Process parameter control and batch documentation throughout manufacturing sequences. Equipment calibration and maintenance schedules."
    },
    {
      title: "Final Inspection",
      description:
        "Product verification against specifications before release. Material certificates and traceability documentation provided with shipments."
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Quality Control &
            <br />
            <span className="text-blue-600">Manufacturing Infrastructure</span>
          </h2>
        </div>

        <div className="relative mb-16 rounded-2xl overflow-hidden border border-gray-200 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/10 z-10" />
          <div className="aspect-[3/2] relative">
            <Image
              src="/images/3.png"
              alt="Metallurgical laboratory with scientists inspecting samples"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {qualityPoints.map((point, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-200 hover:border-blue-500"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{point.title}</h3>
              <p className="text-gray-700 leading-relaxed font-light">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black text-white p-12 rounded-2xl shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-blue-400">Manufacturing Capabilities</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-4 font-light">
                Our production facilities include dedicated equipment for mixing, forming, curing, and packaging refractory and metallurgical products. Capacity planning supports both scheduled production runs for ongoing supply contracts and responsive manufacturing for urgent customer requirements.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                We maintain controlled storage for raw materials and finished goods, enabling inventory management that supports delivery reliability. Material handling and packaging systems are designed to protect product integrity during transport and storage.
              </p>
            </div>
            <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-8 shadow-inner">
              <h4 className="text-xl font-bold text-blue-300 mb-4">Core Checks</h4>
              <ul className="space-y-3 text-gray-200 font-light">
                <li>• Incoming raw material testing</li>
                <li>• Lab verification and analytics</li>
                <li>• Parameter control & documentation</li>
                <li>• Final inspection & certification</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
