export class Usuario {
  constructor(
    public id: string,
    public nome: string,
    public email: string,
    private senha: string
  ) {}

  validarSenha(input: string): boolean {
    return this.senha === input;
  }

  atualizarPerfil(name: string, email: string) {
    this.nome = name;
    this.email = email;
  }
}