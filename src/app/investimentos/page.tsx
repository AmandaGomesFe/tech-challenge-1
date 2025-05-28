"use client";
import Card from "@/components/Card";
import { investimentos } from "@/data/instancias";

export default function Investimentos() {
  const total = investimentos.reduce((acc, inv) => acc + inv.valor, 0);
  const rendaFixa = investimentos
    .filter(i => i.tipo === 'renda_fixa')
    .reduce((acc, i) => acc + i.valor, 0);
  const rendaVariavel = investimentos
    .filter(i => i.tipo === 'renda_variavel')
    .reduce((acc, i) => acc + i.valor, 0);

  const categorias = [
    { nome: "Fundos de investimento", cor: "bg-blue-600" },
    { nome: "Tesouro Direto", cor: "bg-purple-500" },
    { nome: "Previdência Privada", cor: "bg-pink-500" },
    { nome: "Bolsa de Valores", cor: "bg-orange-500" },
  ];

  return (
    <Card background={"#CBCBCB"} titulo={"Investimentos"}>
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <p className="text-2xl text-cyan-900 mt-2">
            Total: R$ {total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </p>
        </div>

        <div className="flex flex-row gap-4">
          <div className="bg-emerald-400 text-white w-full rounded-xl shadow-md">
            <div className="p-4 text-center">
              <p className="text-md">Renda Fixa</p>
              <p className="text-xl">
                R$ {rendaFixa.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </p>
            </div>
          </div>

          <div className="bg-emerald-400 text-white w-full rounded-xl shadow-md">
            <div className="p-4 text-center">
              <p className="text-md">Renda variável</p>
              <p className="text-xl">
                R$ {rendaVariavel.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Estatísticas</h2>
          <div className="bg-emerald-400 text-white mt-4 p-4 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <div className="w-1/2">
                {categorias.map((cat, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2 last:mb-0">
                    <span className={`w-3 h-3 rounded-full ${cat.cor}`} />
                    <p>{cat.nome}</p>
                  </div>
                ))}
              </div>
              <div className="w-1/2 flex justify-center">
                <div className="w-32 h-32 rounded-full border-[18px] border-blue-600 border-t-purple-500 border-r-pink-500 border-b-orange-500 rotate-[135deg]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}