import React, { useState } from 'react';
import { BookOpen, Hammer, FlaskConical, TrendingUp, Code2, Compass, Cpu, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const ICONS = {
  Learn: BookOpen,
  Build: Hammer,
  Experiment: FlaskConical,
  Improve: TrendingUp
};

export default function About() {
  const [activeCycleIndex, setActiveCycleIndex] = useState(0);
  const { about } = personalInfo;

  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span className="badge-pulse" />
            <span>{about.badge}</span>
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Curious student engineer bridging theoretical computer science, modular coding, and interactive systems.
          </p>
        </div>

        {/* Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
            marginBottom: '3.5rem'
          }}
        >
          {/* Narrative Glass Panel */}
          <div
            className="glass-panel"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--cyan-primary)',
                  marginBottom: '1.25rem'
                }}
              >
                <Terminal size={16} />
                <span>// ENGINEERING PERSPECTIVE</span>
              </div>

              <h3
                style={{
                  fontSize: '1.5rem',
                  color: '#ffffff',
                  marginBottom: '1.25rem',
                  lineHeight: 1.3
                }}
              >
                {about.headline}
              </h3>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  marginBottom: '1rem'
                }}
              >
                {about.intro}
              </p>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  marginBottom: '1.5rem'
                }}
              >
                {about.paragraph2}
              </p>
            </div>

            {/* Quick SDE Foundation Highlights */}
            <div
              style={{
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '1.25rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem'
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block' }}>DEGREE &amp; INSTITUTION</span>
                <span style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 600 }}>B.Tech CSE &bull; TRR College</span>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block' }}>CAREER FOCUS</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--cyan-primary)', fontWeight: 600 }}>Software Development Engineer</span>
              </div>
            </div>
          </div>

          {/* Interactive Engineering Mindset Panel */}
          <div
            className="glass-panel"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'linear-gradient(180deg, rgba(11, 20, 42, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)'
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: '#a78bfa',
                  marginBottom: '1.25rem'
                }}
              >
                <Cpu size={16} />
                <span>// CORE PHILOSOPHY</span>
              </div>

              <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '0.75rem' }}>
                Building from Fundamentals
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                Rather than relying on templates or shortcuts, I focus on understanding memory behavior in C, object orientation in Java, scripting logic in Python, and clean relational database schemas in SQL.
              </p>

              {/* Engineering Pillars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {[
                  { title: "Algorithmic Thinking", desc: "Analyzing time and space complexities to write efficient code." },
                  { title: "Clean Syntax & Structure", desc: "Crafting readable, self-documenting, and maintainable software." },
                  { title: "Digital Integration", desc: "Connecting backend logic with structured HTML and IoT hardware layers." }
                ].map((pillar, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.85rem 1rem',
                      borderRadius: '0.65rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    <div style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                      {pillar.title}
                    </div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', lineHeight: 1.4 }}>
                      {pillar.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE VISUAL ELEMENT: Learn → Build → Experiment → Improve */}
        <div style={{ marginTop: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--cyan-primary)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              // CONTINUOUS ENGINEERING ITERATION
            </span>
            <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginTop: '0.35rem' }}>
              Learn &rarr; Build &rarr; Experiment &rarr; Improve
            </h3>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
              position: 'relative'
            }}
          >
            {about.learningCycle.map((cycle, index) => {
              const IconComponent = ICONS[cycle.stage] || Code2;
              const isActive = activeCycleIndex === index;

              return (
                <div
                  key={cycle.step}
                  onClick={() => setActiveCycleIndex(index)}
                  onMouseEnter={() => setActiveCycleIndex(index)}
                  className="glass-panel"
                  style={{
                    padding: '1.75rem 1.5rem',
                    cursor: 'pointer',
                    background: isActive ? 'rgba(18, 30, 60, 0.95)' : 'rgba(11, 20, 42, 0.5)',
                    borderColor: isActive ? 'var(--cyan-primary)' : 'var(--border-subtle)',
                    transform: isActive ? 'translateY(-6px)' : 'none',
                    boxShadow: isActive
                      ? '0 15px 35px -10px rgba(0, 0, 0, 0.6), 0 0 25px -5px rgba(56, 189, 248, 0.3)'
                      : 'var(--shadow-card)',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem'
                    }}
                  >
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: isActive
                          ? 'linear-gradient(135deg, rgba(56, 189, 248, 0.25), rgba(99, 102, 241, 0.35))'
                          : 'rgba(255, 255, 255, 0.05)',
                        border: isActive ? '1px solid rgba(56, 189, 248, 0.5)' : '1px solid rgba(255, 255, 255, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isActive ? 'var(--cyan-primary)' : 'var(--text-secondary)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <IconComponent size={20} />
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        color: isActive ? 'var(--cyan-primary)' : 'var(--text-muted)'
                      }}
                    >
                      {cycle.step}
                    </span>
                  </div>

                  <div
                    style={{
                      display: 'inline-block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: isActive ? 'var(--cyan-primary)' : 'var(--text-muted)',
                      marginBottom: '0.25rem'
                    }}
                  >
                    Phase: {cycle.stage}
                  </div>

                  <h4 style={{ color: '#ffffff', fontSize: '1.15rem', marginBottom: '0.5rem', fontWeight: 700 }}>
                    {cycle.title}
                  </h4>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                    {cycle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
