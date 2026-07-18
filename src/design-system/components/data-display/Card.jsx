import React from 'react';

export function Card({ image, eyebrow, title, children, footer, featured = false }) {
  return (
    <div style={{ background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)',
      borderTop: featured ? '2px solid var(--color-accent-rose)' : '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)', overflow: 'hidden', display: 'flex', flexDirection: 'column',
      fontFamily: 'var(--font-body)', boxSizing: 'border-box' }}>
      {image && <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
        <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>}
      <div style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', flex: 1 }}>
        {eyebrow && <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-text-secondary)' }}>{eyebrow}</div>}
        {title && <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--color-text-primary)' }}>{title}</div>}
        {children && <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-normal)' }}>{children}</div>}
        {footer && <div style={{ marginTop: 'var(--space-3)' }}>{footer}</div>}
      </div>
    </div>
  );
}
