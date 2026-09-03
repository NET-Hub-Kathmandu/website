import React from 'react';
import { marqueeItems } from '../../data/marqueeData';

export function MarqueeSection() {
  // Duplicate items for infinite seamless scroll
  const loopedItems = [...marqueeItems, ...marqueeItems];

  return (
    <section className="marquee-section" aria-label="Technologies we work with">
      <div className="marquee">
        <div className="marquee-track" id="marqueeTrack">
          {loopedItems.map((item, index) => (
            <span key={`${item.name}-${index}`} className="marquee-item">
              <svg
                className="marquee-icon"
                viewBox={item.svg.viewBox}
                dangerouslySetInnerHTML={{ __html: item.svg.content }}
              />
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
