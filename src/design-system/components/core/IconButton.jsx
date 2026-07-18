import React, { useState } from 'react';

const SIZES = { sm: 32, md: 40, lg: 48 };

export function IconButton({ icon, size = 'md', variant = 'ghost', label, onClick, disabled = false }) {
  const [hover, setHover] = useState(false);
  const dim = SIZES[size] || SIZES.md;
  const base = variant === 'solid'
    ? { background: 'var(--color-accent-burgundy)', color: 'var(--color-text-inverse)', border: '1px solid var(--color-accent-burgundy)' }
    : variant === 'outline'
    ? { background: 'transparent', color: 'var(--color-text-primary)', border: '1px solid var(--color-border-strong)' }
    : { background: 'transparent', color: 'var(--color-text-primary)', border: '1px solid transparent' };
  const hoverStyle = variant === 'solid'
    ? { background: 'var(--color-accent-burgundy-strong)', borderColor: 'var(--color-accent-burgundy-strong)' }
    : { background: 'var(--color-bg-surface-alt)' };
  return (
    <button aria-label={label} title={label} onClick={onClick} disabled={disabled}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ width: dim, height: dim, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-sm)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1,
        transition: 'background var(--duration-fast) var(--ease-editorial), border-color var(--duration-fast) var(--ease-editorial)',
        boxSizing: 'border-box', ...base, ...(hover && !disabled ? hoverStyle : {}) }}>
      {icon}
    </button>
  );
}
