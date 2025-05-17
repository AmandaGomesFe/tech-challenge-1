"use client";

import { useState } from "react";
import { FiUser } from "react-icons/fi";
import { FaCog, FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <nav className="px-6 py-4 flex justify-between items-center relative">
      {/* Nome do usuário */}
      <span className="text-gray-800 font-semibold text-lg">Olá, Joana! :)</span>

      {/* Ícone de usuário com menu */}
      <div className="relative">
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:bg-cyan-300"
        >
          <FiUser className="text-teal-600 text-xl" />
        </button>

        {/* Menu dropdown */}
        {menuAberto && (
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50">
            <button className="flex items-center rounded-md w-full px-4 py-2 hover:bg-gray-300 text-sm text-gray-700">
              <FaCog className="mr-2" />
              Configuração
            </button>
            <button className="flex items-center rounded-md w-full px-4 py-2 hover:bg-gray-300 text-sm text-red-600">
              <FaSignOutAlt className="mr-2" />
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}