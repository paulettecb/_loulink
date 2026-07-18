import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { House, Gem, Images, CalendarHeart, PenTool } from 'lucide-react';

function usePrefersReducedMotion() {
  const [reduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  return reduced;
}

export function Reveal({ children, delay = 0, y = 20, style }) {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (reduced) { const t = setTimeout(() => setOn(true), 30); return () => clearTimeout(t); }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });
    io.observe(ref.current);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div ref={ref} style={{ ...style, opacity: on ? 1 : 0, transform: on ? 'none' : (reduced ? 'none' : `translateY(${y}px)`),
      transition: reduced ? 'opacity var(--duration-base) var(--ease-editorial)' : `opacity var(--duration-xslow) var(--ease-editorial) ${delay}ms, transform var(--duration-xslow) var(--ease-editorial) ${delay}ms` }}>
      {children}
    </div>
  );
}

export function PageFade({ children }) {
  const reduced = usePrefersReducedMotion();
  const [on, setOn] = useState(false);
  useEffect(() => { const id = requestAnimationFrame(() => requestAnimationFrame(() => setOn(true))); return () => cancelAnimationFrame(id); }, []);
  return (
    <div style={{ opacity: on ? 1 : 0, transform: on ? 'none' : (reduced ? 'none' : 'translateY(18px)'),
      transition: reduced ? 'opacity var(--duration-base) var(--ease-editorial)' : 'opacity var(--duration-page) var(--ease-editorial), transform var(--duration-page) var(--ease-editorial)' }}>
      {children}
    </div>
  );
}

export function SplitReveal({ lines, delay = 0, style, lineStyle }) {
  const reduced = usePrefersReducedMotion();
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), reduced ? 30 : 60); return () => clearTimeout(t); }, [reduced]);
  return (
    <div style={style}>
      {lines.map((ln, i) => (
        <div key={i} style={{ overflow: 'hidden' }}>
          <div style={{ ...lineStyle, transform: on ? 'none' : (reduced ? 'none' : 'translateY(108%)'), opacity: on ? 1 : (reduced ? 1 : 0),
            transition: reduced ? 'opacity var(--duration-base) var(--ease-editorial)' : `transform var(--duration-xslow) var(--ease-editorial) ${delay + i * 130}ms, opacity var(--duration-xslow) var(--ease-editorial) ${delay + i * 130}ms` }}>{ln}</div>
        </div>
      ))}
    </div>
  );
}

const BOTTOM_NAV_ITEMS = [
  { key: 'home', to: '/', Icon: House, label: 'Inicio' },
  { key: 'services', to: '/services', Icon: Gem, label: 'Servicios' },
  { key: 'flash', to: '/flash', Icon: Images, label: 'Flash' },
  { key: 'booking', to: '/booking', Icon: CalendarHeart, label: 'Reservar' },
  { key: 'about', to: '/about', Icon: PenTool, label: 'Estudio' },
];

export function BottomNav({ active, variant = 'fixed' }) {
  const fixed = variant !== 'absolute';
  return (
    <nav style={{ position: fixed ? 'fixed' : 'absolute', bottom: 0, left: 0, right: 0, zIndex: 120, background: 'rgba(255,255,255,.92)',
      backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderTop: '1px solid var(--color-border)',
      paddingBottom: fixed ? 'max(env(safe-area-inset-bottom), 6px)' : 22 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)' }}>
        {BOTTOM_NAV_ITEMS.map(it => {
          const on = active === it.key;
          return (
            <NavLink key={it.key} to={it.to} style={{ minHeight: 54, display: 'flex', flexDirection: 'column', alignItems: 'center',
              justifyContent: 'center', gap: 4, textDecoration: 'none', border: 'none', background: 'none', font: 'inherit', cursor: 'pointer',
              color: on ? 'var(--color-accent-burgundy)' : 'var(--color-text-muted)' }}>
              <it.Icon size={22} strokeWidth={1.6} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: on ? 600 : 500, letterSpacing: '.04em' }}>{it.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
