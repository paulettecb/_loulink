import React, { useState } from 'react';

const SIZES = {
  sm: { padding: '7px 14px', fontSize: 'var(--text-xs)', gap: 6 },
  md: { padding: '10px 20px', fontSize: 'var(--text-sm)', gap: 8 },
  lg: { padding: '15px 30px', fontSize: 'var(--text-md)', gap: 10 },
};

const VARIANTS = {
  primary: {
    base: { background: 'var(--color-accent-burgundy)', color: 'var(--color-text-inverse)', border: '1px solid var(--color-accent-burgundy)' },
    hover: { background: 'var(--color-accent-burgundy-strong)', borderColor: 'var(--color-accent-burgundy-strong)' },
  },
  secondary: {
    base: { background: 'transparent', color: 'var(--color-text-primary)', border: '1px solid var(--color-border-strong)' },
    hover: { background: 'var(--color-bg-surface-alt)' },
  },
  ghost: {
    base: { background: 'transparent', color: 'var(--color-accent-burgundy)', border: '1px solid transparent' },
    hover: { background: 'var(--color-bg-surface-alt)' },
  },
};

export function Button({ variant = 'primary', size = 'md', disabled = false, fullWidth = false, icon, iconPosition = 'left', children, onClick, type = 'button' }) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const style = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: s.gap,
    padding: s.padding, fontSize: s.fontSize, fontFamily: 'var(--font-body)', fontWeight: 600,
    lineHeight: 1, borderRadius: 'var(--radius-sm)', cursor: disabled ? 'not-allowed' : 'pointer',
    width: fullWidth ? '100%' : undefined, opacity: disabled ? 0.45 : 1, boxSizing: 'border-box',
    transition: 'background var(--duration-fast) var(--ease-editorial), border-color var(--duration-fast) var(--ease-editorial), transform var(--duration-fast) var(--ease-editorial)',
    transform: active && !disabled ? 'scale(0.98)' : 'scale(1)',
    ...v.base, ...(hover && !disabled ? v.hover : {}),
  };
  return (
    <button type={type} disabled={disabled} style={style} onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)} onMouseUp={() => setActive(false)}>
      {icon && iconPosition === 'left' ? icon : null}
      {children}
      {icon && iconPosition === 'right' ? icon : null}
    </button>
  );
}
