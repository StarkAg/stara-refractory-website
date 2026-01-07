export default function Commitment() {
  const commitments = [
    {
      title: "Technical Dialogue",
      description:
        "We engage with plant engineers, metallurgists, and procurement teams to understand operational requirements, process challenges, and performance expectations. Product recommendations are based on technical fit rather than standardised offerings."
    },
    {
      title: "Trial Support",
      description:
        "Structured evaluation programmes for new product implementation. Technical personnel available during trial periods to monitor performance, address installation questions, and document outcomes for decision-making."
    },
    {
      title: "Supply Reliability",
      description:
        "Manufacturing and logistics systems designed for consistent delivery performance. Inventory management and production scheduling coordinated with customer consumption patterns and planning cycles."
    },
    {
      title: "Continuous Engagement",
      description:
        "Ongoing technical communication throughout the supply relationship. Field performance feedback integrated into our quality management and product development processes for mutual improvement."
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">
            Reliability & Partnership
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-6 mb-8 tracking-tight">
            Commitment to Customer Operations
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {commitments.map((commitment, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-200 hover:border-blue-500"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{commitment.title}</h3>
              <p className="text-gray-700 leading-relaxed font-light">{commitment.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black text-white p-12 rounded-2xl shadow-2xl">
          <p className="text-xl text-gray-300 leading-relaxed font-light text-center max-w-4xl mx-auto">
            We recognise that refractory and metallurgical consumables are critical inputs to your production operations.
            Equipment downtime, quality issues, and supply disruptions have direct cost and operational impacts. Our business
            approach is built on understanding these realities and delivering reliable material performance that supports your
            manufacturing objectives.
          </p>
        </div>
      </div>
    </section>
  );
}
