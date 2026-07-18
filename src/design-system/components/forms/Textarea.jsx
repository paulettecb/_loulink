import React, { useState } from 'react';

export function Textarea({ label, placeholder, value, onChange, error, helper, rows = 4, disabled = false }) {
  const [focus, setFocus] = useState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)', width: '100%', boxSizing: 'border-box' }}>
      {label && <span style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--color-text-primary)' }}>{label}</span>}
      <textarea value={value} onChange={onChange} placeholder={placeholder} disabled={disabled} rows={rows}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)',
          color: 'var(--color-text-primary)', background: disabled ? 'var(--color-bg-surface-alt)' : 'var(--color-bg-surface)',
          padding: '11px 14px', borderRadius: 'var(--radius-sm)', resize: 'vertical', lineHeight: 'var(--leading-normal)',
          border: `1px solid ${error ? 'var(--color-state-error)' : focus ? 'var(--color-accent-burgundy)' : 'var(--color-border-strong)'}`,
          outline: 'none', boxShadow: focus ? 'var(--ring-focus)' : 'none',
          transition: 'border-color var(--duration-fast) var(--ease-editorial), box-shadow var(--duration-fast) var(--ease-editorial)' }} />
      {(error || helper) && <span style={{ fontSize: 'var(--text-xs)', color: error ? 'var(--color-state-error)' : 'var(--color-text-muted)' }}>{error || helper}</span>}
    </label>
  );
}
