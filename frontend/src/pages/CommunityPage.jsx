import React from 'react';
import { Link } from 'react-router-dom';
import { communityData } from '../data/communityData';

const socialIcons = {
  meetup: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4.5" width="18" height="16" rx="2.4" />
      <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
      <path d="M8.2 14.2l2.4 2.4 5-5.2" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 .001-4.124 2.062 2.062 0 0 1-.001 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M23.498 6.186a2.999 2.999 0 0 0-2.113-2.117C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.385.524A2.999 2.999 0 0 0 .502 6.186 31.26 31.26 0 0 0 0 12a31.26 31.26 0 0 0 .502 5.814 2.999 2.999 0 0 0 2.113 2.117c1.88.524 9.385.524 9.385.524s7.505 0 9.385-.524a2.999 2.999 0 0 0 2.113-2.117A31.26 31.26 0 0 0 24 12a31.26 31.26 0 0 0-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="5" width="19" height="14" rx="2.4" />
      <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
    </svg>
  )
};

const channelColors = {
  meetup: { bg: '#fff0f3', accent: '#ED1C40', label: 'RSVP Platform' },
  linkedin: { bg: '#f0f7ff', accent: '#0077B5', label: 'Professional Network' },
  youtube: { bg: '#fff5f5', accent: '#FF0000', label: 'Video Recordings' },
  github: { bg: '#f6f8fa', accent: '#24292e', label: 'Open Source Code' },
  facebook: { bg: '#f0f2ff', accent: '#1877F2', label: 'Community Updates' },
  email: { bg: '#f0fdf4', accent: '#059669', label: 'Direct Contact' }
};

export function CommunityPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container page-header-content">
          <div className="page-badge">
            <span className="page-badge-dot"></span>
            Community Hub
          </div>
          <h1 className="page-title">933 Developers and Growing — Be Part of the Story</h1>
          <p className="page-lead">
            We exist wherever Kathmandu developers spend their time — from Meetup RSVPs and LinkedIn updates to recorded sessions on YouTube and open-source code on GitHub.
          </p>
          <a
            href="https://www.meetup.com/dot-net-hub-kathmandu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Join on Meetup.com →
          </a>
        </div>
      </section>

      {/* Channel Cards */}
      <section className="section">
        <div className="container">
          <p className="section-tag center">Where to find us</p>
          <h2 className="section-title center">Every channel, one community</h2>
          <p className="section-text center narrow">
            Follow us on any platform to stay updated on workshops, recordings, open-source releases, and new speakers.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '44px' }}>
            {communityData.links.map((link) => {
              const colors = channelColors[link.type] || { bg: 'var(--surface-alt)', accent: 'var(--accent)', label: 'Channel' };
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target={link.type !== 'email' ? '_blank' : undefined}
                  rel={link.type !== 'email' ? 'noopener noreferrer' : undefined}
                  className="event-card-rich reveal-up"
                  style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}
                >
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: colors.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: colors.accent,
                      marginBottom: '18px',
                      border: `1px solid ${colors.accent}22`
                    }}
                  >
                    {socialIcons[link.type]}
                  </div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: colors.accent, marginBottom: '6px' }}>
                    {colors.label}
                  </span>
                  <h3 style={{ fontSize: '1.18rem', marginBottom: '8px' }}>{link.name}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', margin: 0 }}>{link.description}</p>
                  <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border)', fontSize: '0.84rem', fontWeight: 700, color: colors.accent }}>
                    Visit {link.name} →
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Values */}
      <section className="section" style={{ background: 'var(--surface-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p className="section-tag center">Our guiding principles</p>
          <h2 className="section-title center">Built on mutual respect and practical learning</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginTop: '44px' }}>
            {[
              { title: 'Welcoming at every level', body: 'Whether you wrote your first if statement last week or have been deploying distributed systems for a decade — you belong here.' },
              { title: 'Practitioner-led teaching', body: 'No slideware without code. Every session includes live examples, real tools, and honest lessons from production environments.' },
              { title: 'Permanently free', body: '100% free to attend, forever. No paid tiers, no upsells — backed only by community effort and generous venue sponsors.' },
              { title: 'Code of Conduct enforced', body: 'All participants agree to our Event Code of Conduct. Harassment of any kind ends with immediate removal from the event.' }
            ].map((v) => (
              <div key={v.title} style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '28px' }}>
                <h4 style={{ fontSize: '1.02rem', marginBottom: '10px' }}>{v.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', margin: 0 }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="section community-section">
        <div className="container community-inner reveal-up">
          <h2 className="section-title center">{communityData.title}</h2>
          <p className="section-text center narrow">{communityData.description}</p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', marginTop: '28px', flexWrap: 'wrap' }}>
            <a
              href="https://www.meetup.com/dot-net-hub-kathmandu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Join on Meetup.com
            </a>
            <Link to="/contact" className="btn btn-ghost btn-lg">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
