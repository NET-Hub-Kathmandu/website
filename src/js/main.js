(() => {
  'use strict';

  /* ---------------- Footer year ---------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Navbar scroll state ---------------- */
  const navbar = document.getElementById('navbar');
  const progressBar = document.getElementById('progressBar');
  const backToTop = document.getElementById('backToTop');

  function onScroll() {
    const scrollY = window.scrollY;
    navbar.classList.toggle('scrolled', scrollY > 12);
    backToTop.classList.toggle('show', scrollY > 500);

    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const pct = max > 0 ? (scrollY / max) * 100 : 0;
    progressBar.style.width = pct + '%';
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------------- Mobile nav toggle ---------------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------------- Cursor glow ---------------- */
  const glow = document.querySelector('.cursor-glow');
  if (glow && window.matchMedia('(min-width: 901px)').matches) {
    window.addEventListener('pointermove', (e) => {
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });
  }

  /* ---------------- Scroll reveal ---------------- */
  const revealEls = document.querySelectorAll('.reveal-up');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  /* ---------------- Animated counters ---------------- */
  const statNumbers = document.querySelectorAll('.stat-number');
  function animateCount(el) {
    const target = parseInt(el.dataset.target, 10) || 0;
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if ('IntersectionObserver' in window && statNumbers.length) {
    const countIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    statNumbers.forEach(el => countIO.observe(el));
  }

  /* ---------------- Hero particle network canvas ---------------- */
  const canvas = document.getElementById('networkCanvas');
  if (canvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const ctx = canvas.getContext('2d');
    const hero = canvas.closest('.hero');
    let width, height, dpr;
    let nodes = [];
    let animId = null;

    const NODE_COLOR = 'rgba(47, 86, 112, 0.55)';
    const LINE_COLOR = 'rgba(91, 135, 171, 0.22)';

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = hero.clientWidth;
      height = hero.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNodes();
    }

    function initNodes() {
      const density = width < 700 ? 18000 : 12000;
      const count = Math.max(24, Math.min(90, Math.floor((width * height) / density)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.8,
      }));
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      const linkDist = width < 700 ? 110 : 140;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            ctx.globalAlpha = 1 - dist / linkDist;
            ctx.strokeStyle = LINE_COLOR;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      ctx.fillStyle = NODE_COLOR;
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(step);
    }

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    });

    // Pause animation when hero is off-screen to save CPU
    const heroIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!animId) step();
        } else {
          if (animId) { cancelAnimationFrame(animId); animId = null; }
        }
      });
    }, { threshold: 0 });
    heroIO.observe(hero);

    resize();
  }

  /* ---------------- Tilt effect on cards ---------------- */
  const tiltCards = document.querySelectorAll('.tilt-card');
  if (window.matchMedia('(min-width: 901px)').matches) {
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(700px) rotateX(${py * -6}deg) rotateY(${px * 6}deg) translateY(-4px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }
})();
