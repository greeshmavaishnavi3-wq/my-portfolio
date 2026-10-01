import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Copy, Check, MessageSquare, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'idle' | 'success'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulated client-side submission feedback
    // NOTE FOR SANDHYA: Connect this to EmailJS, Formspree, or your backend API whenever ready!
    setSubmissionStatus('success');
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmissionStatus(null);
    }, 5000);
  };

  return (
    <section id="contact" className="section-wrapper" style={{ background: 'rgba(5, 9, 22, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MessageSquare size={14} />
            <span>TRANSMIT MESSAGE</span>
          </div>
          <h2 className="section-title">Let's Build Something Meaningful.</h2>
          <p className="section-subtitle">
            Whether you want to discuss SDE opportunities, algorithmic problem solving, or open source projects, my inbox is always open.
          </p>
        </div>

        {/* Contact Layout: Info Column + Form Column */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1020px',
            margin: '0 auto'
          }}
        >
          {/* Direct Channels Card */}
          <div
            className="glass-panel"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'linear-gradient(135deg, rgba(11, 20, 42, 0.8) 0%, rgba(15, 23, 42, 0.95) 100%)'
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
                  marginBottom: '1rem'
                }}
              >
                <Terminal size={15} />
                <span>// DIRECT ACCESS</span>
              </div>

              <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '1rem', fontWeight: 800 }}>
                Reach Out Directly
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                I am actively seeking SDE internships and entry-level Software Development Engineer opportunities. Feel free to connect or drop a note anytime.
              </p>

              {/* Direct Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Email Box */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1.15rem',
                    borderRadius: '0.75rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: 'rgba(56, 189, 248, 0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--cyan-primary)'
                      }}
                    >
                      <Mail size={18} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block' }}>EMAIL</span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy email address"
                    style={{
                      background: copiedEmail ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                      border: copiedEmail ? '1px solid #10b981' : '1px solid var(--border-subtle)',
                      borderRadius: '6px',
                      padding: '0.45rem',
                      color: copiedEmail ? '#10b981' : 'var(--text-secondary)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                </div>

                {/* LinkedIn Box */}
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.85rem 1.15rem',
                    borderRadius: '0.75rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    textDecoration: 'none',
                    color: '#ffffff',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                    e.currentTarget.style.background = 'rgba(56, 189, 248, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(99, 102, 241, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#818cf8'
                    }}
                  >
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block' }}>LINKEDIN</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Connect on LinkedIn</span>
                  </div>
                </a>

                {/* GitHub Box */}
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.85rem 1.15rem',
                    borderRadius: '0.75rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    textDecoration: 'none',
                    color: '#ffffff',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.4)';
                    e.currentTarget.style.background = 'rgba(56, 189, 248, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff'
                    }}
                  >
                    <Github size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block' }}>GITHUB</span>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Explore Repositories</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Location & College Note */}
            <div style={{ marginTop: '2rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
              <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                Based at TRR College Of Technology &bull; Open to Remote &amp; On-Site Roles
              </span>
            </div>
          </div>

          {/* Interactive Ready-to-Connect Form */}
          <div
            className="glass-panel"
            style={{
              padding: '2.5rem',
              border: '1px solid rgba(56, 189, 248, 0.2)'
            }}
          >
            <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '0.5rem', fontWeight: 700 }}>
              Send a Transmission
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.75rem' }}>
              Form is configured for instant connection with Formspree, EmailJS, or any backend endpoint.
            </p>

            {submissionStatus === 'success' ? (
              <div
                style={{
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10b981',
                    margin: '0 auto 1rem auto'
                  }}
                >
                  <Check size={22} />
                </div>
                <h4 style={{ color: '#ffffff', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                  Transmission Logged!
                </h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.85rem' }}>
                  Thank you for reaching out. Once Sandhya connects an email service API, this will immediately deliver to her inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '0.45rem',
                      letterSpacing: '0.04em'
                    }}
                  >
                    NAME *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name or company"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '0.65rem',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--cyan-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '0.45rem',
                      letterSpacing: '0.04em'
                    }}
                  >
                    EMAIL *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '0.65rem',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--cyan-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '0.45rem',
                      letterSpacing: '0.04em'
                    }}
                  >
                    MESSAGE *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '0.65rem',
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--cyan-primary)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.85rem',
                    fontSize: '0.95rem',
                    cursor: 'pointer'
                  }}
                >
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
