export default function Resume() {
  return (
    <section id="resume" className="section-padding bg-[#0d1235] border-t border-[#2a3050]">
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
          Resume & <span className="text-cyan-400">CV</span>
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="card-dark p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">View &amp; Download My Resume</h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Opens the latest version. Use your browser&apos;s Save as PDF to download.
            </p>
            <a
              href="https://shreyasgupta.co.in/resume-print"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 btn-primary"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>View Resume (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
