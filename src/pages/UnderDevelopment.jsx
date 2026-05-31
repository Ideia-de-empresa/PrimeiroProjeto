// src/pages/UnderDevelopment.jsx

import { Construction, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

export default function UnderDevelopment() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/20 blur-[140px]" />

      <div className="relative z-10 max-w-2xl text-center">
        <div className="mx-auto w-24 h-24 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-2xl shadow-cyan-500/20">
          <Construction size={42} />
        </div>

        <span className="inline-block mt-8 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm">
          Página em desenvolvimento
        </span>

        <h1 className="mt-8 text-5xl md:text-6xl font-black">
          Estamos construindo
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {" "}
            algo incrível
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
          Esta página ainda está sendo desenvolvida pela nossa equipe. Em breve
          ela estará disponível com novos recursos e conteúdos.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link
            to="/"
            className="px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition duration-300 shadow-xl shadow-cyan-500/20"
          >
            Voltar para Home
          </Link>

          <button className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center gap-2">
            <Rocket size={18} />
            Em breve
          </button>
        </div>
      </div>
    </main>
  );
}
