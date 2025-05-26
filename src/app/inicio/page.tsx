import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Saldo() {
  const [mostrarSaldo, setMostrarSaldo] = useState(true);

  const toggleSaldo = () => {
    setMostrarSaldo((prev) => !prev);
  };

  return (
    <div className="w-full bg-white rounded-xl p-6">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg md:text-2xl text-cyan-900 mb-2">Saldo</h2>
          <div className="h-1 w-14 bg-orange-400 mb-4" />
          <p className="text-cyan-800 text-md md:text-xl mb-4">Conta Corrente</p>
          <p className="text-xl md:text-6xl font-semibold text-cyan-900">
            {mostrarSaldo ? 'R$ 2.500,00' : '• • • •'}
          </p>
        </div>
        <button
          onClick={toggleSaldo}
          className="bg-teal-100 p-2 rounded-full hover:bg-teal-200"
          aria-label="Mostrar ou ocultar saldo"
        >
          {mostrarSaldo ? (
            <FaEye className="text-teal-700 w-8 h-8" />
          ) : (
            <FaEyeSlash className="text-teal-700 w-8 h-8" />
          )}
        </button>
      </div>
    </div>
  );
}