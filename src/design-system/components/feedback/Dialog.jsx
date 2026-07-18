import React, { useEffect } from 'react';

export function Dialog({ open, onClose, title, children, footer }) {
  useEffect(() => {
    if (!open) return;
    const onKey = e => { if (e.key === 'Escape') onClose && onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(30,26,23,.45)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <div onClick={e => e.stopPropagation()} style={{ width: 420, maxWidth: '90vw', background: 'var(--color-bg-surface)',
        borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', padding: 'var(--space-7)', boxSizing: 'border-box',
        fontFamily: 'var(--font-body)', position: 'relative' }}>
        <button onClick={onClose} aria-label="Cerrar" style={{ position: 'absolute', top: 18, right: 18, width: 28, height: 28,
          border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" /></svg>
        </button>
        {title && <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--color-text-primary)', marginBottom: 'var(--space-4)', paddingRight: 24 }}>{title}</div>}
        <div style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)' }}>{children}</div>
        {footer && <div style={{ marginTop: 'var(--space-6)', display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end' }}>{footer}</div>}
      </div>
    </div>
  );
}
