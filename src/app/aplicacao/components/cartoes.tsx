"use client";

import { useState } from "react";
import Card from "@/components/Card";
import { Usuario } from "@/entities/usuario";

// Modal simples
const Modal = ({ isOpen, onClose, title, children }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        {children}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Cartoes({ usuario }: { usuario: Usuario }) {
  const [modalAberto, setModalAberto] = useState(false);
  const [tipoModal, setTipoModal] = useState<null | "configurar" | "bloquear">(null);
  const [limite, setLimite] = useState(1000); // valor inicial

  const abrirModal = (tipo: "configurar" | "bloquear") => {
    setTipoModal(tipo);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setTipoModal(null);
  };

  return (
    <Card background={'#CBCBCB'} titulo={'Meus cartões'}>
      <div className="relative z-10">
        {/* Cartão Físico */}
        <h2 className="text-lg text-gray-900 mb-6">Cartão Físico</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
          <div className="bg-cyan-900 rounded-lg text-white p-4 w-64 h-36 flex flex-col justify-between">
            <div>
              <p className="italic text-lg">Byte</p>
              <p className="text-sm">Platinum</p>
            </div>
            <div>
              <p className="text-sm">{usuario.nome}</p>
              <p className="tracking-widest text-lg">••••••••</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 min-w-48">
            <button
              onClick={() => abrirModal("configurar")}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg"
            >
              Configurar
            </button>
            <button
              onClick={() => abrirModal("bloquear")}
              className="w-full border border-red-500 text-red-600 font-semibold py-2 px-6 rounded-lg hover:bg-red-100"
            >
              Bloquear
            </button>
            <p className="text-sm text-gray-700 mt-2">Função: Débito/Crédito</p>
          </div>
        </div>

        {/* Cartão Digital */}
        <h2 className="text-lg text-gray-900 mb-6">Cartão Virtual</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="bg-gray-400 rounded-lg text-white p-4 w-64 h-36 flex flex-col justify-between">
            <div>
              <p className="italic text-lg">Byte</p>
              <p className="text-sm">Platinum</p>
            </div>
            <div>
              <p className="text-sm">Joana Fonseca Gomes</p>
              <p className="tracking-widest text-lg">••••••••</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 min-w-48">
            <button
              onClick={() => abrirModal("configurar")}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg"
            >
              Configurar
            </button>
            <button
              onClick={() => abrirModal("bloquear")}
              className="w-full border border-red-500 text-red-600 font-semibold py-2 px-6 rounded-lg hover:bg-red-100"
            >
              Bloquear
            </button>
            <p className="text-sm text-gray-700 mt-2">Função: Débito</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalAberto}
        onClose={fecharModal}
        title={tipoModal === "configurar" ? "Configurar Cartão" : "Bloquear Cartão"}
      >
        {tipoModal === "configurar" ? (
          <div>
            <p className="text-sm text-gray-700 mb-2">Aqui você pode configurar os limites, categorias e segurança do cartão.</p>

            <div className="mt-4">
              <label htmlFor="limite" className="block text-sm font-medium text-gray-700 mb-1">
                Limite do cartão: R$ {limite}
              </label>
              <input
                id="limite"
                type="range"
                min={100}
                max={10000}
                step={100}
                value={limite}
                onChange={(e) => setLimite(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-500"
              />
            </div>
          </div>
        ) : (
          <div>
            <p className="text-sm text-gray-700 mb-2">Tem certeza que deseja bloquear este cartão?</p>
            <button
              onClick={() => {
                alert("Cartão bloqueado!");
                fecharModal();
              }}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Confirmar bloqueio
            </button>
          </div>
        )}
      </Modal>
    </Card>
  );
}