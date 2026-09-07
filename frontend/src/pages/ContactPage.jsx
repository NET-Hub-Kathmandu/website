import React, { useState } from 'react';

const FAQ = [
  {
    q: 'Are workshops completely free?',
    a: 'Yes — every workshop, talk, and conference we run is 100% free to attend. We will never charge for community events. Just RSVP on Meetup and show up.'
  },
  {
    q: 'Do I need prior .NET experience to attend?',
    a: 'Not at all. We design sessions for a mixed audience. Beginners get onboarding guidance; senior engineers get production-depth content. You will always find something valuable.'
  },
  {
    q: 'How do I propose a talk or workshop?',
    a: 'Fill in the form on this page and select "I want to speak or mentor." Our organizers review every submission and will respond within a week.'
  },
  {
    q: 'Can my company sponsor a venue or refreshments?',
    a: 'Absolutely. We are always looking for office spaces and catering sponsors. Use the form below and select "Sponsorship inquiry." Your company will be credited on all materials.'
  },
  {
    q: 'Are sessions recorded and shared online?',
    a: 'Most sessions are recorded with speaker consent and published on our YouTube channel. Past recordings are freely available.'
  }
];

export function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', type: 'general', message: '' });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to backend POST /api/contact when ready
    setSubmitted(true);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container page-header-content">
          <div className="page-badge">
            <span className="page-badge-dot"></span>
            Contact &amp; CFP
          </div>
          <h1 className="page-title">Let's Build Something Together in Kathmandu</h1>
          <p className="page-lead">
            Want to speak at our next session? Ready to mentor junior developers? Have a venue to offer? Or simply want to say hello — this is the right place.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">

            {/* Form */}
            <div className="reveal-up">
              <h2 style={{ fontSize: '1.6rem', marginBottom: '6px' }}>Send us a message</h2>
              <p style={{ color: 'var(--text-dim)', marginBottom: '28px', fontSize: '0.92rem' }}>
                We read every message personally. Expect a reply within 3–5 business days.
              </p>

              {submitted ? (
                <div
                  style={{
                    background: '#f0fdf4',
                    border: '1px solid #bbf7d0',
                    borderRadius: 'var(--radius)',
                    padding: '36px',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>✓</div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: '#065f46' }}>Message received!</h3>
                  <p style={{ color: '#047857', margin: 0, fontSize: '0.94rem' }}>
                    Thank you for reaching out. Our team will get back to you within a few days.
                  </p>
                </div>
              ) : (
                <form className="form-card" onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Full Name *</label>
                      <input
                        className="form-input"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Sunita Shrestha"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input
                        className="form-input"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@company.com.np"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="type">What's this about? *</label>
                    <select
                      className="form-select"
                      id="type"
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                    >
                      <option value="general">General enquiry</option>
                      <option value="speak">I want to speak or mentor</option>
                      <option value="sponsor">Venue or sponsorship inquiry</option>
                      <option value="press">Press or partnership</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  {form.type === 'speak' && (
                    <>
                      <div className="form-group">
                        <label className="form-label" htmlFor="topic">Talk or Workshop Topic</label>
                        <input
                          className="form-input"
                          id="topic"
                          name="topic"
                          type="text"
                          placeholder="e.g. High-performance gRPC with .NET 8"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="format">Format</label>
                        <select className="form-select" id="format" name="format" onChange={handleChange}>
                          <option value="talk">45-min Talk</option>
                          <option value="workshop">2-hr Hands-on Workshop</option>
                          <option value="lightning">15-min Lightning Demo</option>
                          <option value="panel">Panel Discussion</option>
                        </select>
                      </div>
                    </>
                  )}

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Your Message *</label>
                    <textarea
                      className="form-textarea"
                      id="message"
                      name="message"
                      placeholder="Tell us about yourself, your idea, or anything else on your mind..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      style={{ minHeight: '140px' }}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px' }}>
                    Send Message →
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className="reveal-up" style={{ '--d': '0.1s' }}>
              <div className="contact-info-card">
                <div className="contact-info-block">
                  <p className="section-tag" style={{ marginBottom: '12px' }}>Direct channels</p>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:info@dotnethubkathmandu.org" style={{ color: 'var(--accent)', fontWeight: 600 }}>
                      info@dotnethubkathmandu.org
                    </a>
                  </p>
                </div>

                <div className="contact-info-block">
                  <h4>Location</h4>
                  <p>Kathmandu, Bagmati Province, Nepal<br />Events held across central Kathmandu venues.</p>
                </div>

                <div className="contact-info-block">
                  <h4>Response time</h4>
                  <p>We typically respond to all messages within 3–5 business days. For urgent workshop logistics please email directly.</p>
                </div>

                {/* Mini CTA Links */}
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href="https://www.meetup.com/dot-net-hub-kathmandu/events/" target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent)', padding: '12px 16px', background: 'var(--bg)', borderRadius: '8px', border: '1px solid var(--border)', transition: 'background 0.2s' }}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Browse upcoming events on Meetup
                  </a>
                  <a href="https://www.linkedin.com/company/93383345" target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent)', padding: '12px 16px', background: 'var(--bg)', borderRadius: '8px', border: '1px solid var(--border)' }}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 .001-4.124 2.062 2.062 0 0 1-.001 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
                    </svg>
                    Follow on LinkedIn for announcements
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="faq-accordion reveal-up" style={{ '--d': '0.2s', marginTop: '72px' }}>
            <p className="section-tag center">Common questions</p>
            <h2 className="section-title center" style={{ marginBottom: '36px' }}>Frequently asked</h2>
            {FAQ.map((item, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{item.q}</span>
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s', flexShrink: 0 }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                {openFaq === i && (
                  <p className="faq-answer">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
