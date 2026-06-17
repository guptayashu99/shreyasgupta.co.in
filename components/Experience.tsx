'use client';

import Image from 'next/image';
import { experiences } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="bg-bg">
      <div className="container-content section-padding">
        {/* Section label */}
        <div data-reveal className="flex items-center gap-3.5 mb-5.5">
          <span className="font-mono text-xs font-semibold tracking-widest text-accent">[ 02 ]</span>
          <span className="font-mono text-xs font-medium tracking-[0.18em] uppercase text-text">Experience</span>
          <span className="flex-1 h-px bg-border"></span>
          <span className="font-mono text-[11px] tracking-wider text-text-faint">02_06</span>
        </div>

        {/* Heading */}
        <h2 data-reveal className="font-display font-black text-h2-section leading-tight -tracking-wider mb-[clamp(44px,5vw,68px)] text-text-hi">
          Five years, one through-line<span className="text-accent">.</span>
        </h2>

        {/* Experience list */}
        <div className="flex flex-col gap-4.5">
          {experiences.map((exp, idx) => (
            <div key={exp.id} data-reveal className="grid md:grid-cols-[188px_1fr] gap-2">
              {/* Timeline rail */}
              <div className="relative pt-7.5 pl-7">
                {/* Connector line */}
                {exp.current === false && idx !== experiences.length - 1 && (
                  <span
                    className="absolute left-[3.5px] top-8.5 w-0.5 bg-[#2E323B]"
                    style={{ bottom: '-52px' }}
                  />
                )}
                {/* Timeline dot */}
                <span
                  className="absolute left-0 top-7.5 w-2.25 h-2.25 rounded-full"
                  style={{
                    backgroundColor: exp.current ? '#E2623C' : '#4A4E57',
                    boxShadow: exp.current ? '0 0 0 4px rgba(226,99,60,0.20)' : '0 0 0 4px rgba(255,255,255,0.07)',
                  }}
                />
                {/* Now badge */}
                {exp.current && (
                  <span className="inline-block font-mono text-[10px] font-semibold tracking-widest uppercase text-accent border border-accent-border rounded-full px-2 py-0.5 mb-2">
                    Now
                  </span>
                )}
                {/* Period */}
                <p className="font-mono text-xs font-semibold text-[#C2C5CC] leading-[1.4]">{exp.period}</p>
                <p className="font-mono text-[11px] text-text-faint mt-0.75">{exp.duration}</p>
              </div>

              {/* Card */}
              <div className="card group">
                <div className="flex items-center gap-4 mb-4">
                  {/* Company logo */}
                  <div className="flex-shrink-0 w-13 h-13 rounded-2xl bg-logo-box border border-border-strong flex items-center justify-center p-2.25">
                    <Image
                      src={`/company-logos/${exp.logoFile}`}
                      alt={`${exp.company} logo`}
                      width={52}
                      height={52}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Title and company */}
                  <div>
                    <h3 className="font-display text-[clamp(19px,2vw,23px)] font-bold -tracking-wider leading-[1.15] text-text-hi">
                      {exp.title}
                    </h3>
                    <p className="text-base font-semibold text-accent mt-0.5">
                      {exp.company} <span className="text-text-dim font-normal">· {exp.location}</span>
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[15.5px] leading-[1.55] text-text-body mb-4.5">
                  {exp.description}
                </p>

                {/* Highlights grid */}
                <div className="grid md:grid-cols-2 gap-[10px_22px]">
                  {exp.highlights.map((highlight, i) => (
                    <div key={i} className="flex gap-2.25 items-start">
                      <span className="flex-shrink-0 mt-2.25 w-1.25 h-1.25 rounded-full bg-accent"></span>
                      <span className="text-xs leading-1.5 text-text-muted">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
