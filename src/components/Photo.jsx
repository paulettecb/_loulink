import React from 'react';
import { ImageOff } from 'lucide-react';

/**
 * Real photography from the design system arrives as large source files; only the
 * hero shot fit through the asset-sync channel used to build this app. Everywhere
 * else `src` is left unset on purpose — swap in the matching file from the Claude
 * Design project's `assets/imagery/` folder and this renders the real photo instead.
 */
export function Photo({ src, alt = '', label, className, style, loading }) {
  if (src) {
    return <img src={src} alt={alt} className={className} style={style} loading={loading} />;
  }
  return (
    <div
      role="img"
      aria-label={alt || label}
      style={{
        ...style,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        background: 'repeating-linear-gradient(135deg, var(--gray-100) 0px, var(--gray-100) 10px, var(--color-bg-surface) 10px, var(--color-bg-surface) 20px)',
        color: 'var(--color-text-muted)',
      }}
    >
      <ImageOff size={22} strokeWidth={1.3} />
      {label && (
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', textAlign: 'center', padding: '0 10px' }}>
          {label}
        </span>
      )}
    </div>
  );
}
