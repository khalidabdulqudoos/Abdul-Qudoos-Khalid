import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Clinical Research & Academic Collaboration',
    message: '',
  });

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Construct mailto link for direct submission to candidate's email
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.subject}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.open(mailtoUrl, '_blank');
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="py-20 bg-[#FBF9F5] border-b border-[#A51C30]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-cinzel font-bold tracking-widest text-[#A51C30] uppercase mb-2">
            <span className="w-6 h-px bg-[#A51C30]"></span>
            <span>Academic & Professional Liaison</span>
            <span className="w-6 h-px bg-[#A51C30]"></span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Connect & Collaborate
          </h2>
          <p className="font-serif-academic text-lg text-[#475569] italic mt-2">
            Available for clinical research partnerships, educational speaking, healthcare media production, and community health initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details & Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Contact Card */}
            <div className="bg-white rounded-2xl border border-[#A51C30]/20 p-6 sm:p-8 shadow-xs space-y-6">
              <h3 className="font-cinzel text-lg font-bold text-[#111827] border-b border-gray-100 pb-3">
                Official Coordinates
              </h3>

              {/* Email item */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-[#FAF0F2] text-[#A51C30] flex items-center justify-center shrink-0 border border-[#A51C30]/20">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-cinzel font-bold uppercase tracking-wider text-gray-500">
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-[#111827] hover:text-[#A51C30] transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                  <div className="mt-1">
                    <button
                      onClick={() => handleCopy(personalInfo.email, 'email')}
                      className="text-[11px] font-medium text-[#A51C30] hover:underline flex items-center space-x-1"
                    >
                      <i className={`fa-solid ${copiedEmail ? 'fa-check text-emerald-600' : 'fa-copy'}`}></i>
                      <span>{copiedEmail ? 'Email Copied!' : 'Copy to Clipboard'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Phone item */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-[#FAF0F2] text-[#A51C30] flex items-center justify-center shrink-0 border border-[#A51C30]/20">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="flex-1">
                  <div className="text-[11px] font-cinzel font-bold uppercase tracking-wider text-gray-500">
                    Phone & WhatsApp
                  </div>
                  <div className="text-sm font-semibold text-[#111827]">
                    {personalInfo.phone} ({personalInfo.internationalPhone})
                  </div>
                  <div className="mt-1 flex items-center space-x-3">
                    <button
                      onClick={() => handleCopy(personalInfo.phone, 'phone')}
                      className="text-[11px] font-medium text-[#A51C30] hover:underline flex items-center space-x-1"
                    >
                      <i className={`fa-solid ${copiedPhone ? 'fa-check text-emerald-600' : 'fa-copy'}`}></i>
                      <span>{copiedPhone ? 'Phone Copied!' : 'Copy Number'}</span>
                    </button>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-[11px] font-medium text-emerald-700 hover:underline"
                    >
                      Call Directly
                    </a>
                  </div>
                </div>
              </div>

              {/* Location item */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-[#FAF0F2] text-[#A51C30] flex items-center justify-center shrink-0 border border-[#A51C30]/20">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <div className="text-[11px] font-cinzel font-bold uppercase tracking-wider text-gray-500">
                    Medical Campus & Residence
                  </div>
                  <div className="text-sm font-semibold text-[#111827]">
                    {personalInfo.location}
                  </div>
                  <div className="text-xs text-[#64748B] mt-0.5">
                    Al-Aleem Medical College / Gulab Devi Educational Complex
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels Connect Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs space-y-4">
              <h4 className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#111827]">
                Verified Digital Profiles
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-blue-50/50 hover:bg-blue-50 border border-blue-200 transition-all flex items-center space-x-3 group"
                >
                  <i className="fa-brands fa-linkedin text-2xl text-[#0A66C2]"></i>
                  <div>
                    <div className="text-xs font-bold text-[#111827] group-hover:text-[#0A66C2]">
                      LinkedIn
                    </div>
                    <div className="text-[11px] text-gray-500">
                      khalidabdulqudoos
                    </div>
                  </div>
                </a>

                <a
                  href={personalInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-pink-50/50 hover:bg-pink-50 border border-pink-200 transition-all flex items-center space-x-3 group"
                >
                  <i className="fa-brands fa-instagram text-2xl text-[#E1306C]"></i>
                  <div>
                    <div className="text-xs font-bold text-[#111827] group-hover:text-[#E1306C]">
                      Instagram
                    </div>
                    <div className="text-[11px] text-gray-500">
                      @abdulqudooskhalid
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Academic Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#A51C30]/20 p-6 sm:p-8 shadow-md">
              <div className="mb-6">
                <h3 className="font-cinzel text-xl font-bold text-[#111827]">
                  Send an Academic or Media Inquiry
                </h3>
                <p className="text-xs text-[#64748B] mt-1">
                  Complete this form to initiate direct correspondence regarding research, speaking, or media.
                </p>
              </div>

              {formSubmitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs flex items-center space-x-3">
                  <i className="fa-solid fa-circle-check text-xl text-emerald-600"></i>
                  <div>
                    <strong className="block font-bold">Inquiry Transmitted!</strong>
                    <span>Your email draft has been generated. Thank you for reaching out to Abdul Qudoos Khalid.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 font-sans-clean">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-cinzel font-bold text-[#111827] uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Dr. / Prof. / Colleague Name"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs text-[#111827] focus:outline-none focus:border-[#A51C30] focus:ring-1 focus:ring-[#A51C30]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-cinzel font-bold text-[#111827] uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@institution.edu"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs text-[#111827] focus:outline-none focus:border-[#A51C30] focus:ring-1 focus:ring-[#A51C30]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-cinzel font-bold text-[#111827] uppercase tracking-wider mb-1">
                    Nature of Inquiry
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs text-[#111827] focus:outline-none focus:border-[#A51C30] focus:ring-1 focus:ring-[#A51C30] bg-white"
                  >
                    <option>Clinical Research & Academic Collaboration</option>
                    <option>Medical Media & Photography Coverage</option>
                    <option>Student Mentorship & Premed Speaking</option>
                    <option>Public Health & Hospital Volunteering</option>
                    <option>General Academic Inquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-cinzel font-bold text-[#111827] uppercase tracking-wider mb-1">
                    Message / Agenda *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details regarding your proposal, event schedule, or research scope..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 text-xs text-[#111827] focus:outline-none focus:border-[#A51C30] focus:ring-1 focus:ring-[#A51C30]"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-gray-500">
                    Sent directly to khalidabdulqudoos@gmail.com
                  </span>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-lg bg-[#A51C30] text-white font-cinzel text-xs font-bold uppercase tracking-wider hover:bg-[#701121] shadow-md transition-all flex items-center space-x-2"
                  >
                    <i className="fa-solid fa-paper-plane text-xs"></i>
                    <span>Transmit Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
