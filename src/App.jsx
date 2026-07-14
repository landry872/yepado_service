import { useEffect, useState } from 'react';
import Nav from './components/Nav.jsx';
import MobilePanel from './components/MobilePanel.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Approche from './components/Approche.jsx';
import Marches from './components/Marches.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  useEffect(() => {
    const nav = document.getElementById('yn-nav');
    const inner = document.getElementById('yn-nav-inner');
    const prog = document.getElementById('yn-progress');
    const logoImg = document.getElementById('yn-logo-img');
    const navLinks = document.querySelectorAll('#yn-navlinks [data-navlink]');

    const checkReveal = () => {
      const vh = window.innerHeight || 800;
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        if (el.dataset.shown) return;
        if (el.getBoundingClientRect().top < vh * 0.9) {
          const d = parseInt(el.getAttribute('data-delay') || '0', 10);
          el.style.transition = 'none';
          el.style.animation = 'ynRise .85s cubic-bezier(.22,1,.36,1) ' + d + 'ms both';
          el.dataset.shown = '1';
        }
      });
    };

    const spy = () => {
      const blocks = ['mission', 'vision', 'valeurs', 'chiffres'];
      const section = document.getElementById('a-propos');
      if (!section) return;
      const mid = window.innerHeight * 0.4;
      let active = blocks[0];
      blocks.forEach((id) => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top <= mid) active = id; });
      document.querySelectorAll('[data-spy]').forEach((a) => {
        const on = a.getAttribute('data-spy') === active;
        a.style.color = on ? '#32348A' : '#9A9AAd';
        a.style.opacity = on ? '1' : '.75';
        const dot = a.querySelector('[data-spy-dot]');
        if (dot) { dot.style.transform = on ? 'scale(1)' : 'scale(.42)'; dot.style.background = on ? '#32348A' : '#C9CAE6'; dot.style.boxShadow = on ? '0 0 0 5px rgba(50,52,138,.14)' : 'none'; }
        const lab = a.querySelector('[data-spy-label]');
        if (lab) lab.style.fontWeight = on ? '600' : '500';
      });
      const sr = section.getBoundingClientRect();
      const frac = Math.max(0, Math.min(1, (mid - sr.top) / (sr.height - window.innerHeight * 0.5)));
      const fill = document.getElementById('yn-about-fill');
      if (fill) fill.style.height = (frac * 100) + '%';
    };

    let lastY = window.scrollY;
    let svcCards = null;
    let chIn = false;

    const onScroll = () => {
      const y = window.scrollY;
      const doc = document.documentElement;
      const max = (doc.scrollHeight - window.innerHeight) || 1;
      if (prog) prog.style.width = Math.min(100, (y / max) * 100) + '%';
      if (nav) {
        if (y > 40) {
          nav.style.padding = '12px 0';
          if (inner) { inner.style.background = 'rgba(255,255,255,.72)'; inner.style.backdropFilter = 'blur(22px) saturate(1.5)'; inner.style.webkitBackdropFilter = 'blur(22px) saturate(1.5)'; inner.style.boxShadow = '0 10px 34px -20px rgba(50,52,138,.4)'; inner.style.borderColor = 'rgba(50,52,138,.1)'; }
        } else {
          nav.style.padding = '22px 0';
          if (inner) { inner.style.background = 'transparent'; inner.style.backdropFilter = 'none'; inner.style.webkitBackdropFilter = 'none'; inner.style.boxShadow = 'none'; inner.style.borderColor = 'transparent'; }
        }
        if (y > 400 && y > lastY) nav.style.transform = 'translateY(-130%)';
        else nav.style.transform = 'translateY(0)';
        const overHero = y <= 40;
        if (logoImg) logoImg.src = overHero ? '/assets/yepado-logo-white.svg' : '/assets/yepado-logo.svg';
        navLinks.forEach((l) => {
          if (l.dataset.active === '1' && !overHero) return;
          l.style.color = overHero ? '#fff' : '#1A1A1A';
          if (overHero) l.style.background = 'transparent';
        });
      }
      checkReveal();
      spy();

      const asec = document.querySelector('[data-approche-sec]');
      const track = document.getElementById('yn-approach-htrack');
      if (asec && track) {
        const rect = asec.getBoundingClientRect();
        const scrollable = asec.offsetHeight - window.innerHeight;
        const p = Math.max(0, Math.min(1, -rect.top / (scrollable || 1)));
        const maxShift = Math.max(0, track.scrollWidth - track.parentElement.clientWidth);
        track.style.transform = 'translateX(' + (-maxShift * p).toFixed(1) + 'px)';
        const dots = document.querySelectorAll('[data-hdot]');
        const n = dots.length;
        const segs = document.querySelectorAll('[data-hconn]');
        segs.forEach((sg, i) => {
          const segP = Math.max(0, Math.min(1, p * segs.length - i));
          const f = sg.querySelector('[data-hconn-fill]');
          if (f) f.style.width = (segP * 100) + '%';
        });
        const active = Math.min(n - 1, Math.round(p * (n - 1)));
        dots.forEach((d, i) => {
          const on = i <= active;
          d.style.opacity = on ? '1' : '.5';
          const num = d.querySelector('[data-hdot-num]');
          const lab = d.querySelector('[data-hdot-label]');
          const mk = d.querySelector('[data-hdot-mark]');
          if (num) num.style.color = (i === active) ? '#32348A' : (on ? '#6669D6' : '#9A9AAd');
          if (lab) lab.style.color = (i === active) ? '#1A1A1A' : '#9A9AAd';
          if (mk) {
            mk.style.transform = (i === active) ? 'scale(1)' : 'scale(.5)';
            mk.style.background = on ? '#32348A' : '#C9CAE6';
            mk.style.boxShadow = (i === active) ? '0 0 0 5px rgba(50,52,138,.14)' : 'none';
          }
        });
        const cx = window.innerWidth / 2;
        document.querySelectorAll('[data-hstep]').forEach((c) => {
          const r = c.getBoundingClientRect();
          const mid = r.left + r.width / 2;
          const dist = Math.abs(mid - cx) / (window.innerWidth * 0.9);
          const k = Math.max(0, 1 - dist);
          c.style.opacity = Math.max(0.72, 1 - dist * 0.45).toFixed(3);
          c.style.transform = 'scale(' + (0.98 + 0.02 * k).toFixed(3) + ')';
        });
        const note = document.getElementById('yn-hprogress-note');
        if (note) note.style.opacity = p > 0.02 ? '0' : '1';
      }

      svcCards = svcCards || Array.prototype.slice.call(document.querySelectorAll('[data-svc-card]'));
      svcCards.forEach((c, i) => {
        const innerEl = c.firstElementChild; if (!innerEl) return;
        const nx = svcCards[i + 1];
        if (!nx) { innerEl.style.transform = 'none'; innerEl.style.opacity = '1'; return; }
        const hgt = innerEl.offsetHeight || 1;
        const pin = 94 + i * 10;
        const dist = nx.getBoundingClientRect().top - pin;
        const pp = 1 - Math.min(1, Math.max(0, dist / hgt));
        innerEl.style.transform = 'scale(' + (1 - 0.05 * pp).toFixed(4) + ')';
        innerEl.style.opacity = (1 - 0.5 * pp).toFixed(3);
      });

      const ch = document.getElementById('chiffres');
      if (ch) {
        const r = ch.getBoundingClientRect();
        const inView = r.top < window.innerHeight * 0.82 && r.bottom > 60;
        if (inView && !chIn) {
          chIn = true;
          document.querySelectorAll('[data-chcount]').forEach((el) => {
            const target = parseInt(el.getAttribute('data-chcount'), 10);
            const suffix = el.getAttribute('data-suffix') || '';
            const dur = 1300, s0 = performance.now();
            const stp = (t) => { const p = Math.min(1, (t - s0) / dur); const e = 1 - Math.pow(1 - p, 3); el.textContent = Math.round(target * e) + suffix; if (p < 1) requestAnimationFrame(stp); };
            requestAnimationFrame(stp);
          });
        } else if (!inView && chIn) {
          chIn = false;
          document.querySelectorAll('[data-chcount]').forEach((el) => { el.textContent = '0' + (el.getAttribute('data-suffix') || ''); });
        }
      }
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    checkReveal();
    const revealTimers = [200, 600, 1200].map((ms) => setTimeout(checkReveal, ms));
    window.addEventListener('resize', checkReveal, { passive: true });
    const safetyTimer = setTimeout(() => {
      document.querySelectorAll('[data-reveal]').forEach((el) => { el.style.transition = 'none'; el.style.opacity = '1'; el.style.transform = 'none'; el.dataset.shown = '1'; });
    }, 2500);

    const links = document.querySelectorAll('[data-navlink]');
    const sio = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          const id = '#' + en.target.id;
          links.forEach((l) => {
            const on = l.getAttribute('data-nav') === id;
            l.style.background = on ? 'rgba(50,52,138,.12)' : 'transparent';
            l.style.color = on ? '#32348A' : '#1A1A1A';
            l.dataset.active = on ? '1' : '';
          });
        }
      });
    }, { threshold: 0.5 });
    ['a-propos', 'services', 'approche', 'marches', 'contact'].forEach((id) => { const s = document.getElementById(id); if (s) sio.observe(s); });

    const asecJ = document.querySelector('[data-approche-sec]');
    const hdotClickHandlers = [];
    document.querySelectorAll('[data-hdot]').forEach((d) => {
      const handler = () => {
        if (!asecJ) return;
        const n = document.querySelectorAll('[data-hdot]').length;
        const i = parseInt(d.getAttribute('data-hi'), 10);
        const scrollable = asecJ.offsetHeight - window.innerHeight;
        const target = asecJ.offsetTop + (scrollable * (i / (n - 1))) - 1;
        window.scrollTo({ top: target, behavior: 'smooth' });
      };
      d.addEventListener('click', handler);
      hdotClickHandlers.push([d, handler]);
    });

    const scrollToSel = (sel) => {
      const el = document.querySelector(sel);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - 78;
      window.scrollTo({ top, behavior: 'smooth' });
    };
    const navClickHandlers = [];
    document.querySelectorAll('[data-nav]').forEach((a) => {
      const handler = (e) => {
        e.preventDefault();
        if (a.classList.contains('yn-mobile-link')) setMobileOpen(false);
        scrollToSel(a.getAttribute('data-nav'));
      };
      a.addEventListener('click', handler);
      navClickHandlers.push([a, handler]);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', checkReveal);
      revealTimers.forEach(clearTimeout);
      clearTimeout(safetyTimer);
      sio.disconnect();
      hdotClickHandlers.forEach(([el, h]) => el.removeEventListener('click', h));
      navClickHandlers.forEach(([el, h]) => el.removeEventListener('click', h));
    };
  }, []);

  return (
    <>
      <div id="yn-progress" style={{ position: 'fixed', top: 0, left: 0, height: '2px', width: '0%', background: 'linear-gradient(90deg,#32348A,#A9ABEC)', zIndex: 1200, transition: 'width .1s linear', boxShadow: '0 0 12px rgba(50,52,138,.6)' }}></div>
      <Nav onHamburgerClick={() => setMobileOpen((v) => !v)} />
      <MobilePanel open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <Hero />
      <About />
      <Services />
      <Approche />
      <Marches />
      <Contact />
      <Footer />
    </>
  );
}
