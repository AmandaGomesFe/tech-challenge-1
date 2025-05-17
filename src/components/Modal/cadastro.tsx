"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type CadastroProps = {
  fecharModal: () => void;
};

export default function Cadastro({ fecharModal }: CadastroProps) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const handleCadastro = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de cadastro real
    console.log("Cadastro com:", nome, email, senha);

    fecharModal();           // Fecha o modal
    router.push("/aplicacao"); // Redireciona para a aplicação
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 max-w-md relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
          onClick={fecharModal}
          aria-label="Fechar modal"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-cyan-900 mb-6 text-center">
          Crie sua conta
        </h2>

        <form onSubmit={handleCadastro} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nome completo"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-2 rounded-lg transition"
          >
            Cadastrar
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Já tem uma conta?{" "}
          <a href="#" className="text-cyan-700 hover:underline">
            Entrar
          </a>
        </p>
      </div>
    </div>
  );
}