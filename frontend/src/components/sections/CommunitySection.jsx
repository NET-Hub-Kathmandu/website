import React from 'react';
import { communityData } from '../../data/communityData';

function getCommunityIcon(type) {
  switch (type) {
    case 'meetup':
      return (
        <svg
          viewBox="0 0 24 24"
          width="19"
          height="19"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4.5" width="18" height="16" rx="2.4" />
          <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
          <path d="M8.2 14.2l2.4 2.4 5-5.2" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 .001-4.124 2.062 2.062 0 0 1-.001 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor">
          <path d="M23.498 6.186a2.999 2.999 0 0 0-2.113-2.117C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.385.524A2.999 2.999 0 0 0 .502 6.186 31.26 31.26 0 0 0 0 12a31.26 31.26 0 0 0 .502 5.814 2.999 2.999 0 0 0 2.113 2.117c1.88.524 9.385.524 9.385.524s7.505 0 9.385-.524a2.999 2.999 0 0 0 2.113-2.117A31.26 31.26 0 0 0 24 12a31.26 31.26 0 0 0-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
        </svg>
      );
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case 'email':
    default:
      return (
        <svg
          viewBox="0 0 24 24"
          width="19"
          height="19"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2.5" y="5" width="19" height="14" rx="2.4" />
          <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
        </svg>
      );
  }
}

export function CommunitySection() {
  return (
    <section className="section community-section" id="community">
      <div className="container community-inner reveal-up">
        <h2 className="section-title center">{communityData.title}</h2>
        <p className="section-text center narrow">{communityData.description}</p>

        <div className="community-links">
          {communityData.links.map((link) => (
            <a
              key={link.id}
              className="community-link"
              href={link.url}
              target={link.type === 'email' ? undefined : '_blank'}
              rel={link.type === 'email' ? undefined : 'noopener noreferrer'}
            >
              <span className="community-link-icon">
                {getCommunityIcon(link.type)}
              </span>
              <span>
                <strong>{link.name}</strong>
                <small>{link.description}</small>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
