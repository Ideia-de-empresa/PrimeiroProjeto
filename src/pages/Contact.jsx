import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    descricao: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para um servidor
    console.log("Formulário enviado:", formData);
    setEnviado(true);
    
    // Limpar formulário após 10 segundos
    setTimeout(() => {
      setFormData({ nome: "", email: "", assunto: "", descricao: "" });
      setEnviado(false);
    }, 10000);
  };

  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[10vh] flex items-center">
        {/* Background Glow */}
        <div className="absolute top-[-50px] left-[-100px] w-[300px] h-[300px] bg-cyan-500/30 blur-[120px]" />
        <div className="absolute bottom-[-60px] right-[-80px] w-[320px] h-[320px] bg-blue-600/20 blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 py-24 w-full relative z-10">
          <h1 className="text-5xl md:text-6xl font-black leading-tight">
            Entre em
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              contato
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl">
            Tem uma pergunta ou gostaria de discutir um projeto? Estamos aqui para ouvir você!
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* INFO CARDS */}
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <Mail className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold">Email</h3>
              <p className="text-gray-400 mt-2">contato@techempresa.com</p>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                <Phone className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold">Telefone</h3>
              <p className="text-gray-400 mt-2">+55 (21) 9999-9999</p>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <MapPin className="text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-bold">Localização</h3>
              <p className="text-gray-400 mt-2">Rio de Janeiro, RJ</p>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8">
              {enviado && (
                <div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/40 text-green-300">
                  ✓ Mensagem enviada com sucesso! Em breve entraremos em contato.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/20 transition"
                    placeholder="Seu nome"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/20 transition"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                {/* Assunto */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/20 transition"
                    placeholder="Assunto da sua mensagem"
                  />
                </div>

                {/* Descrição */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Descrição
                  </label>
                  <textarea
                    name="descricao"
                    value={formData.descricao}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-white/20 transition resize-none"
                    placeholder="Descreva o motivo do seu contato..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition duration-300 font-semibold shadow-xl shadow-cyan-500/20"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
