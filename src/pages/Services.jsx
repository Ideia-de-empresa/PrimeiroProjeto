// src/pages/Services.jsx

import {
  Globe,
  ShoppingCart,
  LayoutTemplate,
  Rocket,
  CheckCircle,
  Send,
} from "lucide-react";

export default function Services() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative py-32">
        <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/20 blur-[140px]" />
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-600/20 blur-[140px]" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm">
            Soluções digitais sob medida
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black">
            Serviços para
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              acelerar seu negócio
            </span>
          </h1>

          <p className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto">
            Desenvolvemos websites modernos, landing pages, lojas virtuais e
            sistemas personalizados focados em conversão, performance e
            crescimento.
          </p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold">O que desenvolvemos</h2>

          <p className="mt-4 text-gray-400">
            Soluções para empresas de todos os tamanhos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition">
            <LayoutTemplate size={42} className="text-cyan-400" />

            <h3 className="text-2xl font-bold mt-6">Landing Pages</h3>

            <p className="text-gray-400 mt-4">
              Páginas focadas em conversão para campanhas, anúncios e geração de
              leads.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition">
            <Globe size={42} className="text-cyan-400" />

            <h3 className="text-2xl font-bold mt-6">Sites Institucionais</h3>

            <p className="text-gray-400 mt-4">
              Apresente sua empresa com um visual profissional e moderno.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition">
            <ShoppingCart size={42} className="text-cyan-400" />

            <h3 className="text-2xl font-bold mt-6">E-commerce</h3>

            <p className="text-gray-400 mt-4">
              Lojas virtuais completas com integração de pagamentos e gestão de
              pedidos.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition">
            <Rocket size={42} className="text-cyan-400" />

            <h3 className="text-2xl font-bold mt-6">Sistemas Web</h3>

            <p className="text-gray-400 mt-4">
              Plataformas personalizadas para automatizar processos e aumentar
              produtividade.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Como funciona</h2>

          <p className="mt-4 text-gray-400">Processo simples e transparente.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <CheckCircle className="text-cyan-400" size={40} />

            <h3 className="text-2xl font-bold mt-6">1. Briefing</h3>

            <p className="text-gray-400 mt-4">
              Entendemos seus objetivos e necessidades.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <CheckCircle className="text-cyan-400" size={40} />

            <h3 className="text-2xl font-bold mt-6">2. Desenvolvimento</h3>

            <p className="text-gray-400 mt-4">
              Construímos a solução utilizando as melhores tecnologias.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <CheckCircle className="text-cyan-400" size={40} />

            <h3 className="text-2xl font-bold mt-6">3. Entrega</h3>

            <p className="text-gray-400 mt-4">
              Publicação e suporte para garantir o sucesso do projeto.
            </p>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Solicite um orçamento</h2>

            <p className="mt-4 text-gray-400">
              Preencha o formulário e retornaremos o mais rápido possível.
            </p>
          </div>

          <form className="mt-12 space-y-6">
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-cyan-400"
            />

            <select className="w-full bg-[#0B1120] border border-white/10 rounded-2xl p-4 outline-none focus:border-cyan-400">
              <option>Selecione um serviço</option>
              <option>Landing Page</option>
              <option>Site Institucional</option>
              <option>E-commerce</option>
              <option>Sistema Web</option>
            </select>

            <textarea
              rows="6"
              placeholder="Descreva seu projeto..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 outline-none focus:border-cyan-400 resize-none"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex justify-center items-center gap-2 hover:scale-[1.02] transition"
            >
              Enviar Solicitação
              <Send size={18} />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
