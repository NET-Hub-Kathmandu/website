import React, { useState, useEffect } from 'react';
import { getLeadership } from '../../services/leadersService';

export function LeadershipSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;
    getLeadership().then((res) => {
      if (mounted) setData(res);
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!data) return null;

  return (
    <section className="section leadership-section" id="leadership">
      <div className="container">
        <p className="section-tag center">{data.tag}</p>
        <h2 className="section-title center">{data.title}</h2>
        <p className="section-text center narrow">{data.description}</p>

        <div className="leaders-grid">
          {data.leaders.map((leader) => (
            <a
              key={leader.id || leader.name}
              className="leader-card reveal-up"
              style={{ '--d': leader.delay || '0s' }}
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

          {data.joinCard && (
            <a
              className="leader-card leader-card-cta reveal-up"
              style={{ '--d': data.joinCard.delay || '0.2s' }}
              href={data.joinCard.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="leader-linkedin" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 .001-4.124 2.062 2.062 0 0 1-.001 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
                </svg>
              </span>
              <div className="leader-avatar leader-avatar-plus" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
              <h3>{data.joinCard.title}</h3>
              <p className="leader-role">{data.joinCard.role}</p>
              <p className="leader-bio">{data.joinCard.bio}</p>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
