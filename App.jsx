import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DigitalDNA from './components/DigitalDNA';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NetworkCanvas from './components/NetworkCanvas';
import CursorGlow from './components/CursorGlow';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  // Scroll reveal observer
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const sections = document.querySelectorAll('.section-wrapper');
    sections.forEach((sec) => {
      sec.classList.add('reveal-on-scroll');
      observer.observe(sec);
    });

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  return (
    <div className="portfolio-app" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Background Interactive Network Canvas */}
      <NetworkCanvas />

      {/* Subtle Ambient Cursor Follower */}
      <CursorGlow />

      {/* Floating Modern Glass Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <DigitalDNA />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Minimal SDE Footer */}
      <Footer />

      {/* Scroll to Top Action Button */}
      <ScrollToTop />
    </div>
  );
}
