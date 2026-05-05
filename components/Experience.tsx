'use client';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: '1',
      title: 'Senior IT Software Engineer',
      company: 'UKG (Ultimate Kronos Group)',
      period: 'Dec 2024 - Present',
      location: 'Noida, Uttar Pradesh, India · Hybrid',
      type: 'Full-time',
      description: 'Driving Salesforce-led GTM delivery across Lead-to-Opportunity workflows as Scrum Master.',
      highlights: [
        'Serve as Scrum Master for GTM team, ensuring predictable delivery cadence',
        'Refine user stories with business stakeholders, translating unclear requirements into actionable specs',
        'Partner with Engineering on solution approaches, trade-offs, and realistic timelines',
        'Drive automation as part of delivery process to improve release confidence',
      ],
    },
    {
      id: '2',
      title: 'IT Software Engineer',
      company: 'UKG (Ultimate Kronos Group)',
      period: 'Dec 2023 - Dec 2024',
      location: 'Noida, Uttar Pradesh, India · Hybrid',
      type: 'Full-time',
      description: 'Contributed across automation, engineering, and Agile delivery for Salesforce GTM systems.',
      highlights: [
        'Collaborated with Product, Business Analysts, and Engineering on backlog refinement',
        'Built and maintained UI and API automation to support stable releases',
        'Improved test coverage and reduced manual effort during delivery cycles',
        'Actively identified risks, resolved blockers, and supported smooth sprint execution',
      ],
    },
    {
      id: '3',
      title: 'Quality Engineer',
      company: 'LTIMindtree',
      period: 'Nov 2022 - Dec 2024',
      location: 'Bengaluru, Karnataka, India · Hybrid',
      type: 'Full-time',
      description: 'Supported Agile delivery teams on Salesforce Sales Cloud and Financial Services Cloud workflows.',
      highlights: [
        'Owned functional and regression validation for Salesforce features (Sales & Financial Services use cases)',
        'Built and maintained 300+ automated test cases across UI and integration flows',
        'Collaborated on requirement reviews with developers, BAs, and stakeholders',
        'Supported CI/CD pipelines and smooth promotion across environments',
      ],
    },
    {
      id: '4',
      title: 'Test Engineer',
      company: 'Mindtree',
      period: 'Jun 2021 - Nov 2022',
      location: 'Pune District, Maharashtra, India · Hybrid',
      type: 'Full-time',
      description: 'Worked on Agile delivery teams supporting Salesforce Sales Cloud and Marketing Cloud applications.',
      highlights: [
        'Executed functional and regression testing across Salesforce releases',
        'Collaborated with developers and stakeholders to clarify workflows and identify gaps',
        'Contributed to automation and repeatable validation for Salesforce workflows',
        'Participated in sprint planning and retrospectives with quality-focused inputs',
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-[#0a0e27] border-t border-[#2a3050]">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Professional <span className="text-cyan-400">Experience</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="mb-8">
              <div className="card-dark p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <p className="text-lg text-cyan-400 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-cyan-300 font-medium mt-2 md:mt-0 text-sm">{exp.period}</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">{exp.location}</p>
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <span className="text-cyan-400 font-bold mt-0.5">✓</span>
                      <span className="text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              {index < experiences.length - 1 && (
                <div className="h-8 flex justify-center">
                  <div className="w-1 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
