import React, { useState, useMemo } from 'react';
import { certificatesList } from '../data/portfolioData';
import { CertificateItem } from '../types';

export const CertificationsGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalCert, setActiveModalCert] = useState<CertificateItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Credentials', count: certificatesList.length },
    {
      id: 'clinical',
      label: 'Stanford CME & NIH Clinical',
      count: certificatesList.filter((c) => c.category === 'clinical').length,
    },
    {
      id: 'public-health',
      label: 'WHO Global Health & AI',
      count: certificatesList.filter((c) => c.category === 'public-health').length,
    },
    {
      id: 'tech-data',
      label: 'Google Professional Specializations',
      count: certificatesList.filter((c) => c.category === 'tech-data').length,
    },
    {
      id: 'coding',
      label: 'Medical Coding (i2MC)',
      count: certificatesList.filter((c) => c.category === 'coding').length,
    },
  ];

  const filteredCerts = useMemo(() => {
    return certificatesList.filter((cert) => {
      const matchesCategory =
        selectedCategory === 'all' || cert.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        cert.title.toLowerCase().includes(query) ||
        cert.issuer.toLowerCase().includes(query) ||
        cert.skillsAcquired.some((s) => s.toLowerCase().includes(query)) ||
        cert.credentialSummary.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="certifications" className="py-20 bg-[#FBF9F5] border-b border-[#A51C30]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Academic Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-cinzel font-bold tracking-widest text-[#A51C30] uppercase mb-2">
            <span className="w-6 h-px bg-[#A51C30]"></span>
            <span>Accredited Scholastic Credentials</span>
            <span className="w-6 h-px bg-[#A51C30]"></span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Continuing Medical Education & Certifications
          </h2>
          <p className="font-serif-academic text-lg text-[#475569] italic mt-2">
            Verified qualifications from Stanford Center for CME, National Institutes of Health, World Health Organization, and Google.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-cinzel font-semibold tracking-wider transition-all flex items-center space-x-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-[#A51C30] text-white shadow-xs'
                    : 'bg-white text-[#475569] border border-gray-200 hover:border-[#A51C30]/30 hover:text-[#111827]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    selectedCategory === cat.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, skill, or issuer..."
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-white border border-gray-300 text-xs font-sans-clean text-[#111827] placeholder-gray-400 focus:outline-none focus:border-[#A51C30] focus:ring-1 focus:ring-[#A51C30]"
            />
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-xs text-gray-400"></i>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2 text-xs text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            )}
          </div>

        </div>

        {/* Credentials Grid */}
        {filteredCerts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-gray-200 p-8">
            <i className="fa-solid fa-file-circle-question text-3xl text-gray-300 mb-2"></i>
            <p className="font-serif-academic text-gray-500 italic">
              No certifications match your criteria. Clear search to view all 11 credentials.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 px-4 py-1.5 text-xs font-cinzel font-semibold text-[#A51C30] underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setActiveModalCert(cert)}
                className="bg-white rounded-xl border border-gray-200 hover:border-[#A51C30]/40 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group relative"
              >
                {/* Top Badge Row */}
                <div>
                  <div className="flex justify-between items-start gap-2 mb-3">
                    <span
                      className={`text-[10px] font-cinzel font-bold tracking-wider px-2 py-0.5 rounded border uppercase ${
                        cert.category === 'clinical'
                          ? 'bg-[#FAF0F2] text-[#A51C30] border-[#A51C30]/25'
                          : cert.category === 'public-health'
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                          : cert.category === 'tech-data'
                          ? 'bg-blue-50 text-blue-800 border-blue-200'
                          : 'bg-purple-50 text-purple-800 border-purple-200'
                      }`}
                    >
                      {cert.category === 'clinical'
                        ? 'Clinical Medicine & CME'
                        : cert.category === 'public-health'
                        ? 'World Health Org'
                        : cert.category === 'tech-data'
                        ? 'Google Professional'
                        : 'Medical Coding'}
                    </span>

                    <span className="text-[11px] text-gray-500 font-medium whitespace-nowrap">
                      {cert.date}
                    </span>
                  </div>

                  {/* Certificate Title */}
                  <h3 className="font-cinzel text-base font-bold text-[#111827] group-hover:text-[#A51C30] transition-colors leading-snug mb-1">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <div className="text-xs font-serif-academic italic text-[#64748B] mb-3 flex items-center">
                    <i className="fa-solid fa-award text-[#C5A059] mr-1.5 text-[11px]"></i>
                    <span>{cert.issuer}</span>
                  </div>

                  {/* Credits or Distinction */}
                  {cert.credits && (
                    <div className="mb-3 inline-flex items-center px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200 text-[11px] font-semibold">
                      <i className="fa-solid fa-star text-[10px] mr-1 text-amber-600"></i>
                      {cert.credits}
                    </div>
                  )}

                  {/* Summary */}
                  <p className="text-xs text-[#475569] leading-relaxed line-clamp-3 mb-4">
                    {cert.credentialSummary}
                  </p>
                </div>

                {/* Bottom Competency Tags & Action */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {cert.skillsAcquired.slice(0, 2).map((skill, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skillsAcquired.length > 2 && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-500">
                        +{cert.skillsAcquired.length - 2} more
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-cinzel font-semibold text-[#A51C30] group-hover:translate-x-0.5 transition-transform flex items-center">
                    Dossier <i className="fa-solid fa-chevron-right ml-1 text-[10px]"></i>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal: Full Credential Inspection Dossier */}
        {activeModalCert && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-[#FBF9F5] rounded-2xl max-w-xl w-full border-2 border-[#A51C30]/30 shadow-2xl p-6 sm:p-8 relative overflow-hidden animate-scaleUp">
              {/* Heraldic Top Line */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-[#A51C30]"></div>

              <div className="flex justify-between items-start pt-2 mb-4">
                <div>
                  <span className="text-[11px] font-cinzel font-bold text-[#A51C30] uppercase tracking-widest">
                    {activeModalCert.verificationType}
                  </span>
                  <h3 className="font-cinzel text-xl font-bold text-[#111827] mt-1">
                    {activeModalCert.title}
                  </h3>
                  <p className="font-serif-academic text-sm text-[#64748B] italic">
                    {activeModalCert.issuer}
                  </p>
                </div>
                <button
                  onClick={() => setActiveModalCert(null)}
                  className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100"
                >
                  <i className="fa-solid fa-xmark text-lg"></i>
                </button>
              </div>

              <div className="space-y-4 py-2">
                {activeModalCert.credits && (
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-center space-x-3">
                    <i className="fa-solid fa-certificate text-2xl text-amber-700"></i>
                    <div>
                      <div className="text-xs font-bold text-amber-900">Accredited Credit Value</div>
                      <div className="text-sm font-semibold text-amber-800">{activeModalCert.credits}</div>
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-cinzel font-bold uppercase text-[#111827] tracking-wider mb-1">
                    Clinical & Curricular Scope
                  </h4>
                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                    {activeModalCert.credentialSummary}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-cinzel font-bold uppercase text-[#111827] tracking-wider mb-2">
                    Verified Competencies
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalCert.skillsAcquired.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-full bg-white border border-[#A51C30]/20 text-[#A51C30] font-medium"
                      >
                        ✓ {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-[11px] text-gray-500 flex items-center space-x-2">
                  <i className="fa-solid fa-shield-halved text-[#C5A059]"></i>
                  <span>Credential Status: Active on candidate's verified medical record</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 flex justify-end">
                <button
                  onClick={() => setActiveModalCert(null)}
                  className="px-5 py-2 text-xs font-cinzel font-bold uppercase tracking-wider rounded-lg bg-[#A51C30] text-white hover:bg-[#701121]"
                >
                  Close Dossier
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
