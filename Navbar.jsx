import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Cpu, ChevronRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Digital DNA', href: '#dna' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for glass strength and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      // Glass effect strength
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'fixed',
          top: '1rem',
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          justifyContent: 'center',
          padding: '0 1rem',
          pointerEvents: 'none'
        }}
      >
        <nav
          aria-label="Primary navigation"
          style={{
            pointerEvents: 'auto',
            width: '100%',
            maxWidth: '1100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: isScrolled ? '0.65rem 1.4rem' : '0.85rem 1.6rem',
            background: isScrolled
              ? 'rgba(8, 14, 29, 0.88)'
              : 'rgba(11, 20, 42, 0.55)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '9999px',
            border: isScrolled
              ? '1px solid rgba(56, 189, 248, 0.28)'
              : '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: isScrolled
              ? '0 12px 30px -10px rgba(0, 0, 0, 0.7), 0 0 25px -8px rgba(56, 189, 248, 0.2)'
              : '0 8px 24px -10px rgba(0, 0, 0, 0.4)',
            transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              textDecoration: 'none',
              color: '#ffffff',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '1.05rem',
              letterSpacing: '-0.01em'
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(99, 102, 241, 0.3))',
                border: '1px solid rgba(56, 189, 248, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--cyan-primary)'
              }}
            >
              <Cpu size={16} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ lineHeight: 1.1 }}>K.Sandhya Rani</span>
              <span
                style={{
                  fontSize: '0.68rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--cyan-primary)',
                  letterSpacing: '0.06em'
                }}
              >
                &lt;SDE_PORTFOLIO /&gt;
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div
            className="desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{
                    position: 'relative',
                    padding: '0.45rem 0.85rem',
                    borderRadius: '9999px',
                    color: isActive ? '#ffffff' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    fontWeight: isActive ? 600 : 500,
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    background: isActive ? 'rgba(56, 189, 248, 0.12)' : 'transparent',
                    border: isActive
                      ? '1px solid rgba(56, 189, 248, 0.3)'
                      : '1px solid transparent'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {item.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '2px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: 'var(--cyan-primary)',
                        boxShadow: '0 0 8px var(--cyan-primary)'
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            style={{
              display: 'none',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '8px',
              padding: '0.45rem',
              color: 'var(--text-main)',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            background: 'rgba(3, 7, 18, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              width: '100%',
              maxWidth: '320px'
            }}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1.25rem',
                    borderRadius: '0.75rem',
                    background: isActive ? 'rgba(56, 189, 248, 0.15)' : 'rgba(15, 23, 42, 0.6)',
                    border: isActive
                      ? '1px solid rgba(56, 189, 248, 0.4)'
                      : '1px solid var(--border-subtle)',
                    color: isActive ? 'var(--cyan-primary)' : '#ffffff',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  <span>{item.label}</span>
                  <ChevronRight size={16} opacity={0.6} />
                </a>
              );
            })}
          </div>
        </div>
      )}

      {/* Responsive styles for navbar */}
      <style>{`
        @media (max-width: 880px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
