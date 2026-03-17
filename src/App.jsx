import React, { useState, useEffect } from 'react';
import {
  Menu, X, ChevronDown, ChevronRight,
  Activity, TrendingUp, Wrench, Users, MapPin, Mail, Phone, ShieldCheck
} from 'lucide-react';

const NAV_BG = '#0f1e35';
const PERIWINKLE = '#dde8f4';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", color: '#0f1e35' }}>

      {/* ─── NAVBAR ─── always solid dark */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: NAV_BG, zIndex: 100, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 72 }}>

          {/* Logo */}
          <div
            style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div style={{ width: 36, height: 36, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Activity size={18} color="white" />
            </div>
            <div>
              <div style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 20, letterSpacing: '0.15em', color: 'white', lineHeight: 1.1 }}>ORKA</div>
              <div style={{ fontSize: 9, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginTop: 1 }}>Energy Asset Management</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="nav-desktop">
            {['#sobre|Sobre Nós', '#servicos|Serviços', '#metodologia|Metodologia OAMS', '#hse|HSE', '#time|Nosso Time'].map(i => {
              const [href, label] = i.split('|');
              return (
                <a key={href} href={href} style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'white'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.75)'}
                >{label}</a>
              );
            })}
            <a href="#contato"
              style={{ border: '1px solid rgba(255,255,255,0.35)', color: 'white', fontSize: 13, fontWeight: 500, padding: '8px 20px', borderRadius: 999, textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.target.style.background = 'white'; e.target.style.color = NAV_BG; }}
              onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'white'; }}
            >Fale Conosco</a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}
            className="nav-mobile-btn"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div style={{ backgroundColor: NAV_BG, borderTop: '1px solid rgba(255,255,255,0.1)', padding: '12px 24px 20px' }}>
            {['#sobre|Sobre Nós', '#servicos|Serviços', '#metodologia|Metodologia OAMS', '#hse|HSE', '#time|Nosso Time', '#contato|Fale Conosco'].map(i => {
              const [href, label] = i.split('|');
              return <a key={href} href={href} onClick={() => setIsMenuOpen(false)} style={{ display: 'block', color: 'rgba(255,255,255,0.75)', padding: '10px 0', fontSize: 14, textDecoration: 'none' }}>{label}</a>;
            })}
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
          .split-grid { grid-template-columns: 1fr !important; }
          .svc-grid { grid-template-columns: 1fr !important; }
          .challenge-row { grid-template-columns: 1fr !important; }
          .stat-grid { grid-template-columns: 1fr 1fr !important; }
          .card-grid { grid-template-columns: 1fr !important; }
          .steps-row { flex-direction: column !important; }
          .steps-line { display: none !important; }
          .hse-grid { grid-template-columns: 1fr 1fr !important; }
          .team-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
        }
        .img-card { border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.12); }
        .arrow-link > span { transition: transform 0.2s; }
        .arrow-link:hover > span { transform: translateX(3px); }
        .btn-pill { display: inline-flex; align-items: center; gap: 8px; background: #0f1e35; color: white; font-size: 13px; font-weight: 500; padding: 12px 22px; border-radius: 999px; text-decoration: none; border: none; cursor: pointer; transition: background 0.2s; }
        .btn-pill:hover { background: #1a3060; }
      `}</style>

      {/* ─── HERO ─── */}
      <section style={{
        position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden',
        background: 'linear-gradient(160deg, #0b1929 0%, #0f2044 45%, #1a3060 75%, #0e2548 100%)'
      }}>
        {/* Grid lines overlay */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 75% 80% at 50% 50%, black 50%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 80% at 50% 50%, black 50%, transparent 100%)',
        }} />
        <div style={{ position: 'absolute', top: '35%', left: '55%', width: 500, height: 500, borderRadius: '50%', background: 'rgba(100,160,255,0.07)', filter: 'blur(80px)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '120px 48px 80px', width: '100%' }}>
          <div style={{ maxWidth: 680 }}>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 24 }}>ORKA ENERGY ASSET MANAGEMENT</p>
            <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.1, marginBottom: 28, fontWeight: 400 }}>
              Gestão Estratégica de Ativos de Energia ao Longo de Todo o Ciclo de Vida
            </h1>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.57)', lineHeight: 1.7, marginBottom: 44, maxWidth: 520 }}>
              Integramos engenharia, operação e inteligência financeira para garantir máxima performance, confiabilidade e retorno aos investidores.
            </p>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="#sobre" className="btn-pill">Conheça a ORKA <ChevronRight size={16} /></a>
              <a href="#servicos" className="arrow-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.6)', fontSize: 13, fontWeight: 500, textDecoration: 'none' }}>
                Nossos Serviços <span><ChevronRight size={16} /></span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <p style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>Role para explorar</p>
          <ChevronDown size={18} color="rgba(255,255,255,0.35)" style={{ animation: 'bounce 2s infinite' }} />
        </div>
        <style>{`@keyframes bounce { 0%,100%{transform:translateY(0)}50%{transform:translateY(5px)} }`}</style>
      </section>

      {/* ─── COMPETÊNCIAS BAR ─── dark transition strip between hero and Sobre */}
      <div style={{ backgroundColor: '#111e33', padding: '22px 48px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16, justifyContent: 'space-between' }}>
          <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', flexShrink: 0 }}>Nossas Competências</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['Gestão Técnica', 'Otimização de Performance', 'Governança & Riscos', 'Inteligência de Mercado', 'Controle de OPEX'].map((tag, i) => (
              <span key={i} style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.55)', backgroundColor: 'rgba(255,255,255,0.07)', padding: '5px 14px', borderRadius: 999, border: '1px solid rgba(255,255,255,0.1)' }}>{tag}</span>
            ))}
          </div>
          <a href="#servicos" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', flexShrink: 0 }}>Ver Serviços <ChevronRight size={14} /></a>
        </div>
      </div>

      {/* ─── SOBRE NÓS ─── cinematic full-width with stats overlay */}
      <section id="sobre" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Large aerial image */}
        <div style={{ position: 'relative', minHeight: 640, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <img
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1800"
            alt="Ativos de energia"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {/* Gradient overlay - heavier at bottom */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,16,38,0.35) 0%, rgba(8,16,38,0.75) 55%, rgba(8,16,38,0.96) 100%)' }} />

          <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '80px 48px', width: '100%' }}>
            {/* Top text */}
            <div style={{ maxWidth: 740, marginBottom: 64 }}>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>Sobre a ORKA</p>
              <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(2rem,4vw,3.5rem)', color: 'white', lineHeight: 1.1, fontWeight: 400, marginBottom: 24 }}>
                Parceiros Estratégicos de Ativos de Energia
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.58)', lineHeight: 1.75, maxWidth: 600 }}>
                Nascemos para maximizar o valor de ativos de energia ao longo de todo o ciclo de vida. Integramos engenharia, operação e inteligência financeira para garantir performance, confiabilidade e retorno.
              </p>
            </div>

            {/* Stats bar */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0, borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 40 }} className="stat-grid">
              {[
                { num: '5+', label: 'Anos de Mercado' },
                { num: '500+ MW', label: 'Ativos Gerenciados' },
                { num: '4', label: 'Verticais de Serviço' },
                { num: '100%', label: 'Foco Independente' },
              ].map((s, i) => (
                <div key={i} style={{ paddingRight: 32, borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none', paddingLeft: i > 0 ? 32 : 0 }}>
                  <div style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(2rem,3vw,3rem)', color: 'white', lineHeight: 1, marginBottom: 6 }}>{s.num}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ─── O DESAFIO ─── dark navy editorial with numbered rows */}
      <section style={{ backgroundColor: '#0f1e35', padding: '96px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>

          {/* Quote header */}
          <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 56, marginBottom: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'end' }} className="split-grid">
            <div>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>O Contexto</p>
              <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(2rem,4vw,3.25rem)', color: 'white', lineHeight: 1.1, fontWeight: 400, margin: 0 }}>
                O Desafio dos<br />Ativos de Energia
              </h2>
            </div>
            <div>
              <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.45)', fontStyle: 'italic', lineHeight: 1.65, borderLeft: '2px solid rgba(255,255,255,0.15)', paddingLeft: 24, margin: 0 }}>
                "This is where independent energy asset managers become essential. A gestão especializada é o que transforma ativos em plataformas de valor."
              </p>
            </div>
          </div>

          {/* Numbered challenge rows */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { n: '01', title: 'Complexidade Operacional', text: 'Usinas exigem gestão contínua de performance, manutenção especializada e análise técnica permanente — sem isso, a geração cai e os custos sobem.' },
              { n: '02', title: 'Gestão Financeira & Contratual', text: 'Controle de receitas, PPA, contratos de O&M, financiamentos e relatórios para investidores exigem visibilidade e rigor que os operadores tradicionais não oferecem.' },
              { n: '03', title: 'Múltiplos Stakeholders', text: 'Integração entre operadores de campo, fornecedores, financiadores, reguladores e o dono do ativo requer um gestor independente e neutro.' },
              { n: '04', title: 'Maximização de Receita', text: 'Pequenas melhorias na disponibilidade e no fator de planta representam ganhos expressivos no TIR e VPL ao longo de 20+ anos de operação.' },
            ].map(({ n, title, text }, i, arr) => (
              <div key={n} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 2fr', gap: 32, alignItems: 'start', padding: '36px 0', borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }} className="challenge-row">
                <div style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 36, color: 'rgba(255,255,255,0.12)', lineHeight: 1, marginTop: 4 }}>{n}</div>
                <div style={{ fontWeight: 600, fontSize: 16, color: 'white', lineHeight: 1.3 }}>{title}</div>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── SERVIÇOS ─── */}
      <section id="servicos" style={{ padding: '96px 48px', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64, maxWidth: 560, margin: '0 auto 64px' }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(15,30,53,0.35)', marginBottom: 12 }}>Áreas de Atuação</p>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(1.75rem,3vw,2.75rem)', color: '#0f1e35', lineHeight: 1.2, fontWeight: 400 }}>Nossos Serviços</h2>
          </div>

          {/* 2-column card grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24, marginBottom: 24 }} className="svc-grid">
            {[
              {
                img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=900',
                tag: 'Geração',
                title: 'Geração de Energia',
                desc: 'Cobertura completa para ativos de geração renovável, desde monitoramento de performance até gestão operacional e financeira independente.',
                items: ['Solar (GC e GD)', 'Eólica', 'Hidrelétricas'],
                accent: '#3b82f6',
              },
              {
                img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=900',
                tag: 'Transmissão',
                title: 'Transmissão & Infraestrutura',
                desc: 'Gestão técnica de ativos de transmissão de alta e média tensão, subestações e infraestrutura crítica, incluindo Data Centers e saneamento.',
                items: ['Alta e Média Tensão', 'Subestações', 'Infraestrutura Geral'],
                accent: '#6366f1',
              },
            ].map(({ img, tag, title, desc, items, accent }, i) => (
              <div key={i} style={{ backgroundColor: 'white', borderRadius: 20, overflow: 'hidden', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                  <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  />
                </div>
                <div style={{ padding: 32, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: accent, marginBottom: 12, display: 'block' }}>{tag}</span>
                  <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(1.4rem,2vw,1.8rem)', color: '#0f1e35', fontWeight: 400, marginBottom: 14, lineHeight: 1.2 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7, marginBottom: 20, flex: 1 }}>{desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                    {items.map((it, j) => (
                      <span key={j} style={{ fontSize: 12, fontWeight: 500, color: '#334155', backgroundColor: '#f1f5f9', padding: '5px 12px', borderRadius: 999 }}>{it}</span>
                    ))}
                  </div>
                  <a href="#contato" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 500, color: accent, textDecoration: 'none' }}>Saiba mais <ChevronRight size={15} /></a>
                </div>
              </div>
            ))}
          </div>

          {/* BESS — full-width cinematic card */}
          <div style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', minHeight: 400, display: 'flex', alignItems: 'center' }}>
            <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1600" alt="BESS" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(10,20,45,0.92) 0%, rgba(10,20,45,0.7) 55%, rgba(10,20,45,0.25) 100%)' }} />
            <div style={{ position: 'relative', padding: 'clamp(40px,5vw,64px)', maxWidth: 640 }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#34d399', marginBottom: 14, display: 'block' }}>Armazenamento</span>
              <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: 'white', fontWeight: 400, marginBottom: 16, lineHeight: 1.2 }}>Armazenamento de Energia (BESS)</h3>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 28 }}>Gestão especializada de Battery Energy Storage Systems, com monitoramento preditivo de SoC e SoH, manutenção preventiva e diagnóstico avançado.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
                {['BoP', 'PCS e Inversores', 'Monitoramento Preditivo', 'RCA'].map((it, i) => (
                  <span key={i} style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.8)', backgroundColor: 'rgba(255,255,255,0.1)', padding: '5px 14px', borderRadius: 999, border: '1px solid rgba(255,255,255,0.15)' }}>{it}</span>
                ))}
              </div>
              <a href="#contato" className="btn-pill" style={{ backgroundColor: 'white', color: '#0f1e35', display: 'inline-flex' }}>Explorar BESS <ChevronRight size={16} /></a>
            </div>
          </div>

        </div>
      </section>

      {/* ─── METODOLOGIA OAMS ─── */}
      <section id="metodologia" style={{ padding: '96px 48px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 72, maxWidth: 600, margin: '0 auto 72px' }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(15,30,53,0.35)', marginBottom: 12 }}>Como Trabalhamos</p>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(1.75rem,3vw,2.75rem)', color: '#0f1e35', lineHeight: 1.2, marginBottom: 16, fontWeight: 400 }}>
              Metodologia OAMS
            </h2>
            <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.7 }}>
              Orka Asset Management System — gestão de ativos como alavanca de valor, combinando rigor técnico e eficiência operacional.
            </p>
          </div>

          {/* Steps */}
          <div className="steps-row" style={{ display: 'flex', gap: 0, marginBottom: 72, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 28, left: '10%', right: '10%', height: 1, backgroundColor: '#e2e8f0' }} className="steps-line" />
            {[
              { n: '01', title: 'Planejamento', text: 'Diagnóstico e definição de estratégia.' },
              { n: '02', title: 'Estratégia', text: 'Plano de performance e manutenção.' },
              { n: '03', title: 'Metodologia', text: 'Ciclo OAMS com processos definidos.' },
              { n: '04', title: 'Agilidade', text: 'Resposta rápida e gestão de desvios.' },
              { n: '05', title: 'Resultado', text: 'KPIs, relatórios e geração de valor.' },
            ].map((s) => (
              <div key={s.n} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 8px', position: 'relative', zIndex: 1 }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', backgroundColor: '#0f1e35', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 18, marginBottom: 16, boxShadow: '0 4px 16px rgba(15,30,53,0.25)' }}>{s.n}</div>
                <div style={{ fontWeight: 600, fontSize: 13, color: '#0f1e35', marginBottom: 6 }}>{s.title}</div>
                <div style={{ fontSize: 12, color: '#94a3b8', lineHeight: 1.5 }}>{s.text}</div>
              </div>
            ))}
          </div>

          {/* Objectives */}
          <div className="card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginBottom: 56 }}>
            {[
              { Icon: TrendingUp, title: 'Performance', text: 'Otimizar a performance dos recursos para maximizar geração e disponibilidade.', bg: '#eff6ff', iconColor: '#3b82f6' },
              { Icon: Activity, title: 'Custo', text: 'Reduzir custos gerindo recursos e intervenções de forma eficiente ao longo do ciclo.', bg: '#f0fdf4', iconColor: '#10b981' },
              { Icon: ShieldCheck, title: 'Risco', text: 'Controlar riscos em conformidade com as diretrizes de Compliance e HSE.', bg: '#fffbeb', iconColor: '#f59e0b' },
            ].map(({ Icon, title, text, bg, iconColor }, i) => (
              <div key={i} style={{ padding: 32, border: '1px solid #e2e8f0', borderRadius: 16, backgroundColor: 'white' }}>
                <div style={{ display: 'inline-flex', padding: 12, borderRadius: 12, backgroundColor: bg, marginBottom: 16 }}>
                  <Icon size={22} color={iconColor} />
                </div>
                <h4 style={{ fontSize: 17, fontWeight: 600, color: '#0f1e35', marginBottom: 10 }}>{title}</h4>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.65 }}>{text}</p>
              </div>
            ))}
          </div>

          {/* Process flows */}
          <div style={{ backgroundColor: '#0f1e35', borderRadius: 24, padding: 'clamp(32px,4vw,56px)' }}>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 24, color: 'white', fontWeight: 400, marginBottom: 8 }}>Processos de Operação e Manutenção</h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>Garantindo Disponibilidade, Confiabilidade e Performance</p>
            </div>
            <div className="split-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {[
                { label: 'Fluxo Operacional', Icon: Activity, accent: '#60a5fa', steps: ['1. Pré Operação', '2. Tempo Real', '3. Pós Operação'], h: 1 },
                { label: 'Fluxo de Manutenção', Icon: Wrench, accent: '#34d399', steps: ['1. PCM — Planejamento e Controle', '2. Engenharia de Suporte', '3. Execução da Manutenção'], h: 1 },
              ].map(({ label, Icon, accent, steps, h }) => (
                <div key={label} style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 16, padding: 24, border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <span style={{ fontWeight: 600, color: accent, fontSize: 14 }}>{label}</span>
                    <Icon size={18} color="rgba(255,255,255,0.25)" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {steps.map((s, i) => (
                      <div key={i} style={{ padding: '12px 16px', borderRadius: 10, fontSize: 13, fontWeight: i === h ? 500 : 400, color: i === h ? accent : 'rgba(255,255,255,0.4)', backgroundColor: i === h ? 'rgba(255,255,255,0.07)' : 'transparent' }}>{s}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── HSE ─── cinematic banner + 5-pillar grid */}
      <section id="hse" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Full-width background image with overlay */}
        <div style={{ position: 'relative', minHeight: 480, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1600" alt="Segurança" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,20,45,0.78) 0%, rgba(10,20,45,0.88) 100%)' }} />
          <div style={{ position: 'relative', padding: 'clamp(64px,8vw,96px) 48px', maxWidth: 720 }}>
            <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: 16 }}>Compromisso ORKA</p>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(2rem,4vw,3.25rem)', color: 'white', fontWeight: 400, lineHeight: 1.15, marginBottom: 20 }}>Pessoas, Qualidade,<br />Saúde & Segurança</h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: 36, maxWidth: 600, margin: '0 auto 36px' }}>
              Dois pilares: <strong style={{ color: 'white' }}>cultura comportamental</strong> e <strong style={{ color: 'white' }}>processos técnicos</strong>. Quando o risco é tratado com método, cuidamos de quem está em campo e mitigamos custos não previstos.
            </p>
            <a href="#contato" className="btn-pill" style={{ backgroundColor: 'white', color: '#0f1e35', display: 'inline-flex' }}>Fale com um Especialista <ChevronRight size={16} /></a>
          </div>
        </div>

        {/* 5-pillar grid below */}
        <div style={{ backgroundColor: '#0f1e35', padding: '56px 48px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 1 }} className="hse-grid">
            {[
              { n: '01', title: 'Confiabilidade Operacional', text: 'Planejamento estruturado e análise de risco contínua.' },
              { n: '02', title: 'Capacitação Constante', text: 'Treinamentos além dos requisitos mínimos do setor elétrico.' },
              { n: '03', title: 'Rituais de Gestão', text: 'Liderança de campo com responsabilidade compartilhada.' },
              { n: '04', title: 'Comunicação Estruturada', text: 'Velocidade, eficiência e transparência na tomada de decisão.' },
              { n: '05', title: 'Requisitos Legais', text: 'Monitoramento e atendimento às normas de SST e NRs.' },
            ].map(({ n, title, text }) => (
              <div key={n} style={{ padding: '32px 24px', borderLeft: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 28, color: 'rgba(255,255,255,0.15)', marginBottom: 16, lineHeight: 1 }}>{n}</div>
                <div style={{ fontWeight: 600, fontSize: 13, color: 'white', marginBottom: 8, lineHeight: 1.4 }}>{title}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.42)', lineHeight: 1.65 }}>{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIME ─── */}
      <section id="time" style={{ padding: '96px 48px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(15,30,53,0.35)', marginBottom: 12 }}>As Pessoas Por Trás</p>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(1.75rem,3vw,2.75rem)', color: '#0f1e35', lineHeight: 1.2, fontWeight: 400, marginBottom: 12 }}>Nosso Time de Liderança</h2>
            <p style={{ fontSize: 15, color: '#64748b' }}>Experiência e expertise dedicadas ao seu ativo.</p>
          </div>
          <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32 }}>
            {[
              { name: 'Bruno Gil', role: 'Business Development Director', email: 'bruno.gil@orka.eng.br', borderColor: '#bfdbfe' },
              { name: 'Klecio Miguel', role: 'Contracts and Field Director', email: 'klecio.miguel@orka.eng.br', borderColor: '#a7f3d0' },
              { name: 'Ewerton Carneiro', role: 'Engineering and Operations Director', email: 'ewerton.carneiro@orka.eng.br', borderColor: '#fde68a' },
              { name: 'Celso Kleist', role: 'Administrative and HSE Director', email: 'celso.kleist@orka.eng.br', borderColor: '#ddd6fe' },
            ].map(({ name, role, email, borderColor }, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ width: 140, height: 140, margin: '0 auto 20px', borderRadius: 16, border: `2px solid ${borderColor}`, backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <Users size={52} color="#94a3b8" />
                </div>
                <div style={{ fontWeight: 600, fontSize: 16, color: '#0f1e35', marginBottom: 4 }}>{name}</div>
                <div style={{ fontSize: 12, color: '#3b82f6', fontWeight: 500, marginBottom: 8 }}>{role}</div>
                <a href={`mailto:${email}`} style={{ fontSize: 12, color: '#94a3b8', textDecoration: 'none' }}>{email}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARCEIROS ─── editorial partner cards */}
      <section style={{ backgroundColor: PERIWINKLE, padding: '80px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(15,30,53,0.4)', marginBottom: 12 }}>Ecossistema ORKA</p>
              <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(1.5rem,2.5vw,2.25rem)', color: '#0f1e35', fontWeight: 400, lineHeight: 1.2, margin: 0 }}>
                Nossos Parceiros Tecnológicos
              </h2>
            </div>
            <p style={{ fontSize: 14, color: '#64748b', maxWidth: 380, lineHeight: 1.65, margin: 0 }}>
              Trabalhamos com parceiros especializados para entregar soluções integradas de gestão, monitoramento e operação de ativos.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }} className="card-grid">
            {[
              { name: 'IN FORMA', category: 'Gestão de Pessoas', desc: 'Plataforma de RH e gestão de equipes técnicas de campo.', initial: 'IF', color: '#0f1e35' },
              { name: 'PVOPERATION', category: 'O&M Solar', desc: 'Software especializado em operação e manutenção de usinas fotovoltaicas.', initial: 'PV', color: '#2563eb' },
              { name: 'Volateq', category: 'Mercado de Energia', desc: 'Inteligência de mercado e gestão de contratos de energia elétrica.', initial: 'V', color: '#7c3aed' },
              { name: 'kartado', category: 'Field Service', desc: 'Gestão digitalizada de atividades e equipes técnicas em campo.', initial: 'K', color: '#0369a1' },
            ].map(({ name, category, desc, initial, color }) => (
              <div key={name} style={{ backgroundColor: 'white', borderRadius: 16, padding: 28, border: '1px solid rgba(15,30,53,0.07)', display: 'flex', flexDirection: 'column', gap: 16 }}>
                {/* Logo placeholder */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: 14, fontWeight: 800, color: 'white', letterSpacing: '-0.02em' }}>{initial}</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: '#0f1e35', lineHeight: 1.2 }}>{name}</div>
                    <div style={{ fontSize: 11, color: '#94a3b8', fontWeight: 500 }}>{category}</div>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── FOOTER ─── */}
      <footer id="contato" style={{ backgroundColor: '#0f1e35', color: 'rgba(255,255,255,0.6)', padding: '80px 48px 40px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 64 }}>

            {/* Brand */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Activity size={18} color="white" />
                </div>
                <div>
                  <div style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 20, letterSpacing: '0.15em', color: 'white', lineHeight: 1.1 }}>ORKA</div>
                  <div style={{ fontSize: 9, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase' }}>Energy Asset Management</div>
                </div>
              </div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)', lineHeight: 1.75, maxWidth: 340 }}>
                Transformando ativos de energia em plataformas de geração de valor sustentável e de longo prazo através de gestão técnica, financeira e inovação.
              </p>
            </div>

            {/* Contato */}
            <div>
              <h4 style={{ color: 'white', fontSize: 13, fontWeight: 600, marginBottom: 20, letterSpacing: '0.05em' }}>Contato</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { Icon: Phone, text: '+55 11 933 502 929', href: 'tel:+5511933502929' },
                  { Icon: Mail, text: 'bruno.gil@orka.eng.br', href: 'mailto:bruno.gil@orka.eng.br' },
                  { Icon: Activity, text: 'www.orka.eng.br', href: 'https://www.orka.eng.br' },
                ].map(({ Icon, text, href }, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Icon size={14} color="rgba(255,255,255,0.3)" />
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>{text}</a>
                  </div>
                ))}
              </div>
            </div>

            {/* Sede */}
            <div>
              <h4 style={{ color: 'white', fontSize: 13, fontWeight: 600, marginBottom: 20, letterSpacing: '0.05em' }}>Sede</h4>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <MapPin size={14} color="rgba(255,255,255,0.3)" style={{ marginTop: 3, flexShrink: 0 }} />
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75 }}>Florianópolis<br />Santa Catarina — Brasil</p>
              </div>
              <div style={{ marginTop: 24, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <h4 style={{ color: 'white', fontSize: 13, fontWeight: 600, marginBottom: 14, letterSpacing: '0.05em' }}>Links</h4>
                {['#sobre|Sobre Nós', '#servicos|Serviços', '#metodologia|Metodologia', '#hse|HSE', '#time|Nosso Time'].map(l => {
                  const [href, label] = l.split('|');
                  return <a key={href} href={href} style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none', marginBottom: 8 }}>{label}</a>;
                })}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.28)' }}>© {new Date().getFullYear()} ORKA Energy Asset Management. Todos os direitos reservados.</p>
            <div style={{ display: 'flex', gap: 20 }}>
              <a href="#" style={{ fontSize: 12, color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>Política de Privacidade</a>
              <a href="#" style={{ fontSize: 12, color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

// ─── Reusable service text block ───
const ServiceText = ({ title, desc, href, btnLabel, items, accentColor }) => (
  <div style={{ maxWidth: 520 }}>
    <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(2rem,3.5vw,3rem)', color: '#0f1e35', lineHeight: 1.15, marginBottom: 20, fontWeight: 400 }}>{title}</h2>
    <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.75, marginBottom: 28 }}>{desc}</p>
    <a href={href} className="btn-pill" style={{ marginBottom: 32, display: 'inline-flex' }}>{btnLabel} <ChevronRight size={16} /></a>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 8 }}>
      {items.map(({ label, text }, i) => (
        <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <span style={{ color: accentColor, fontWeight: 700, fontSize: 20, lineHeight: 1, marginTop: 1 }}>›</span>
          <div>
            <div style={{ fontWeight: 600, fontSize: 14, color: '#0f1e35', marginBottom: 2 }}>{label}</div>
            <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.55 }}>{text}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default App;
