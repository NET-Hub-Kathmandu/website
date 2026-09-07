import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { eventsData } from '../data/eventsData';

export function EventsPage() {
  const [filter, setFilter] = useState('all');

  const filteredEvents = eventsData.events.filter((ev) => {
    if (filter === 'all') return true;
    if (filter === 'upcoming') return ev.status === 'upcoming';
    return ev.category === filter;
  });

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container page-header-content">
          <div className="page-badge">
            <span className="page-badge-dot"></span>
            Events &amp; Workshops
          </div>
          <h1 className="page-title">Technical Gathering &amp; Dev Days in Kathmandu</h1>
          <p className="page-lead">
            Hands-on workshops, keynotes, and architecture deep-dives organized by senior leaders and Microsoft MVPs. Free and open to every developer in Nepal.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://www.meetup.com/dot-net-hub-kathmandu/events/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              RSVP on Meetup.com ↗
            </a>
            <Link to="/contact" className="btn btn-ghost">
              Submit a Talk (CFP)
            </Link>
          </div>
        </div>
      </section>

      {/* Events Listing */}
      <section className="section">
        <div className="container">
          {/* Interactive Filter Pills */}
          <div className="filter-bar">
            <button
              className={`filter-pill ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Gatherings ({eventsData.events.length})
            </button>
            <button
              className={`filter-pill ${filter === 'upcoming' ? 'active' : ''}`}
              onClick={() => setFilter('upcoming')}
            >
              Upcoming Schedule
            </button>
            <button
              className={`filter-pill ${filter === 'workshops' ? 'active' : ''}`}
              onClick={() => setFilter('workshops')}
            >
              Hands-on Workshops
            </button>
            <button
              className={`filter-pill ${filter === 'conferences' ? 'active' : ''}`}
              onClick={() => setFilter('conferences')}
            >
              Conferences
            </button>
            <button
              className={`filter-pill ${filter === 'devdays' ? 'active' : ''}`}
              onClick={() => setFilter('devdays')}
            >
              Dev Days
            </button>
          </div>

          {/* Cards Grid */}
          <div className="events-detailed-grid">
            {filteredEvents.map((ev) => (
              <div key={ev.id} className="event-card-rich reveal-up" style={{ '--d': ev.delay }}>
                <div className="event-card-meta">
                  <span className="event-tag-badge">{ev.tag}</span>
                  <span className="event-date-chip">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {ev.date}
                  </span>
                </div>

                <h3 className="event-card-title">{ev.title}</h3>
                <p className="event-card-desc">{ev.description}</p>

                <div className="event-details-row">
                  <div className="event-detail-item">
                    <svg className="event-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>{ev.time}</span>
                  </div>
                  <div className="event-detail-item">
                    <svg className="event-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>{ev.venue}</span>
                  </div>
                  <div className="event-detail-item">
                    <svg className="event-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>Speaker: {ev.speaker}</span>
                  </div>
                </div>

                {/* Topic tags */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  {ev.topics.map((topic, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: '600',
                        color: 'var(--text-dim)',
                        background: 'var(--surface-alt)',
                        padding: '3px 9px',
                        borderRadius: '4px',
                        border: '1px solid var(--border)'
                      }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="event-card-action">
                  <a
                    href={ev.meetupUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    style={{ padding: '9px 18px', fontSize: '0.86rem' }}
                  >
                    {ev.status === 'upcoming' ? 'RSVP on Meetup' : 'View Event Archive'}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Call for Speakers Banner */}
          <div
            style={{
              background: 'radial-gradient(90% 100% at 50% 0%, #f0f7ff 0%, #ffffff 100%)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '44px 36px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '24px',
              flexWrap: 'wrap',
              marginTop: '40px'
            }}
          >
            <div style={{ maxWidth: '600px' }}>
              <span className="section-tag" style={{ marginBottom: '8px' }}>Call for Speakers</span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Have something to share with Kathmandu developers?</h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-dim)', margin: 0 }}>
                Whether it is an architectural lesson from production, an introduction to C# 13, or your journey with Azure serverless — our stage is welcoming to both first-time and veteran speakers.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Submit Session Proposal →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
