import React from 'react';
import { Eyebrow, Card, Accordion } from '../design-system/components/index.js';
import { useIsMobile } from '../hooks/useIsMobile.js';
import { Reveal, PageFade } from '../lib/motion.jsx';
import { Nav } from '../components/Nav.jsx';
import { Footer } from '../components/Footer.jsx';
import { Photo } from '../components/Photo.jsx';

const offerings = [
  { title: 'Tatuaje de pareja', tag: 'Pareja', desc: 'Dos piezas que se completan — antes o después de la ceremonia. Eligen el diseño juntos, o dejan que lo interpretemos desde su historia.' },
  { title: 'Estación en tu fiesta', tag: 'Venue', desc: 'Montamos un rincón fine-line en tu recepción para quien quiera salir con una pieza pequeña esa misma noche.' },
  { title: 'Despedida de soltera o soltero', tag: 'Grupo', desc: 'Una tarde entre amigas o amigos, con diseños a juego — desde 2 personas hasta todo el grupo.' },
  { title: 'Iniciales y fechas', tag: 'Rápido', desc: 'La forma más simple de llevar la fecha con ustedes: una línea, un número, dos iniciales.' },
];

const faqs = [
  { question: '¿Duele más por ser el día de la boda?', answer: 'No — usamos la misma técnica fine-line de siempre, en sesiones cortas pensadas para no interferir con el resto del día.' },
  { question: '¿Cuántas personas pueden tatuarse?', answer: 'Desde 2 hasta toda la fiesta. Entre más personas, más agujas llevamos.' },
  { question: '¿Necesitamos diseño propio o ustedes proponen?', answer: 'Las dos opciones — pueden traer una idea o partir del flash del estudio.' },
  { question: '¿Cómo reservamos la fecha?', answer: 'Con el formulario de reserva. Te escribimos en menos de 48 horas para confirmar disponibilidad.' },
];

const strip = [
  { src: 'work-script-wrist', label: 'Escritura fine-line en la muñeca' },
  { src: 'work-hummingbird-flower', label: 'Colibrí y flor fine-line' },
  { src: 'work-numerals-1943', label: 'Numerales 19:43 fine-line' },
];

export default function Services({ embedded } = {}) {
  const m = useIsMobile();
  return (
    <div style={{ background: 'var(--color-bg-page)' }}>
      {!embedded && <Nav active="services" />}
      <PageFade>
      <section style={{ maxWidth: 1120, margin: '0 auto', padding: m ? '48px 20px 8px' : '72px 32px 24px' }}>
        <Eyebrow tone="accent">La experiencia</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: m ? 'var(--text-2xl)' : 'var(--text-4xl)', lineHeight: 'var(--leading-tight)', color: 'var(--color-text-primary)', margin: '16px 0 0', maxWidth: 640 }}>Tres formas de llevar tinta a tu boda — y una más, por si acaso.</h1>
      </section>
      <section style={{ maxWidth: 1120, margin: '0 auto', padding: m ? '32px 20px 56px' : '48px 32px 72px', display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(2,1fr)', gap: m ? 16 : 24 }}>
        {offerings.map((o, i) => <Reveal key={o.title} delay={i * 130}><Card eyebrow={o.tag} title={o.title} featured={i === 0}>{o.desc}</Card></Reveal>)}
      </section>
      {!m && (
        <section style={{ maxWidth: 1120, margin: '0 auto', padding: '0 32px 96px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {strip.map((s, i) => (
            <Reveal key={s.label} delay={i * 140}>
              <div className="hover-zoom" style={{ width: '100%', aspectRatio: '4/3', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                <Photo className="media-bw" src={`/images/${s.src}.jpg`} label={s.label} alt={s.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </Reveal>
          ))}
        </section>
      )}
      <section style={{ background: 'var(--color-bg-surface)', borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: m ? '56px 20px' : '96px 32px' }}>
          <Reveal>
            <Eyebrow>Preguntas frecuentes</Eyebrow>
            <div style={{ marginTop: 24 }}><Accordion items={faqs} /></div>
          </Reveal>
        </div>
      </section>
      {!embedded && <Footer />}
      </PageFade>
    </div>
  );
}
