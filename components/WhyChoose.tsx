import Image from 'next/image';

export default function WhyChoose() {
  const benefits = [
    {
      title: "Technical Consistency",
      description: "Rigorous raw material control and process monitoring ensure batch-to-batch performance reliability critical for production planning and quality outcomes.",
      imagePrompt: "Laboratory technician analyzing refractory materials, precision instruments, clean industrial environment, professional photography, high detail, 8K"
    },
    {
      title: "Application Engineering",
      description: "Products developed with direct understanding of furnace operations, casting metallurgy, and refractory wear mechanisms in demanding thermal environments.",
      imagePrompt: "Engineer reviewing technical drawings, industrial control room, advanced monitoring systems, professional industrial photography, dramatic lighting"
    },
    {
      title: "Responsive Supply",
      description: "Manufacturing capacity and logistics systems designed to support scheduled deliveries and emergency requirements for critical production consumables.",
      imagePrompt: "Modern industrial warehouse, organized storage systems, logistics operations, aerial view, professional photography, high detail, cinematic composition"
    },
    {
      title: "Long-Term Partnership",
      description: "Technical support throughout product evaluation, implementation, and ongoing operations. We succeed when your processes perform reliably.",
      imagePrompt: "Professional handshake in industrial setting, business meeting, steel manufacturing background, professional corporate photography, warm lighting"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Why Leading Steel & Foundry Operations<br />
            <span className="text-blue-400">Choose Our Solutions</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-xl p-8 hover:bg-gray-750 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-blue-500/50"
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-gray-900">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-4 border-2 border-dashed border-gray-700 rounded-lg bg-gray-800/50">
                    <p className="text-gray-400 text-xs mb-1 font-semibold">NANOBANANA PROMPT:</p>
                    <p className="text-gray-300 text-xs max-w-xs">{benefit.imagePrompt}</p>
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed font-light">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
