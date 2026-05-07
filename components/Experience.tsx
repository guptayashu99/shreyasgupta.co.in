'use client';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  logoFile: string;
  period: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: '1',
      title: 'Senior IT Software Engineer',
      company: 'UKG',
      logoFile: 'ukg_logo.webp',
      period: 'Dec 2025 – Present',
      duration: '6 mos',
      location: 'Noida, Uttar Pradesh, India · Hybrid',
      description: 'Driving Salesforce-led GTM delivery across Lead-to-Opportunity workflows as Scrum Master.',
      highlights: [
        'Serve as Scrum Master for GTM team, ensuring predictable sprint execution and steady delivery cadence',
        'Work closely with business stakeholders during refinement to understand unclear requirements and turn them into actionable, engineering-ready user stories',
        'Partner with Engineering on solution approaches, trade-offs, and realistic timelines, staying hands-on to assess implementation complexity',
        'Drive automation as part of the delivery process to improve release confidence and support stable, high-quality releases',
      ],
    },
    {
      id: '2',
      title: 'IT Software Engineer',
      company: 'UKG',
      logoFile: 'ukg_logo.webp',
      period: 'Dec 2024 – Dec 2025',
      duration: '1 yr',
      location: 'Noida, Uttar Pradesh, India · Hybrid',
      description: 'Worked on Salesforce-based GTM systems, contributing across automation, engineering, and Agile delivery for Lead-to-Opportunity workflows.',
      highlights: [
        'Collaborated with Product, Business Analysts, and Engineering on backlog refinement to ensure user stories were clear and execution-ready',
        'Built and maintained UI and API automation to support stable releases, improve test coverage, and reduce manual effort during delivery cycles',
        'Gained hands-on experience with implementation and solutioning, working closely with developers to understand system behavior and support better estimation',
        'Actively identified risks, resolved blockers, and supported smooth sprint execution across the team',
      ],
    },
    {
      id: '3',
      title: 'Quality Engineer',
      company: 'LTIMindtree',
      logoFile: 'ltimindtree_logo.webp',
      period: 'Nov 2022 – Dec 2024',
      duration: '2 yrs 2 mos',
      location: 'Bengaluru, Karnataka, India · Hybrid',
      description: 'Supported Agile delivery teams on Salesforce Sales Cloud and Financial Services Cloud workflows, with integrated platforms including Seismic.',
      highlights: [
        'Owned functional and regression validation for multiple Salesforce features across Sales and Financial Services use cases, ensuring release-ready quality',
        'Built and maintained 300+ automated test cases across UI and integration flows, reducing post-deployment issues and improving release stability',
        'Collaborated with Salesforce developers, BAs, and stakeholders to review requirements and provide early quality risk feedback',
        'Supported CI/CD pipelines by validating builds across environments; participated in sprint planning, backlog grooming, and retrospectives',
      ],
    },
    {
      id: '4',
      title: 'Test Engineer',
      company: 'Mindtree',
      logoFile: 'mindtreeltd_logo.webp',
      period: 'Jun 2021 – Nov 2022',
      duration: '1 yr 6 mos',
      location: 'Pune District, Maharashtra, India · Hybrid',
      description: 'Worked on Agile delivery teams supporting Salesforce Sales Cloud and Marketing Cloud applications.',
      highlights: [
        'Executed functional and regression testing across Salesforce releases to maintain stability as new configurations were introduced',
        'Collaborated with developers, BAs, and stakeholders to clarify Salesforce workflows and identify gaps early in the delivery cycle',
        'Contributed to automation and repeatable validation for Salesforce workflows to reduce manual overhead and support faster releases',
        'Participated in sprint planning, backlog discussions, and retrospectives with quality and feasibility inputs',
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-[#0d1235] border-t border-[#2a3050]">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Professional <span className="text-cyan-400">Experience</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="mb-8">
              <div className="card-dark p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white flex items-center justify-center p-2 shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/company-logos/${exp.logoFile}`}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <p className="text-lg text-cyan-400 font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <p className="text-cyan-300 font-medium text-sm">{exp.period}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{exp.duration}</p>
                  </div>
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
