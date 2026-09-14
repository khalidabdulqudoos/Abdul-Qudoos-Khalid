import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const [activeLens, setActiveLens] = useState<'clinical' | 'creative'>('clinical');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="overview" className="relative py-16 md:py-24 overflow-hidden border-b border-[#A51C30]/15">
      {/* Background Academic Watermark & Grid */}
      <div className="absolute inset-0 academic-ruled opacity-60 pointer-events-none"></div>

      {/* Decorative Collegiate Latin Ribbon Accent */}
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#A51C30]/5 blur-3xl pointer-events-none"></div>
      <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-[#C5A059]/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Collegiate Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Academic Credentials & Title */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Academic Classification Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-[#A51C30]/25 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#A51C30] animate-pulse"></span>
              <span className="font-cinzel text-xs font-semibold tracking-wider text-[#A51C30] uppercase">
                Faculty of Medicine • 2nd Year Candidate
              </span>
              <span className="text-[#C5A059]">•</span>
              <span className="text-xs text-[#475569] font-medium">Class of 2029</span>
            </div>

            {/* Name & Academic Honorifics */}
            <div>
              <div className="flex flex-wrap items-baseline gap-x-4 mb-2">
                <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-tight">
                  ABDUL QUDOOS <span className="text-[#A51C30]">KHALID</span>
                </h1>
              </div>

              {/* Subtitles: Medical, Research & Creative */}
              <p className="font-serif-academic text-xl sm:text-2xl text-[#475569] italic">
                Physician-Scientist in Training, Visual Media Director & Health Advocate
              </p>
              
              <div className="mt-2 flex items-center space-x-3 text-xs text-[#64748B] font-medium">
                <span>
                  <i className="fa-solid fa-building-columns text-[#A51C30] mr-1.5"></i>
                  {personalInfo.college}
                </span>
                <span>•</span>
                <span>
                  <i className="fa-solid fa-location-dot text-[#A51C30] mr-1"></i>
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Interactive Dual Perspective Toggle */}
            <div className="p-1.5 bg-[#EAE6DF]/70 rounded-lg inline-flex items-center space-x-1 border border-[#D5CFC5]">
              <button
                onClick={() => setActiveLens('clinical')}
                className={`px-4 py-2 rounded-md text-xs font-cinzel font-semibold tracking-wider uppercase transition-all flex items-center space-x-2 ${
                  activeLens === 'clinical'
                    ? 'bg-[#A51C30] text-white shadow-sm'
                    : 'text-[#475569] hover:text-[#111827]'
                }`}
              >
                <i className="fa-solid fa-heart-pulse"></i>
                <span>Clinical & Academic</span>
              </button>
              <button
                onClick={() => setActiveLens('creative')}
                className={`px-4 py-2 rounded-md text-xs font-cinzel font-semibold tracking-wider uppercase transition-all flex items-center space-x-2 ${
                  activeLens === 'creative'
                    ? 'bg-[#111827] text-[#FBF9F5] shadow-sm'
                    : 'text-[#475569] hover:text-[#111827]'
                }`}
              >
                <i className="fa-solid fa-camera-retro"></i>
                <span>Media & Visual Arts</span>
              </button>
            </div>

            {/* Dynamic Bio Description based on Active Lens */}
            <div className="bg-white/90 p-4 sm:p-5 rounded-xl border border-[#A51C30]/15 shadow-sm space-y-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-1 bg-[#A51C30]"></div>
              
              <div>
                <h3 className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#A51C30]">
                  {activeLens === 'clinical' 
                    ? 'Pre-Clinical Foundations & Medical Scholarship'
                    : 'Visual Storytelling & Media Directorate'}
                </h3>
              </div>

              {/* Verified Badges Row */}
              <div className="flex flex-wrap gap-2 text-[11px] font-medium">
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#FAF0F2] text-[#A51C30] border border-[#A51C30]/20">
                  <i className="fa-solid fa-certificate mr-1 text-[10px]"></i> Stanford CME Certified
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                  <i className="fa-solid fa-microscope mr-1 text-[10px]"></i> NIH IPPCR Clinical Research
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <i className="fa-solid fa-earth-americas mr-1 text-[10px]"></i> WHO NCD Protocols
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200">
                  <i className="fa-solid fa-trophy mr-1 text-[10px]"></i> PGC Student of the Year
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={onOpenCV}
                className="px-5 py-3 rounded-lg bg-[#A51C30] text-white font-cinzel text-xs font-bold uppercase tracking-wider hover:bg-[#701121] shadow-md hover:shadow-lg transition-all flex items-center space-x-2"
              >
                <i className="fa-solid fa-file-invoice"></i>
                <span>Curriculum Vitae</span>
              </button>

              <a
                href="#creative"
                className="px-5 py-3 rounded-lg bg-white border border-[#C5A059] text-[#111827] font-cinzel text-xs font-bold uppercase tracking-wider hover:bg-[#FAF9F5] shadow-xs transition-all flex items-center space-x-2"
              >
                <i className="fa-solid fa-camera text-[#A51C30]"></i>
                <span>View Creative Works</span>
              </a>

              <button
                onClick={copyEmail}
                className="px-4 py-3 rounded-lg bg-white border border-gray-300 text-[#475569] hover:text-[#111827] text-xs font-medium transition-all flex items-center space-x-1.5"
                title="Copy Email to Clipboard"
              >
                <i className={`fa-solid ${copiedEmail ? 'fa-check text-emerald-600' : 'fa-copy'}`}></i>
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Direct Social Profile Quick Access */}
            <div className="pt-1 flex items-center space-x-5 text-sm text-[#64748B]">
              <span className="text-xs font-cinzel font-semibold uppercase tracking-wider text-[#94A3B8]">
                Verified Channels:
              </span>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-[#0A66C2] hover:underline font-medium text-xs"
              >
                <i className="fa-brands fa-linkedin text-base"></i>
                <span>linkedin.com/in/khalidabdulqudoos</span>
              </a>
              <a
                href={personalInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-[#E1306C] hover:underline font-medium text-xs"
              >
                <i className="fa-brands fa-instagram text-base"></i>
                <span>@abdulqudooskhalid</span>
              </a>
            </div>
          </div>

          {/* Right Column: Academic Seal & Heraldic Portrait Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              
              {/* Outer Decorative Architectural Border */}
              <div className="absolute -inset-2 rounded-2xl border-2 border-[#C5A059]/40 transform -rotate-1 pointer-events-none"></div>
              
              <div className="relative bg-white rounded-2xl shadow-xl border border-[#A51C30]/20 p-6 overflow-hidden">
                
                {/* Collegiate Heraldic Seal Watermark at top */}
                <div className="text-center pb-4 border-b border-[#E2E8F0]">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-[#A51C30] text-[#C5A059] flex items-center justify-center border-2 border-[#C5A059] shadow-md">
                    <i className="fa-solid fa-staff-snake text-2xl text-white"></i>
                  </div>
                  <h4 className="font-cinzel text-xs font-bold tracking-widest text-[#A51C30] uppercase">
                    Al-Aleem Medical College
                  </h4>
                  <p className="text-[10px] font-serif-academic italic text-[#64748B]">
                    Affiliated with University of Health Sciences Lahore
                  </p>
                </div>

                {/* Portrait Representation Card */}
                <div className="py-5 space-y-4">
                  <div className="p-4 rounded-xl bg-[#FBF9F5] border border-[#E5E0D8] space-y-2.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-cinzel font-bold text-[#111827]">MBBS Candidacy</span>
                      <span className="font-semibold text-[#A51C30] px-2 py-0.5 rounded bg-[#FAF0F2]">Year II</span>
                    </div>
                    <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#A51C30] h-full rounded-full w-2/5"></div>
                    </div>
                    <p className="text-[11px] text-[#64748B]">
                      Pre-clinical sciences completed: Anatomy, Physiology, Biochemistry. Preparing for Pharmacology & Pathology modules.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-left">
                    <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                      <div className="text-[10px] uppercase font-cinzel text-[#64748B] font-bold">MDCAT UHS</div>
                      <div className="text-lg font-cinzel font-extrabold text-[#A51C30]">186 / 200</div>
                      <div className="text-[10px] text-gray-500">93% Provincial Merit</div>
                    </div>

                    <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
                      <div className="text-[10px] uppercase font-cinzel text-[#64748B] font-bold">Catchafire</div>
                      <div className="text-lg font-cinzel font-extrabold text-[#111827]">$1,544</div>
                      <div className="text-[10px] text-gray-500">Non-Profit Value Impact</div>
                    </div>
                  </div>

                  {/* Society Leadership Snapshot */}
                  <div className="text-xs space-y-2 pt-1">
                    <div className="flex items-center space-x-2 text-[#334155]">
                      <i className="fa-solid fa-camera text-[#C5A059] w-4"></i>
                      <span><strong>Media Head</strong>, Sports Society (2025)</span>
                    </div>
                    <div className="flex items-center space-x-2 text-[#334155]">
                      <i className="fa-solid fa-brain text-[#A51C30] w-4"></i>
                      <span><strong>Photography Head</strong>, SAMHS (2026)</span>
                    </div>
                    <div className="flex items-center space-x-2 text-[#334155]">
                      <i className="fa-solid fa-bullhorn text-emerald-700 w-4"></i>
                      <span><strong>Speaker of the Month</strong>, PremedPK (Feb 2025)</span>
                    </div>
                  </div>
                </div>

                {/* Footer Stamp */}
                <div className="pt-3 border-t border-[#E2E8F0] flex justify-between items-center text-[10px] text-[#64748B]">
                  <span>Status: Active Candidate</span>
                  <span className="font-cinzel text-[#A51C30] font-semibold">VERITAS IN MEDICINA</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Collegiate Stat Ribbon */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {personalInfo.stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl border border-[#A51C30]/15 shadow-xs hover:border-[#A51C30]/35 transition-all text-center group"
            >
              <div className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#A51C30] group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="font-serif-academic text-sm sm:text-base font-semibold text-[#111827] mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-[#64748B] mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
