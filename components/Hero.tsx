import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white py-32 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10"></div>
        <Image
          src="/images/1.png"
          alt="Industrial steel foundry at night with molten steel pouring from ladle and sparks"
          fill
          priority
          className="object-cover"
          quality={90}
          sizes="100vw"
        />
      </div>
      
      <div className="relative z-20 max-w-7xl mx-auto text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/50 rounded-full text-blue-300 text-sm font-semibold uppercase tracking-wider">
            Manufacturing Excellence
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight tracking-tight">
          Precision Refractory Solutions
          <span className="block text-4xl md:text-6xl mt-2 text-blue-400">for Steel & Foundry Operations</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
          Reliable metallurgical consumables engineered for demanding industrial applications. 
          Supporting continuous casting, secondary metallurgy, and foundry operations with proven technical performance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="group bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-lg font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 hover:scale-105 uppercase tracking-wide"
          >
            Request Technical Quote
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#products"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-lg font-bold text-lg transition-all duration-300 border-2 border-white/30 hover:border-white/50 uppercase tracking-wide"
          >
            View Product Range
          </a>
        </div>
      </div>
    </section>
  );
}
