import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TimelineSection } from './components/TimelineSection';
import { FaqSection } from './components/FaqSection';

import SkillSection from './components/SkillSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ChatBotWidget } from './components/ChatBot/ChatBotWidget';

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
      window.open('https://doctoradogeografia.vercel.app/', '_blank', 'noopener,noreferrer');
    } else if (projectId === 'bibliotecas') {
      window.open('https://bibliotecas.unsj.edu.ar', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-secondary selection:bg-accent selection:text-primary-foreground">
      {/* Skip to main content link for keyboard accessibility (WCAG 2.4.1 / H-51) */}
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-primary focus:text-primary-foreground focus:font-bold focus:rounded-lg focus:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition-all"
      >
        Saltar al contenido principal
      </a>

      {/* Top Navigation with Theme Toggle */}
      <Navbar onContactClick={() => setIsContactOpen(true)} />

      {/* Main Content Sections */}
      <main id="contenido" tabIndex={-1} className="focus:outline-none">
        {/* Desktop / Mobile Hero Section  */}
        <HeroSection
          onProjectsClick={scrollToProjects}
          onContactClick={() => setIsContactOpen(true)}
        />

        {/* About Me / Human Side & Values Section */}
        <AboutSection />

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

      {/* Floating AI ChatBot Assistant Widget */}
      <ChatBotWidget onOpenContact={() => setIsContactOpen(true)} />
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
