import React, { useState, useEffect } from 'react';
import { getEvents } from '../../services/eventsService';

export function EventsSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;
    getEvents().then((res) => {
      if (mounted) setData(res);
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!data) return null;

  return (
    <section className="section" id="events">
      <div className="container">
        <div className="section-head-row reveal-up">
          <div>
            <p className="section-tag">{data.tag}</p>
            <h2 className="section-title">{data.title}</h2>
          </div>
          <a
            href={data.seeAllUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            See all events →
          </a>
        </div>

        <div className="events-grid">
          {data.events.map((event) => (
            <div
              key={event.id}
              className="event-card reveal-up"
              style={{ '--d': event.delay || '0s' }}
            >
              <span className="event-tag">{event.tag}</span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>

        {data.livePanel && (
          <a
            href={data.livePanel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="live-events-panel reveal-up"
          >
            <span className="live-events-icon live-events-icon-meetup">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <circle cx="9" cy="15" r="6.4" fill="#ED1C40" />
                <circle cx="15.5" cy="8" r="5.2" fill="#ED1C40" opacity=".82" />
                <circle cx="17.5" cy="16.5" r="3.1" fill="#ED1C40" opacity=".65" />
              </svg>
            </span>
            <span className="live-events-text">
              <strong>{data.livePanel.title}</strong>
              <small>{data.livePanel.subtitle}</small>
            </span>
            <span className="live-events-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        )}
      </div>
    </section>
  );
}
