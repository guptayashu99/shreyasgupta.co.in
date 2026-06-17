'use client';

import Image from 'next/image';
import { certifications } from '@/lib/data';

export default function Certifications() {
  return (
    <section id="certifications" className="bg-bg-band border-t border-border-subtle">
      <div className="container-content section-padding">
        {/* Section label */}
        <div data-reveal className="flex items-center gap-3.5 mb-5.5">
          <span className="font-mono text-xs font-semibold tracking-widest text-accent">[ 03 ]</span>
          <span className="font-mono text-xs font-medium tracking-[0.18em] uppercase text-text">Certifications</span>
          <span className="flex-1 h-px bg-border"></span>
          <span className="font-mono text-[11px] tracking-wider text-text-faint">03_06</span>
        </div>

        {/* Heading */}
        <h2 data-reveal className="font-display font-black text-h2-section leading-tight -tracking-wider mb-[clamp(44px,5vw,68px)] text-text-hi">
          Eight credentials, current<span className="text-accent">.</span>
        </h2>

        {/* Certifications grid */}
        <div className="grid md:grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-3.5">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              className="group flex items-center gap-4 bg-surface border border-border rounded-xl p-4.5 transition-all duration-300 hover:-translate-y-0.75 hover:border-accent hover:shadow-xl hover:shadow-black/50"
            >
              {/* Badge image */}
              {cert.badgeFile && (
                <Image
                  src={`/certification-badges/${cert.badgeFile}`}
                  alt={cert.name}
                  width={60}
                  height={60}
                  className="flex-shrink-0 w-15 h-15 object-contain"
                />
              )}
              {/* Cert info */}
              <div className="min-w-0">
                <h3 className="text-base font-bold leading-[1.25] -tracking-wider text-text">
                  {cert.name}
                </h3>
                <p className="font-mono text-[11px] text-text-faint mt-1.5">
                  {cert.issuer} · {cert.issued}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
