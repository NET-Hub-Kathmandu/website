import React from 'react';
import { aboutData } from '../../data/aboutData';

export function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container feature-grid">
        <div className="feature-media reveal-up">
          <img
            src={aboutData.image.src}
            alt={aboutData.image.alt}
            loading="lazy"
          />
        </div>
        <div className="reveal-up" style={{ '--d': '0.1s' }}>
          <p className="section-tag">{aboutData.tag}</p>
          <h2 className="section-title">{aboutData.title}</h2>
          <p className="section-text">{aboutData.description}</p>
          <ul className="check-list">
            {aboutData.highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
