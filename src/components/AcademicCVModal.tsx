import React, { useState } from 'react';
import {
  personalInfo,
  educationList,
  leadershipRoles,
  experienceItems,
  volunteerInitiatives,
  certificatesList,
  awardsList,
} from '../data/portfolioData';

interface AcademicCVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AcademicCVModal: React.FC<AcademicCVModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textCV = `
CURRICULUM VITAE
ABDUL QUDOOS KHALID
Shahdara, Lahore, Pakistan | ${personalInfo.phone} | ${personalInfo.email}
LinkedIn: ${personalInfo.linkedinUrl} | Instagram: ${personalInfo.instagramUrl}

OBJECTIVE
${personalInfo.objective}

EDUCATION
${educationList
  .map(
    (e) =>
      `${e.institution} (${e.year})\n${e.degree} ${e.score ? `— Score: ${e.score}` : ''} ${
        e.honors ? `— Honors: ${e.honors}` : ''
      }`
  )
  .join('\n\n')}

LEADERSHIP & POSITIONS OF RESPONSIBILITY
${leadershipRoles.map((l) => `${l.title} — ${l.organization} (${l.year})`).join('\n')}

EXPERIENCE & AMBASSADORSHIP
${experienceItems
  .map(
    (ex) =>
      `${ex.role} — ${ex.organization} (${ex.period})\n${ex.responsibilities.join('; ')}`
  )
  .join('\n\n')}

VOLUNTEERING & COMMUNITY HEALTH
${volunteerInitiatives
  .map(
    (v) =>
      `${v.role} — ${v.organization} (${v.period}) ${v.impactMetrics ? `[${v.impactMetrics}]` : ''}\n${v.description.join('; ')}`
  )
  .join('\n\n')}

CERTIFICATIONS & CONTINUING MEDICAL EDUCATION
${certificatesList
  .map(
    (c) =>
      `• ${c.title} | ${c.issuer} (${c.date}) ${c.credits ? `[${c.credits}]` : ''}`
  )
  .join('\n')}

HONORS & AWARDS
${awardsList.map((a) => `• ${a.title} — ${a.issuer} (${a.year})`).join('\n')}

LANGUAGES
Urdu (Native), English (Academic / Fluent), Punjabi (Native)
    `.trim();

    navigator.clipboard.writeText(textCV);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-[#FBF9F5] w-full max-w-4xl max-h-[92vh] rounded-2xl shadow-2xl border-2 border-[#A51C30]/30 flex flex-col my-auto overflow-hidden">
        
        {/* Modal Action Header (Excluded from Print) */}
        <div className="no-print bg-[#A51C30] text-white px-6 py-3.5 flex items-center justify-between border-b border-[#C5A059]/40 shrink-0">
          <div className="flex items-center space-x-2 font-cinzel font-bold text-xs sm:text-sm tracking-wider">
            <i className="fa-solid fa-graduation-cap text-[#C5A059]"></i>
            <span>OFFICIAL ACADEMIC CURRICULUM VITAE</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-xs font-medium transition-colors flex items-center space-x-1.5"
            >
              <i className={`fa-solid ${copiedText ? 'fa-check text-emerald-300' : 'fa-copy'}`}></i>
              <span>{copiedText ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded bg-[#C5A059] hover:bg-[#b59049] text-[#111827] text-xs font-bold font-cinzel transition-colors flex items-center space-x-1.5 shadow-xs"
            >
              <i className="fa-solid fa-print"></i>
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-white/80 hover:text-white rounded hover:bg-white/10"
              aria-label="Close CV"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
          </div>
        </div>

        {/* CV Document Container */}
        <div className="overflow-y-auto p-6 sm:p-12 bg-white text-[#111827] font-serif-academic leading-relaxed selection:bg-[#A51C30]/15">
          
          {/* Document Header */}
          <div className="text-center pb-6 border-b-2 border-[#111827] space-y-1">
            <h1 className="font-cinzel text-2xl sm:text-3xl font-extrabold tracking-widest text-[#111827]">
              ABDUL QUDOOS KHALID
            </h1>
            <div className="text-xs sm:text-sm text-[#475569] font-sans-clean flex flex-wrap justify-center gap-x-3 gap-y-1">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="text-[#A51C30] hover:underline">
                {personalInfo.email}
              </a>
            </div>
            <div className="text-xs text-[#64748B] font-sans-clean pt-1 flex flex-wrap justify-center gap-x-4">
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                <i className="fa-brands fa-linkedin text-[#0A66C2] mr-1"></i> linkedin.com/in/khalidabdulqudoos
              </a>
              <a href={personalInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                <i className="fa-brands fa-instagram text-[#E1306C] mr-1"></i> instagram.com/abdulqudooskhalid
              </a>
            </div>
          </div>

          {/* Objective */}
          <div className="py-4 border-b border-gray-300">
            <h2 className="font-cinzel text-xs font-bold tracking-widest uppercase text-[#111827] mb-1">
              OBJECTIVE
            </h2>
            <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-sans-clean">
              {personalInfo.objective}
            </p>
          </div>

          {/* Education */}
          <div className="py-4 border-b border-gray-300">
            <h2 className="font-cinzel text-xs font-bold tracking-widest uppercase text-[#111827] mb-3">
              EDUCATION
            </h2>
            <div className="space-y-3 font-sans-clean text-xs">
              {educationList.map((edu) => (
                <div key={edu.id} className="flex flex-col sm:flex-row justify-between">
                  <div>
                    <div className="font-bold text-[#111827] text-sm font-cinzel">
                      {edu.institution}
                    </div>
                    <div className="text-[#475569] italic font-serif-academic text-xs">
                      {edu.degree} {edu.score ? `— Marks: ${edu.score}` : ''}
                    </div>
                    {edu.honors && (
                      <div className="text-[11px] text-[#A51C30] font-medium">
                        {edu.honors}
                      </div>
                    )}
                  </div>
                  <div className="text-gray-500 text-xs sm:text-right font-medium">
                    {edu.year}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Positions of Responsibility */}
          <div className="py-4 border-b border-gray-300">
            <h2 className="font-cinzel text-xs font-bold tracking-widest uppercase text-[#111827] mb-3">
              LEADERSHIP & POSITIONS OF RESPONSIBILITY
            </h2>
            <div className="space-y-2 font-sans-clean text-xs">
              {leadershipRoles.map((role) => (
                <div key={role.id} className="flex justify-between items-start">
                  <div>
                    <strong className="text-[#111827] font-semibold">{role.title}</strong> —{' '}
                    <span className="text-[#475569]">{role.organization}</span>
                  </div>
                  <span className="text-gray-500 font-medium">{role.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience & Ambassadorship */}
          <div className="py-4 border-b border-gray-300">
            <h2 className="font-cinzel text-xs font-bold tracking-widest uppercase text-[#111827] mb-3">
              EXPERIENCE & AMBASSADORSHIPS
            </h2>
            <div className="space-y-3 font-sans-clean text-xs">
              {experienceItems.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <div className="font-bold text-[#111827]">
                      {exp.role} — <span className="font-normal text-[#475569]">{exp.organization}</span>
                    </div>
                    <span className="text-gray-500 font-medium">{exp.period}</span>
                  </div>
                  {exp.recognition && (
                    <div className="text-[#A51C30] text-[11px] font-semibold mt-0.5">
                      ★ {exp.recognition}
                    </div>
                  )}
                  <ul className="list-disc list-inside text-[#475569] mt-1 space-y-0.5 text-[11px]">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteering & Community Health */}
          <div className="py-4 border-b border-gray-300">
            <h2 className="font-cinzel text-xs font-bold tracking-widest uppercase text-[#111827] mb-3">
              VOLUNTEERING & COMMUNITY HEALTH OUTREACH
            </h2>
            <div className="space-y-3 font-sans-clean text-xs">
              {volunteerInitiatives.map((vol) => (
                <div key={vol.id}>
                  <div className="flex justify-between items-baseline">
                    <div className="font-bold text-[#111827]">
                      {vol.role} — <span className="font-normal text-[#475569]">{vol.organization}</span>
                    </div>
                    <span className="text-gray-500 font-medium">{vol.period}</span>
                  </div>
                  {vol.impactMetrics && (
                    <div className="text-emerald-700 font-semibold text-[11px]">
                      Impact: {vol.impactMetrics}
                    </div>
                  )}
                  <ul className="list-disc list-inside text-[#475569] mt-1 space-y-0.5 text-[11px]">
                    {vol.description.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & CME */}
          <div className="py-4 border-b border-gray-300">
            <h2 className="font-cinzel text-xs font-bold tracking-widest uppercase text-[#111827] mb-3">
              CERTIFICATIONS & CONTINUING MEDICAL EDUCATION (CME)
            </h2>
            <div className="space-y-2 font-sans-clean text-xs">
              {certificatesList.map((cert) => (
                <div key={cert.id} className="flex justify-between items-start gap-4">
                  <div>
                    <span className="font-semibold text-[#111827]">{cert.title}</span> |{' '}
                    <span className="text-[#475569] italic">{cert.issuer}</span>
                    {cert.credits && (
                      <span className="ml-1.5 text-[#A51C30] font-semibold text-[11px]">
                        [{cert.credits}]
                      </span>
                    )}
                  </div>
                  <span className="text-gray-500 whitespace-nowrap text-[11px] font-medium">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Honors */}
          <div className="py-4 border-b border-gray-300">
            <h2 className="font-cinzel text-xs font-bold tracking-widest uppercase text-[#111827] mb-2">
              AWARDS & ACHIEVEMENTS
            </h2>
            <ul className="list-disc list-inside font-sans-clean text-xs text-[#334155] space-y-1">
              {awardsList.map((award) => (
                <li key={award.id}>
                  <strong>{award.title}</strong> — {award.issuer} ({award.year})
                </li>
              ))}
            </ul>
          </div>

          {/* Digital Presence & Skills */}
          <div className="py-4 border-b border-gray-300 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h2 className="font-cinzel text-xs font-bold tracking-widest uppercase text-[#111827] mb-1.5">
                DIGITAL PRESENCE
              </h2>
              <ul className="list-disc list-inside font-sans-clean text-xs text-[#334155] space-y-1">
                <li>Manage official Instagram page for MBBS Batch 29, Al-Aleem Medical College.</li>
                <li>Run personal Instagram focused on photography and creative narrative (@abdulqudooskhalid).</li>
              </ul>
            </div>

            <div>
              <h2 className="font-cinzel text-xs font-bold tracking-widest uppercase text-[#111827] mb-1.5">
                KEY SKILLS & LANGUAGES
              </h2>
              <p className="font-sans-clean text-xs text-[#334155] leading-relaxed">
                <strong>Skills:</strong> Event Management, Digital Literacy (Photography, Canva, Content Creation), Clinical Research, Counseling, Time Management, Leadership & Teamwork.
                <br />
                <strong>Languages:</strong> Urdu (Native), English (Fluent), Punjabi (Native).
              </p>
            </div>
          </div>

          {/* Footer Attestation */}
          <div className="pt-6 text-center text-[10px] text-gray-500 font-sans-clean">
            Academic Curriculum Vitae • Verified Record for Abdul Qudoos Khalid • Prepared {new Date().getFullYear()}
          </div>

        </div>

      </div>
    </div>
  );
};
