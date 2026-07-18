import React from 'react';

export function Divider({ orientation = 'horizontal', label }) {
  if (orientation === 'vertical') {
    return <span style={{ display: 'inline-block', width: 1, alignSelf: 'stretch', background: 'var(--color-border)' }} />;
  }
  if (label) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', width: '100%' }}>
        <span style={{ flex: 1, height: 1, background: 'var(--color-border)' }} />
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', letterSpacing: 'var(--tracking-wide)' }}>{label}</span>
        <span style={{ flex: 1, height: 1, background: 'var(--color-border)' }} />
      </div>
    );
  }
  return <div style={{ width: '100%', height: 1, background: 'var(--color-border)' }} />;
}
