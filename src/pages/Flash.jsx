import React, { useState } from 'react';
import { Eyebrow, Tabs, Tag } from '../design-system/components/index.js';
import { useIsMobile } from '../hooks/useIsMobile.js';
import { Reveal, PageFade } from '../lib/motion.jsx';
import { Nav } from '../components/Nav.jsx';
import { Footer } from '../components/Footer.jsx';
import { Photo } from '../components/Photo.jsx';

const items = [
  { id: 1, cat: 'aves', label: 'colibrí y flor', src: 'work-hummingbird-flower' },
  { id: 2, cat: 'numeros', label: '11:11', src: 'work-numerals-1111' },
  { id: 3, cat: 'simbolos', label: 'ojo', src: 'work-evil-eye' },
  { id: 4, cat: 'aves', label: 'golondrina', src: 'work-swallow' },
  { id: 5, cat: 'palabras', label: 'escritura', src: 'work-script-wrist' },
  { id: 6, cat: 'aves', label: 'mariposas', src: 'work-butterflies' },
  { id: 7, cat: 'simbolos', label: 'bota vaquera', src: 'work-cowboy-boot' },
  { id: 8, cat: 'numeros', label: '19:43', src: 'work-numerals-1943' },
  { id: 9, cat: 'aves', label: 'colibrí y libélula', src: 'work-hummingbird-dragonfly' },
  { id: 10, cat: 'palabras', label: 'made of magic', src: 'work-camera-magic' },
  { id: 11, cat: 'simbolos', label: 'huellita', src: 'work-paw-maki' },
];

export default function Flash({ embedded } = {}) {
  const m = useIsMobile();
  const [cat, setCat] = useState('todos');
  const visible = cat === 'todos' ? items : items.filter(i => i.cat === cat);
  return (
    <div style={{ background: 'var(--color-bg-page)' }}>
      {!embedded && <Nav active="flash" />}
      <PageFade>
      <section style={{ maxWidth: 1120, margin: '0 auto', padding: m ? '48px 20px 20px' : '72px 32px 32px' }}>
        <Eyebrow tone="accent">Flash</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: m ? 'var(--text-2xl)' : 'var(--text-4xl)', color: 'var(--color-text-primary)', margin: m ? '14px 0 20px' : '16px 0 32px' }}>Línea fina, pieza por pieza.</h1>
        <div className="scroll-x-clean" style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', paddingBottom: 4, paddingRight: 20 }}>
          <Tabs value={cat} onChange={setCat} tabs={[{ value: 'todos', label: 'Todos' }, { value: 'aves', label: 'Aves y alas' }, { value: 'numeros', label: 'Números' }, { value: 'palabras', label: 'Palabras' }, { value: 'simbolos', label: 'Símbolos' }]} />
        </div>
      </section>
      <section style={{ maxWidth: 1120, margin: '0 auto', padding: m ? '8px 20px 64px' : '16px 32px 96px' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', margin: m ? '0 0 20px' : '0 0 28px', maxWidth: 560 }}>Piezas reales hechas en el estudio. El catálogo de flash exclusivo para bodas está en camino — estos trazos marcan la línea.</p>
        <div style={{ display: 'grid', gridTemplateColumns: m ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: m ? 12 : 20 }}>
          {visible.map((it, i) => (
            <Reveal key={it.id} delay={(i % 4) * 110}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div className="hover-zoom" style={{ width: '100%', aspectRatio: '1/1', borderRadius: 8, overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                  <Photo className="media-bw" src={`/images/${it.src}.jpg`} label={it.label} alt={it.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </div>
                <Tag tone="neutral">{it.label}</Tag>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      {!embedded && <Footer />}
      </PageFade>
    </div>
  );
}
