export class Cartao {
  constructor(
    public id: string,
    public contaId: string,
    public numero: string,
    public validade: string,
    public cvv: string
  ) {}

  estaValido(): boolean {
    const agora = new Date();
    const [mes, ano] = this.validade.split('/').map(Number);
    const dataValidade = new Date(2000 + ano, mes);
    return dataValidade > agora;
  }
}