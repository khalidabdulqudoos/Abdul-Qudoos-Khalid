import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

interface HeaderProps {
  onOpenCV: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCV }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Creative & Media', href: '#creative' },
    { label: 'Leadership & Impact', href: '#leadership' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#A51C30]/15 transition-all duration-300">
      {/* Top Academic Ribbon */}
      <div className="bg-[#A51C30] text-[#FBF9F5] text-xs py-1.5 px-4 sm:px-8 flex justify-between items-center tracking-widest border-b border-[#C5A059]/40">
        <div className="flex items-center space-x-2 font-cinzel font-medium text-[11px] sm:text-xs">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C5A059]"></span>
          <span>{personalInfo.latinMotto}</span>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-[11px] text-[#FBF9F5]/90">
          <span>{personalInfo.location}</span>
          <span className="text-[#C5A059]">•</span>
          <span>{personalInfo.phone}</span>
          <span className="text-[#C5A059]">•</span>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C5A059] transition-colors"
            title="LinkedIn Profile"
          >
            <i className="fa-brands fa-linkedin mr-1"></i> LinkedIn
          </a>
          <a
            href={personalInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C5A059] transition-colors"
            title="Instagram Profile"
          >
            <i className="fa-brands fa-instagram mr-1"></i> Instagram
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand / Crest & Name */}
          <a href="#overview" className="flex items-center space-x-3.5 group">
            {/* Heraldic Shield Crest */}
            <div className="relative w-12 h-12 flex-shrink-0 bg-[#A51C30] text-[#FBF9F5] rounded-t-lg rounded-b-2xl flex items-center justify-center shadow-md border-2 border-[#C5A059] group-hover:scale-105 transition-transform">
              <i className="fa-solid fa-staff-snake text-lg text-[#FBF9F5]"></i>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#C5A059] flex items-center justify-center text-[8px] text-[#A51C30] font-bold">
                <i className="fa-solid fa-camera"></i>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <span className="font-cinzel text-lg sm:text-xl font-bold tracking-wider text-[#1E293B] group-hover:text-[#A51C30] transition-colors">
                  ABDUL QUDOOS KHALID
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-[#A51C30]/10 text-[#A51C30] font-medium border border-[#A51C30]/20 font-sans-clean hidden sm:inline-block">
                  MBBS II
                </span>
              </div>
              <p className="text-xs font-serif-academic italic text-[#64748B]">
                Al-Aleem Medical College • UHS Lahore • Media & Health Lead
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium font-sans-clean text-[#334155]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#A51C30] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#A51C30] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenCV}
              className="inline-flex items-center px-3.5 py-2 text-xs font-semibold tracking-wide uppercase font-cinzel rounded border border-[#A51C30] text-[#A51C30] hover:bg-[#A51C30] hover:text-[#FBF9F5] transition-all shadow-sm"
            >
              <i className="fa-solid fa-file-lines mr-1.5 text-xs"></i>
              Curriculum Vitae
            </button>
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-wide uppercase font-cinzel rounded bg-[#A51C30] text-[#FBF9F5] hover:bg-[#701121] transition-all shadow-sm border border-[#701121]"
            >
              <i className="fa-solid fa-paper-plane mr-1.5 text-xs"></i>
              Inquire
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={onOpenCV}
              className="px-2.5 py-1.5 text-xs font-cinzel font-semibold rounded border border-[#A51C30] text-[#A51C30]"
              title="View CV"
            >
              CV
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded text-[#1E293B] hover:text-[#A51C30] hover:bg-black/5 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FBF9F5] border-b border-[#A51C30]/20 px-4 pt-3 pb-5 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-3 font-sans-clean text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded text-[#1E293B] hover:bg-[#A51C30]/10 hover:text-[#A51C30] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#A51C30]/15 flex flex-col space-y-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="w-full text-center py-2 text-xs font-semibold tracking-wider uppercase font-cinzel rounded border border-[#A51C30] text-[#A51C30]"
              >
                <i className="fa-solid fa-file-lines mr-1.5"></i> Open Full Curriculum Vitae
              </button>
              <div className="flex justify-center space-x-6 pt-2 text-[#A51C30]">
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 text-lg"
                  title="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href={personalInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 text-lg"
                  title="Instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:opacity-75 text-lg"
                  title="Email"
                >
                  <i className="fa-solid fa-envelope"></i>
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="hover:opacity-75 text-lg"
                  title="Phone"
                >
                  <i className="fa-solid fa-phone"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
