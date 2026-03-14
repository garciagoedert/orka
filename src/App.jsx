import React, { useState } from 'react';
import { 
  Menu, X, Sun, Wind, Zap, ShieldCheck, Target, Eye, 
  Heart, Battery, Server, Droplets, Activity, TrendingUp, 
  Wrench, Users, MapPin, Mail, Phone, ChevronRight, CheckCircle2, ChevronDown
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      
      {/* Navbar */}
      <nav className="fixed w-full bg-slate-900/95 backdrop-blur-sm text-white z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-400">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-2xl tracking-wider">ORKA</span>
                <p className="text-[0.6rem] tracking-widest text-slate-300 uppercase -mt-1">Energy Asset Management</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#sobre" className="text-sm font-medium hover:text-emerald-400 transition-colors">Sobre Nós</a>
              <a href="#servicos" className="text-sm font-medium hover:text-emerald-400 transition-colors">Serviços</a>
              <a href="#metodologia" className="text-sm font-medium hover:text-emerald-400 transition-colors">Metodologia OAMS</a>
              <a href="#hse" className="text-sm font-medium hover:text-emerald-400 transition-colors">HSE</a>
              <a href="#time" className="text-sm font-medium hover:text-emerald-400 transition-colors">Nosso Time</a>
              <a href="#contato" className="text-sm font-medium bg-emerald-500 text-slate-900 px-4 py-2 rounded-full hover:bg-emerald-400 transition-colors">Contato</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-slate-300 hover:text-white">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#sobre" onClick={closeMenu} className="block px-3 py-2 text-base font-medium hover:bg-slate-800 rounded-md">Sobre Nós</a>
              <a href="#servicos" onClick={closeMenu} className="block px-3 py-2 text-base font-medium hover:bg-slate-800 rounded-md">Serviços</a>
              <a href="#metodologia" onClick={closeMenu} className="block px-3 py-2 text-base font-medium hover:bg-slate-800 rounded-md">Metodologia OAMS</a>
              <a href="#hse" onClick={closeMenu} className="block px-3 py-2 text-base font-medium hover:bg-slate-800 rounded-md">HSE</a>
              <a href="#time" onClick={closeMenu} className="block px-3 py-2 text-base font-medium hover:bg-slate-800 rounded-md">Nosso Time</a>
              <a href="#contato" onClick={closeMenu} className="block px-3 py-2 text-base font-medium text-emerald-400 hover:bg-slate-800 rounded-md">Contato</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
        {/* Background com tema de energia e gestão */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-luminosity"></div>
          {/* Gradiente escuro para legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900"></div>
          {/* Padrão de grid sutil lembrando tecnologia/dados */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left w-full z-10">
          <div className="md:w-2/3">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold text-sm mb-6 border border-emerald-500/20 backdrop-blur-sm">
              Transformando Ativos de Energia
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Maximizando o Valor e a Performance dos seus Ativos de Energia
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl">
              Somos uma empresa independente de Asset Management e engenharia especializada, focada em garantir que cada ativo opere com máxima performance, confiabilidade e retorno ao investidor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#sobre" className="flex items-center justify-center gap-2 bg-emerald-500 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-emerald-400 transition-all">
                Conheça a ORKA <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#servicos" className="flex items-center justify-center gap-2 bg-slate-800/80 backdrop-blur text-white border border-slate-700 px-8 py-4 rounded-full font-bold hover:bg-slate-700 transition-all">
                Nossos Serviços
              </a>
            </div>
          </div>
        </div>

        {/* Indicador de Rolagem (Scroll Down) */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
          <span className="text-slate-400 text-xs tracking-widest uppercase mb-2">Role para baixo</span>
          <a href="#sobre" className="text-emerald-500 hover:text-emerald-400 transition-colors bg-slate-800/50 p-2 rounded-full backdrop-blur-sm border border-slate-700">
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Sobre Nós</h2>
              <p className="text-lg text-slate-600 mb-4">
                Nascemos para maximizar o valor de ativos de energia e infraestrutura ao longo de todo o seu ciclo de vida. Integramos engenharia, operação e inteligência financeira para garantir máxima performance.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                Atuamos como parceiros estratégicos de investidores, desenvolvedores e operadores, estruturando soluções que combinam:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Gestão técnica e operacional",
                  "Otimização de performance",
                  "Governança e gestão de riscos",
                  "Inteligência de mercado e estratégia energética"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex items-start gap-4">
                <MapPin className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900">Sede em Florianópolis / SC</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Fundada em Santa Catarina, operamos a partir de um dos principais polos de inovação, tecnologia e energia do país.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-10 group-hover:bg-blue-100 transition-colors"></div>
                <Target className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Missão</h3>
                <p className="text-slate-600">Maximizar o valor e o desempenho de ativos energéticos por meio de gestão estratégica, inovação e excelência operacional.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -z-10 group-hover:bg-emerald-100 transition-colors"></div>
                <Eye className="w-10 h-10 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Visão</h3>
                <p className="text-slate-600">Ser referência como plataforma independente de Asset Management, reconhecida pela excelência técnica, transparência e geração de valor para investidores.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden group hover:border-amber-500/30 transition-colors">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-50 rounded-bl-full -z-10 group-hover:bg-amber-100 transition-colors"></div>
                <Heart className="w-10 h-10 text-amber-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Valores</h3>
                <p className="text-slate-600">Guiados pela integridade, excelência técnica e compromisso absoluto com saúde e segurança, sempre colocando as pessoas em primeiro lugar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que Asset Management? */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">O Desafio dos Ativos de Energia</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto italic">
            "This is where independent energy asset managers become essential."
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700">
              <Wrench className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Complexidade Operacional</h3>
              <p className="text-sm text-slate-400">Usinas exigem gestão contínua de performance, manutenção e análise técnica.</p>
            </div>
            <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700">
              <TrendingUp className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Gestão Financeira e Contratual</h3>
              <p className="text-sm text-slate-400">Controle de receitas, contratos de energia, financiamentos e relatórios.</p>
            </div>
            <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700">
              <Users className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Múltiplos Stakeholders</h3>
              <p className="text-sm text-slate-400">Integração entre operadores, fornecedores, financiadores e reguladores.</p>
            </div>
            <div className="p-6 bg-slate-800 rounded-2xl border border-slate-700">
              <Activity className="w-10 h-10 text-purple-400 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Maximização de Receita</h3>
              <p className="text-sm text-slate-400">Pequenas melhorias operacionais representam ganhos significativos no retorno.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Serviços */}
      <section id="servicos" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nossos Serviços</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Cobrimos toda a cadeia de infraestrutura energética com foco técnico e estratégico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Geração */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <Sun className="w-12 h-12 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">Geração</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Solar (GC e GD)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Eólica</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Hidrelétricas</li>
              </ul>
            </div>

            {/* Transmissão */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <Zap className="w-12 h-12 text-blue-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">Transmissão</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Alta Tensão</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Média Tensão</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> Subestações</li>
              </ul>
            </div>

            {/* Armazenamento */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow ring-2 ring-emerald-500/20">
              <Battery className="w-12 h-12 text-emerald-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">Armazenamento</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2 font-medium text-emerald-700"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> BESS (Battery Energy Storage Systems)</li>
              </ul>
            </div>

            {/* Infraestrutura */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <Server className="w-12 h-12 text-purple-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">Infraestrutura</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Saneamento</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Data Center</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Infraestrutura Geral</li>
              </ul>
            </div>
          </div>

          {/* Destaque BESS */}
          <div className="mt-12 bg-emerald-900 text-white rounded-3xl p-8 md:p-12 overflow-hidden relative">
            <div className="absolute -right-20 -top-20 opacity-10">
              <Battery className="w-96 h-96" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Battery className="w-8 h-8 text-emerald-400" />
                <h3 className="text-2xl md:text-3xl font-bold">Escopo de Atuação em BESS</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-4">
                    <li>
                      <strong className="text-emerald-300 block">Balance Of Plant (BoP)</strong>
                      <span className="text-slate-300 text-sm">Manutenção de Subestações de alta tensão, redes de média tensão e infraestrutura civil.</span>
                    </li>
                    <li>
                      <strong className="text-emerald-300 block">PCS e Inversores</strong>
                      <span className="text-slate-300 text-sm">Inspeção visual, limpeza, troca de filtros, termografia e análise de falhas.</span>
                    </li>
                    <li>
                      <strong className="text-emerald-300 block">Sistemas Auxiliares</strong>
                      <span className="text-slate-300 text-sm">Manutenção de HVAC e sistemas críticos vitais para manter baterias na faixa operacional.</span>
                    </li>
                  </ul>
                </div>
                <div>
                   <ul className="space-y-4">
                    <li>
                      <strong className="text-emerald-300 block">Monitoramento Preditivo e Diagnóstico</strong>
                      <span className="text-slate-300 text-sm">Utilização de dados do BMS para monitorar Estado de Carga (SoC) e Saúde (SoH).</span>
                    </li>
                    <li>
                      <strong className="text-emerald-300 block">Análise de Causa Raiz (RCA)</strong>
                      <span className="text-slate-300 text-sm">Investigações técnicas profundas em caso de falhas em módulos ou conversores.</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-emerald-800 flex flex-wrap gap-3">
                    <span className="bg-emerald-800 text-xs font-semibold px-3 py-1 rounded-full text-emerald-200">Capacitação Técnica</span>
                    <span className="bg-emerald-800 text-xs font-semibold px-3 py-1 rounded-full text-emerald-200">Parceria com Fabricantes</span>
                    <span className="bg-emerald-800 text-xs font-semibold px-3 py-1 rounded-full text-emerald-200">Garantias</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* OAMS Metodologia */}
      <section id="metodologia" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Metodologia OAMS</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Orka Asset Management System. Gestão de ativos como alavanca de valor.
            </p>
          </div>

          {/* Steps */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-10 -translate-y-1/2"></div>
            {[
              { step: 1, title: "Planejamento" },
              { step: 2, title: "Estratégia" },
              { step: 3, title: "Metodologia" },
              { step: 4, title: "Agilidade" },
              { step: 5, title: "Resultado" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center bg-white p-4 relative z-10 mb-8 md:mb-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-400 text-white flex items-center justify-center font-bold text-xl mb-3 shadow-lg">
                  {item.step}
                </div>
                <span className="font-bold text-slate-700">{item.title}</span>
              </div>
            ))}
          </div>

          {/* Strategic Objectives */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-50 p-6 rounded-2xl text-center border border-slate-200">
              <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-bold text-slate-900 mb-2">Performance</h4>
              <p className="text-sm text-slate-600">Otimizar a performance dos recursos operacionais para maximizar a geração.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl text-center border border-slate-200">
              <TrendingUp className="w-8 h-8 text-emerald-600 mx-auto mb-3 rotate-180" />
              <h4 className="font-bold text-slate-900 mb-2">Custo</h4>
              <p className="text-sm text-slate-600">Reduzir os custos gerindo os recursos e intervenções de maneira eficiente.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl text-center border border-slate-200">
              <ShieldCheck className="w-8 h-8 text-amber-500 mx-auto mb-3" />
              <h4 className="font-bold text-slate-900 mb-2">Risco</h4>
              <p className="text-sm text-slate-600">Controlar os riscos intrínsecos em conformidade com as diretrizes de Compliance e HSE.</p>
            </div>
          </div>

          {/* Process Diagram Abstraction */}
          <div className="bg-slate-900 rounded-3xl p-8 overflow-hidden">
             <div className="text-center mb-8">
               <h3 className="text-white text-xl font-bold">Processos de Operação e Manutenção</h3>
               <p className="text-slate-400 text-sm">Garantindo Disponibilidade, Confiabilidade e Performance</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-2">
                    <span className="font-bold text-emerald-400">Fluxo Operacional</span>
                    <Activity className="w-5 h-5 text-slate-400" />
                  </div>
                  <div className="flex flex-col space-y-3">
                    <div className="bg-slate-700/50 p-3 rounded font-medium text-slate-200 flex justify-between"><span>1. Pré Operação</span></div>
                    <div className="bg-slate-700 p-3 rounded font-medium text-emerald-400 flex justify-between"><span>2. Tempo Real</span></div>
                    <div className="bg-slate-700/50 p-3 rounded font-medium text-slate-200 flex justify-between"><span>3. Pós Operação</span></div>
                  </div>
                </div>

                <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                  <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-2">
                    <span className="font-bold text-blue-400">Fluxo de Manutenção</span>
                    <Wrench className="w-5 h-5 text-slate-400" />
                  </div>
                  <div className="flex flex-col space-y-3">
                    <div className="bg-slate-700/50 p-3 rounded font-medium text-slate-200 flex justify-between"><span>1. PCM (Planejamento e Controle)</span></div>
                    <div className="bg-slate-700 p-3 rounded font-medium text-blue-400 flex justify-between"><span>2. Engenharia de Suporte</span></div>
                    <div className="bg-slate-700/50 p-3 rounded font-medium text-slate-200 flex justify-between"><span>3. Execução da Manutenção</span></div>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* HSE */}
      <section id="hse" className="py-20 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
               <div className="order-2 md:order-1 relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                  <img src="https://images.unsplash.com/photo-1541888086925-920a0f44bd69?auto=format&fit=crop&q=80" alt="Profissional de Segurança no Trabalho" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                     <div className="text-white">
                        <ShieldCheck className="w-12 h-12 text-emerald-400 mb-3" />
                        <h3 className="text-2xl font-bold mb-2">A vida em primeiro lugar</h3>
                        <p className="text-slate-300 text-sm">Uma empresa saudável constrói-se no ambiente, na mentalidade e na comunicação constante.</p>
                     </div>
                  </div>
               </div>

               <div className="order-1 md:order-2">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
                    Compromisso ORKA
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Pessoas, Qualidade, Saúde & Segurança</h2>
                  <p className="text-lg text-slate-600 mb-8">
                    Dois pilares principais: <strong className="text-slate-900">cultura comportamental e processos técnicos</strong>. Acreditamos que quando o risco é tratado com método, cuidamos de quem está em campo e mitigamos custos não previstos.
                  </p>

                  <div className="space-y-6">
                     <div className="flex gap-4 items-start">
                        <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100 mt-1">
                          <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">Confiabilidade Operacional & Riscos</h4>
                          <p className="text-sm text-slate-600">Planejamento estruturado e análise técnica contínua para mitigação de riscos.</p>
                        </div>
                     </div>
                     <div className="flex gap-4 items-start">
                        <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100 mt-1">
                          <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">Capacitação Constante</h4>
                          <p className="text-sm text-slate-600">Treinamentos que superam os requisitos obrigatórios, com foco em eficiência.</p>
                        </div>
                     </div>
                     <div className="flex gap-4 items-start">
                        <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100 mt-1">
                          <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">Rituais de Gestão e Liderança</h4>
                          <p className="text-sm text-slate-600">Capacitação da liderança de campo para tomada de decisão e responsabilidade compartilhada.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Team */}
      <section id="time" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nosso Time de Liderança</h2>
            <p className="text-lg text-slate-600">Experiência e expertise dedicadas ao seu ativo.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="group text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-slate-50 group-hover:border-blue-500 transition-colors shadow-lg relative">
                 <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                    <Users className="w-16 h-16" />
                 </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Bruno Gil</h3>
              <p className="text-blue-600 font-medium text-sm mb-2">Business Development Director</p>
              <a href="mailto:bruno.gil@orka.eng.br" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">bruno.gil@orka.eng.br</a>
            </div>

            {/* Team Member 2 */}
            <div className="group text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-slate-50 group-hover:border-emerald-500 transition-colors shadow-lg relative">
                 <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                    <Users className="w-16 h-16" />
                 </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Klecio Miguel</h3>
              <p className="text-emerald-600 font-medium text-sm mb-2">Contracts and Field Director</p>
              <a href="mailto:klecio.miguel@orka.eng.br" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">klecio.miguel@orka.eng.br</a>
            </div>

            {/* Team Member 3 */}
            <div className="group text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-slate-50 group-hover:border-amber-500 transition-colors shadow-lg relative">
                 <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                    <Users className="w-16 h-16" />
                 </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Ewerton Carneiro</h3>
              <p className="text-amber-600 font-medium text-sm mb-2">Engineering and Operations Director</p>
              <a href="mailto:ewerton.carneiro@orka.eng.br" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">ewerton.carneiro@orka.eng.br</a>
            </div>

            {/* Team Member 4 */}
            <div className="group text-center">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-slate-50 group-hover:border-purple-500 transition-colors shadow-lg relative">
                 <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                    <Users className="w-16 h-16" />
                 </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">Celso Kleist</h3>
              <p className="text-purple-600 font-medium text-sm mb-2">Administrative and HSE Director</p>
              <a href="mailto:celso.kleist@orka.eng.br" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">celso.kleist@orka.eng.br</a>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Nossos Parceiros Tecnológicos</h3>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
               <div className="text-xl font-black text-slate-800">IN FORMA</div>
               <div className="text-xl font-black text-slate-800">PVOPERATION</div>
               <div className="text-xl font-black text-slate-800 flex items-center gap-2"><div className="w-4 h-4 bg-slate-800 rounded-full"></div> Volateq</div>
               <div className="text-xl font-black text-blue-600 tracking-tighter">kartado</div>
            </div>
         </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contato" className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-400">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-bold text-2xl tracking-wider text-white">ORKA</span>
                  <p className="text-[0.6rem] tracking-widest text-slate-400 uppercase -mt-1">Energy Asset Management</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 max-w-sm">
                Transformando ativos de energia em plataformas de geração de valor sustentável e de longo prazo através de gestão técnica, financeira e inovação.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <a href="tel:+5511933502929" className="hover:text-white transition-colors">+55 11 933 502 929</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <a href="mailto:bruno.gil@orka.eng.br" className="hover:text-white transition-colors">bruno.gil@orka.eng.br</a>
                </li>
                <li className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-emerald-400" />
                  <a href="https://www.orka.eng.br" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.orka.eng.br</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Sede</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Florianópolis, Santa Catarina<br/>Brasil</span>
                </li>
              </ul>
            </div>

          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-800 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} ORKA Energy Asset Management. Todos os direitos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
               <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
               <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
