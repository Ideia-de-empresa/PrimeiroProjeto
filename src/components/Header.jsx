// src/components/Header.jsx
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <span className="font-bold text-lg">T</span>
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-wide">EmpresaTech</h1>

              <p className="text-xs text-gray-400">Soluções digitais</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              Home
            </a>

            <a
              href="#"
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              Serviços
            </a>

            <a
              href="#"
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              Projetos
            </a>

            <a
              href="#"
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              Contato
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/30">
              Começar
            </button>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(true)} className="md:hidden">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-screen w-[280px] bg-[#0b1120] border-l border-white/10 z-50 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h2 className="text-xl font-bold">Menu</h2>

            <p className="text-sm text-gray-400">Navegação</p>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-white/10 transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col p-6 gap-5">
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="text-lg text-gray-300 hover:text-cyan-400 transition"
          >
            Home
          </a>

          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="text-lg text-gray-300 hover:text-cyan-400 transition"
          >
            Serviços
          </a>

          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="text-lg text-gray-300 hover:text-cyan-400 transition"
          >
            Projetos
          </a>

          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="text-lg text-gray-300 hover:text-cyan-400 transition"
          >
            Contato
          </a>

          <button className="mt-6 w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-[1.02] transition duration-300 shadow-lg shadow-cyan-500/20">
            Começar
          </button>
        </nav>
      </aside>
    </>
  );
}
