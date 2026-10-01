import React, { useEffect, useState } from 'react';

/**
 * CursorGlow Component
 * Follows mouse movement with a soft, cyber-cyan radial glow on desktop devices.
 * Automatically disabled on touch screens and when reduced motion is preferred.
 */
export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports hover (desktop) and reduced motion isn't set
    const hasHover = window.matchMedia('(hover: hover)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasHover || prefersReducedMotion) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        width: '420px',
        height: '420px',
        transform: 'translate(-50%, -50%)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.07) 0%, rgba(99, 102, 241, 0.03) 45%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 2,
        transition: 'transform 0.08s ease-out, opacity 0.2s ease-out',
        willChange: 'transform'
      }}
    />
  );
}
