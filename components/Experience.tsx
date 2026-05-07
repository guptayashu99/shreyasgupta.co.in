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
      description: 'Scrum Master for the GTM team at UKG, working across delivery, automation strategy, and tooling on Salesforce Lead-to-Opportunity workflows.',
      highlights: [
        'Run delivery as Scrum Master — sprint planning, backlog management, dependency tracking, and making sure the team ships what it commits to',
        'Own the GTM automation approach — decide what gets automated and in what order, and build the frameworks the team works from',
        'Sit in requirements discussions when there are gaps, working through feasibility with engineering before stories are finalised',
        'Built AI agents on ChatGPT and Copilot to cut down team overhead; wrote a Python tool to migrate our full test suite from TestRail to Azure DevOps when no off-the-shelf option worked',
        'Leading a Playwright POC to evaluate whether it\'s a better fit for our pipeline than the current framework',
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
      description: 'Worked across automation, delivery, and solutioning for the GTM team — building the technical and delivery habits that carried into the senior role.',
      highlights: [
        'Took part in backlog refinement with Product, BAs, and Engineering to make sure stories were clear and ready to build before sprint start',
        'Built and maintained UI and API automation across GTM workflows, which helped stabilise releases and reduced the manual testing load',
        'Got into solutioning conversations with developers regularly — useful for catching scope gaps early and keeping estimates realistic',
        'Flagged risks and blockers early in sprints rather than waiting for them to surface at the wrong moment',
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
      description: 'Quality Engineer on Salesforce Sales Cloud and Financial Services Cloud for Lincoln Financial, working across automation, delivery, and GTM workflows integrated with Seismic.',
      highlights: [
        'Responsible for quality across Salesforce Sales Cloud and FSC releases — multiple feature tracks running at the same time, all needing to be release-ready',
        'Built a 300+ test suite in Selenium Java covering UI and integration flows; made a visible difference in post-release defect rates',
        'Involved early in requirements reviews with developers, BAs, and stakeholders — catching issues before they made it into builds saved a lot of rework',
        'Plugged into CI/CD pipelines for environment validation and was a regular part of sprint ceremonies from planning through to retros',
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
      description: 'Started my career as a Test Engineer on Salesforce Sales Cloud and Marketing Cloud, picking up the fundamentals of quality, automation, and Agile delivery.',
      highlights: [
        'Ran functional and regression testing across Salesforce releases — keeping things stable when configuration was changing frequently',
        'Worked with developers, BAs, and stakeholders to understand workflows and catch gaps early rather than discovering them mid-sprint',
        'Built reusable automation scripts for Salesforce flows, which reduced manual effort and made release cycles a bit more consistent',
        'Contributed to sprint planning and backlog discussions from a quality angle — flagging what was testable, what wasn\'t, and what needed more clarity',
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
