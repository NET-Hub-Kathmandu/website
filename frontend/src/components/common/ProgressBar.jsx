import React from 'react';

export function ProgressBar({ progress }) {
  return (
    <div
      className="progress-bar"
      id="progressBar"
      aria-hidden="true"
      style={{ width: `${progress}%` }}
    />
  );
}
