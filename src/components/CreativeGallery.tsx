import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const CreativeGallery: React.FC = () => {
  const mediaInitiatives = [
    {
      role: 'Media Head',
      organization: 'Sports Society (2025)',
      institution: 'Al-Aleem Medical College',
      icon: 'fa-solid fa-camera',
      description:
        'Executive lead for collegiate sports journalism, tournament photography, athlete feature profiles, and official campus promotional media.',
      points: [
        'Curated photo and video coverage across inter-collegiate athletic galas',
        'Directed graphic announcements and digital scoreboards',
        'Archived official sports milestone records for the student body',
      ],
    },
    {
      role: 'Photography Head',
      organization: 'Student Association of Mental Health Society (SAMHS, 2026)',
      institution: 'Affiliated UHS Chapter',
      icon: 'fa-solid fa-brain',
      description:
        'Chief of visual storytelling for mental health awareness symposia, campus outreach drives, and student psychological well-being initiatives.',
      points: [
        'Documented scientific talks, student panels, and workshop sessions',
        'Crafted empathetic visual narratives for mental healthcare de-stigmatization',
        'Coordinated event media across medical campus societies',
      ],
    },
    {
      role: 'Curator & Digital Lead',
      organization: 'MBBS Batch 29 Official Visual Archive',
      institution: 'Al-Aleem Medical College',
      icon: 'fa-solid fa-film',
      description:
        'Founding archivist for MBBS Batch 29, capturing lecture hall milestones, clinical dissection and lab sessions, and academic ceremonies.',
      points: [
        'Preserved comprehensive documentary record of pre-clinical medical training',
        'Managed collegiate milestone presentations and ceremony retrospectives',
        'Applied Google Data Analytics and Prompt Engineering for media outreach',
      ],
    },
  ];

  return (
    <section id="creative" className="py-20 bg-white border-b border-[#A51C30]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-cinzel font-bold tracking-widest text-[#111827] uppercase mb-2">
            <span className="w-6 h-px bg-[#111827]"></span>
            <span>Visual Storytelling & Media Directorate</span>
            <span className="w-6 h-px bg-[#111827]"></span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Creative & Media Portfolio
          </h2>
          <p className="font-serif-academic text-lg text-[#475569] italic mt-2">
            Bridging medical scholarship with visual narrative, institutional photography leadership, and student advocacy.
          </p>
        </div>

        {/* Media Portals Cards: Personal Page + Batch 29 Instagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Card 1: Personal Photography Brand */}
          <div className="bg-[#FBF9F5] p-6 rounded-2xl border-2 border-gray-200 hover:border-[#A51C30]/40 transition-all shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-16 h-16 rounded-full bg-linear-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center text-3xl shadow-md shrink-0">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="text-center sm:text-left space-y-2 flex-1">
              <span className="text-[10px] font-cinzel font-bold uppercase tracking-widest text-[#A51C30]">
                Personal Photography Channel
              </span>
              <h3 className="font-cinzel text-xl font-bold text-[#111827]">
                @abdulqudooskhalid
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Dedicated creative channel focusing on documentary photography, portraiture, medical school life, and social narrative.
              </p>
              <div className="pt-2">
                <a
                  href={personalInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-[#A51C30] hover:bg-[#701121] text-white text-xs font-cinzel font-bold uppercase tracking-wider shadow-xs transition-colors"
                >
                  <i className="fa-brands fa-instagram mr-2"></i>
                  <span>View Instagram Portfolio</span>
                  <i className="fa-solid fa-arrow-up-right-from-square ml-2 text-[10px]"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Batch 29 Official Media Directorate */}
          <div className="bg-[#FBF9F5] p-6 rounded-2xl border-2 border-gray-200 hover:border-[#A51C30]/40 transition-all shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-16 h-16 rounded-full bg-[#A51C30] text-[#C5A059] flex items-center justify-center text-2xl shadow-md shrink-0 border border-[#C5A059]">
              <i className="fa-solid fa-camera-retro"></i>
            </div>
            <div className="text-center sm:text-left space-y-2 flex-1">
              <span className="text-[10px] font-cinzel font-bold uppercase tracking-widest text-[#A51C30]">
                Institutional Media Directorate
              </span>
              <h3 className="font-cinzel text-xl font-bold text-[#111827]">
                MBBS Batch 29 Visual Archive
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                Managing official digital communications, clinical event documentation, and academic milestone archives for Al-Aleem Medical College.
              </p>
              <div className="pt-2 flex items-center space-x-2 text-xs font-semibold text-[#475569]">
                <i className="fa-solid fa-building-columns text-[#A51C30]"></i>
                <span>Al-Aleem Medical College (Affiliated UHS)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Media Directorate Leadership Modules */}
        <div className="space-y-4">
          <div className="text-center sm:text-left">
            <h3 className="font-cinzel text-sm font-bold uppercase tracking-wider text-[#111827]">
              Media & Creative Leadership Appointments
            </h3>
            <p className="text-xs text-[#64748B]">
              Structured governance and creative roles held across collegiate student societies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediaInitiatives.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#FBF9F5] border border-gray-200 hover:border-[#A51C30]/30 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#A51C30] text-lg mb-4 shadow-xs">
                    <i className={item.icon}></i>
                  </div>
                  
                  <span className="text-[10px] font-cinzel font-bold uppercase tracking-widest text-[#A51C30]">
                    {item.role}
                  </span>
                  <h4 className="font-cinzel text-base font-bold text-[#111827] mt-0.5 mb-1">
                    {item.organization}
                  </h4>
                  <div className="text-[11px] text-[#64748B] font-medium mb-3">
                    {item.institution}
                  </div>
                  <p className="text-xs text-[#334155] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-200/80 space-y-1.5">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start text-[11px] text-[#475569]">
                      <i className="fa-solid fa-check text-emerald-600 mr-2 mt-0.5 text-[9px] shrink-0"></i>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verification & Authentic Channel Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#111827] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg border border-gray-800">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center space-x-2 text-[10px] font-cinzel font-bold text-[#C5A059] uppercase tracking-widest">
              <i className="fa-solid fa-shield-halved"></i>
              <span>Authentic Original Works</span>
            </div>
            <h4 className="font-cinzel text-lg font-bold text-white">
              View Verified Photography on Instagram
            </h4>
            <p className="text-xs text-gray-300 max-w-xl">
              Original photography, documentary shoots, and event archives are hosted and regularly updated directly on Instagram.
            </p>
          </div>

          <a
            href={personalInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-lg bg-linear-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white text-xs font-cinzel font-bold uppercase tracking-wider shadow-md hover:opacity-95 transition-all flex items-center space-x-2 shrink-0"
          >
            <i className="fa-brands fa-instagram text-base"></i>
            <span>Follow @abdulqudooskhalid</span>
            <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
          </a>
        </div>

      </div>
    </section>
  );
};
