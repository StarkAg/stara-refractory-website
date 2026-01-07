import Image from 'next/image';

export default function ProductDetails() {
  const products = [
    {
      title: "Insulating & Exothermic Sleeves",
      content: {
        function:
          "Insulating sleeves reduce heat loss during ingot solidification, whilst exothermic sleeves provide additional thermal energy to maintain molten metal temperature at the ingot top. Both technologies address directional solidification requirements and reduce shrinkage cavity formation in cast ingots.",
        context:
          "These products are critical consumables in steel foundries producing ingots for forging, rolling, or remelting operations. Proper sleeve selection and application directly impact ingot yield, internal soundness, and downstream processing requirements.",
        benefits: [
          "Controlled solidification rate management",
          "Reduced piping and shrinkage defects",
          "Improved ingot yield and metal recovery",
          "Consistent thermal performance across production batches",
          "Compatibility with various steel grades and ingot geometries"
        ],
        application:
          "Used in static casting operations for carbon steel, alloy steel, and stainless steel ingots ranging from small tool steel applications to large structural forgings."
      }
    },
    {
      title: "Casting Powder & Mould Flux Systems",
      content: {
        function:
          "Mould flux performs multiple critical functions in continuous casting operations: thermal insulation of the liquid steel surface, lubrication between the solidifying steel shell and copper mould, absorption of inclusions, and control of heat transfer rates in the meniscus region.",
        context:
          "Proper flux selection and consumption rates directly affect surface quality, breakout risk, and casting speed capabilities. Our casting powder formulations are developed for specific steel grades and caster operating conditions.",
        benefits: [
          "Controlled melting behaviour and slag pool formation",
          "Appropriate viscosity for lubrication requirements",
          "Thermal conductivity matched to casting parameters",
          "Inclusion absorption capacity",
          "Minimal oscillation mark depth",
          "Consistent chemical composition for process stability"
        ],
        application:
          "We support flux selection through technical discussions covering steel chemistry, casting speed, mould geometry, and quality targets. Trial evaluations can be arranged to validate performance in specific operational conditions before full-scale implementation."
      }
    },
    {
      title: "Silica & Boron-Based Ramming Mass",
      content: {
        function:
          "Primary application in acidic and neutral lining systems for induction melting furnaces across foundry and steel remelting operations.",
        types: [
          {
            name: "Silica-Based Formulations",
            description:
              "Suited for acidic melting environments and ferrous alloys. Provides good thermal shock resistance and is economical for applications where basic slag contact is minimal. Widely used in grey iron, ductile iron, and carbon steel melting operations."
          },
          {
            name: "Boron-Enhanced Systems",
            description:
              "Offers improved sintering characteristics and enhanced lining integrity for demanding thermal cycling. Suitable for higher-temperature applications and extended campaign life requirements in medium-frequency induction furnaces."
          }
        ],
        installation:
          "Ramming technique creates dense, consolidated refractory structure with appropriate electrical and thermal properties for induction heating.",
        performance:
          "Provides thermal containment, wear resistance, and chemical stability during melting cycles with appropriate heat-up and cool-down characteristics."
      }
    },
    {
      title: "Tundish Boards & Ladle Boards",
      content: {
        function:
          "Refractory boards for tundish and ladle applications must provide thermal insulation, structural integrity at operating temperatures, and resistance to molten metal and slag contact.",
        tundish:
          "Permanent and working lining systems for continuous casting tundishes. Supports multiple heat sequences with appropriate thermal and chemical resistance for clean steel requirements.",
        ladle:
          "Thermal management boards for ladle sidewalls and bottom assemblies. Reduces heat loss during transport and secondary metallurgy operations whilst protecting the steel shell structure.",
        installation:
          "Engineered for practical installation with appropriate cutting, fitting, and anchoring properties. Dimensional consistency supports efficient maintenance scheduling and downtime management."
      }
    },
    {
      title: "Flow Control Refractories & Nozzle Systems",
      content: {
        function:
          "Flow control refractories regulate molten metal transfer between vessels and into casting moulds. These components include ladle nozzles, shroud tubes, submerged entry nozzles, and associated seating refractories.",
        systems: [
          {
            name: "Ladle Nozzle Systems",
            items: [
              "Slide gate nozzles",
              "Stopper rod assemblies",
              "Well blocks and collector nozzles",
              "Appropriate alumina-graphite compositions"
            ]
          },
          {
            name: "Casting Transfer Components",
            items: [
              "Shroud tubes for ladle-to-tundish transfer",
              "Submerged entry nozzles (SEN)",
              "Inner diameter control for flow characteristics",
              "Anti-clogging treatments where applicable"
            ]
          },
          {
            name: "Nozzle Filling Compounds",
            items: [
              "Rapid-setting compositions for nozzle changes",
              "Thermal compatibility with surrounding refractories",
              "Minimal gas evolution during heat-up",
              "Appropriate working time for installation"
            ]
          }
        ],
        selection:
          "Selection of flow control refractories depends on steel grade, casting parameters, and operational practices. We provide technical guidance on component selection based on your specific metallurgical requirements and maintenance procedures."
      }
    },
    {
      title: "Specialised Castables for High-Temperature Applications",
      content: {
        types: [
          {
            name: "Low-Cement Castables",
            description:
              "Advanced alumina-based formulations with reduced cement content for improved high-temperature strength, thermal shock resistance, and extended service life in furnace and ladle applications."
          },
          {
            name: "Tundish Repair Materials",
            description:
              "Fast-setting castable systems for tundish maintenance between casting sequences. Designed for rapid strength development and thermal compatibility with existing lining materials."
          },
          {
            name: "Induction Furnace Coatings",
            description:
              "Spray and trowelling compounds for coil protection and furnace maintenance. Electrical insulation properties combined with thermal durability in induction heating environments."
          }
        ],
        support:
          "Installation guidelines, mixing procedures, and curing requirements are provided with each castable product. Our technical team can assist with application-specific recommendations and troubleshooting during initial implementation."
      }
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto space-y-16">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-200 p-8 md:p-12">
            {product.title === "Flow Control Refractories & Nozzle Systems" && (
              <div className="relative mb-6 rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                <div className="aspect-[1/1] relative">
                  <Image
                    src="/images/4.png"
                    alt="Ladle nozzle system controlling molten steel flow"
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              </div>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{product.title}</h2>

            {product.content.function && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Function & Application</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4 font-light">{product.content.function}</p>
                {product.content.context && (
                  <p className="text-lg text-gray-700 leading-relaxed font-light">{product.content.context}</p>
                )}
              </div>
            )}

            {product.content.benefits && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Performance Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  {product.content.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-3 font-bold text-xl">•</span>
                      <span className="font-light">{benefit}</span>
                    </li>
                  ))}
                </ul>
                {product.content.application && (
                  <p className="mt-6 text-gray-600 italic font-light bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600">
                    Application Context: {product.content.application}
                  </p>
                )}
              </div>
            )}

            {product.content.types && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Variants</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {product.content.types.map((type, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-3">{type.name}</h4>
                      <p className="text-gray-700 font-light">{type.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {product.content.systems && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">System Components</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {product.content.systems.map((system, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                      <h4 className="font-bold text-gray-900 mb-3">{system.name}</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        {system.items.map((item, j) => (
                          <li key={j} className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span className="font-light">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {product.content.tundish && (
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3">Tundish Applications</h4>
                  <p className="text-gray-700 font-light">{product.content.tundish}</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3">Ladle Insulation</h4>
                  <p className="text-gray-700 font-light">{product.content.ladle}</p>
                </div>
              </div>
            )}

            {product.content.installation && (
              <div className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Installation Characteristics</h4>
                <p className="text-gray-700 font-light">{product.content.installation}</p>
              </div>
            )}

            {product.content.selection && (
              <p className="text-lg text-gray-700 leading-relaxed font-light bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                {product.content.selection}
              </p>
            )}

            {product.content.support && (
              <p className="text-lg text-gray-700 leading-relaxed font-light italic bg-gray-50 p-6 rounded-xl border-l-4 border-blue-600">
                Technical Support: {product.content.support}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
