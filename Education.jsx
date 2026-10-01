import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section-wrapper" style={{ background: 'rgba(5, 9, 22, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <GraduationCap size={14} />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Formal undergraduate engineering curriculum in Computer Science, mastering core computational theories and systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Timeline Guide Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '28px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--cyan-primary) 0%, rgba(99, 102, 241, 0.3) 100%)',
              opacity: 0.6
            }}
          />

          {educationData.map((item, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                paddingLeft: '72px',
                marginBottom: '2rem'
              }}
            >
              {/* Timeline Node Icon Indicator */}
              <div
                style={{
                  position: 'absolute',
                  left: '8px',
                  top: '0',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(99, 102, 241, 0.3))',
                  border: '2px solid var(--cyan-primary)',
                  boxShadow: '0 0 16px rgba(56, 189, 248, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--cyan-primary)',
                  zIndex: 2
                }}
              >
                <GraduationCap size={20} />
              </div>

              {/* Education Glass Card */}
              <div
                className="glass-panel"
                style={{
                  padding: '2.5rem',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  background: 'linear-gradient(135deg, rgba(11, 20, 42, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    marginBottom: '0.85rem'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--cyan-primary)',
                      background: 'rgba(56, 189, 248, 0.1)',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px'
                    }}
                  >
                    {item.status}
                  </span>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)'
                    }}
                  >
                    {item.batch}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.65rem',
                    color: '#ffffff',
                    fontWeight: 800,
                    marginBottom: '0.45rem'
                  }}
                >
                  {item.degree}
                </h3>

                <h4
                  style={{
                    fontSize: '1.2rem',
                    color: 'var(--cyan-primary)',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    marginBottom: '1.5rem'
                  }}
                >
                  {item.institution}
                </h4>

                {/* Coursework & Engineering Focus */}
                <div
                  style={{
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                  }}
                >
                  {item.details.map((detail, dIdx) => (
                    <div
                      key={dIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem'
                      }}
                    >
                      <CheckCircle size={16} color="var(--cyan-primary)" style={{ marginTop: '4px', flexShrink: 0 }} />
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
