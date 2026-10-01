import React from 'react';
import { Github, Linkedin, Mail, Heart, Terminal, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid var(--border-subtle)',
        background: 'rgba(3, 7, 18, 0.95)',
        padding: '3.5rem 0 2.5rem 0'
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Brand Name */}
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.65rem',
            fontWeight: 800,
            letterSpacing: '0.04em',
            color: '#ffffff',
            marginBottom: '0.4rem'
          }}
        >
          SANDHYA RANI
        </h3>

        {/* Tagline */}
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
            color: 'var(--cyan-primary)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem'
          }}
        >
          Building. Learning. Evolving.
        </p>

        {/* Social Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '2rem'
          }}
        >
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = 'var(--cyan-primary)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <Github size={18} />
          </a>

          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#818cf8';
              e.currentTarget.style.borderColor = '#818cf8';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <Linkedin size={18} />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Send Email"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--cyan-primary)';
              e.currentTarget.style.borderColor = 'var(--cyan-primary)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = 'var(--border-subtle)';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Copyright notice required by prompt */}
        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: '0.85rem',
            fontFamily: 'var(--font-mono)'
          }}
        >
          &copy; {currentYear} Sandhya Rani &bull; B.Tech CSE &bull; TRR College Of Technology
        </p>
      </div>
    </footer>
  );
}
