import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Terminal, CheckCircle2, Layers, Cpu, ArrowUpRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(3, 7, 18, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '720px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'rgba(11, 20, 42, 0.95)',
          border: `1px solid ${project.accentColor}50`,
          boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 35px -10px ${project.accentColor}40`,
          borderRadius: '1.25rem',
          padding: '2.5rem',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project modal"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-secondary)',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
          }}
        >
          <X size={18} />
        </button>

        {/* Category & Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <span
            style={{
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              background: `${project.accentColor}18`,
              border: `1px solid ${project.accentColor}40`,
              color: project.accentColor,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              fontWeight: 600
            }}
          >
            {project.category}
          </span>

          {project.isPlaceholder && (
            <span
              style={{
                padding: '0.2rem 0.65rem',
                borderRadius: '4px',
                background: 'rgba(234, 179, 8, 0.1)',
                border: '1px solid rgba(234, 179, 8, 0.3)',
                color: '#facc15',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem'
              }}
            >
              [Editable Project Placeholder]
            </span>
          )}
        </div>

        {/* Project Title */}
        <h2 style={{ fontSize: '1.85rem', color: '#ffffff', marginBottom: '1rem', lineHeight: 1.25 }}>
          {project.title}
        </h2>

        {/* Full Detailed Description */}
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
          {project.fullDescription || project.shortDescription}
        </p>

        {/* Architecture & Engineering Highlights */}
        {project.architectureHighlights && (
          <div style={{ marginBottom: '2rem' }}>
            <h4
              style={{
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--cyan-primary)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Cpu size={16} />
              <span>Key Architecture &amp; Implementation Details</span>
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {project.architectureHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <CheckCircle2 size={16} color={project.accentColor} style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span
            style={{
              display: 'block',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              marginBottom: '0.75rem',
              letterSpacing: '0.06em',
              textTransform: 'uppercase'
            }}
          >
            Technologies Used:
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: '0.35rem 0.8rem',
                  borderRadius: '0.5rem',
                  background: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid var(--border-subtle)',
                  color: '#ffffff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links / Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '1.5rem'
          }}
        >
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                padding: '0.7rem 1.4rem',
                fontSize: '0.9rem',
                textDecoration: 'none'
              }}
            >
              <Github size={16} />
              <span>View Source Code</span>
              <ArrowUpRight size={16} />
            </a>
          )}

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{
                padding: '0.7rem 1.4rem',
                fontSize: '0.9rem',
                textDecoration: 'none'
              }}
            >
              <ExternalLink size={16} />
              <span>Live Demonstration</span>
            </a>
          ) : (
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--text-muted)'
              }}
            >
              (Live deployment link will appear here once published)
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
