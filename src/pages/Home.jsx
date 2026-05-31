// src/pages/Home.jsx
import { ArrowRight, ShieldCheck, Code2, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Glow */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-cyan-500/30 blur-[120px]" />

        <div className="absolute bottom-[-120px] right-[-80px] w-[320px] h-[320px] bg-blue-600/20 blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Text */}
          <div>
            <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm">
              Empresa moderna de tecnologia
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight">
              Construindo o
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                futuro digital
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-xl">
              Desenvolvemos aplicações web modernas, APIs escaláveis e
              experiências digitais focadas em performance, design e inovação.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/servicos"
                className="px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition duration-300 flex items-center gap-2 shadow-xl shadow-cyan-500/20"
              >
                Solicitar serviço
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/projetos"
                className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                Ver projetos
              </Link>
            </div>
          </div>

          {/* Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 blur-3xl opacity-20 rounded-full" />

            <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-gray-400 text-sm">Performance</p>

                  <h3 className="text-3xl font-bold">99.9%</h3>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600" />
              </div>

              <div className="space-y-5">
                <div className="h-4 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-[90%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                </div>

                <div className="h-4 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-[75%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                </div>

                <div className="h-4 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-[95%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-10">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center">
                  <h4 className="text-2xl font-bold">50+</h4>
                  <p className="text-gray-400 text-sm">Clientes</p>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center">
                  <h4 className="text-2xl font-bold">120+</h4>
                  <p className="text-gray-400 text-sm">Projetos</p>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center">
                  <h4 className="text-2xl font-bold">24/7</h4>
                  <p className="text-gray-400 text-sm">Suporte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Soluções inteligentes</h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Criamos plataformas modernas com foco em escalabilidade, segurança e
            alta performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300">
            <Code2 className="text-cyan-400" size={40} />

            <h3 className="text-2xl font-bold mt-6">Desenvolvimento</h3>

            <p className="text-gray-400 mt-4">
              Aplicações modernas com React, Node.js e tecnologias escaláveis.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300">
            <ShieldCheck className="text-cyan-400" size={40} />

            <h3 className="text-2xl font-bold mt-6">Segurança</h3>

            <p className="text-gray-400 mt-4">
              Estruturas protegidas com autenticação e boas práticas.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition duration-300">
            <Globe className="text-cyan-400" size={40} />

            <h3 className="text-2xl font-bold mt-6">Escalabilidade</h3>

            <p className="text-gray-400 mt-4">
              Sistemas preparados para crescimento e alta demanda.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
