import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import UnderDevelopment from "./pages/UnderDevelopment";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#050816] text-white">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/projetos" element={<UnderDevelopment />} />

          {/* Sempre por último, bloqueio para rotas não existentes. */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
