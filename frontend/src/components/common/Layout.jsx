import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../common/Navbar';
import { Footer } from '../common/Footer';
import { ProgressBar } from '../common/ProgressBar';
import { BackToTop } from '../common/BackToTop';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { useIntersection } from '../../hooks/useIntersection';

export function Layout() {
  const { scrollProgress, isScrolled, showBackToTop, scrollToTop } = useScrollProgress();
  const { pathname } = useLocation();

  // Re-attach reveal observers on every route change
  useIntersection('.reveal-up, .reveal-h');

  // Scroll to top on navigation
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ProgressBar progress={scrollProgress} />
      <Navbar isScrolled={isScrolled} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop show={showBackToTop} onScrollToTop={scrollToTop} />
    </>
  );
}
