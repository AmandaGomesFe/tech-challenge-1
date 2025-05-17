"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type LoginProps = {
  fecharModal: () => void;
};

export default function Login({ fecharModal }: LoginProps) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica real de autenticação
    console.log("Login com:", email, senha);

    // Simulando sucesso e redirecionando
    fecharModal();
    router.push("/aplicacao");
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="bg-white rounded-lg shadow-lg p-8 w-11/12 max-w-md relative">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
          onClick={fecharModal}
          aria-label="Fechar modal"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-cyan-900 mb-6 text-center">
          Acesse sua conta
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
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
            Entrar
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Esqueceu a senha? <a href="#" className="text-cyan-700 hover:underline">Recuperar acesso</a>
        </p>
      </div>
    </div>
  );
}
