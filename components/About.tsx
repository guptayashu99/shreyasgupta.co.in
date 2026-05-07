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
        'Agile Delivery & Execution',
        'Scrum Master',
        'Release Planning & Delivery Accountability',
        'Sprint Planning & Backlog Grooming',
        'Cross-Team Coordination & Stakeholder Alignment',
        'Requirement Understanding & Validation',
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
      label: 'Quality & Automation',
      skills: [
        'Test Automation Strategy & Framework Design',
        'Regression & Release Validation',
        'Quality Risk Identification',
      ],
    },
    {
      label: 'Tools & AI',
      skills: [
        'JIRA & Azure DevOps',
        'Generative AI & Agentic Systems',
        'Automation Tools (Provar, VS Code)',
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
              I'm an Agile Delivery professional and Scrum Master with 5 years of experience across Salesforce and GTM systems,
              focused on driving reliable and scalable execution for customer-facing teams.
            </p>
            <p className="text-lg text-gray-300 mb-5 leading-relaxed">
              At UKG, I drive Salesforce-led GTM initiatives for Sales Enablement and Opportunity Management.
              I work closely with Product, Engineering, and business stakeholders to plan delivery, manage backlogs, and keep releases predictable.
              When requirements are unclear, I help shape them into clear, outcome-driven user stories that teams can execute with confidence.
            </p>
            <p className="text-lg text-gray-300 mb-5 leading-relaxed">
              I operate at the intersection of planning and execution, managing dependencies, identifying risks early,
              and coordinating across teams to ensure customer-facing commitments are consistently met.
            </p>
            <p className="text-lg text-gray-300 mb-5 leading-relaxed">
              I also use automation as part of the delivery strategy to improve release confidence, reduce execution risk,
              and enable faster, stable deployments.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I'm building towards delivery and program management roles where I can own end-to-end execution and scale Salesforce GTM systems effectively.
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
