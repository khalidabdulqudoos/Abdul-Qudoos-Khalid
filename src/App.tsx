import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EducationTimeline } from './components/EducationTimeline';
import { CertificationsGrid } from './components/CertificationsGrid';
import { CreativeGallery } from './components/CreativeGallery';
import { ImpactLeadership } from './components/ImpactLeadership';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AcademicCVModal } from './components/AcademicCVModal';

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1E293B] flex flex-col selection:bg-[#A51C30]/20 selection:text-[#A51C30]">
      {/* Header */}
      <Header onOpenCV={() => setIsCVOpen(true)} />

      {/* Main Academic Content */}
      <main className="flex-1">
        {/* Collegiate Hero Section */}
        <Hero onOpenCV={() => setIsCVOpen(true)} />

        {/* Academic Matriculation & Education Timeline */}
        <EducationTimeline />

        {/* Continuing Medical Education & Certifications */}
        <CertificationsGrid />

        {/* Creative & Visual Media Portfolio (Batch 29 & Personal Instagram) */}
        <CreativeGallery />

        {/* Leadership & Civic Impact (Sports Society, SAMHS, Alkhidmat, Catchafire) */}
        <ImpactLeadership />

        {/* Core Competencies & Languages */}
        <SkillsSection />

        {/* Academic Inquiry & Direct Contact */}
        <ContactSection />
      </main>

      {/* Collegiate Footer */}
      <Footer onOpenCV={() => setIsCVOpen(true)} />

      {/* Full Academic Curriculum Vitae Modal */}
      <AcademicCVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
}
