export class Conta {
  constructor(
    public id: string,
    public usuarioId: string,
    public saldo: number = 0
  ) {}

  depositar(valor: number) {
    if (valor <= 0) throw new Error("Valor inválido para depósito.");
    this.saldo += valor;
  }

  sacar(valor: number) {
    if (valor > this.saldo) throw new Error("Saldo insuficiente.");
    this.saldo -= valor;
  }
}