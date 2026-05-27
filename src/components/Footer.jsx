// src/components/Footer.jsx

import { Mail, ArrowUpRight } from "lucide-react";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#050816] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 gap-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <span className="font-bold text-lg">T</span>
              </div>

              <div>
                <h2 className="text-2xl font-bold">EmpresaTech</h2>

                <p className="text-sm text-gray-400">Soluções digitais</p>
              </div>
            </div>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Desenvolvendo experiências digitais modernas, escaláveis e focadas
              em performance.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-400/30 transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-400/30 transition"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500/10 hover:border-cyan-400/30 transition"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* restante do footer */}
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 EmpresaTech. Todos os direitos reservados.
          </p>

          <a
            href="#"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition"
          >
            Política de privacidade
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
