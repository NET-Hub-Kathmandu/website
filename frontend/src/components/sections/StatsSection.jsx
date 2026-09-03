import React, { useState, useEffect } from 'react';
import { getStats } from '../../services/statsService';
import { useCountUp } from '../../hooks/useCountUp';

function StatCard({ target, suffix, label, delay }) {
  const { count, elementRef } = useCountUp(target);

  return (
    <div className="stat reveal-up" style={{ '--d': delay }} ref={elementRef}>
      <span className="stat-number">
        {count}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export function StatsSection() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    let mounted = true;
    getStats().then((data) => {
      if (mounted) setStats(data);
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="section stats-section" id="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <StatCard
              key={stat.id}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
