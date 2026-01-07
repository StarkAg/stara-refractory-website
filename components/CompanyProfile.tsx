export default function CompanyProfile() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">
            Company Profile
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-6 mb-8 tracking-tight">
            About Our Organisation
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed font-light">
              We are a focused refractory and metallurgical consumables supplier serving the steel and foundry industries.
              Our business model centres on delivering consistent material performance through controlled processes and
              application-specific technical support.
            </p>
            <p className="text-lg leading-relaxed font-light">
              Founded on engineering principles rather than commodity supply, we've built our reputation by understanding the operational realities of high-temperature metallurgical processes. Our product development reflects direct industry experience and feedback from technical personnel managing furnace operations, casting lines, and quality control.
            </p>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed font-light">
              We maintain in-house production capabilities for all core product lines, enabling us to control material specifications, production parameters, and quality outcomes. This manufacturing approach supports the consistency and traceability requirements of modern steel and foundry operations.
            </p>
            <p className="text-lg leading-relaxed font-light">
              Our customer relationships are built on technical dialogue, trial evaluations, and measured performance outcomes. We view each engagement as a long-term technical partnership rather than a transactional supply arrangement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
