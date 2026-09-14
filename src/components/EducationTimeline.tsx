import React, { useState } from 'react';
import { educationList, awardsList } from '../data/portfolioData';

export const EducationTimeline: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>(educationList[0].id);

  return (
    <section id="education" className="py-20 bg-white border-b border-[#A51C30]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Academic Section Header with Classical Rule */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs font-cinzel font-bold tracking-widest text-[#A51C30] uppercase mb-2">
            <span className="w-6 h-px bg-[#A51C30]"></span>
            <span>Academic Pedigree & Rigor</span>
            <span className="w-6 h-px bg-[#A51C30]"></span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Education & Matriculation
          </h2>
          <p className="font-serif-academic text-lg text-[#475569] italic mt-2">
            "Ars longa, vita brevis" — Tracing a journey of continuous scholastic excellence from standardized tests to clinical medical training.
          </p>
        </div>

        {/* Two-Column Grid: Chronology List on Left, Selected Item Dossier on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Timeline List (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {educationList.map((item, index) => {
              const isSelected = selectedItem === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item.id)}
                  className={`p-6 rounded-xl border transition-all cursor-pointer relative ${
                    isSelected
                      ? 'bg-[#FAF0F2]/50 border-[#A51C30] shadow-md ring-1 ring-[#A51C30]/30'
                      : 'bg-[#FBF9F5] border-gray-200 hover:border-[#A51C30]/40 hover:bg-white'
                  }`}
                >
                  {/* Crimson Accent Ribbon */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#A51C30] rounded-l-xl"></div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                    <div>
                      <span className="text-xs font-cinzel font-bold text-[#A51C30] tracking-wider uppercase">
                        {item.year}
                      </span>
                      <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#111827] mt-0.5">
                        {item.institution}
                      </h3>
                    </div>

                    {item.score && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-cinzel font-extrabold bg-[#A51C30] text-white">
                        <i className="fa-solid fa-award mr-1.5 text-[10px]"></i>
                        {item.score}
                      </span>
                    )}
                  </div>

                  <p className="font-serif-academic text-base text-[#334155] font-semibold mb-2">
                    {item.degree}
                  </p>

                  <p className="text-xs text-[#64748B] flex items-center mb-3">
                    <i className="fa-solid fa-map-pin text-[#A51C30] mr-1.5"></i>
                    {item.location}
                  </p>

                  {item.honors && (
                    <div className="inline-block text-xs font-medium px-2.5 py-1 rounded bg-[#C5A059]/15 text-[#855D10] border border-[#C5A059]/30">
                      ★ {item.honors}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Detailed Institutional Dossier (Right 5 Cols) */}
          <div className="lg:col-span-5 sticky top-28">
            {(() => {
              const active = educationList.find((e) => e.id === selectedItem) || educationList[0];
              return (
                <div className="bg-[#FBF9F5] rounded-2xl border-2 border-[#A51C30]/20 p-7 shadow-lg relative overflow-hidden">
                  
                  {/* Decorative Heraldic Header */}
                  <div className="flex items-center space-x-3 pb-4 border-b border-[#E2E8F0]">
                    <div className="w-12 h-12 rounded-full bg-[#A51C30] text-[#C5A059] flex items-center justify-center font-bold text-xl border border-[#C5A059]">
                      <i className="fa-solid fa-graduation-cap"></i>
                    </div>
                    <div>
                      <div className="text-[11px] font-cinzel uppercase tracking-widest text-[#A51C30] font-bold">
                        Academic Record Dossier
                      </div>
                      <h4 className="font-cinzel text-base font-bold text-[#111827]">
                        {active.institution}
                      </h4>
                    </div>
                  </div>

                  <div className="py-5 space-y-4">
                    <div>
                      <div className="text-xs text-[#64748B] uppercase tracking-wider font-cinzel">Qualification Awarded</div>
                      <div className="font-serif-academic text-lg font-bold text-[#111827]">{active.degree}</div>
                    </div>

                    {active.score && (
                      <div className="p-3.5 rounded-lg bg-white border border-[#A51C30]/20 flex items-center justify-between">
                        <div>
                          <div className="text-[10px] uppercase font-cinzel font-bold text-[#64748B]">Official Examination Score</div>
                          <div className="text-xl font-cinzel font-extrabold text-[#A51C30]">{active.score}</div>
                        </div>
                        <i className="fa-solid fa-certificate text-2xl text-[#C5A059]"></i>
                      </div>
                    )}

                    <div>
                      <div className="text-xs text-[#64748B] uppercase tracking-wider font-cinzel mb-2">Curricular Pillars & Distinction</div>
                      <ul className="space-y-2 text-xs text-[#334155] leading-relaxed">
                        {active.highlights.map((h, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <span className="text-[#A51C30] font-bold mt-0.5">•</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Scholastic Honors Callout */}
                  <div className="pt-4 border-t border-[#E2E8F0] bg-white -mx-7 -mb-7 p-5 rounded-b-2xl">
                    <div className="text-[11px] font-cinzel font-bold text-[#111827] uppercase tracking-wider mb-2 flex items-center">
                      <i className="fa-solid fa-medal text-[#C5A059] mr-2"></i>
                      Recognized Honors & Awards
                    </div>
                    <div className="space-y-2">
                      {awardsList.map((award) => (
                        <div key={award.id} className="text-xs p-2 rounded bg-[#FAF9F5] border border-gray-200">
                          <div className="font-bold text-[#111827]">{award.title}</div>
                          <div className="text-[11px] text-[#64748B]">{award.issuer} ({award.year})</div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })()}
          </div>

        </div>

      </div>
    </section>
  );
};
