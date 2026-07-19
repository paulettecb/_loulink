import React from 'react';
import { Eyebrow } from '../design-system/components/index.js';
import { useIsMobile } from '../hooks/useIsMobile.js';
import { Reveal, PageFade } from '../lib/motion.jsx';
import { SectionPager } from '../lib/SectionPager.jsx';
import { Nav } from '../components/Nav.jsx';
import { Footer } from '../components/Footer.jsx';
import { Photo } from '../components/Photo.jsx';

const values = [
  { title: 'Discreto', desc: 'Piezas pequeñas y delicadas — se llevan bien con un vestido de novia.' },
  { title: 'A tu ritmo', desc: 'Antes de la ceremonia, en la recepción, o semanas después. Ustedes deciden cuándo.' },
  { title: 'Para toda la fiesta', desc: 'De la pareja a los padrinos — diseñamos para cualquiera que quiera sumarse.' },
];

export default function About({ embedded } = {}) {
  const m = useIsMobile();
  return (
    <div style={{ background: 'var(--color-bg-page)' }}>
      {!embedded && <Nav active="about" />}
      <PageFade>
      <SectionPager>
      <section style={{ maxWidth: 1120, margin: '0 auto', padding: m ? '48px 20px' : '72px 32px 56px', display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? 28 : 56, alignItems: 'center' }}>
        <Reveal>
          <div>
            <Eyebrow tone="accent">Nosotros</Eyebrow>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: m ? 'var(--text-2xl)' : 'var(--text-4xl)', lineHeight: 'var(--leading-tight)', color: 'var(--color-text-primary)', margin: '16px 0 0' }}>Un estudio de tatuaje que sabe entrar a una boda.</h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', marginTop: 24 }}>No somos wedding planners que un día decidieron ofrecer tatuajes. Somos tatuadores de línea fina que aprendimos a movernos dentro de una boda — el vestido, el horario, los nervios — sin perder la técnica ni la calma.</p>
          </div>
        </Reveal>
        <Reveal delay={170}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', overflow: 'hidden', borderRadius: m ? 'var(--radius-lg)' : 0 }}>
            <Photo className="media-bw" src="/images/portrait-artist-bw.jpg" label="Retrato de la tatuadora" alt="Retrato de la tatuadora" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 20%' }} />
            <div className="grain-overlay"></div>
          </div>
        </Reveal>
      </section>
      <section style={{ background: 'var(--color-bg-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: m ? '48px 20px' : '80px 32px', display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap: m ? 24 : 40 }}>
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 140}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--color-text-primary)' }}>{v.title}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-normal)' }}>{v.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section style={{ maxWidth: 1120, margin: '0 auto', padding: m ? '56px 20px' : '96px 32px', display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1.1fr', gap: m ? 24 : 64, alignItems: 'center' }}>
        <Reveal>
          <div style={{ width: '100%', aspectRatio: m ? '4/3' : '3/4', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
            <Photo className="media-bw" src="/images/process-tattooing-bw.jpg" label="Sesión de tatuaje fine-line en el estudio" alt="Sesión de tatuaje fine-line en el estudio" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 30%' }} />
          </div>
        </Reveal>
        <Reveal delay={160}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <Eyebrow>La técnica</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: m ? 'var(--text-xl)' : 'var(--text-3xl)', color: 'var(--color-text-primary)', margin: 0, maxWidth: 480 }}>Línea fina, pulso lento.</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', maxWidth: 440, margin: 0 }}>Agujas finas, sesiones cortas, piezas pequeñas que envejecen bien. Sin sombras pesadas. Sin relleno.</p>
          </div>
        </Reveal>
      </section>
      </SectionPager>
      {!embedded && <Footer />}
      </PageFade>
    </div>
  );
}
