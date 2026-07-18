import React from 'react';

const TONES = {
  rose: { background: 'var(--rose-300)', color: 'var(--burgundy-800)' },
  terracotta: { background: 'transparent', boxShadow: 'inset 0 0 0 1px var(--terracotta-400)', color: 'var(--terracotta-600)' },
  neutral: { background: 'var(--gray-100)', color: 'var(--color-text-secondary)' },
};

export function Tag({ tone = 'neutral', children }) {
  const t = TONES[tone] || TONES.neutral;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', padding: '5px 14px',
      borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)',
      fontWeight: 500, lineHeight: 1, whiteSpace: 'nowrap', ...t }}>
      {children}
    </span>
  );
}
