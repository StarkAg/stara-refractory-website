export default function WhyChoose() {
  const benefits = [
    {
      title: "Technical Consistency",
      description:
        "Rigorous raw material control and process monitoring ensure batch-to-batch performance reliability critical for production planning and quality outcomes."
    },
    {
      title: "Application Engineering",
      description:
        "Products developed with direct understanding of furnace operations, casting metallurgy, and refractory wear mechanisms in demanding thermal environments."
    },
    {
      title: "Responsive Supply",
      description:
        "Manufacturing capacity and logistics systems designed to support scheduled deliveries and emergency requirements for critical production consumables."
    },
    {
      title: "Long-Term Partnership",
      description:
        "Technical support throughout product evaluation, implementation, and ongoing operations. We succeed when your processes perform reliably."
    }
  ];

  return (
    <section className="py-24 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Why Leading Steel & Foundry Operations
            <br />
            <span className="text-blue-400">Choose Our Solutions</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-xl p-8 hover:bg-gray-750 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-blue-500/50 text-center md:text-left"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed font-light">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
