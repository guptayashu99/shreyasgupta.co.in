'use client';

export default function Header() {
  return (
    <header className="sticky top-0 bg-[#0a0e27] border-b border-[#2a3050] shadow-lg z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">
              SG
            </a>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">About</a>
            <a href="#experience" className="text-gray-300 hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#certifications" className="text-gray-300 hover:text-cyan-400 transition-colors">Certifications</a>
            <a href="#education" className="text-gray-300 hover:text-cyan-400 transition-colors">Education</a>
            <a href="#recommendations" className="text-gray-300 hover:text-cyan-400 transition-colors">Recommendations</a>
            <a href="#resume" className="text-gray-300 hover:text-cyan-400 transition-colors">Resume</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
