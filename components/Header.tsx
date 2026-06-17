'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#education', label: 'Education' },
    { href: '#recommendations', label: 'Praise' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const vh = window.innerHeight;
      const line = vh * 0.4;
      const ids = ['home', 'about', 'experience', 'certifications', 'education', 'recommendations'];

      let current = 'home';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= line) current = id;
      }
      if (current !== activeSection) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-border-subtle">
      <div className="max-w-[1180px] mx-auto px-gutter">
        <div className="h-[72px] flex items-center justify-between">
          {/* Logo & Wordmark */}
          <a href="#home" className="flex items-center gap-2.5">
            <svg width="30" height="30" viewBox="0 0 100 100" className="block">
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
            <span className="font-mono text-xs font-semibold tracking-wide text-text">
              <span className="text-accent">❯</span> Shreyas Gupta
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`font-mono text-xs font-medium tracking-wide transition-colors duration-200 pb-0.5 border-b-1.5 ${
                  activeSection === link.href.slice(1)
                    ? 'text-accent border-accent font-semibold'
                    : 'text-text-nav border-transparent hover:text-text'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#resume"
              className="font-mono text-xs font-semibold text-bg bg-accent px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-accent-lt whitespace-nowrap"
            >
              Resume ↗
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-text hover:text-accent transition-colors p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h18M4 13h18M4 19h18"/>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border-subtle bg-bg px-gutter py-4.5 flex flex-col gap-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-mono text-sm font-medium tracking-wide transition-colors duration-200 ${
                  activeSection === link.href.slice(1)
                    ? 'text-accent font-semibold'
                    : 'text-text hover:text-accent'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
