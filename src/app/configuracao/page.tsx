import { useEffect, useState } from "react";
import Card from "@/components/Card";
import imagem from '@/resources/Ilustracao-minha-conta.png';
import Image from "next/image";
import EditIcon from "@mui/icons-material/Edit"; // Ícone de lápis

export default function Configuracao() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({
    nome: false,
    email: false,
    senha: false,
  });

  useEffect(() => {
    async function fetchDados() {
      try {
        // const response = await fetch("https://api.exemplo.com/usuario");
        // const data = await response.json();
        const data = {
          nome: 'Joana',
          email :'joana@gmail.com',
          senha: '1233'
        }
        setNome(data.nome || "");
        setEmail(data.email || "");
        setSenha(data.senha || "");
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetchDados();
  }, []);

  const validarCampos = (campo: any, valor: any) => {
    let isValid = true;

    if (campo === "nome") {
      isValid = valor.trim().length >= 3;
    } else if (campo === "email") {
      isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
    } else if (campo === "senha") {
      isValid = valor.length >= 6;
    }

    setErros((prev) => ({ ...prev, [campo]: !isValid }));
  };

  return (
    <Card background={'#CBCBCB'} titulo={'Minha Conta'}>
      <div className="flex flex-col-reverse md:flex-row p-6 rounded-lg">
        <div className="flex flex-col items-center md:items-start mt-4">
          <Image src={imagem} width={350} alt="Minha Conta"/>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <label className="block font-semibold mb-1">Nome</label>
            <div className="relative flex items-center">
              <input
                type="text"
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                  validarCampos("nome", e.target.value);
                }}
                className={`w-full bg-white p-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${erros.nome ? "border-red-500" : "border-green-500"}`}
              />
              <EditIcon className="absolute right-3 text-gray-500" />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <div className="relative flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validarCampos("email", e.target.value);
                }}
                className={`w-full bg-white p-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${erros.email ? "border-red-500" : "border-green-500"}`}
              />
              <EditIcon className="absolute right-3 text-gray-500" />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">Senha</label>
            <div className="relative flex items-center">
              <input
                type="password"
                value={senha}
                onChange={(e) => {
                  setSenha(e.target.value);
                  validarCampos("senha", e.target.value);
                }}
                className={`w-full bg-white p-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${erros.senha ? "border-red-500" : "border-green-500"}`}
              />
              <EditIcon className="absolute right-3 text-gray-500" />
            </div>
          </div>

          <button className="w-64 cursor-pointer py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition">
            Salvar alterações
          </button>
        </div>
      </div>
    </Card>
  );
}
