import React from 'react';

export function Radio({ label, checked = false, onChange, name, disabled = false }) {
  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)', opacity: disabled ? 0.5 : 1 }}>
      <input type="radio" name={name} checked={checked} onChange={onChange} disabled={disabled} style={{ display: 'none' }} />
      <span style={{ width: 18, height: 18, flex: '0 0 auto', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: `1px solid ${checked ? 'var(--color-accent-burgundy)' : 'var(--color-border-strong)'}`, background: 'var(--color-bg-surface)',
        transition: 'border-color var(--duration-fast) var(--ease-editorial)' }}>
        {checked && <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--color-accent-burgundy)' }} />}
      </span>
      {label}
    </label>
  );
}
