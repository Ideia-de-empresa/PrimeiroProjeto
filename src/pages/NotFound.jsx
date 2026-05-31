// src/pages/NotFound.jsx

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-8xl font-black text-cyan-400">404</h1>

      <h2 className="text-3xl font-bold mt-4">Página não encontrada</h2>

      <p className="text-gray-400 mt-4">
        A página que você tentou acessar não existe.
      </p>

      <Link
        to="/"
        className="mt-8 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition"
      >
        Voltar para Home
      </Link>
    </div>
  );
}
