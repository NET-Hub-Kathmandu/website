import React from 'react';

export function PhotoBreak({ imageSrc, tag, title }) {
  return (
    <section className="photo-break">
      <img src={imageSrc} alt={title} loading="lazy" />
      <div className="container photo-break-copy">
        <p className="section-tag">{tag}</p>
        <h2>{title}</h2>
      </div>
    </section>
  );
}
