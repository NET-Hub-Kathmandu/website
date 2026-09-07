import React from 'react';
import { Link } from 'react-router-dom';
import { footerData } from '../../data/footerData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="footer-contours" aria-hidden="true">
        <svg viewBox="0 0 1440 480" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M -100,60  C 250,10  450,110 720,55  S 1150,5   1560,75" />
          <path d="M -100,110 C 260,65  460,160 730,105 S 1160,55  1560,125" />
          <path d="M -100,160 C 270,120 470,210 740,155 S 1170,105 1560,175" />
          <path d="M -100,210 C 280,170 480,260 750,205 S 1180,155 1560,225" />
          <path d="M -100,260 C 290,220 490,310 760,255 S 1190,205 1560,275" />
          <path d="M -100,310 C 300,270 500,360 770,305 S 1200,255 1560,325" />
          <path d="M -100,360 C 310,320 510,410 780,355 S 1210,305 1560,375" />
          <path d="M -100,410 C 320,370 520,460 790,405 S 1220,355 1560,425" />
        </svg>
      </div>

      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">
            <img src={footerData.brand.logo} alt="" width="32" height="32" />
          </span>
          <div>
            <strong>{footerData.brand.title}</strong>
            <p>{footerData.brand.description}</p>
          </div>

          <div className="footer-visual footer-visual-left" aria-hidden="true">
            <div
              className="footer-icon reveal-h"
              style={{ '--tx': '-40px', '--r': '-8deg', '--d': '0.05s', top: 0, left: 0 }}
            >
              <div className="footer-icon-inner icon-blue" style={{ '--bd': '0s' }}>
                <svg
                  viewBox="0 0 24 24"
                  width="21"
                  height="21"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 7 3 12l5 5M16 7l5 5-5 5" />
                </svg>
              </div>
            </div>
            <div
              className="footer-icon reveal-h"
              style={{ '--tx': '-40px', '--r': '7deg', '--d': '0.2s', top: '54px', left: '44px' }}
            >
              <div className="footer-icon-inner icon-dark" style={{ '--bd': '.4s' }}>
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 7l5 5-5 5M13 17h6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-cols">
            {footerData.sections.map((sec) => (
              <div key={sec.title}>
                <h5>{sec.title}</h5>
                {sec.links.map((link) =>
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link key={link.label} to={link.href}>
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            ))}
          </div>

          <div className="footer-visual footer-visual-right" aria-hidden="true">
            <div
              className="footer-icon reveal-h"
              style={{ '--tx': '40px', '--r': '-6deg', '--d': '0.05s', top: 0, left: '36px' }}
            >
              <div className="footer-icon-inner icon-white" style={{ '--bd': '0s' }}>
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#2f5670"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2.5 13.9 9 20 11l-6.1 2L12 20l-1.9-7L4 11l6.1-2L12 2.5Z" />
                </svg>
              </div>
            </div>
            <div
              className="footer-icon reveal-h"
              style={{ '--tx': '40px', '--r': '8deg', '--d': '0.2s', top: '66px', left: '86px' }}
            >
              <div className="footer-icon-inner icon-blue" style={{ '--bd': '.35s' }}>
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 18a4 4 0 0 1-.6-7.95A5 5 0 0 1 16 8.2a3.8 3.8 0 0 1-.7 7.8H7Z" />
                  <path d="M12 11v6M9.5 14.5 12 12l2.5 2.5" />
                </svg>
              </div>
            </div>
            <div
              className="footer-icon reveal-h"
              style={{ '--tx': '40px', '--r': '-9deg', '--d': '0.35s', top: '96px', left: '6px' }}
            >
              <div className="footer-icon-inner icon-white" style={{ '--bd': '.7s' }}>
                <svg
                  viewBox="0 0 24 24"
                  width="19"
                  height="19"
                  fill="none"
                  stroke="#2f5670"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                >
                  <circle cx="6" cy="6" r="2" />
                  <circle cx="6" cy="18" r="2" />
                  <circle cx="18" cy="12" r="2" />
                  <path d="M6 8v8M8 6h4a4 4 0 0 1 4 4v0" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            © {currentYear} .NET Hub Kathmandu.{' '}
            <a
              href={footerData.codeOfConduct.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {footerData.codeOfConduct.label}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
