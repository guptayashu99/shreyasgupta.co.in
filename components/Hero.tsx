'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<Map<Element, number>>(new Map());

  useEffect(() => {
    const revealElements = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const items = heroRef.current?.querySelectorAll('[data-reveal]') || [];

      items.forEach((el, idx) => {
        if (elementsRef.current.has(el)) return;

        const rect = el.getBoundingClientRect();
        if (rect.top < vh * 0.94 && rect.bottom > -40) {
          elementsRef.current.set(el, idx);
          const delay = Math.min(idx, 6) * 75;
          (el as HTMLElement).style.setProperty('animation-delay', `${delay}ms`);
        }
      });
    };

    window.addEventListener('scroll', revealElements, { passive: true });
    revealElements();
    return () => window.removeEventListener('scroll', revealElements);
  }, []);

  return (
    <section id="home" className="overflow-x-clip" ref={heroRef}>
      <div className="container-content section-padding-hero">
        <div className="grid md:grid-cols-[1.32fr_0.88fr] gap-[clamp(36px,5vw,72px)] md:items-center">
          {/* Left column */}
          <div>
            <div data-reveal className="inline-flex items-center gap-2.5 font-mono text-xs font-medium tracking-[0.16em] uppercase text-accent mb-7">
              <span>❯</span>
              Agile Delivery · Scrum Master
            </div>

            <h1
              data-reveal
              className="font-display font-black text-h1-hero leading-[0.9] -tracking-wider text-text-hi mb-6"
            >
              Shreyas<br/>Gupta<span className="text-accent">.</span><span
                className="inline-block w-[0.5ch] text-accent"
                style={{ animation: 'blink 1.1s steps(1) infinite' }}
              >_</span>
            </h1>

            <p data-reveal className="text-subhead leading-1.5 text-text-soft max-w-[33ch] mb-7 font-medium">
              I run delivery for a Salesforce GTM team at UKG — close enough to the code to keep engineering and delivery honest.
            </p>

            {/* Spec block */}
            <div data-reveal className="mb-7.5 max-w-[42ch]">
              <div className="font-mono text-[11px] tracking-wider text-text-faint mb-2.5">// profile.cfg</div>
              <div className="grid grid-cols-[auto_1fr] gap-[9px_20px] border-y border-[#20232A] py-4 font-mono text-xs">
                <span className="text-text-faint tracking-[0.08em]">ROLE</span>
                <span className="text-[#C2C5CC]">Scrum Master / Delivery Ownership</span>
                <span className="text-text-faint tracking-[0.08em]">STACK</span>
                <span className="text-[#C2C5CC]">Salesforce GTM · Apex · Automation</span>
                <span className="text-text-faint tracking-[0.08em]">BASE</span>
                <span className="text-[#C2C5CC]">Delhi, IN · Hybrid</span>
                <span className="text-text-faint tracking-[0.08em]">STATUS</span>
                <span className="text-text inline-flex items-center gap-2">
                  <span
                    className="w-[7px] h-[7px] rounded-full bg-status-online"
                    style={{
                      boxShadow: '0 0 8px rgba(63, 185, 80, 0.7)',
                      animation: 'blink 1.6s steps(1) infinite',
                    }}
                  />
                  Open to Delivery / Program roles
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div data-reveal className="flex flex-wrap gap-3 mb-8.5">
              <a href="https://shreyasgupta.co.in/resume-print" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Download Resume
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
              </a>
              <a href="#experience" className="btn-secondary">
                View my work
              </a>
            </div>

            {/* Contact info */}
            <div data-reveal className="flex flex-wrap gap-x-6.5 gap-y-2 font-mono text-xs text-text-dim">
              <a href="mailto:work@shreyasgupta.co.in" className="transition-colors duration-200 hover:text-accent">
                work@shreyasgupta.co.in
              </a>
              <span className="text-[#2E323B]">/</span>
              <span>Delhi, India</span>
              <span className="text-[#2E323B]">/</span>
              <a href="https://www.linkedin.com/in/shreyasgupta99/" target="_blank" rel="noopener" className="transition-colors duration-200 hover:text-accent">
                LinkedIn ↗
              </a>
              <span className="text-[#2E323B]">/</span>
              <a href="https://www.salesforce.com/trailblazer/shreyasgupta" target="_blank" rel="noopener" className="transition-colors duration-200 hover:text-accent">
                Trailblazer ↗
              </a>
            </div>
          </div>

          {/* Right column - Photo with glow */}
          <div data-reveal className="flex justify-center">
            <div className="relative">
              {/* Floating glow block */}
              <div
                className="absolute rounded-lg bg-accent"
                style={{
                  inset: '18px -18px -18px 18px',
                  animation: 'floatBlock 7s ease-in-out infinite, glow 5s ease-in-out infinite',
                }}
              />
              {/* Photo frame */}
              <div className="relative w-[clamp(260px,30vw,344px)] aspect-[4/5] rounded-lg overflow-hidden bg-bg-band border border-border-strong">
                <Image
                  src="/profile.webp"
                  alt="Shreyas Gupta"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Label tag */}
              <div className="absolute -bottom-3.5 -left-3.5 bg-bg-band border border-border-strong rounded px-3 py-2 font-mono text-[11px] font-semibold tracking-wider text-text shadow-lg shadow-black/40">
                FIG_01 · UKG/GTM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
