import React from 'react';

export function BackToTop({ show, onScrollToTop }) {
  return (
    <button
      className={`back-to-top ${show ? 'show' : ''}`}
      id="backToTop"
      aria-label="Back to top"
      onClick={onScrollToTop}
    >
      ↑
    </button>
  );
}
