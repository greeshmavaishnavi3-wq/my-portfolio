import React, { useState } from 'react';
import { Terminal, Cpu, Coffee, Globe, Database, GitBranch, Github, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const ICON_MAP = {
  Terminal,
  Coffee,
  Cpu,
  Globe,
  Database,
  GitBranch,
  Github
};

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Layers size={14} />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="section-title">Core Skills &amp; Stack</h2>
          <p className="section-subtitle">
            A focused technical toolkit grounded in core programming languages, relational data management, and modern developer workflows.
          </p>
        </div>

        {/* Skill Category Blocks */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {skillsData.categories.map((category) => (
            <div
              key={category.id}
              className="glass-panel"
              style={{
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div>
                {/* Category Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem'
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      color: '#ffffff',
                      fontWeight: 700
                    }}
                  >
                    {category.name}
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--cyan-primary)',
                      background: 'rgba(56, 189, 248, 0.1)',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px'
                    }}
                  >
                    {category.badge}
                  </span>
                </div>

                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.85rem',
                    lineHeight: 1.5,
                    marginBottom: '1.5rem'
                  }}
                >
                  {category.description}
                </p>

                {/* Skill Cards Inside Category */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {category.skills.map((skill) => {
                    const Icon = ICON_MAP[skill.icon] || Terminal;
                    const isHovered = hoveredSkill === skill.name;

                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        style={{
                          padding: '1rem 1.15rem',
                          borderRadius: '0.75rem',
                          background: isHovered
                            ? 'rgba(56, 189, 248, 0.12)'
                            : 'rgba(255, 255, 255, 0.03)',
                          border: isHovered
                            ? '1px solid rgba(56, 189, 248, 0.5)'
                            : '1px solid rgba(255, 255, 255, 0.07)',
                          transform: isHovered ? 'translateX(6px)' : 'none',
                          boxShadow: isHovered
                            ? '0 6px 20px -5px rgba(56, 189, 248, 0.35)'
                            : 'none',
                          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                          cursor: 'pointer'
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '0.4rem'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                            <div
                              style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '8px',
                                background: isHovered
                                  ? 'rgba(56, 189, 248, 0.25)'
                                  : 'rgba(255, 255, 255, 0.06)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: isHovered ? 'var(--cyan-primary)' : 'var(--text-secondary)',
                                transition: 'all 0.2s ease'
                              }}
                            >
                              <Icon size={18} />
                            </div>

                            <span
                              style={{
                                fontSize: '1.05rem',
                                fontWeight: 700,
                                color: isHovered ? '#ffffff' : '#f1f5f9',
                                fontFamily: 'var(--font-heading)'
                              }}
                            >
                              {skill.name}
                            </span>
                          </div>

                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.7rem',
                              color: isHovered ? 'var(--cyan-primary)' : 'var(--text-muted)',
                              transition: 'color 0.2s ease'
                            }}
                          >
                            {skill.level}
                          </span>
                        </div>

                        <p
                          style={{
                            fontSize: '0.8rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.45,
                            paddingLeft: '2.65rem'
                          }}
                        >
                          {skill.focus}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Honesty & Engineering Standard Notice */}
        <div
          style={{
            marginTop: '2.5rem',
            textAlign: 'center',
            padding: '1.25rem',
            borderRadius: '0.75rem',
            background: 'rgba(15, 23, 42, 0.5)',
            border: '1px solid var(--border-subtle)',
            maxWidth: '680px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
            <span style={{ color: 'var(--cyan-primary)' }}>// AUTHENTIC TECHNICAL FOUNDATION:</span> Skills reflect genuine undergraduate coursework, personal programming projects, and continuous problem solving without artificial percentage bars.
          </p>
        </div>
      </div>
    </section>
  );
}
