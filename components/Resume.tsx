export default function Resume() {
  return (
    <section id="resume" className="bg-bg">
      <div className="container-content section-padding-resume text-center">
        {/* Eyebrow */}
        <p data-reveal className="font-mono text-xs font-medium tracking-[0.16em] uppercase text-accent mb-6">
          [ 06 ] · Resume / CV
        </p>

        {/* Heading */}
        <h2 data-reveal className="font-display font-black text-h2-resume leading-tight -tracking-wider max-w-[18ch] mx-auto mb-7 text-text-hi">
          The full story, on one page.
        </h2>

        {/* Subheading */}
        <p data-reveal className="text-[clamp(16px,1.7vw,18px)] text-text-soft max-w-[46ch] mx-auto leading-[1.55] mb-9.5">
          The latest version, always current. Open it and use your browser&apos;s Save as PDF to download.
        </p>

        {/* Buttons */}
        <div data-reveal className="flex flex-wrap gap-3.25 justify-center">
          <a
            href="https://shreyasgupta.co.in/resume-print"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View Resume (PDF)
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
          </a>
          <a href="mailto:work@shreyasgupta.co.in" className="btn-secondary">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
