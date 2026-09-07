import React, { useState, useEffect } from 'react';
import { getTechStack } from '../../services/techStackService';

export function TechStackSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;
    getTechStack().then((res) => {
      if (mounted) setData(res);
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!data) return null;

  return (
    <section className="section" id="stack">
      <div className="container">
        <p className="section-tag center">{data.tag}</p>
        <h2 className="section-title center">{data.title}</h2>
        <p className="section-text center narrow">{data.subtitle}</p>

        <div className="stack-list">
          {data.items.map((item) => (
            <div
              key={item.id || item.title}
              className="stack-item reveal-up"
              style={{ '--d': item.delay || '0s' }}
            >
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
