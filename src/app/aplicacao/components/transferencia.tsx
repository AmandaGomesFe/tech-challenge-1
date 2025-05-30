import { useEffect, useState } from "react";
import Image from "next/image";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import imagem from "@/resources/Pixels3Colorido.png";
import { NumericFormat } from "react-number-format";
import { Box, Modal } from "@mui/material";
import { TipoTransferencia, Transferencia } from "@/entities/transferencia";

export default function Transferencias() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isEditing, setIsEditing] = useState(false);
  const [tipoTransferencia, setTipoTransferencia] = useState("");
  const [data, setData] = useState("");
  const [pixKey, setPixKey] = useState("");
  const [valor, setValor] = useState("");
  const isDisabled =
  !tipoTransferencia || !data || !valor || (tipoTransferencia === "PIX" && !pixKey);
  const [transacoes, setTransacoes] = useState<Array<Transferencia>>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const [ano, mes, dia] = data.split("-").map(Number);
    const dataObj = new Date(ano, mes - 1, dia);

    const meses = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    const mesNome = meses[dataObj.getMonth()];

    const novaTransacao = new Transferencia(
      crypto.randomUUID(),
      "conta-exemplo",
      tipoTransferencia as TipoTransferencia,
      Number(valor),
      dataObj
    );

    if (editIndex !== null) {
      setTransacoes((prevTransacoes) => 
        prevTransacoes.map((transacao, index) => 
          index === editIndex ? { ...novaTransacao, mes: mesNome } : transacao
        )
      );
      setEditIndex(null);
    } else {
      setTransacoes((prevTransacoes) => [...prevTransacoes, { ...novaTransacao, mes: mesNome }]);
    }

    setIsEditing(false);
    setTipoTransferencia("");
    setData("");
    setPixKey("");
    setValor("");

    handleOpen();

  }
  const handleEdit = (transacao: Transferencia, index: number) => {
    setEditIndex(index);
    setTipoTransferencia(transacao.tipo);
    setData(transacao.criadaEm.toISOString().split("T")[0]);
    setPixKey(transacao.tipo === "PIX" ? "Chave do PIX" : "");
    setValor(transacao.valor.toString());
    setIsEditing(true);

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
      <div className="relative bg-white rounded-lg flex flex-col justify-between p-4 pt-0 overflow-hidden mb-6">
        <h1
          id="formulario"
          className="text-2xl z-10 text-cyan-900 font-bold mb-6 m-6"
        >
          {isEditing ? "Editar Transferência" : "Nova Transferência"}
        </h1>
        <div className="relative z-10 text-black">
          <form onSubmit={handleSubmit} className="max-w-md ml-0 p-6">
            <div className="mb-4">
              <label
                htmlFor="tipoTransferencia"
                className="block text-gray-700 font-medium mb-2"
              >
                Tipo de Transferência
              </label>
              <select
                id="tipoTransferencia"
                value={tipoTransferencia}
                onChange={(e) => setTipoTransferencia(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              >
                <option value="">Selecione o tipo</option>
                <option value="PIX">PIX</option>
                <option value="Depósito">Depósito</option>
                <option value="Transferência">Transferência</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="data"
                className="block text-gray-700 font-medium mb-2"
              >
                Data
              </label>
              <input
                type="date"
                id="data"
                value={data}
                onChange={(e) => setData(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            {tipoTransferencia === "PIX" && (
              <div className="mb-4">
                <label
                  htmlFor="pixKey"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Chave PIX
                </label>
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
              <label
                htmlFor="valor"
                className="block text-gray-700 font-medium mb-2"
              >
                Valor
              </label>
              <NumericFormat
                value={valor}
                onValueChange={(values: any) => setValor(values.floatValue)}
                thousandSeparator="."
                decimalSeparator=","
                prefix="R$ "
                decimalScale={2}
                fixedDecimalScale={true}
                allowNegative={false}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className={`w-full font-bold py-2 bg-cyan-900 rounded transition text-white  ${
                isDisabled
                  ? "cursor-not-allowed opacity-50"
                  : " cursor-pointer hover:bg-cyan-800"
              }`}
              disabled={isDisabled}
            >
              {isEditing ? "Salvar Edição" : "Efetuar Transação"}
            </button>
          </form>
        </div>
        <div className="w-54 h-54 absolute top-0 right-0 hidden md:block">
          <Image
            src={imagem}
            alt="Imagem"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="relative bg-white rounded-lg flex flex-col justify-between p-4 pt-0 overflow-hidden">
        <h1 className="text-2xl z-10 text-cyan-900 font-bold mb-6 m-6">
          Transferências Agendadas
        </h1>
        <div className="relative z-10 text-black m-6">
          {transacoes.length === 0 ? (
            <p className="text-gray-500 text-center">
              Sem transferências agendadas
            </p>
          ) : (
            Object.keys(transacoesPorMes).map((mes) => (
              <div key={mes}>
                <span className="block text-amber-500 text-sm font-bold mb-4">
                  {mes}
                </span>
                {transacoesPorMes[mes].map((transacao: any, index: number) => (
                  <div
                    key={index}
                    className="border-b border-gray-300 pb-4 mb-4"
                  >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                      <div className="flex flex-col">
                        <span className="block">Tipo: {transacao.tipo}</span>
                        <span className="block">
                          Valor: {Number(transacao.valor).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                        </span>
                        <span className="font-bold">
                          Data: {transacao.criadaEm ? transacao.criadaEm.toLocaleDateString("pt-BR") : ""}
                        </span>
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
            ))
          )}
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="success-modal-title"
        aria-describedby="success-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "white",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <div className="text-cyan-900 text-lg font-bold">Sucesso!</div>

          <p id="success-modal-description" className="mt-6">
            Transação efetuada com sucesso!
          </p>
          <button
            onClick={handleClose}
            className="w-full cursor-pointer bg-cyan-900 text-white font-bold py-2 rounded hover:bg-cyan-800 transition mt-6"
          >
            Fechar
          </button>
        </Box>
      </Modal>
    </div>
  );
}
