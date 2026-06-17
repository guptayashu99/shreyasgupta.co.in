'use client';

import { useState, useEffect, useRef } from 'react';
import { skillGroups } from '@/lib/data';

export default function About() {
  const [counts, setCounts] = useState({ years: 0, sf: 0, scrum: 0 });
  const countRef = useRef<HTMLDivElement>(null);
  const countedRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (countedRef.current || !countRef.current) return;

      const rect = countRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        countedRef.current = true;
        const duration = 1400;
        const start = performance.now();

        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

          setCounts({
            years: Math.floor(eased * 5),
            sf: Math.floor(eased * 6),
            scrum: Math.floor(eased * 2),
          });

          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="bg-bg-band border-t border-border-subtle">
      <div className="container-content section-padding">
        {/* Section label */}
        <div data-reveal className="flex items-center gap-3.5 mb-5.5">
          <span className="font-mono text-xs font-semibold tracking-widest text-accent">[ 01 ]</span>
          <span className="font-mono text-xs font-medium tracking-[0.18em] uppercase text-text">About</span>
          <span className="flex-1 h-px bg-border"></span>
          <span className="font-mono text-[11px] tracking-wider text-text-faint">01_06</span>
        </div>

        {/* Heading */}
        <h2 data-reveal className="font-display font-black text-h2-section leading-tight -tracking-wider max-w-[18ch] mb-[clamp(40px,5vw,64px)] text-text-hi">
          Technical enough to keep delivery <span className="text-accent">honest.</span>
        </h2>

        {/* Content grid */}
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-[clamp(36px,5vw,68px)] items-start">
          {/* Left: Body paragraphs */}
          <div>
            <p data-reveal className="text-body leading-[1.62] text-text-body mb-5.5">
              I&apos;m a Scrum Master and Agile delivery professional with five years in Salesforce GTM systems — and an unusually technical background for the role. I write Apex, work through data-model decisions with developers, and get into solutioning early rather than relaying stories at sprint start.
            </p>
            <p data-reveal className="text-body leading-[1.62] text-text-body mb-5.5">
              At UKG I run delivery for the GTM team end to end. When requirements are fuzzy, I&apos;m the one sitting with engineering to figure out what&apos;s feasible before we commit — which saves a lot of mid-sprint surprises. I also own the team&apos;s automation approach, carried over from my time as its Automation Architect.
            </p>
            <p data-reveal className="text-body leading-[1.62] text-text-body">
              I pick up the problems no one&apos;s gotten to yet: AI agents to cut repetitive work, a Python migration of our test suite to Azure DevOps, a Playwright POC in flight. I&apos;m heading toward Delivery Manager and Program Lead — in many ways already doing the job.
            </p>
          </div>

          {/* Right: Stats panel */}
          <div data-reveal ref={countRef} className="bg-surface border border-border rounded-xl p-[clamp(28px,3vw,38px)]">
            <div className="flex flex-col gap-6.5">
              <div>
                <div className="font-mono text-[46px] font-semibold -tracking-wider text-text-hi">{counts.years}+</div>
                <div className="font-mono text-[11.5px] tracking-widest uppercase text-text-faint mt-2">Years in GTM delivery</div>
              </div>
              <div className="h-px bg-border"></div>
              <div>
                <div className="font-mono text-[46px] font-semibold -tracking-wider text-accent-lt">{counts.sf}</div>
                <div className="font-mono text-[11.5px] tracking-widest uppercase text-text-faint mt-2">Salesforce certifications</div>
              </div>
              <div className="h-px bg-border"></div>
              <div>
                <div className="font-mono text-[46px] font-semibold -tracking-wider text-text-hi">{counts.scrum}</div>
                <div className="font-mono text-[11.5px] tracking-widest uppercase text-text-faint mt-2">Scrum certifications</div>
              </div>
              <div className="h-px bg-border"></div>
              <div>
                <div className="font-display text-[22px] font-bold text-text-hi">Delhi, India</div>
                <div className="font-mono text-[11.5px] tracking-widest uppercase text-text-faint mt-1.5">Based in · Hybrid</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core competencies */}
        <div className="mt-[clamp(48px,6vw,76px)]">
          <h3 data-reveal className="font-mono text-xs font-semibold tracking-[0.14em] uppercase text-text-dim mb-6.5">Core competencies</h3>
          <div className="grid auto-fit md:grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-7">
            {skillGroups.map((group) => (
              <div key={group.label} data-reveal>
                <p className="font-mono text-[11px] font-semibold tracking-wider uppercase text-accent mb-3.5">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-[7px]">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium text-[#C2C5CC] bg-surface-chip border border-[#262A32] px-3 py-1.5 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
