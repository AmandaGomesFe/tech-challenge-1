"use client";
import { useState } from "react";

export default function Menu() {
  const [menuSelecionado, setMenuSelecionado] = useState("inicio");

  const menus = [
    { id: "inicio", label: "Início" },
    { id: "transferencias", label: "Transferências" },
    { id: "investimentos", label: "Investimentos" },
    { id: "outros", label: "Outros Serviços" },
  ];

  return (
    <nav className="bg-white w-64 rounded-lg shadow p-4 text-cyan-900">
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
  );
}
