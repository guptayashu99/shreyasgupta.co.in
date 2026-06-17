'use client';

import { education } from '@/lib/data';

export default function Education() {
  return (
    <section id="education" className="bg-bg">
      <div className="container-content section-padding">
        {/* Section label */}
        <div data-reveal className="flex items-center gap-3.5 mb-5.5">
          <span className="font-mono text-xs font-semibold tracking-widest text-accent">[ 04 ]</span>
          <span className="font-mono text-xs font-medium tracking-[0.18em] uppercase text-text">Education</span>
          <span className="flex-1 h-px bg-border"></span>
          <span className="font-mono text-[11px] tracking-wider text-text-faint">04_06</span>
        </div>

        {/* Heading */}
        <h2 data-reveal className="font-display font-black text-h2-section leading-tight -tracking-wider mb-[clamp(44px,5vw,60px)] text-text-hi">
          Where it started<span className="text-accent">.</span>
        </h2>

        {/* Education rows */}
        <div className="flex flex-col divide-y divide-border-subtle">
          {education.map((item, idx) => (
            <div
              key={item.id}
              data-reveal
              className="grid md:grid-cols-[140px_1fr_auto] gap-5 items-baseline py-6 px-1"
            >
              {/* Period */}
              <p className="font-mono text-xs font-semibold text-accent">
                {item.period}
              </p>
              {/* Degree and institution */}
              <div>
                <h3 className="text-[clamp(17px,1.8vw,20px)] font-bold -tracking-wider leading-[1.3] text-text">
                  {item.degree}
                </h3>
                <p className="text-sm text-text-dim mt-1">
                  {item.institution}
                </p>
              </div>
              {/* Grade */}
              <p className="font-mono text-xs font-semibold text-[#C2C5CC] whitespace-nowrap">
                {item.grade}
              </p>
            </div>
          ))}
          <div className="border-t border-border-subtle"></div>
        </div>
      </div>
    </section>
  );
}
