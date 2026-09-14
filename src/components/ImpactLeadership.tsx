import React, { useState } from 'react';
import {
  leadershipRoles,
  experienceItems,
  volunteerInitiatives,
  awardsList,
} from '../data/portfolioData';

export const ImpactLeadership: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'leadership' | 'volunteering' | 'experience'>('leadership');

  return (
    <section id="leadership" className="py-20 bg-[#FBF9F5] border-b border-[#A51C30]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Academic Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-cinzel font-bold tracking-widest text-[#A51C30] uppercase mb-2">
            <span className="w-6 h-px bg-[#A51C30]"></span>
            <span>Civic Engagement & Collegiate Governance</span>
            <span className="w-6 h-px bg-[#A51C30]"></span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Leadership, Outreach & Impact
          </h2>
          <p className="font-serif-academic text-lg text-[#475569] italic mt-2">
            Translating medical knowledge and organizational acumen into tangible service for hospitals, underprivileged children, and disaster relief.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-xl bg-white border border-gray-200 shadow-xs">
            <button
              onClick={() => setActiveTab('leadership')}
              className={`px-4 py-2 rounded-lg text-xs font-cinzel font-bold tracking-wider uppercase transition-all flex items-center space-x-2 ${
                activeTab === 'leadership'
                  ? 'bg-[#A51C30] text-white shadow-xs'
                  : 'text-[#475569] hover:text-[#111827]'
              }`}
            >
              <i className="fa-solid fa-crown"></i>
              <span>Collegiate Leadership</span>
            </button>
            <button
              onClick={() => setActiveTab('volunteering')}
              className={`px-4 py-2 rounded-lg text-xs font-cinzel font-bold tracking-wider uppercase transition-all flex items-center space-x-2 ${
                activeTab === 'volunteering'
                  ? 'bg-[#A51C30] text-white shadow-xs'
                  : 'text-[#475569] hover:text-[#111827]'
              }`}
            >
              <i className="fa-solid fa-hand-holding-heart"></i>
              <span>Public Health & Volunteering</span>
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-4 py-2 rounded-lg text-xs font-cinzel font-bold tracking-wider uppercase transition-all flex items-center space-x-2 ${
                activeTab === 'experience'
                  ? 'bg-[#A51C30] text-white shadow-xs'
                  : 'text-[#475569] hover:text-[#111827]'
              }`}
            >
              <i className="fa-solid fa-user-tie"></i>
              <span>Ambassadorships</span>
            </button>
          </div>
        </div>

        {/* Dynamic Tab Content */}
        {activeTab === 'leadership' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadershipRoles.map((role) => (
              <div
                key={role.id}
                className="bg-white rounded-xl border border-gray-200 hover:border-[#A51C30]/40 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-cinzel font-bold tracking-wider px-2 py-0.5 rounded bg-[#FAF0F2] text-[#A51C30] border border-[#A51C30]/20 uppercase">
                      {role.badge}
                    </span>
                    <span className="text-xs font-cinzel font-semibold text-gray-500">
                      {role.year}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-lg font-bold text-[#111827] mb-1">
                    {role.title}
                  </h3>
                  <div className="text-xs font-serif-academic text-[#A51C30] italic font-semibold mb-3">
                    {role.organization}
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {role.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center text-[11px] text-[#64748B]">
                  <i className="fa-solid fa-shield text-[#C5A059] mr-1.5"></i>
                  <span>Official Elected / Appointed Mandate</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'volunteering' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {volunteerInitiatives.map((vol) => (
              <div
                key={vol.id}
                className="bg-white rounded-xl border border-gray-200 hover:border-[#A51C30]/40 p-6 shadow-xs hover:shadow-md transition-all space-y-3"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-cinzel font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase">
                      {vol.category === 'hospital'
                        ? 'Pediatric & Clinical'
                        : vol.category === 'mental-health'
                        ? 'Youth Psychological Health'
                        : vol.category === 'community'
                        ? 'Disaster & Relief Camp'
                        : 'Global Non-Profit Impact'}
                    </span>
                    <h3 className="font-cinzel text-lg font-bold text-[#111827] mt-1.5">
                      {vol.role}
                    </h3>
                    <div className="text-xs font-serif-academic text-[#A51C30] italic font-semibold">
                      {vol.organization}
                    </div>
                  </div>
                  <span className="text-xs font-cinzel font-medium text-gray-500">
                    {vol.period}
                  </span>
                </div>

                {vol.impactMetrics && (
                  <div className="p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200 flex items-center space-x-2 text-xs font-semibold text-emerald-900">
                    <i className="fa-solid fa-chart-pie text-emerald-600"></i>
                    <span>{vol.impactMetrics}</span>
                  </div>
                )}

                <ul className="space-y-1.5 text-xs text-[#475569] leading-relaxed">
                  {vol.description.map((desc, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-[#A51C30] font-bold mt-0.5">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experienceItems.map((exp) => (
              <div
                key={exp.id}
                className="bg-white rounded-xl border border-gray-200 hover:border-[#A51C30]/40 p-6 shadow-xs hover:shadow-md transition-all space-y-3"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-cinzel text-lg font-bold text-[#111827]">
                      {exp.role}
                    </h3>
                    <div className="text-xs font-serif-academic text-[#A51C30] italic font-semibold">
                      {exp.organization}
                    </div>
                  </div>
                  <span className="text-xs font-cinzel font-medium text-gray-500">
                    {exp.period}
                  </span>
                </div>

                {exp.recognition && (
                  <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 flex items-center space-x-2 text-xs font-semibold text-amber-900">
                    <i className="fa-solid fa-trophy text-amber-600"></i>
                    <span>{exp.recognition}</span>
                  </div>
                )}

                <ul className="space-y-1.5 text-xs text-[#475569] leading-relaxed">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-[#A51C30] font-bold mt-0.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Distinctions & Awards Footer Banner */}
        <div className="mt-12 bg-white rounded-2xl border-2 border-[#C5A059]/40 p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-[11px] font-cinzel uppercase tracking-widest text-[#C5A059] font-bold">
                Scholastic & Public Oratory Distinctions
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#111827]">
                Merit Recognitions & Honors
              </h3>
              <p className="text-xs text-[#64748B]">
                Competitive awards recognizing academic acumen, scholarship rankings, and nationwide student mentorship.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {awardsList.map((award) => (
                <div
                  key={award.id}
                  className="px-4 py-2.5 rounded-xl bg-[#FBF9F5] border border-gray-200 text-center"
                >
                  <div className="text-xs font-bold font-cinzel text-[#A51C30]">
                    {award.title}
                  </div>
                  <div className="text-[11px] text-[#64748B]">
                    {award.issuer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
