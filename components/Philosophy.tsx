export default function Philosophy() {
  const principles = [
    {
      number: "01",
      title: "Raw Material Qualification",
      description: "Controlled sourcing and incoming inspection protocols ensure base material consistency before production begins."
    },
    {
      number: "02",
      title: "Process Control",
      description: "Documented manufacturing procedures with critical parameter monitoring at each production stage."
    },
    {
      number: "03",
      title: "Quality Verification",
      description: "Physical and chemical testing protocols aligned with application requirements and industry standards."
    },
    {
      number: "04",
      title: "Technical Documentation",
      description: "Batch traceability and material certificates supporting customer quality management systems."
    },
    {
      number: "05",
      title: "Continuous Improvement",
      description: "Systematic feedback integration from field performance and customer technical discussions."
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Philosophy & Technical Approach
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-200 hover:border-blue-500"
            >
              <div className="text-5xl font-extrabold text-blue-600 mb-4">{principle.number}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
              <p className="text-gray-700 leading-relaxed font-light">{principle.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black text-white p-12 rounded-2xl shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-blue-400">Manufacturing Capabilities</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-4 font-light">
                Our infrastructure includes dedicated mixing equipment, controlled curing facilities, and laboratory testing capabilities. Production capacity is scaled to support both ongoing supply agreements and responsive order fulfillment for time-sensitive requirements.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                Our quality management approach emphasises process control and consistency rather than reactive inspection. This manufacturing philosophy aligns with the requirements of modern steel and foundry operations where consumable reliability is integral to production planning and cost management.
              </p>
            </div>
            <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-8 shadow-inner">
              <h4 className="text-xl font-bold text-blue-300 mb-4">Key Controls</h4>
              <ul className="space-y-3 text-gray-200 font-light">
                <li>• Controlled sourcing and inspection</li>
                <li>• Documented procedures and parameters</li>
                <li>• Lab testing and verification</li>
                <li>• Traceability and certificates</li>
                <li>• Feedback-driven improvements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
