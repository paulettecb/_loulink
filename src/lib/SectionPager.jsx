import React, { useEffect, useRef, useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile.js';

/**
 * On mobile, shows ONE child section at a time with prev/next controls and
 * edge-swipe support; on desktop, renders all children stacked exactly as
 * they would be without the pager. Falsy children (e.g. desktop-only
 * sections behind `!m &&`) are skipped.
 */
export function SectionPager({ children }) {
  const m = useIsMobile();
  const [idx, setIdx] = useState(0);
  const touch = useRef(null);
  const sections = React.Children.toArray(children).filter(Boolean);
  const count = sections.length;

  useEffect(() => { setIdx(0); }, [m]);
  useEffect(() => { if (m) window.scrollTo(0, 0); }, [idx, m]);

  useEffect(() => {
    if (!m || count < 2) return;
    const atBottom = () => window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
    const atTop = () => window.scrollY <= 8;
    const onStart = e => { if (e.touches.length === 1) touch.current = { y: e.touches[0].clientY, x: e.touches[0].clientX, top: atTop(), bottom: atBottom() }; };
    const onEnd = e => {
      const t = touch.current;
      touch.current = null;
      if (!t) return;
      const dy = e.changedTouches[0].clientY - t.y;
      const dx = e.changedTouches[0].clientX - t.x;
      if (Math.abs(dy) < 80 || Math.abs(dx) > 60) return;
      if (dy < 0 && t.bottom) setIdx(i => Math.min(i + 1, count - 1));
      else if (dy > 0 && t.top) setIdx(i => Math.max(i - 1, 0));
    };
    document.addEventListener('touchstart', onStart, { passive: true });
    document.addEventListener('touchend', onEnd, { passive: true });
    return () => {
      document.removeEventListener('touchstart', onStart);
      document.removeEventListener('touchend', onEnd);
    };
  }, [m, count]);

  if (!m || count < 2) return <React.Fragment>{sections}</React.Fragment>;

  const btnStyle = disabled => ({
    width: 40, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center',
    border: 'none', background: 'none', cursor: disabled ? 'default' : 'pointer', padding: 0,
    color: disabled ? 'var(--color-text-muted)' : 'var(--color-accent-burgundy)', opacity: disabled ? 0.4 : 1,
  });

  return (
    <React.Fragment>
      {sections[idx]}
      <div style={{ position: 'fixed', right: 14, bottom: 'calc(72px + env(safe-area-inset-bottom))', zIndex: 110,
        display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(255,255,255,.92)',
        backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-pill)', padding: '4px 2px', boxShadow: 'var(--shadow-sm)' }}>
        <button aria-label="Sección anterior" disabled={idx === 0} onClick={() => setIdx(i => Math.max(i - 1, 0))} style={btnStyle(idx === 0)}>
          <ChevronUp size={20} strokeWidth={1.6} />
        </button>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, letterSpacing: '.06em', color: 'var(--color-text-muted)', padding: '2px 0' }}>
          {idx + 1}/{count}
        </span>
        <button aria-label="Siguiente sección" disabled={idx === count - 1} onClick={() => setIdx(i => Math.min(i + 1, count - 1))} style={btnStyle(idx === count - 1)}>
          <ChevronDown size={20} strokeWidth={1.6} />
        </button>
      </div>
    </React.Fragment>
  );
}
