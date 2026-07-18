import React, { useState } from 'react';

export function Accordion({ items = [], defaultOpen = -1 }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-body)' }}>
      {items.map((it, i) => (
        <div key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
          <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--space-4) 0', textAlign: 'left',
            fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', color: 'var(--color-text-primary)' }}>
            {it.question}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
              style={{ flex: '0 0 auto', marginLeft: 16, transform: open === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform var(--duration-base) var(--ease-editorial)' }}>
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div style={{ maxHeight: open === i ? 400 : 0, overflow: 'hidden', transition: 'max-height var(--duration-slow) var(--ease-editorial)' }}>
            <div style={{ paddingBottom: 'var(--space-4)', color: 'var(--color-text-secondary)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)' }}>{it.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
