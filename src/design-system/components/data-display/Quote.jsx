import React from 'react';

export function Quote({ children, attribution, tone = 'default' }) {
  const inverse = tone === 'inverse';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', fontFamily: 'var(--font-body)' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'var(--text-2xl)', lineHeight: 'var(--leading-snug)', letterSpacing: '-0.01em', color: inverse ? 'var(--color-text-inverse)' : 'var(--color-text-primary)' }}>
        &ldquo;{children}&rdquo;
      </div>
      {attribution && <div style={{ fontSize: 'var(--text-sm)', color: inverse ? 'rgba(251,248,242,.72)' : 'var(--color-text-secondary)' }}>— {attribution}</div>}
    </div>
  );
}
