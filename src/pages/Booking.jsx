import React, { useState } from 'react';
import { Eyebrow, Input, Textarea, Select, Radio, Checkbox, Button } from '../design-system/components/index.js';
import { useIsMobile } from '../hooks/useIsMobile.js';
import { PageFade } from '../lib/motion.jsx';
import { Nav } from '../components/Nav.jsx';
import { Footer } from '../components/Footer.jsx';

const steps = ['Experiencia', 'Detalles', 'Contacto'];

export default function Booking({ embedded } = {}) {
  const m = useIsMobile();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ tipo: '', rangoFecha: '', fecha: '', ciudad: '', idea: '', nombre: '', correo: '', consent: false });
  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e && e.target ? (e.target.type === 'checkbox' ? e.target.checked : e.target.value) : e }));

  return (
    <div style={{ background: 'var(--color-bg-page)' }}>
      {!embedded && <Nav active="booking" />}
      <PageFade>
      <section style={{ maxWidth: 640, margin: '0 auto', padding: m ? '48px 20px 96px' : '72px 32px 140px' }}>
        <Eyebrow tone="accent">Reserva</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: m ? 'var(--text-2xl)' : 'var(--text-4xl)', color: 'var(--color-text-primary)', margin: m ? '14px 0 28px' : '16px 0 40px' }}>Cuéntanos qué están planeando.</h1>
        {step < 3 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: m ? 14 : 24, marginBottom: m ? 28 : 40 }}>
            {steps.map((s, i) => (
              <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: i <= step ? 'var(--color-accent-burgundy)' : 'var(--color-text-muted)' }}>
                <span style={{ width: 22, height: 22, borderRadius: '50%', border: `1px solid ${i <= step ? 'var(--color-accent-burgundy)' : 'var(--color-border-strong)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>{i + 1}</span>
                {s}
              </div>
            ))}
          </div>
        )}
        {step === 0 && (
          <div key="s0" className="step-in" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Select label="Tipo de experiencia" value={form.tipo} onChange={set('tipo')} placeholder="Elige una opción"
              options={[{ value: 'pareja', label: 'Tatuaje de pareja' }, { value: 'venue', label: 'Estación en tu fiesta' }, { value: 'despedida', label: 'Despedida de soltera/o' }, { value: 'iniciales', label: 'Iniciales y fechas' }]} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Radio name="rango" label="Ya tenemos fecha" checked={form.rangoFecha === 'si'} onChange={() => setForm(f => ({ ...f, rangoFecha: 'si' }))} />
              <Radio name="rango" label="Todavía estamos viendo fechas" checked={form.rangoFecha === 'no'} onChange={() => setForm(f => ({ ...f, rangoFecha: 'no' }))} />
            </div>
            <div><Button onClick={() => setStep(1)} disabled={!form.tipo}>Siguiente</Button></div>
          </div>
        )}
        {step === 1 && (
          <div key="s1" className="step-in" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Input label="Fecha (o mes aproximado)" placeholder="12 de octubre, 2026" value={form.fecha} onChange={set('fecha')} />
            <Input label="Ciudad o venue" placeholder="¿Dónde es la boda?" value={form.ciudad} onChange={set('ciudad')} />
            <Textarea label="Cuéntanos tu idea" rows={4} placeholder="Estilo, cuántas personas, referencias..." value={form.idea} onChange={set('idea')} />
            <div style={{ display: 'flex', flexDirection: m ? 'column-reverse' : 'row', gap: 12 }}>
              <Button variant="secondary" onClick={() => setStep(0)}>Atrás</Button>
              <Button onClick={() => setStep(2)}>Siguiente</Button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div key="s2" className="step-in" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Input label="Nombre" placeholder="¿Cómo te llamas?" value={form.nombre} onChange={set('nombre')} />
            <Input label="Correo" type="email" placeholder="tu@correo.com" value={form.correo} onChange={set('correo')} />
            <Checkbox label="Acepto recibir novedades por correo" checked={form.consent} onChange={set('consent')} />
            <div style={{ display: 'flex', flexDirection: m ? 'column-reverse' : 'row', gap: 12 }}>
              <Button variant="secondary" onClick={() => setStep(1)}>Atrás</Button>
              <Button onClick={() => setStep(3)} disabled={!form.nombre || !form.correo}>Enviar</Button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div key="s3" className="step-in" style={{ display: 'flex', flexDirection: 'column', gap: 16, paddingTop: 24 }}>
            <Eyebrow tone="accent">Listo</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--color-text-primary)', margin: 0 }}>Te escribimos pronto{form.nombre ? ', ' + form.nombre.split(' ')[0] : ''}.</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>Revisamos disponibilidad para tu fecha y te confirmamos por correo en menos de 48 horas.</p>
          </div>
        )}
      </section>
      </PageFade>
      {!embedded && <Footer />}
    </div>
  );
}
