import React, { useState } from 'react';

export function Tooltip({ label, children, position = 'top' }) {
  const [show, setShow] = useState(false);
  const posStyle = {
    top: { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: 8 },
    bottom: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: 8 },
  }[position] || {};
  return (
    <span style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)} onBlur={() => setShow(false)}>
      {children}
      {show && (
        <span style={{ position: 'absolute', ...posStyle, background: 'var(--color-bg-inverse)', color: 'var(--color-text-inverse)',
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', padding: '6px 10px', borderRadius: 'var(--radius-sm)',
          boxShadow: 'var(--shadow-md)', whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: 1000 }}>
          {label}
        </span>
      )}
    </span>
  );
}
