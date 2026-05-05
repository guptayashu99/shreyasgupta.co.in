'use client';

export default function About() {
  const skills = [
    'Agile Delivery & Execution',
    'Scrum Master',
    'Salesforce GTM Platform',
    'Cross-functional Collaboration',
    'Release Planning',
    'Test Automation',
    'Salesforce Sales Cloud',
    'Requirement Understanding',
    'Sprint Planning',
    'Quality Assurance',
    'Apex Programming',
    'Salesforce AgentForce',
    'AI Concepts',
    'JIRA & Azure DevOps',
  ];

  return (
    <section id="about" className="section-padding bg-[#0a0e27] border-t border-[#2a3050]">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          About <span className="text-cyan-400">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm an Agile Delivery professional and Scrum Master with 5 years of experience across Salesforce and GTM systems,
              focused on driving reliable and scalable execution for customer-facing teams.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              At UKG, I drive Salesforce-led GTM initiatives for Sales Enablement and Opportunity Management.
              I work closely with Product, Engineering, and business stakeholders to plan delivery, manage backlogs, and keep releases predictable.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I operate at the intersection of planning and execution, managing dependencies, identifying risks early,
              and coordinating across teams to ensure customer-facing commitments are consistently met.
              I'm building toward delivery and program management roles where I can own end-to-end execution and scale Salesforce GTM systems effectively.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-cyan-400 mb-3 text-lg">Core Competencies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium border border-cyan-500/30 hover:border-cyan-400 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="card-dark p-8">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">4.5+</div>
                <p className="text-gray-400 mt-2">Years of Experience</p>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">6</div>
                <p className="text-gray-400 mt-2">Salesforce Certifications</p>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">2</div>
                <p className="text-gray-400 mt-2">Scrum Certifications</p>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
              <div className="pt-2 text-center">
                <div className="text-2xl font-bold text-cyan-400">Delhi, India</div>
                <p className="text-gray-400 text-sm">Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
