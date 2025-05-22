import { useState } from "react";
import Image from "next/image";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import imagem from "@/resources/Pixels3Colorido.png";
import { NumericFormat } from "react-number-format";

export default function Transferencia() {
  const [isEditing, setIsEditing] = useState(false);
  const [transferType, setTransferType] = useState("");
  const [date, setDate] = useState("");
  const [pixKey, setPixKey] = useState("");
  const [amount, setAmount] = useState("");
  const [transacoes, setTransacoes] = useState([
    { mes: "Dezembro", tipo: "PIX", valor: "30,00", data: "07/15" },
    { mes: "Dezembro", tipo: "Depósito", valor: "200,00", data: "07/12" },
    { mes: "Setembro", tipo: "Transferência", valor: "36,00", data: "04/08" },
  ]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log({ transferType, date, pixKey, amount });
    
    // Reseta o estado após a edição ou criação
    setIsEditing(false);
    setTransferType("");
    setDate("");
    setPixKey("");
    setAmount("");
  };

  const handleEdit = (transacao: any, index: number) => {
    setTransferType(transacao.tipo);
    setDate(transacao.data);
    setPixKey(transacao.tipo === "PIX" ? "Chave do PIX" : "");
    setAmount(transacao.valor.replace(",", "."));
    setIsEditing(true);

    // Faz rolar para o formulário
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDelete = (index: number) => {
    setTransacoes((prev) => prev.filter((_, i) => i !== index));
  };

  const transacoesPorMes = transacoes.reduce((acc: any, transacao: any) => {
    acc[transacao.mes] = acc[transacao.mes] || [];
    acc[transacao.mes].push(transacao);
    return acc;
  }, {});

  return (
    <div>
      {/* Formulário */}
      <div className="relative bg-white rounded-lg flex flex-col justify-between p-4 pt-0 overflow-hidden mb-6">
        <h1 id="formulario" className="text-2xl z-10 text-cyan-900 font-bold mb-6 m-6">
          {isEditing ? "Editar Transferência" : "Nova Transferência"}
        </h1>
        <div className="relative z-10 text-black">
          <form onSubmit={handleSubmit} className="max-w-md ml-0 p-6">
            <div className="mb-4">
              <label htmlFor="transferType" className="block text-gray-700 font-medium mb-2">Tipo de Transferência</label>
              <select
                id="transferType"
                value={transferType}
                onChange={(e) => setTransferType(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              >
                <option value="">Selecione o tipo</option>
                <option value="PIX">PIX</option>
                <option value="Depósito">Depósito</option>
                <option value="Transferência">Transferência</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Data</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            {transferType === "PIX" && (
              <div className="mb-4">
                <label htmlFor="pixKey" className="block text-gray-700 font-medium mb-2">Chave PIX</label>
                <input
                  type="text"
                  id="pixKey"
                  value={pixKey}
                  onChange={(e) => setPixKey(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                />
              </div>
            )}
            <div className="mb-4">
              <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">Valor</label>
              <NumericFormat
                value={amount}
                onValueChange={(values: any) => setAmount(values.floatValue)}
                thousandSeparator="."
                decimalSeparator=","
                prefix="R$ "
                decimalScale={2}
                fixedDecimalScale={true}
                allowNegative={false}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <button type="submit" className="w-full bg-cyan-900 text-white font-bold py-2 rounded hover:bg-blue-600 transition">
              {isEditing ? "Salvar Edição" : "Efetuar Transação"}
            </button>
          </form>
        </div>
        <div className="w-54 h-54 absolute top-0 right-0 hidden md:block">
          <Image src={imagem} alt="Imagem" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Lista de Transferências */}
      <div className="relative bg-white rounded-lg flex flex-col justify-between p-4 pt-0 overflow-hidden">
        <h1 className="text-2xl z-10 text-cyan-900 font-bold mb-6 m-6">Transferências Agendadas</h1>
        <div className="relative z-10 text-black m-6">
          {Object.keys(transacoesPorMes).map((mes) => (
            <div key={mes}>
              <span className="block text-amber-500 text-sm font-bold mb-4">{mes}</span>
              {transacoesPorMes[mes].map((transacao: any, index: number) => (
                <div key={index} className="border-b border-gray-300 pb-4 mb-4">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col">
                      <span className="block">Tipo: {transacao.tipo}</span>
                      <span className="block">Valor: R$ {transacao.valor}</span>
                      <span className="font-bold">Data: {transacao.data}</span>
                    </div>
                    <div className="flex flex-row space-x-4 mt-4 md:m-0">
                      <button
                        className="w-12 h-12 cursor-pointer bg-amber-500 rounded-full flex items-center justify-center hover:bg-teal-800 transition duration-300"
                        onClick={() => handleEdit(transacao, index)}
                      >
                        <EditIcon className="text-white" />
                      </button>
                      <button
                        className="w-12 h-12 cursor-pointer bg-amber-500 rounded-full flex items-center justify-center hover:bg-red-600 transition duration-300"
                        onClick={() => handleDelete(index)}
                      >
                        <DeleteIcon className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
