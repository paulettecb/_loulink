import React, { useState } from 'react';

export function Select({ label, value, onChange, options = [], placeholder, error, disabled = false }) {
  const [focus, setFocus] = useState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)', width: '100%', boxSizing: 'border-box' }}>
      {label && <span style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--color-text-primary)' }}>{label}</span>}
      <span style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <select value={value} onChange={onChange} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ width: '100%', boxSizing: 'border-box', appearance: 'none', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)',
            color: value ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
            background: disabled ? 'var(--color-bg-surface-alt)' : 'var(--color-bg-surface)',
            padding: '11px 38px 11px 14px', borderRadius: 'var(--radius-sm)',
            border: `1px solid ${error ? 'var(--color-state-error)' : focus ? 'var(--color-accent-burgundy)' : 'var(--color-border-strong)'}`,
            outline: 'none', boxShadow: focus ? 'var(--ring-focus)' : 'none', cursor: disabled ? 'not-allowed' : 'pointer' }}>
          {placeholder && <option value="" disabled hidden>{placeholder}</option>}
          {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
          style={{ position: 'absolute', right: 14, color: 'var(--color-text-muted)', pointerEvents: 'none' }}>
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {error && <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-state-error)' }}>{error}</span>}
    </label>
  );
}
