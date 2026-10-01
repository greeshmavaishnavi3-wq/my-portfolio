import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 90,
        width: '46px',
        height: '46px',
        borderRadius: '50%',
        background: 'rgba(11, 20, 42, 0.85)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(56, 189, 248, 0.4)',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6), 0 0 15px rgba(56, 189, 248, 0.25)',
        color: 'var(--cyan-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.7), 0 0 25px rgba(56, 189, 248, 0.5)';
        e.currentTarget.style.background = 'rgba(18, 30, 60, 0.95)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.6), 0 0 15px rgba(56, 189, 248, 0.25)';
        e.currentTarget.style.background = 'rgba(11, 20, 42, 0.85)';
      }}
    >
      <ArrowUp size={20} />
    </button>
  );
}
