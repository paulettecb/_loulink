import React from 'react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile.js';

const footerLinkStyle = { fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'rgba(251,248,242,.72)', textDecoration: 'none' };
const footerHeadStyle = { fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'rgba(251,248,242,.5)' };

export function Footer() {
  const m = useIsMobile();
  if (m) return (
    <footer style={{ background: 'var(--color-bg-inverse)', color: 'var(--color-text-inverse)', textAlign: 'center', padding: '40px 24px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 26 }}>loulink</div>
      <div style={{ fontFamily: 'var(--font-signature)', fontSize: 19, color: 'rgba(251,248,242,.55)' }}>con cariño, loulink</div>
      <a href="/cotizacion.html" style={footerLinkStyle}>Cotización</a>
      <a href="/cotizacion.pdf" download="loulink-cotizacion.pdf" style={footerLinkStyle}>Descargar cotización (PDF)</a>
      <a href="mailto:hola@loulink.mx" style={footerLinkStyle}>hola@loulink.mx</a>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'rgba(251,248,242,.5)' }}>© 2026 loulink</div>
    </footer>
  );
  return (
    <footer style={{ background: 'var(--color-bg-inverse)', color: 'var(--color-text-inverse)' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: 'var(--space-9) 32px var(--space-6)', display: 'flex', justifyContent: 'space-between', gap: 48, flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 320 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 32 }}>loulink</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'rgba(251,248,242,.7)', lineHeight: 'var(--leading-relaxed)' }}>Una línea fina, el día de tu boda.</div>
          <div style={{ fontFamily: 'var(--font-signature)', fontSize: 22, color: 'rgba(251,248,242,.5)', marginTop: 6 }}>con cariño, loulink</div>
        </div>
        <div style={{ display: 'flex', gap: 64, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={footerHeadStyle}>Estudio</div>
            <Link to="/about" style={footerLinkStyle}>Nosotros</Link>
            <Link to="/services" style={footerLinkStyle}>Servicios</Link>
            <Link to="/flash" style={footerLinkStyle}>Flash</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={footerHeadStyle}>Contacto</div>
            <Link to="/booking" style={footerLinkStyle}>Reservar sesión</Link>
            <a href="/cotizacion.html" style={footerLinkStyle}>Cotización</a>
            <a href="/cotizacion.pdf" download="loulink-cotizacion.pdf" style={footerLinkStyle}>Descargar cotización (PDF)</a>
            <span style={footerLinkStyle}>hola@loulink.mx</span>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(251,248,242,.16)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '18px 32px', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'rgba(251,248,242,.5)' }}>© 2026 loulink</div>
      </div>
    </footer>
  );
}
