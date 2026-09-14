import React from 'react';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white border-b border-[#A51C30]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-cinzel font-bold tracking-widest text-[#A51C30] uppercase mb-2">
            <span className="w-6 h-px bg-[#A51C30]"></span>
            <span>Multidisciplinary Expertise</span>
            <span className="w-6 h-px bg-[#A51C30]"></span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Competencies & Academic Disciplines
          </h2>
          <p className="font-serif-academic text-lg text-[#475569] italic mt-2">
            An intersection of clinical rigor, biostatistical acumen, modern technology, and media production literacy.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((col, index) => (
            <div
              key={index}
              className="bg-[#FBF9F5] rounded-xl border border-gray-200 hover:border-[#A51C30]/40 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-white border border-[#A51C30]/20 flex items-center justify-center text-[#A51C30] text-xl mb-4 shadow-xs">
                  <i className={col.iconClass}></i>
                </div>

                <h3 className="font-cinzel text-base font-bold text-[#111827] mb-3">
                  {col.category}
                </h3>

                <ul className="space-y-2">
                  {col.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="text-xs text-[#334155] flex items-center space-x-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A51C30]"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 mt-6 border-t border-gray-200 text-[11px] text-[#64748B] flex items-center justify-between">
                <span>Pillar {index + 1} of 4</span>
                <span className="font-cinzel text-[#A51C30] font-semibold">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Languages & Digital Literacy Bar */}
        <div className="mt-10 p-6 rounded-xl bg-[#FAF0F2] border border-[#A51C30]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <i className="fa-solid fa-language text-2xl text-[#A51C30]"></i>
            <div>
              <h4 className="font-cinzel text-sm font-bold text-[#111827]">
                Linguistic Fluency
              </h4>
              <p className="text-xs text-[#64748B]">
                Urdu (Native / Mother Tongue) • English (Fluent Academic / Professional) • Punjabi (Native)
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xs px-2.5 py-1 rounded bg-white font-medium text-[#111827] border border-gray-200">
              Urdu
            </span>
            <span className="text-xs px-2.5 py-1 rounded bg-white font-medium text-[#111827] border border-gray-200">
              English
            </span>
            <span className="text-xs px-2.5 py-1 rounded bg-white font-medium text-[#111827] border border-gray-200">
              Punjabi
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
