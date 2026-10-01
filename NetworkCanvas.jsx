import React, { useEffect, useRef } from 'react';

/**
 * NetworkCanvas Component
 * Renders an abstract, animated digital network representing the bridge between
 * software logic, IoT hardware nodes, and digital data networks.
 * Reacts subtly to cursor movement and respects user motion preferences.
 */
export default function NetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for subtle attraction
    const mouse = {
      x: null,
      y: null,
      radius: 140
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes configuration
    const particleCount = Math.min(Math.floor((width * height) / 16000), 70);
    let particles = [];

    // IoT Data Packets traveling along network lines
    let packets = [];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 1.8 + 1;
        // IoT sensor nodes vs software compute nodes
        this.isIoTNode = Math.random() > 0.75;
        this.baseColor = this.isIoTNode ? 'rgba(45, 212, 191,' : 'rgba(56, 189, 248,';
        this.alpha = Math.random() * 0.4 + 0.3;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce gently at screen edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Subtle mouse repulsion/attraction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 1.2;
            this.y -= (dy / dist) * force * 1.2;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${this.baseColor} ${this.alpha})`;
        ctx.fill();

        // Extra soft glow for IoT nodes
        if (this.isIoTNode) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(45, 212, 191, 0.08)`;
          ctx.fill();
        }
      }
    }

    class Packet {
      constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
        this.progress = 0;
        this.speed = Math.random() * 0.015 + 0.008;
      }

      update() {
        this.progress += this.speed;
      }

      draw() {
        const x = this.p1.x + (this.p2.x - this.p1.x) * this.progress;
        const y = this.p1.y + (this.p2.y - this.p1.y) * this.progress;
        ctx.beginPath();
        ctx.arc(x, y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = '#38bdf8';
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    function initParticles() {
      particles = [];
      packets = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    initParticles();

    // Render loop
    const maxConnectionDistance = 140;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect particles with thin network lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.update();
        p1.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectionDistance) {
            const alpha = (1 - dist / maxConnectionDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // Occasionally spawn a telemetry data packet between connected nodes
            if (Math.random() < 0.0004 && packets.length < 8) {
              packets.push(new Packet(p1, p2));
            }
          }
        }
      }

      // Update and draw IoT data packets
      for (let k = packets.length - 1; k >= 0; k--) {
        const packet = packets[k];
        packet.update();
        packet.draw();
        if (packet.progress >= 1) {
          packets.splice(k, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.75
      }}
    />
  );
}
