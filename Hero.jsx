import React, { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, Terminal, Cpu, Sparkles, Code2, Network } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const FULL_NAME = "K.SANDHYA RANI";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Digital generation character-by-character
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= FULL_NAME.length) {
        setDisplayedText(FULL_NAME.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, 95); // Smooth, pleasant pacing

    return () => clearInterval(typingInterval);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        overflow: 'hidden'
      }}
    >
      {/* Subtle background ambient glow spots */}
      <div
        style={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '650px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(56, 189, 248, 0.12) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 75%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        {/* Terminal Status Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.65rem',
            padding: '0.4rem 1.1rem',
            borderRadius: '9999px',
            background: 'rgba(15, 23, 42, 0.75)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            backdropFilter: 'blur(12px)',
            marginBottom: '2rem',
            boxShadow: '0 4px 20px -5px rgba(0, 0, 0, 0.4)'
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#10b981',
              boxShadow: '0 0 10px #10b981',
              display: 'inline-block'
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--cyan-primary)',
              letterSpacing: '0.04em'
            }}
          >
            Digital Identity // Computer Science & Engineering
          </span>
          <span
            style={{
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)'
            }}
          >
            | TRR College Of Technology
          </span>
        </div>

        {/* Centerpiece: Name container with particles & digital generation */}
        <div
          style={{
            position: 'relative',
            display: 'inline-block',
            maxWidth: '100%',
            marginBottom: '1.25rem'
          }}
        >
          {/* Subtle floating network nodes around name */}
          <div
            className="name-decor-node node-1"
            style={{
              position: 'absolute',
              top: '-15px',
              left: '-20px',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--cyan-primary)',
              boxShadow: '0 0 12px var(--cyan-primary)',
              opacity: 0.8
            }}
          />
          <div
            className="name-decor-node node-2"
            style={{
              position: 'absolute',
              top: '50%',
              right: '-24px',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#a78bfa',
              boxShadow: '0 0 10px #a78bfa',
              opacity: 0.7
            }}
          />
          <div
            className="name-decor-node node-3"
            style={{
              position: 'absolute',
              bottom: '-12px',
              left: '25%',
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              background: '#2dd4bf',
              boxShadow: '0 0 8px #2dd4bf',
              opacity: 0.6
            }}
          />

          {/* MAIN NAME DISPLAY */}
          <h1
            aria-label="K. Sandhya Rani"
            style={{
              fontSize: 'clamp(2.75rem, 7.5vw, 5.5rem)',
              fontWeight: 900,
              fontFamily: 'var(--font-heading)',
              letterSpacing: '0.04em',
              lineHeight: 1.1,
              userSelect: 'none',
              display: 'inline-flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            {displayedText.split("").map((char, index) => {
              const isHovered = hoveredIndex === index;
              return (
                <span
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={isTypingComplete ? "glowing-letter" : ""}
                  style={{
                    display: 'inline-block',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: isHovered ? 'translateY(-6px) scale(1.1)' : 'translateY(0) scale(1)',
                    color: isHovered ? '#38bdf8' : '#ffffff',
                    textShadow: isHovered
                      ? '0 0 25px rgba(56, 189, 248, 0.9), 0 0 45px rgba(99, 102, 241, 0.6)'
                      : '0 2px 20px rgba(0, 0, 0, 0.5)',
                    cursor: 'default',
                    minWidth: char === ' ' ? '0.75rem' : 'auto'
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              );
            })}

            {/* Digital blinking cursor */}
            {!isTypingComplete && (
              <span
                style={{
                  display: 'inline-block',
                  color: 'var(--cyan-primary)',
                  fontWeight: 300,
                  marginLeft: '2px',
                  animation: 'blink-cursor 0.75s infinite'
                }}
              >
                _
              </span>
            )}
          </h1>
        </div>

        {/* Subtitles required by prompt */}
        <div style={{ maxWidth: '780px', margin: '0 auto 2.5rem auto' }}>
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.2rem, 2.8vw, 1.75rem)',
              color: 'var(--cyan-primary)',
              fontWeight: 600,
              letterSpacing: '0.02em',
              marginBottom: '0.45rem'
            }}
          >
            Computer Science &amp; Engineering
          </p>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.95rem, 2vw, 1.25rem)',
              color: '#cbd5e1',
              fontWeight: 500,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem'
            }}
          >
            Future Software Development Engineer
          </p>

          <p
            style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: '620px',
              margin: '0 auto'
            }}
          >
            {personalInfo.tagline}
          </p>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}
        >
          <button
            type="button"
            className="btn-primary"
            onClick={() => scrollTo('projects')}
            style={{ minWidth: '185px' }}
          >
            <span>Explore My Work</span>
            <ArrowRight size={18} />
          </button>

          <button
            type="button"
            className="btn-secondary"
            onClick={() => scrollTo('contact')}
            style={{ minWidth: '185px' }}
          >
            <MessageSquare size={18} />
            <span>Let's Connect</span>
          </button>
        </div>

        {/* Futuristic IoT + Software Connection Matrix */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
            padding: '0.75rem 1.25rem',
            borderRadius: '1rem',
            background: 'rgba(11, 20, 42, 0.45)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--cyan-primary)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
            <Code2 size={15} />
            <span>Code // Java &bull; Python &bull; C</span>
          </div>
          <span style={{ color: 'var(--border-subtle)' }}>|</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#2dd4bf', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
            <Cpu size={15} />
            <span>IoT // Connected Systems</span>
          </div>
          <span style={{ color: 'var(--border-subtle)' }}>|</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#a78bfa', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
            <Network size={15} />
            <span>Data // SQL &amp; Network Nodes</span>
          </div>
        </div>
      </div>

      {/* Hero Animations & Letter Wave Styles */}
      <style>{`
        @keyframes blink-cursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .glowing-letter {
          animation: subtle-glow-wave 6s ease-in-out infinite;
        }

        @keyframes subtle-glow-wave {
          0%, 100% {
            color: #ffffff;
            text-shadow: 0 0 10px rgba(56, 189, 248, 0.2);
          }
          50% {
            color: #e0f2fe;
            text-shadow: 0 0 25px rgba(56, 189, 248, 0.6), 0 0 35px rgba(99, 102, 241, 0.3);
          }
        }

        .name-decor-node.node-1 {
          animation: float-node-1 5s ease-in-out infinite;
        }
        .name-decor-node.node-2 {
          animation: float-node-2 6s ease-in-out infinite;
        }
        .name-decor-node.node-3 {
          animation: float-node-3 7s ease-in-out infinite;
        }

        @keyframes float-node-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(6px, -8px); }
        }
        @keyframes float-node-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-6px, 6px); }
        }
        @keyframes float-node-3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(8px, -4px); }
        }
      `}</style>
    </section>
  );
}
