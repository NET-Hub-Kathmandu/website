import React from 'react';
import { Link } from 'react-router-dom';
import { leadershipData } from '../data/leadershipData';

export function TeamPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container page-header-content">
          <div className="page-badge">
            <span className="page-badge-dot"></span>
            Leadership &amp; MVPs
          </div>
          <h1 className="page-title">Engineers Who Give Back to Kathmandu's Developer Community</h1>
          <p className="page-lead">
            Every workshop is designed and delivered by senior practitioners — people who spend their day in IDEs and production dashboards, not just slide decks.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">
              Speak or Mentor at a Session →
            </Link>
            <a
              href="https://www.linkedin.com/company/93383345"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Follow on LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* What Makes Our Leaders Different */}
      <section className="section">
        <div className="container">
          <p className="section-tag center">Grounded in real work</p>
          <h2 className="section-title center">Not speakers — practitioners</h2>
          <p className="section-text center narrow">
            Our organizers are employed as senior engineers building enterprise products in production. What they teach on Saturday, they applied on Monday.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', marginTop: '44px' }}>
            {[
              { stat: '10+', label: 'Years of combined .NET experience', desc: 'Real production engineering backgrounds from fintech, logistics, and enterprise SaaS.' },
              { stat: '.NET Foundation', label: 'Official recognition', desc: 'Recognized as an official .NET Foundation community group — one of 184+ worldwide.' },
              { stat: 'Microsoft MVPs', label: 'Community leadership', desc: 'Recognized by Microsoft for outstanding community contributions and technical excellence.' }
            ].map((item) => (
              <div key={item.stat} style={{ background: 'var(--bg)', padding: '36px 28px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, marginBottom: '6px', color: 'var(--accent)' }}>{item.stat}</div>
                <div style={{ fontWeight: 700, fontSize: '0.96rem', marginBottom: '8px' }}>{item.label}</div>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-dim)', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section leadership-section">
        <div className="container">
          <p className="section-tag">{leadershipData.tag}</p>
          <h2 className="section-title">{leadershipData.title}</h2>
          <p className="section-text">{leadershipData.description}</p>

          <div className="leaders-grid" style={{ marginTop: '44px' }}>
            {leadershipData.leaders.map((leader) => (
              <a
                key={leader.id}
                className="leader-card reveal-up"
                style={{ '--d': leader.delay }}
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="leader-linkedin" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 .001-4.124 2.062 2.062 0 0 1-.001 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
                  </svg>
                </span>
                <div className="leader-avatar">{leader.avatarText}</div>
                <h3>{leader.name}</h3>
                <p className="leader-role">{leader.role}</p>
                <p className="leader-bio">{leader.bio}</p>
              </a>
            ))}

            {leadershipData.joinCard && (
              <a
                className="leader-card leader-card-cta reveal-up"
                style={{ '--d': leadershipData.joinCard.delay }}
                href={leadershipData.joinCard.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="leader-linkedin" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 .001-4.124 2.062 2.062 0 0 1-.001 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
                  </svg>
                </span>
                <div className="leader-avatar leader-avatar-plus" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </div>
                <h3>{leadershipData.joinCard.title}</h3>
                <p className="leader-role">{leadershipData.joinCard.role}</p>
                <p className="leader-bio">{leadershipData.joinCard.bio}</p>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="section">
        <div className="container">
          <p className="section-tag center">Get involved</p>
          <h2 className="section-title center">Three ways to contribute</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '40px' }}>
            {[
              {
                num: '01',
                title: 'Submit a Talk',
                desc: 'Share your production experience — an architecture lesson, a performance war story, or an introduction to a tool you love. First-time speakers very welcome.',
                cta: 'Submit Proposal →',
                to: '/contact'
              },
              {
                num: '02',
                title: 'Mentor at Workshops',
                desc: 'Sit alongside junior developers during hands-on labs, answer questions, and help debug. No formal talk required — your expertise is enough.',
                cta: 'Reach Out →',
                to: '/contact'
              },
              {
                num: '03',
                title: 'Sponsor a Venue',
                desc: 'Offer your office space for events, cover catering, or co-brand an event. We run grassroots community events — every resource directly helps Nepali developers.',
                cta: 'Become a Sponsor →',
                to: '/contact'
              }
            ].map((card) => (
              <div key={card.num} className="event-card-rich reveal-up">
                <span style={{ fontFamily: 'var(--font-head)', fontSize: '2.2rem', fontWeight: 800, color: 'var(--border-strong)', lineHeight: 1, marginBottom: '16px', display: 'block' }}>
                  {card.num}
                </span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{card.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', marginBottom: '24px', flexGrow: 1 }}>{card.desc}</p>
                <Link to={card.to} className="btn btn-outline" style={{ alignSelf: 'flex-start', padding: '10px 20px', fontSize: '0.88rem' }}>
                  {card.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
