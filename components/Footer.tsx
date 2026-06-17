export default function Footer() {
  return (
    <footer className="bg-bg-footer border-t border-border-subtle text-text-muted">
      <div className="container-content py-[clamp(56px,7vw,84px)] pb-[clamp(32px,4vw,44px)]">
        {/* Main footer grid */}
        <div className="grid md:grid-cols-[1.6fr_1fr_1fr] gap-10 mb-[clamp(40px,5vw,60px)]">
          {/* Brand column */}
          <div>
            <a href="#home" className="inline-flex items-center gap-2.75 mb-4.5">
              <svg width="32" height="32" viewBox="0 0 100 100" className="block">
                <polygon points="50,4 87,26 87,74 50,96 13,74 13,26" fill="#E2623C"/>
                <text
                  x="50"
                  y="50"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontFamily="'Hanken Grotesk', sans-serif"
                  fontWeight="800"
                  fontSize="34"
                  letterSpacing="-1.5"
                  fill="#0B0C10"
                >
                  SG
                </text>
              </svg>
              <span className="font-display text-base font-bold text-text">Shreyas Gupta</span>
            </a>
            <p className="text-sm leading-1.6 max-w-[38ch] text-text-dim">
              Agile delivery professional and Scrum Master for Salesforce GTM systems — owning execution, automation, and the technical conversations in between.
            </p>
          </div>

          {/* Navigate column */}
          <div>
            <p className="font-mono text-[11px] font-semibold tracking-widest uppercase text-text-faint mb-4">Navigate</p>
            <div className="flex flex-col gap-2.75">
              <a href="#about" className="text-sm transition-colors duration-200 hover:text-text">About</a>
              <a href="#experience" className="text-sm transition-colors duration-200 hover:text-text">Experience</a>
              <a href="#certifications" className="text-sm transition-colors duration-200 hover:text-text">Certifications</a>
              <a href="#recommendations" className="text-sm transition-colors duration-200 hover:text-text">Recommendations</a>
            </div>
          </div>

          {/* Connect column */}
          <div>
            <p className="font-mono text-[11px] font-semibold tracking-widest uppercase text-text-faint mb-4">Connect</p>
            <div className="flex flex-col gap-2.75">
              <a href="mailto:work@shreyasgupta.co.in" className="text-sm transition-colors duration-200 hover:text-accent-lt">
                work@shreyasgupta.co.in
              </a>
              <a href="tel:+919560483058" className="text-sm transition-colors duration-200 hover:text-accent-lt">
                +91 95604 83058
              </a>
              <a href="https://www.linkedin.com/in/shreyasgupta99/" target="_blank" rel="noopener" className="text-sm transition-colors duration-200 hover:text-accent-lt">
                LinkedIn ↗
              </a>
              <a href="https://www.salesforce.com/trailblazer/shreyasgupta" target="_blank" rel="noopener" className="text-sm transition-colors duration-200 hover:text-accent-lt">
                Trailblazer ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border-subtle pt-6.5 flex flex-wrap gap-3 justify-between items-center">
          <p className="font-mono text-[11.5px] text-text-faint">© 2026 Shreyas Gupta — Delhi, India</p>
          <p className="font-mono text-[11.5px] text-text-faint">shreyasgupta.co.in</p>
        </div>
      </div>
    </footer>
  );
}
