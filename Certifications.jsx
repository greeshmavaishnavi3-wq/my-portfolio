import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle2, ShieldCheck, FileCheck } from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Award size={14} />
            <span>VERIFIED KNOWLEDGE</span>
          </div>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Professional learning milestones and course completions. (Templates and placeholders are ready for Sandhya to edit with personal certificates).
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel"
              style={{
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                border: '1px solid rgba(56, 189, 248, 0.15)'
              }}
            >
              <div>
                {/* Header Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem'
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.15), rgba(99, 102, 241, 0.25))',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--cyan-primary)'
                    }}
                  >
                    <ShieldCheck size={20} />
                  </div>

                  {cert.isPlaceholder && (
                    <span
                      style={{
                        padding: '0.2rem 0.6rem',
                        borderRadius: '4px',
                        background: 'rgba(234, 179, 8, 0.1)',
                        border: '1px solid rgba(234, 179, 8, 0.3)',
                        color: '#facc15',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        fontWeight: 500
                      }}
                    >
                      Editable Placeholder
                    </span>
                  )}
                </div>

                {/* Certificate Name */}
                <h3
                  style={{
                    fontSize: '1.2rem',
                    color: '#ffffff',
                    fontWeight: 700,
                    marginBottom: '0.65rem',
                    lineHeight: 1.35
                  }}
                >
                  {cert.name}
                </h3>

                {/* Issuing Organization */}
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    color: 'var(--cyan-primary)',
                    marginBottom: '1rem'
                  }}
                >
                  {cert.issuer}
                </div>

                {/* Skills Covered Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {cert.skillsCovered.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer info: Date & Credential Link */}
              <div
                style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
                  <Calendar size={14} />
                  <span>{cert.date}</span>
                </div>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: 'var(--cyan-primary)',
                    fontSize: '0.82rem',
                    textDecoration: 'none',
                    fontWeight: 600
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                  onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                >
                  <span>Verify</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Edit Tip Box */}
        <div
          style={{
            marginTop: '2.5rem',
            textAlign: 'center',
            padding: '1.25rem',
            borderRadius: '0.75rem',
            background: 'rgba(15, 23, 42, 0.5)',
            border: '1px solid var(--border-subtle)',
            maxWidth: '680px',
            margin: '2.5rem auto 0 auto'
          }}
        >
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
            <span style={{ color: '#facc15' }}>// EASY CUSTOMIZATION:</span> To replace these placeholders with your real certificates, simply update the <code style={{ color: 'var(--cyan-primary)' }}>certificationsData</code> array in <code style={{ color: 'var(--cyan-primary)' }}>src/data/portfolioData.js</code>.
          </p>
        </div>
      </div>
    </section>
  );
}
