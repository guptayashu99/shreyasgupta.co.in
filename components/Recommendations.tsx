'use client';

import { recommendations } from '@/lib/data';

export default function Recommendations() {
  return (
    <section id="recommendations" className="bg-bg-band border-t border-border-subtle">
      <div className="container-content section-padding">
        {/* Section label */}
        <div data-reveal className="flex items-center gap-3.5 mb-5.5">
          <span className="font-mono text-xs font-semibold tracking-widest text-accent-lt">[ 05 ]</span>
          <span className="font-mono text-xs font-medium tracking-[0.18em] uppercase text-text whitespace-nowrap">In their words</span>
          <span className="flex-1 h-px bg-border"></span>
          <span className="font-mono text-[11px] tracking-wider text-text-faint">05_06</span>
        </div>

        {/* Heading */}
        <h2 data-reveal className="font-display font-black text-h2-section leading-tight -tracking-wider mb-[clamp(44px,5vw,68px)] text-text-hi">
          What leaders I&apos;ve worked with say<span className="text-accent-lt">.</span>
        </h2>

        {/* Recommendations */}
        <div className="flex flex-col gap-4.5">
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              data-reveal
              className="bg-surface border border-border rounded-[14px] p-[clamp(28px,3.4vw,46px)]"
            >
              <div className="grid md:grid-cols-[260px_1fr] gap-[clamp(28px,4vw,60px)]">
                {/* Left: Author info */}
                <div>
                  <div className="flex items-center gap-3.5 mb-4.5">
                    <div className="flex-shrink-0 w-[46px] h-[46px] rounded-full bg-accent flex items-center justify-center font-display font-bold text-2xl text-bg">
                      {rec.initial}
                    </div>
                    <p className="font-display text-lg font-bold text-text-hi leading-[1.2]">
                      {rec.name}
                    </p>
                  </div>
                  <p className="text-xs text-text-dim leading-[1.5]">
                    {rec.title}
                  </p>
                  <p className="font-mono text-[11px] text-accent-lt mt-3.5 tracking-widest leading-[1.5]">
                    {rec.meta}
                  </p>
                </div>

                {/* Right: Testimonial */}
                <div>
                  <div className="font-mono text-[11px] font-semibold tracking-[0.14em] text-accent-lt mb-4.5">
                    // RECOMMENDATION
                  </div>
                  <div className="space-y-3.5">
                    {rec.paras.map((para, i) => (
                      <p
                        key={i}
                        className="text-rec-body leading-[1.7] text-text-body-2"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
