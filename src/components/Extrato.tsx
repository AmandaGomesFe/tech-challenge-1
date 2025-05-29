import { transferencias } from "@/data/instancias";

const meses = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const transacoes = transferencias.map((transacao) => ({
  mes: meses[transacao.criadaEm.getMonth()],
  tipo: transacao.tipo.charAt(0).toUpperCase() + transacao.tipo.slice(1),
  valor: transacao.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
  data: transacao.criadaEm.toLocaleDateString("pt-BR"),
}));

const transacoesPorMes = transacoes.reduce((acc: any, transacao: any) => {
  acc[transacao.mes] = acc[transacao.mes] || [];
  acc[transacao.mes].push(transacao);
  return acc;
}, {});

const Extrato = () => {
  return (
    <aside className="bg-white w-full rounded-lg shadow p-4 min-h-[300px]">
      <h2 className="text-2xl text-cyan-900 font-bold mb-6">Extrato</h2>
      <div>
        {Object.keys(transacoesPorMes).map((mes) => (
          <div key={mes}>
            <span className="block text-amber-500 text-sm font-bold mb-4">{mes}</span>
            {transacoesPorMes[mes].map((transacao: any, index: any) => (
              <div key={index} className="">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="block">{transacao.tipo}</span>
                    <span className="font-bold">{transacao.valor}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">{transacao.data}</span>
                  </div>
                </div>
                <hr className="w-full border-t border-gray-300 my-4" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Extrato;