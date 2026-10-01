import React, { useState } from 'react';
import { Network, Terminal, Sparkles, Cpu, Code2, Database, Globe, Lightbulb, Compass, Rocket } from 'lucide-react';
import { digitalDNANodes } from '../data/portfolioData';

const NODE_ICONS = {
  programming: Code2,
  web: Globe,
  data: Database,
  iot: Cpu,
  problemSolving: Lightbulb,
  projects: Rocket,
  learning: Compass
};

export default function DigitalDNA() {
  const [activeNodeId, setActiveNodeId] = useState('problemSolving');

  // Find active node object
  const activeNode = digitalDNANodes.find(n => n.id === activeNodeId) || digitalDNANodes[0];

  // Helper to test if a connection between two nodes should be highlighted
  const isLineHighlighted = (nodeAId, nodeBId) => {
    if (!activeNodeId) return false;
    return (
      (nodeAId === activeNodeId && activeNode.connections.includes(nodeBId)) ||
      (nodeBId === activeNodeId && activeNode.connections.includes(nodeAId))
    );
  };

  // Generate unique pairs of connected lines
  const connectionPairs = [];
  const visitedPairs = new Set();

  digitalDNANodes.forEach(node => {
    node.connections.forEach(targetId => {
      const pairKey = [node.id, targetId].sort().join('--');
      if (!visitedPairs.has(pairKey)) {
        visitedPairs.add(pairKey);
        const targetNode = digitalDNANodes.find(n => n.id === targetId);
        if (targetNode) {
          connectionPairs.push({
            from: node,
            to: targetNode,
            key: pairKey
          });
        }
      }
    });
  });

  return (
    <section id="dna" className="section-wrapper" style={{ background: 'rgba(5, 9, 22, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Network size={14} />
            <span>INTERACTIVE KNOWLEDGE CONSTELLATION</span>
          </div>
          <h2 className="section-title">My Digital DNA</h2>
          <p className="section-subtitle">
            Hover or tap any neural node to explore how programming, IoT, data, and problem solving interconnect in my engineering journey.
          </p>
        </div>

        {/* Network Constellation Canvas & Diagnostic Panel */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            alignItems: 'center'
          }}
        >
          {/* Visual Constellation Area */}
          <div
            className="glass-panel"
            style={{
              position: 'relative',
              height: '480px',
              width: '100%',
              borderRadius: '1.25rem',
              background: 'radial-gradient(ellipse at center, rgba(14, 25, 55, 0.7) 0%, rgba(7, 13, 29, 0.95) 100%)',
              border: '1px solid rgba(56, 189, 248, 0.2)',
              overflow: 'hidden',
              boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.8), inset 0 0 40px rgba(56, 189, 248, 0.05)'
            }}
          >
            {/* Background Grid Pattern */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
                opacity: 0.6,
                pointerEvents: 'none'
              }}
            />

            {/* SVG Connecting Lines */}
            <svg
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 2
              }}
            >
              <defs>
                <linearGradient id="activeLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#818cf8" stopOpacity="0.9" />
                </linearGradient>
                <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {connectionPairs.map((pair) => {
                const highlighted = isLineHighlighted(pair.from.id, pair.to.id);
                return (
                  <line
                    key={pair.key}
                    x1={`${pair.from.x}%`}
                    y1={`${pair.from.y}%`}
                    x2={`${pair.to.x}%`}
                    y2={`${pair.to.y}%`}
                    stroke={highlighted ? "url(#activeLineGradient)" : "rgba(56, 189, 248, 0.18)"}
                    strokeWidth={highlighted ? "2.6" : "1.2"}
                    strokeDasharray={highlighted ? "none" : "4 4"}
                    filter={highlighted ? "url(#lineGlow)" : "none"}
                    style={{
                      transition: 'all 0.35s ease',
                      opacity: activeNodeId ? (highlighted ? 1 : 0.2) : 0.6
                    }}
                  />
                );
              })}
            </svg>

            {/* Interactive Nodes */}
            {digitalDNANodes.map((node) => {
              const Icon = NODE_ICONS[node.id] || Network;
              const isActive = activeNodeId === node.id;
              const isConnected = activeNode?.connections.includes(node.id);

              return (
                <div
                  key={node.id}
                  onClick={() => setActiveNodeId(node.id)}
                  onMouseEnter={() => setActiveNodeId(node.id)}
                  style={{
                    position: 'absolute',
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    transform: 'translate(-50%, -50%)',
                    zIndex: isActive ? 10 : 5,
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  {/* Outer Ripple / Halo on Active */}
                  {isActive && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: '-14px',
                        borderRadius: '50%',
                        background: `radial-gradient(circle, ${node.color}33 0%, transparent 70%)`,
                        animation: 'pulse-glow 2s infinite',
                        pointerEvents: 'none'
                      }}
                    />
                  )}

                  {/* Core Node Circle */}
                  <div
                    style={{
                      width: isActive ? '62px' : isConnected ? '48px' : '44px',
                      height: isActive ? '62px' : isConnected ? '48px' : '44px',
                      borderRadius: '50%',
                      background: isActive
                        ? `linear-gradient(135deg, ${node.color}, #070d1d)`
                        : isConnected
                        ? 'rgba(18, 30, 60, 0.95)'
                        : 'rgba(11, 20, 42, 0.85)',
                      border: isActive
                        ? `2px solid ${node.color}`
                        : isConnected
                        ? `1.5px solid ${node.color}99`
                        : '1px solid rgba(255, 255, 255, 0.15)',
                      boxShadow: isActive
                        ? `0 0 25px ${node.color}80, 0 0 50px ${node.color}40`
                        : isConnected
                        ? `0 0 15px ${node.color}40`
                        : '0 4px 15px rgba(0, 0, 0, 0.5)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isActive ? '#ffffff' : isConnected ? node.color : 'var(--text-secondary)',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      position: 'relative'
                    }}
                  >
                    <Icon size={isActive ? 24 : 18} />
                  </div>

                  {/* Node Label Below */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      marginTop: '6px',
                      whiteSpace: 'nowrap',
                      textAlign: 'center'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: isActive ? '0.78rem' : '0.7rem',
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? '#ffffff' : isConnected ? node.color : 'var(--text-secondary)',
                        textShadow: isActive ? '0 0 8px rgba(56, 189, 248, 0.8)' : 'none',
                        background: 'rgba(3, 7, 18, 0.75)',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        border: isActive ? `1px solid ${node.color}60` : '1px solid transparent',
                        transition: 'all 0.25s ease'
                      }}
                    >
                      {node.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cybernetic Diagnostic Console for Selected Node */}
          <div
            className="glass-panel"
            style={{
              padding: '2rem 2.25rem',
              border: `1px solid ${activeNode.color}50`,
              background: 'linear-gradient(135deg, rgba(11, 20, 42, 0.85) 0%, rgba(15, 23, 42, 0.95) 100%)',
              boxShadow: `0 15px 35px -10px rgba(0, 0, 0, 0.7), 0 0 25px -10px ${activeNode.color}40`,
              position: 'relative'
            }}
          >
            {/* Terminal Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid var(--border-subtle)',
                paddingBottom: '0.85rem',
                marginBottom: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Terminal size={16} color={activeNode.color} />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: activeNode.color,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase'
                  }}
                >
                  DNA_NODE :: {activeNode.id}
                </span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)'
                }}
              >
                STATUS: SYNCHRONIZED
              </div>
            </div>

            {/* Node Title & Tagline */}
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '1.6rem', color: '#ffffff', fontWeight: 800 }}>
                  {activeNode.title}
                </h3>
                <span
                  style={{
                    padding: '0.2rem 0.65rem',
                    borderRadius: '9999px',
                    background: `${activeNode.color}1a`,
                    border: `1px solid ${activeNode.color}40`,
                    color: activeNode.color,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem'
                  }}
                >
                  {activeNode.tagline}
                </span>
              </div>
            </div>

            {/* Node Explanation */}
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                lineHeight: 1.7,
                marginBottom: '1.5rem'
              }}
            >
              {activeNode.description}
            </p>

            {/* Connected Nodes Badges */}
            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  display: 'block',
                  marginBottom: '0.65rem',
                  letterSpacing: '0.05em'
                }}
              >
                ACTIVE NEURAL CONNECTIONS:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {activeNode.connections.map(targetId => {
                  const target = digitalDNANodes.find(n => n.id === targetId);
                  if (!target) return null;
                  return (
                    <button
                      key={targetId}
                      type="button"
                      onClick={() => setActiveNodeId(targetId)}
                      style={{
                        padding: '0.35rem 0.8rem',
                        borderRadius: '0.5rem',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = target.color;
                        e.currentTarget.style.color = target.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                    >
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: target.color }} />
                      <span>{target.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
