import React, { useEffect, useState } from 'react';
import { ImageOff } from 'lucide-react';

/**
 * Renders the photo at `src`, falling back to a labeled placeholder while the
 * file doesn't exist yet in public/images/. The design system's photos are
 * pre-wired by filename across the pages, so dropping the originals from the
 * Claude Design project's `assets/imagery/` into `public/images/` makes them
 * appear without any code change.
 */
export function Photo({ src, alt = '', label, className, style, loading }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => { setFailed(false); }, [src]);
  if (src && !failed) {
    return <img src={src} alt={alt} className={className} style={style} loading={loading} onError={() => setFailed(true)} />;
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
