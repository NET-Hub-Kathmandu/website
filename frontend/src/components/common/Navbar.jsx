import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navData } from '../../data/navData';

export function Navbar({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Close on ESC key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container nav-inner">

        {/* Brand */}
        <Link to={navData.brand.href} className="brand" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            <img src={navData.brand.logo} alt="" width="34" height="34" />
          </span>
          <span className="brand-text">
            {navData.brand.name}<b>{navData.brand.highlight}</b>
          </span>
        </Link>

        {/* Nav links */}
        <nav className={`nav-links ${isOpen ? 'open' : ''}`} id="navLinks" aria-label="Main navigation">
          {navData.links.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              end={link.end}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={navData.joinCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary nav-cta"
        >
          {navData.joinCta.label}
        </a>

        {/* Hamburger */}
        <button
          className={`nav-toggle ${isOpen ? 'open' : ''}`}
          id="navToggle"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
