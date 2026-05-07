'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="section-padding bg-gradient-to-b from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Shreyas
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent"> Gupta</span>
            </h1>
            <p className="text-2xl text-cyan-400 mb-4 font-semibold">
              Agile Delivery Professional | Scrum Master
            </p>
            <p className="text-xl text-gray-300 mb-6">
              Salesforce GTM Systems | Driving Cross-Functional Execution & Automation
            </p>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              With 5 years of experience in Agile delivery and Salesforce GTM systems,
              I focus on driving reliable, scalable execution for customer-facing teams.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6 justify-center md:justify-start text-sm text-gray-400">
              <a href="mailto:work@shreyasgupta.co.in" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                work@shreyasgupta.co.in
              </a>
              <a href="tel:+919560483058" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l1.06-1.06a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +91 95604 83058
              </a>
              <span className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                Delhi, India
              </span>
            </div>
            <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
              <a
                href="/resume.pdf"
                download="Shreyas_Gupta_Resume.pdf"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-[#0a0e27] font-semibold transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
                Download Resume
              </a>
              <a
                href="#experience"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-cyan-500/50 hover:border-cyan-400 text-cyan-400 font-semibold transition-colors"
              >
                View My Work
              </a>
            </div>
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/shreyasgupta99/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0077B5] hover:bg-[#005f8e] text-white font-medium transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://www.salesforce.com/trailblazer/shreyasgupta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00A1E0] hover:bg-[#0081b3] text-white font-medium transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15zm0 2.5a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                </svg>
                Trailblazer
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-80 h-96 rounded-2xl overflow-hidden border-2 border-cyan-500 shadow-2xl shadow-cyan-500/20">
              <Image
                src="/profile.jpg"
                alt="Shreyas Gupta"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
