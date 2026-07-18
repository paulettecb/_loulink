import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeartHandshake, Users, MapPin } from 'lucide-react';
import { Eyebrow, Button, Card, Tag, Quote } from '../design-system/components/index.js';
import { useIsMobile } from '../hooks/useIsMobile.js';
import { Reveal, PageFade, SplitReveal } from '../lib/motion.jsx';
import { Nav } from '../components/Nav.jsx';
import { Footer } from '../components/Footer.jsx';
import { Photo } from '../components/Photo.jsx';

const offerings = [
  { title: 'Tatuaje de pareja', tag: 'Pareja', desc: 'Dos piezas que se completan — antes o después de la ceremonia.' },
  { title: 'Estación en tu fiesta', tag: 'Venue', desc: 'Montamos un rincón fine-line para quien quiera una pieza esa noche.' },
  { title: 'Iniciales y fechas', tag: 'Rápido', desc: 'La forma más simple de llevar la fecha con ustedes.' },
];

const homeWork = [
  { src: 'work-hummingbird-dragonfly', label: 'colibrí y libélula' },
  { src: 'work-butterflies', label: 'mariposas' },
  { src: 'work-numerals-1111', label: '11:11' },
  { src: 'work-swallow', label: 'golondrina' },
];

export default function Home({ embedded } = {}) {
  const m = useIsMobile();
  const navigate = useNavigate();
  const h2Style = { fontFamily: 'var(--font-display)', fontSize: m ? 'var(--text-xl)' : 'var(--text-3xl)', color: 'var(--color-text-primary)', margin: 0, maxWidth: 560 };
  const padX = m ? 20 : 32;

  return (
    <div style={{ background: 'var(--color-bg-page)' }}>
      {!embedded && <Nav active="home" />}
      <PageFade>
      {m ? (
      <section>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', overflow: 'hidden' }}>
          <Photo className="media-kenburns" src="/images/hero-hands-puppies-bw.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 25%' }} />
          <div className="grain-overlay"></div>
        </div>
        <div style={{ padding: '28px 20px 48px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <Reveal><Eyebrow tone="accent">Estudio · GDL · Todo México</Eyebrow></Reveal>
          <SplitReveal delay={80} lines={['Una línea fina, el día de tu boda.']} lineStyle={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', lineHeight: 'var(--leading-tight)', color: 'var(--color-text-primary)' }} />
          <Reveal delay={280}><p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>Diseñamos piezas fine-line a la medida de tu historia — para ustedes, o para quien los acompañe.</p></Reveal>
          <Reveal delay={360}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, whiteSpace: 'nowrap' }}>
              <Button size="lg" onClick={() => navigate('/booking')}>Reservar sesión</Button>
              <Button size="lg" variant="ghost" onClick={() => navigate('/flash')}>Ver flash</Button>
            </div>
          </Reveal>
        </div>
      </section>
      ) : (
      <section style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'minmax(440px,600px) 1fr', gridTemplateRows: '1fr', minHeight: '86vh' }}>
        <div style={{ padding: '0 28px 0 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24 }}>
          <Reveal><Eyebrow tone="accent">Estudio · GDL · Todo México</Eyebrow></Reveal>
          <SplitReveal delay={80} lines={['Una línea fina,', 'el día de tu boda.']} lineStyle={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', lineHeight: 'var(--leading-tight)', color: 'var(--color-text-primary)' }} />
          <Reveal delay={320}><p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', maxWidth: 400, margin: 0 }}>Diseñamos piezas fine-line a la medida de tu historia — para ustedes, o para quien los acompañe.</p></Reveal>
          <Reveal delay={420}>
            <div style={{ display: 'flex', gap: 14, whiteSpace: 'nowrap' }}>
              <Button size="lg" onClick={() => navigate('/booking')}>Reservar sesión</Button>
              <Button size="lg" variant="ghost" onClick={() => navigate('/flash')}>Ver flash</Button>
            </div>
          </Reveal>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden', height: '100%' }}>
          <Photo className="media-kenburns" src="/images/hero-hands-puppies-bw.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 25%' }} />
          <div className="grain-overlay"></div>
          <div style={{ position: 'absolute', left: 26, bottom: 48, transform: 'rotate(-90deg)', transformOrigin: 'left bottom', fontFamily: 'var(--font-signature)', fontSize: 28, color: 'rgba(251,248,242,.88)', whiteSpace: 'nowrap' }}>loulink</div>
        </div>
      </section>
      )}
      {!m && (
        <section style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', background: 'var(--color-bg-surface)' }}>
          <div style={{ maxWidth: 1120, margin: '0 auto', padding: '56px 32px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40 }}>
            {[{ Icon: HeartHandshake, label: 'Para la pareja' }, { Icon: Users, label: 'Para toda la fiesta' }, { Icon: MapPin, label: 'En tu venue' }].map((it, i) => (
              <Reveal key={it.label} delay={i * 140}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <it.Icon size={26} strokeWidth={1.4} style={{ color: 'var(--color-accent-burgundy)', flex: '0 0 auto' }} />
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--color-text-primary)' }}>{it.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}
      <section style={{ maxWidth: 1120, margin: '0 auto', padding: m ? '64px 20px' : '96px 32px' }}>
        <Reveal>
          <Eyebrow>La experiencia</Eyebrow>
          <h2 style={{ ...h2Style, marginTop: 16 }}>Tres formas de llevar tinta a tu boda.</h2>
        </Reveal>
        <Reveal delay={150}>
          <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3,1fr)', gap: m ? 16 : 24, marginTop: m ? 28 : 40 }}>
            {offerings.map((o, i) => <Card key={o.title} eyebrow={o.tag} title={o.title} featured={i === 0}>{o.desc}</Card>)}
          </div>
        </Reveal>
        <div style={{ marginTop: m ? 24 : 32 }}><Button variant="ghost" onClick={() => navigate('/services')}>Ver todos los servicios →</Button></div>
      </section>
      {!m && (
      <section style={{ background: 'var(--color-bg-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: '96px 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <Reveal>
            <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
              <Photo className="media-bw" src="/images/booth-wedding-station.jpg" label="Estación loulink montada en una recepción" alt="Estación loulink montada en una recepción" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <Eyebrow>En tu venue</Eyebrow>
              <h2 style={h2Style}>Una estación que llega lista a tu recepción.</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', maxWidth: 460, margin: 0 }}>Camilla, luz cálida y agujas nuevas. Montamos un rincón fine-line en tu fiesta — y lo dejamos como si nunca hubiéramos estado.</p>
              <div><Button variant="ghost" onClick={() => navigate('/services')}>Cómo funciona →</Button></div>
            </div>
          </Reveal>
        </div>
      </section>
      )}
      <section style={{ background: 'var(--color-bg-surface-alt)', padding: m ? '64px 0' : '96px 0' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', padding: `0 ${padX}px` }}>
          <Reveal>
            <Eyebrow>Flash</Eyebrow>
            <h2 style={{ ...h2Style, marginTop: 16 }}>El trazo del estudio, en piel real.</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: m ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: m ? 14 : 20, marginTop: m ? 28 : 40 }}>
            {(m ? homeWork.slice(0, 2) : homeWork).map((w, i) => (
              <Reveal key={w.label} delay={i * 130}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div className="hover-zoom" style={{ width: '100%', aspectRatio: '1/1', borderRadius: 8, overflow: 'hidden', border: '1px solid var(--color-border)' }}>
                    <Photo className="media-bw" src={`/images/${w.src}.jpg`} label={w.label} alt={w.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <Tag tone="neutral">{w.label}</Tag>
                </div>
              </Reveal>
            ))}
          </div>
          <div style={{ marginTop: m ? 24 : 32 }}><Button variant="ghost" onClick={() => navigate('/flash')}>Ver todo el flash →</Button></div>
        </div>
      </section>
      <section style={{ background: 'var(--rose-700)', padding: m ? '72px 24px' : '110px 32px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <Reveal><Quote tone="inverse" attribution="Ana & Caro, CDMX">Lloré, me reí, y salí con una piecita en la muñeca que ahora es mi favorita.</Quote></Reveal>
        </div>
      </section>
      <section style={{ maxWidth: 1120, margin: '0 auto', padding: m ? '64px 20px' : '96px 32px', textAlign: 'center' }}>
        <Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: m ? 'var(--text-xl)' : 'var(--text-3xl)', color: 'var(--color-text-primary)', margin: 0 }}>¿Lista para reservar tu fecha?</h2>
            <Button size="lg" onClick={() => navigate('/booking')}>Escríbenos</Button>
          </div>
        </Reveal>
      </section>
      {!embedded && <Footer />}
      </PageFade>
    </div>
  );
}
