"use client";
import { useState } from "react";
import Cadastrar from "../components/Modal/cadastro";
import Login from "../components/Modal/login";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [isOpenCadastro, setIsOpenCadastro] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  return (
    <div className="padding">
      <Navbar abrirModalCadastro={() => setIsOpenCadastro(true)} abrirModalLogin={() => setIsOpenLogin(true)}></Navbar>
      {isOpenCadastro && (
        <Cadastrar fecharModal={() => setIsOpenCadastro(false)}></Cadastrar>
      )}
      {isOpenLogin && (
        <Login fecharModal={() => setIsOpenLogin(false)}></Login> 
      )}
    </div>
  );
}
