'use client';

import { useState, useEffect } from 'react';
import Logo from '@/components/Logo';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#education', label: 'Education' },
  { href: '#recommendations', label: 'Recommendations' },
  { href: '#resume', label: 'Resume' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const ids = navLinks.map(l => l.href.slice(1));
    const observers = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <header className="sticky top-0 bg-[#0a0e27]/95 backdrop-blur border-b border-[#2a3050] shadow-lg z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2.5">
            <Logo size={36} />
            <span className="text-lg font-bold text-white">Shreyas <span className="text-cyan-400">Gupta</span></span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-cyan-400 font-semibold'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors p-1"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0e27] border-t border-[#2a3050] px-6 py-5 flex flex-col gap-5">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-base transition-colors ${
                activeSection === link.href.slice(1)
                  ? 'text-cyan-400 font-semibold'
                  : 'text-gray-300 hover:text-cyan-400'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
