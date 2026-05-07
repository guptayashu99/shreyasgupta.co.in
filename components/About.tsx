'use client';

import { useState, useEffect, useRef } from 'react';

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * to));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, to]);

  return <div ref={ref}>{count}{suffix}</div>;
}

export default function About() {
  const skillGroups = [
    {
      label: 'Delivery & Agile Leadership',
      skills: [
        'Delivery Leadership & Ownership',
        'Scrum Master',
        'Release Planning & Delivery Accountability',
        'Sprint Planning & Roadmap Management',
        'Cross-Team Coordination & Stakeholder Alignment',
        'Risk Management & Dependency Resolution',
        'Program & Portfolio Delivery',
      ],
    },
    {
      label: 'Salesforce & GTM',
      skills: [
        'Salesforce GTM Platform Delivery',
        'Salesforce Sales Cloud',
        'Salesforce Financial Services Cloud',
        'Salesforce AgentForce',
        'Salesforce Integrations (Seismic)',
        'Apex Programming',
      ],
    },
    {
      label: 'Automation Architecture & Quality',
      skills: [
        'Automation Strategy & Architecture',
        'Framework Design & Ownership',
        'Playwright (POC Lead)',
        'Selenium Java',
        'Regression & Release Validation',
        'Quality Risk Identification',
        'CI/CD Integration',
      ],
    },
    {
      label: 'Tools & AI',
      skills: [
        'JIRA & Azure DevOps',
        'AI Agents (ChatGPT, Copilot)',
        'Python Scripting & Tooling',
        'Provar & VS Code',
        'TestRail',
      ],
    },
  ];

  return (
    <section id="about" className="section-padding bg-[#0a0e27] border-t border-[#2a3050]">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          About <span className="text-cyan-400">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg text-gray-300 mb-5 leading-relaxed">
              I'm a Scrum Master and Agile Delivery Professional with five years working in Salesforce GTM systems.
              My background is a bit unusual — I've always stayed close to the technical work, so I can have real
              conversations with engineering teams rather than just relay information between them.
            </p>
            <p className="text-lg text-gray-300 mb-5 leading-relaxed">
              At UKG, I run delivery for the GTM team as Scrum Master — sprints, backlog, stakeholder alignment, the works.
              When requirements are unclear, I'm usually the one sitting with engineering to figure out what's actually
              feasible before we commit to anything. It saves a lot of mid-sprint surprises.
            </p>
            <p className="text-lg text-gray-300 mb-5 leading-relaxed">
              I also own our automation approach for GTM — not just running tests, but deciding what's worth automating,
              when, and building the frameworks the team uses. It started informally and has grown into a defined
              responsibility over time.
            </p>
            <p className="text-lg text-gray-300 mb-5 leading-relaxed">
              I tend to pick up problems the team hasn't gotten to yet. I built AI agents in ChatGPT and Copilot to cut down
              repetitive work, wrote a Python script to migrate our full test suite from TestRail to Azure DevOps, and I'm
              currently leading a Playwright POC to see if it's a better fit than our current framework.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I'm working towards Delivery Manager and Program Lead roles. The mix of technical background and delivery
              ownership feels like a natural fit — in many ways I'm already doing parts of that job.
            </p>
            <div className="space-y-5">
              <h3 className="font-semibold text-cyan-400 text-lg">Core Competencies</h3>
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">{group.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium border border-cyan-500/30 hover:border-cyan-400 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card-dark p-8">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">
                  <CountUp to={5} suffix="+" />
                </div>
                <p className="text-gray-400 mt-2">Years of Experience</p>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">
                  <CountUp to={6} />
                </div>
                <p className="text-gray-400 mt-2">Salesforce Certifications</p>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">
                  <CountUp to={2} />
                </div>
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
