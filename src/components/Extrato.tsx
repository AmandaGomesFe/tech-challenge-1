
const Extrato = ({children, background, titulo}: any) => {
    const transacoes = [
    { "mes": "Janeiro", "tipo": "Depósito", "valor": "75,00", "data": "06/01" },
    { "mes": "Janeiro", "tipo": "Depósito", "valor": "75,00", "data": "10/01" },
    { "mes": "Abril", "tipo": "Transferência", "valor": "-36,00", "data": "04/04" },
    { "mes": "Abril", "tipo": "Transferência", "valor": "-200,00", "data": "20/04" },
    { "mes": "Março", "tipo": "Transferência", "valor": "-20,00", "data": "06/03" },
    
  ]
    const transacoesPorMes = transacoes.reduce((acc: any, transacao: any) => {
        acc[transacao.mes] = acc[transacao.mes] || [];
        acc[transacao.mes].push(transacao);
        return acc;
    }, {});

    return (
        <aside className="bg-white w-full rounded-lg shadow p-4 min-h-[300px]">
          <h2 className="text-2xl text-cyan-900 font-bold mb-6">Extrato</h2>
          <div>
            {Object.keys(transacoesPorMes).map((mes) => (
              <div key={mes}>
                <span className="block text-amber-500 text-sm font-bold mb-4">{mes}</span>
                {transacoesPorMes[mes].map((transacao: any, index: any) => (
                  <div key={index} className="">
                    <div className="flex justify-between items-center" >
                      <div className="flex flex-col">
                        <span className="block">{transacao.tipo}</span>
                        <span className="font-bold">{transacao.valor}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">{transacao.data}</span>
                      </div>
                    </div>
                    <hr className="w-full border-t border-gray-300 my-4"/>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </aside>
    )
}

export default Extrato;