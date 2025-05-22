"use client";

import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { FaCog, FaSignOutAlt } from "react-icons/fa";
import Configuracao from "../configuracao/page";
import Extrato from "@/components/Extrato";
import Transferencia from "../transferencia/page";

export default function App() {
  const [menuSelecionado, setMenuSelecionado] = useState("inicio");
  const [menuMobileAberto, setMenuMobileAberto] = useState(false);
  const [menuUserAberto, setMenuUserAberto] = useState(false);

  const menus = [
    { id: "inicio", label: "Início" },
    { id: "transferencias", label: "Transferências" },
    { id: "investimentos", label: "Investimentos" },
    { id: "cartoes", label: "Cartões" },
    { id: "outros", label: "Outros Serviços" },
  ];

  const renderConteudoMeio = () => {
    switch (menuSelecionado) {
      case "inicio":
        return (
          <>
            <section className="mb-4 p-4 bg-cyan-100 rounded">Saldo</section>
            <section className="p-4 bg-cyan-200 rounded">Cartões</section>
          </>
        );
      case "transferencias":
        return <div><Transferencia/></div>;
      case "investimentos":
        return <div className="p-4">Investimentos</div>;
      case "cartoes":
        return <div className="p-4">Cartões</div>;
      case "outros":
        return <div className="p-4">Outros Serviços</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Navbar Topo */}
      <nav className="px-6 py-4 flex justify-between items-center relative">
        {/* Nome do usuário */}
        <span className="text-gray-800 font-semibold text-lg">Olá, Joana! :)</span>

        {/* Botão hamburger (mobile only) */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded bg-amber-500 text-white"
          onClick={() => setMenuMobileAberto(!menuMobileAberto)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Ícone de usuário (desktop only) */}
        <div className="relative hidden md:flex">
          <button
            onClick={() => setMenuUserAberto(!menuUserAberto)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-cyan-300"
            aria-label="User menu"
          >
            <FiUser className="text-teal-600 text-xl" />
          </button>

          {/* Dropdown do usuário */}
          {menuUserAberto && (
            <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-md shadow-lg z-50">
              <button
                className="flex items-center rounded-md w-full px-4 py-2 hover:bg-gray-300 text-sm text-gray-700"
                onClick={() => {
                  setMenuSelecionado('configuracao');
                  setMenuUserAberto(false);
                }}
              >
                <FaCog className="mr-2" />
                Configuração
              </button>
              <button
                className="flex items-center rounded-md w-full px-4 py-2 hover:bg-gray-300 text-sm text-red-600"
                onClick={() => alert("Logout")}
              >
                <FaSignOutAlt className="mr-2" />
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Container principal */}
      <div className="flex flex-1 gap-6 p-4">
        {/* Menu lateral desktop */}
        <nav className="hidden md:block bg-white w-64 rounded-lg shadow p-4 text-cyan-900">
          <ul>
            {menus.map(({ id, label }) => (
              <li
                key={id}
                className={`cursor-pointer p-2 rounded mb-2 text-center ${
                  menuSelecionado === id
                    ? "bg-amber-500 text-white"
                    : "hover:bg-cyan-100"
                }`}
                onClick={() => setMenuSelecionado(id)}
              >
                {label}
              </li>
            ))}
          </ul>
        </nav>

      {menuSelecionado !== 'configuracao' ? <>
        <main className="flex-grow rounded-lg p-4 pt-0 min-h-[300px]">
          {renderConteudoMeio()}
        </main>
        <Extrato/>
      </>
        : <main className="flex-grow rounded-lg p-4 min-h-[300px]">
          <Configuracao/>
        </main>}
      </div>

      {/* Menu completo mobile (menu lateral + configs + logout) */}
      {menuMobileAberto && (
        <nav className="md:hidden bg-white shadow-md rounded p-4 fixed top-[64px] left-0 right-0 z-50">
          <ul>
            {menus.map(({ id, label }) => (
              <li
                key={id}
                className={`cursor-pointer p-3 rounded mb-2 text-cyan-900 ${
                  menuSelecionado === id
                    ? "bg-amber-500 text-white"
                    : "hover:bg-cyan-100"
                }`}
                onClick={() => {
                  setMenuSelecionado(id);
                  setMenuMobileAberto(false);
                }}
              >
                {label}
              </li>
            ))}
          </ul>

          <hr className="my-3" />

          {/* Configuração */}
          <button
            className="flex items-center rounded-md w-full px-4 py-2 hover:bg-gray-200 text-sm text-gray-700 mb-2"
            onClick={() => {
              setMenuSelecionado('configuracao');
              setMenuMobileAberto(false);
            }}
          >
            <FaCog className="mr-2" />
            Configuração
          </button>

          {/* Logout */}
          <button
            className="flex items-center rounded-md w-full px-4 py-2 hover:bg-gray-200 text-sm text-red-600"
            onClick={() => alert("Logout")}
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </nav>
      )}
    </div>
  );
}