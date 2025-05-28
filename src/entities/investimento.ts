export type TipoInvestimento = 'renda_fixa' | 'renda_variavel';

export class Investimento {
  constructor(
    public id: string,
    public contaId: string,
    public tipo: TipoInvestimento,
    public categoria: string, // Ex: "Tesouro Direto", "Fundos de investimento"
    public valor: number
  ) {}
}