import React from 'react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenCV: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCV }) => {
  return (
    <footer className="bg-[#111827] text-[#FBF9F5] pt-16 pb-12 border-t-4 border-[#A51C30] relative overflow-hidden">
      {/* Subtle background crest overlay */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-12 translate-y-12">
        <i className="fa-solid fa-staff-snake text-[280px] text-white"></i>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          
          {/* Col 1: Heraldic Seal & Academic Bio (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-full bg-[#A51C30] text-[#C5A059] flex items-center justify-center text-xl font-bold border-2 border-[#C5A059] shadow-md shrink-0">
                <i className="fa-solid fa-staff-snake"></i>
              </div>
              <div>
                <h3 className="font-cinzel text-lg font-bold tracking-wider text-white">
                  ABDUL QUDOOS KHALID
                </h3>
                <p className="font-serif-academic text-xs text-[#C5A059] italic">
                  MBBS Candidate (Year II) • Al-Aleem Medical College
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed font-sans-clean max-w-sm">
              Dedicated to clinical excellence, evidence-based healthcare advocacy, and modern visual science communication across Lahore and beyond.
            </p>

            <div className="pt-2 font-cinzel text-xs text-[#C5A059] tracking-widest uppercase">
              {personalInfo.latinMotto}
            </div>
          </div>

          {/* Col 2: Academic Sections Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-widest text-white border-b border-gray-800 pb-2">
              Curricular Sections
            </h4>
            <ul className="space-y-2 text-xs font-sans-clean text-gray-400">
              <li>
                <a href="#overview" className="hover:text-[#C5A059] transition-colors">
                  Overview & Credentials
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-[#C5A059] transition-colors">
                  Academic Matriculation & MDCAT
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-[#C5A059] transition-colors">
                  Stanford CME & NIH Research
                </a>
              </li>
              <li>
                <a href="#creative" className="hover:text-[#C5A059] transition-colors">
                  Creative Portfolio & Batch 29 Media
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-[#C5A059] transition-colors">
                  Leadership & Hospital Outreach
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#C5A059] transition-colors">
                  Competencies & Languages
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Verified Channels & Direct Reach (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-widest text-white border-b border-gray-800 pb-2">
              Verified Digital Portals
            </h4>
            
            <div className="space-y-2.5 text-xs font-sans-clean">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2.5 text-gray-300 hover:text-white transition-colors"
              >
                <i className="fa-brands fa-linkedin text-base text-[#0A66C2]"></i>
                <span>linkedin.com/in/khalidabdulqudoos</span>
              </a>

              <a
                href={personalInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2.5 text-gray-300 hover:text-white transition-colors"
              >
                <i className="fa-brands fa-instagram text-base text-[#E1306C]"></i>
                <span>@abdulqudooskhalid</span>
              </a>

              <div className="flex items-center space-x-2.5 text-gray-300">
                <i className="fa-solid fa-envelope text-[#A51C30]"></i>
                <span>{personalInfo.email}</span>
              </div>

              <div className="flex items-center space-x-2.5 text-gray-300">
                <i className="fa-solid fa-phone text-[#A51C30]"></i>
                <span>{personalInfo.phone} ({personalInfo.location})</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenCV}
                className="w-full text-center py-2 text-xs font-cinzel font-bold tracking-wider uppercase rounded bg-[#A51C30] hover:bg-[#701121] text-white transition-colors shadow-xs"
              >
                <i className="fa-solid fa-file-invoice mr-1.5"></i>
                Review Official Curriculum Vitae
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-sans-clean">
          <div>
            © {new Date().getFullYear()} Abdul Qudoos Khalid. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span>Al-Aleem Medical College</span>
            <span>•</span>
            <span>University of Health Sciences Lahore</span>
            <span>•</span>
            <span>Class of 2029</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
