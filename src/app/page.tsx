"use client";
import { useState } from "react";
import Cadastrar from "../components/Modal/cadastro";
import Login from "../components/Modal/login";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Adicionamos o Footer

export default function Home() {
  const [isOpenCadastro, setIsOpenCadastro] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-full">
      <Navbar
        abrirModalCadastro={() => setIsOpenCadastro(true)}
        abrirModalLogin={() => setIsOpenLogin(true)}
        rolarPara={scrollToSection}
      />

      {isOpenCadastro && (
        <Cadastrar fecharModal={() => setIsOpenCadastro(false)} />
      )}
      {isOpenLogin && <Login fecharModal={() => setIsOpenLogin(false)} />}

      {/* SESSÃO: SOBRE */}
      <section id="sobre" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Sobre o ByteBank</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!
        </p>
      </section>

      {/* SESSÃO: SERVIÇOS */}
      <section id="servicos" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Vantagens do nosso banco</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Conta e cartão gratuitos</h3>
            <p>Sem custo fixo e sem tarifa de manutenção.</p>
          </div>
          <div className="p-6 border rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Saques sem custo</h3>
            <p>4 saques gratuitos por mês em qualquer Banco 24h.</p>
          </div>
          <div className="p-6 border rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Programa de pontos</h3>
            <p>Acumule pontos no crédito sem pagar mensalidade.</p>
          </div>
          <div className="p-6 border rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Seguro Dispositivos</h3>
            <p>Proteção para computador e celular por uma mensalidade simbólica.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}