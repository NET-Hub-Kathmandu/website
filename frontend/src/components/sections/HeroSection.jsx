import React from 'react';
import { heroData } from '../../data/heroData';

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow reveal-up">{heroData.eyebrow}</p>
          <h1 className="hero-title reveal-up" style={{ '--d': '0.05s' }}>
            {heroData.title}
          </h1>
          <p className="hero-sub reveal-up" style={{ '--d': '0.15s' }}>
            {heroData.description}
          </p>
          <div className="hero-actions reveal-up" style={{ '--d': '0.25s' }}>
            <a
              href={heroData.primaryAction.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              {heroData.primaryAction.label}
            </a>
            <a href={heroData.secondaryAction.href} className="btn btn-ghost btn-lg">
              {heroData.secondaryAction.label}
            </a>
          </div>
        </div>

        <div className="hero-media reveal-up" style={{ '--d': '0.15s' }}>
          <div className="hero-photo">
            <img src={heroData.media.imageSrc} alt={heroData.media.alt} />
          </div>
          {heroData.media.chips.map((chip) => (
            <span key={chip.id} className={`floating-chip ${chip.className}`}>
              {chip.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
