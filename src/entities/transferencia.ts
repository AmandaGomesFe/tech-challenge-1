export type TipoTransferencia = 'deposito' | 'saque' | 'transferencia';

export class Transferencia {
  constructor(
    public id: string,
    public contaId: string,
    public tipo: TipoTransferencia,
    public valor: number,
    public criadaEm: Date = new Date()
  ) {}
}