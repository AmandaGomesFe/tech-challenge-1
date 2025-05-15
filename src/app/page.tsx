"use client";
import { useState } from "react";
import Cadastrar from "./cadastrar";
import Login from "./login";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [isOpenCadastro, setIsOpenCadastro] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  return (
    <div>
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
