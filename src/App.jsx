import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TimelineSection } from './components/TimelineSection';
import { FaqSection } from './components/FaqSection';

import SkillSection from './components/SkillSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

function PortfolioApp() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const scrollToProjects = () => {
    const el = document.getElementById('proyectos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenProject = (projectId) => {
    if (projectId === 'doctorado') {
      window.open('https://doctoradogeografia.vercel.app/', '_blank');
    } else if (projectId === 'bibliotecas') {
      window.open('https://bibliotecas.unsj.edu.ar', '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-secondary selection:bg-accent selection:text-primary-foreground">
      {/* Top Navigation with Theme Toggle */}
      <Navbar onContactClick={() => setIsContactOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Desktop / Mobile Hero Section  */}
        <HeroSection
          onProjectsClick={scrollToProjects}
          onContactClick={() => setIsContactOpen(true)}
        />

        {/* Projects */}
        <ProjectsSection onOpenProject={handleOpenProject} />

        {/* Skill Section */}
        <SkillSection />

        {/* Career & Experience Timeline Section */}
        <TimelineSection />

        {/* Frequently Asked Questions / Hacking & Network Section */}
        <FaqSection />


      </main>

      {/* Footer */}
      <Footer onContactClick={() => setIsContactOpen(true)} />

      {/* Contact Modal Dialog */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
