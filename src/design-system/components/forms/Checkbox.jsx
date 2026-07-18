import React from 'react';

export function Checkbox({ label, checked = false, onChange, disabled = false }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)', opacity: disabled ? 0.5 : 1 }}>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} style={{ display: 'none' }} />
      <span style={{ width: 18, height: 18, flex: '0 0 auto', borderRadius: 'var(--radius-xs)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: `1px solid ${checked ? 'var(--color-accent-burgundy)' : 'var(--color-border-strong)'}`,
        background: checked ? 'var(--color-accent-burgundy)' : 'var(--color-bg-surface)',
        transition: 'background var(--duration-fast) var(--ease-editorial), border-color var(--duration-fast) var(--ease-editorial)' }}>
        {checked && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-inverse)" strokeWidth="2.5"><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
      </span>
      {label}
    </label>
  );
}
