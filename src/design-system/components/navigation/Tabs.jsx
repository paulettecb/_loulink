import React from 'react';

export function Tabs({ tabs = [], value, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 'var(--space-6)', borderBottom: '1px solid var(--color-border)', fontFamily: 'var(--font-body)' }}>
      {tabs.map(t => {
        const active = t.value === value;
        return (
          <button key={t.value} onClick={() => onChange && onChange(t.value)} style={{ background: 'none', border: 'none', cursor: 'pointer',
            padding: '10px 2px', marginBottom: -1, flexShrink: 0, whiteSpace: 'nowrap', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 500,
            color: active ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
            borderBottom: `2px solid ${active ? 'var(--color-accent-burgundy)' : 'transparent'}`,
            transition: 'color var(--duration-fast) var(--ease-editorial), border-color var(--duration-fast) var(--ease-editorial)' }}>
            {t.label}
          </button>
        );
      })}
    </div>
  );
}
