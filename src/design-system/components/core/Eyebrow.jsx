import React from 'react';

export function Eyebrow({ tone = 'default', children }) {
  return (
    <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', fontWeight: 600,
      letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', lineHeight: 1,
      color: tone === 'accent' ? 'var(--color-accent-burgundy)' : 'var(--color-text-secondary)' }}>
      {children}
    </div>
  );
}
