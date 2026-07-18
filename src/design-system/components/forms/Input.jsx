import React, { useState } from 'react';

export function Input({ label, placeholder, value, onChange, error, helper, type = 'text', disabled = false, icon }) {
  const [focus, setFocus] = useState(false);
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)', width: '100%', boxSizing: 'border-box' }}>
      {label && <span style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--color-text-primary)' }}>{label}</span>}
      <span style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {icon && <span style={{ position: 'absolute', left: 12, display: 'flex', color: 'var(--color-text-muted)' }}>{icon}</span>}
        <input type={type} value={value} onChange={onChange} placeholder={placeholder} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)',
            color: 'var(--color-text-primary)', background: disabled ? 'var(--color-bg-surface-alt)' : 'var(--color-bg-surface)',
            padding: icon ? '11px 14px 11px 38px' : '11px 14px', borderRadius: 'var(--radius-sm)',
            border: `1px solid ${error ? 'var(--color-state-error)' : focus ? 'var(--color-accent-burgundy)' : 'var(--color-border-strong)'}`,
            outline: 'none', boxShadow: focus ? 'var(--ring-focus)' : 'none',
            transition: 'border-color var(--duration-fast) var(--ease-editorial), box-shadow var(--duration-fast) var(--ease-editorial)' }} />
      </span>
      {(error || helper) && <span style={{ fontSize: 'var(--text-xs)', color: error ? 'var(--color-state-error)' : 'var(--color-text-muted)' }}>{error || helper}</span>}
    </label>
  );
}
