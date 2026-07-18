import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../design-system/components/index.js';
import { useIsMobile } from '../hooks/useIsMobile.js';
import { BottomNav } from '../lib/motion.jsx';

const links = [
  { to: '/services', label: 'Servicios', key: 'services' },
  { to: '/flash', label: 'Flash', key: 'flash' },
  { to: '/about', label: 'Nosotros', key: 'about' },
];

const pageTitles = { home: 'loulink', services: 'Servicios', flash: 'Flash', booking: 'Reserva', about: 'Nosotros' };

export function Nav({ active }) {
  const m = useIsMobile();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (m) return (
    <React.Fragment>
      <div style={{ position: 'sticky', top: 0, zIndex: 100, background: scrolled ? 'rgba(255,255,255,.9)' : 'var(--white)',
        backdropFilter: scrolled ? 'blur(10px)' : 'none', WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: '1px solid var(--color-border)', transition: 'background var(--duration-base) var(--ease-editorial)' }}>
        <div style={{ height: 52, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 21, color: 'var(--color-text-primary)' }}>{pageTitles[active] || 'loulink'}</span>
        </div>
      </div>
      <BottomNav active={active} />
    </React.Fragment>
  );

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 100, background: scrolled ? 'rgba(255,255,255,.86)' : 'var(--white)',
      backdropFilter: scrolled ? 'blur(10px)' : 'none', WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: '1px solid var(--color-border)', transition: 'background var(--duration-base) var(--ease-editorial)' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '18px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--color-text-primary)', textDecoration: 'none' }}>loulink</Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {links.map(l => (
            <Link key={l.key} to={l.to} style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 500,
              color: active === l.key ? 'var(--color-text-primary)' : 'var(--color-text-secondary)', textDecoration: 'none',
              borderBottom: active === l.key ? '2px solid var(--color-accent-burgundy)' : '2px solid transparent', paddingBottom: 4 }}>{l.label}</Link>
          ))}
          <Button size="sm" onClick={() => navigate('/booking')}>Reservar</Button>
        </div>
      </div>
    </div>
  );
}
