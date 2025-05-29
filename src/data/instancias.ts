import { Usuario } from "@/entities/usuario";
import { Conta } from "@/entities/conta";
import { Cartao } from "@/entities/cartao";
import { Investimento } from "@/entities/investimento";
import { Transferencia } from "@/entities/transferencia";

// Instância de usuário
export const usuarioPrincipal = new Usuario(
  "usuario1",
  "Joana Fonseca Gomes",
  "joana@email.com",
  "senha123"
);

// Conta vinculada
export const contaPrincipal = new Conta(
  "conta1",
  usuarioPrincipal.id,
  2500
);

// Cartões vinculados
export const cartaoFisico = new Cartao(
  "cartao1",
  contaPrincipal.id,
  "1234 5678 9012 3456",
  "12/25",
  "123"
);

export const cartaoVirtual = new Cartao(
  "cartao2",
  contaPrincipal.id,
  "9876 5432 1098 7654",
  "01/26",
  "456"
);

// Simulação de dados (em breve pode vir de API ou repositório)
export const investimentos: Investimento[] = [
  new Investimento("1", "conta1", "renda_fixa", "Tesouro Direto", 15000),
  new Investimento("2", "conta1", "renda_fixa", "Previdência Privada", 21000),
  new Investimento("3", "conta1", "renda_variavel", "Fundos de investimento", 8000),
  new Investimento("4", "conta1", "renda_variavel", "Bolsa de Valores", 6000),
];

export const transferencias = [
  new Transferencia(crypto.randomUUID(), "conta-123", "deposito", 500.00, new Date("2025-01-06")),
  new Transferencia(crypto.randomUUID(), "conta-456", "saque", 200.00, new Date("2025-01-10")),
  new Transferencia(crypto.randomUUID(), "conta-789", "transferencia", 750.50, new Date("2025-04-04")),
  new Transferencia(crypto.randomUUID(), "conta-321", "PIX", 120.00, new Date("2025-04-20")),
  new Transferencia(crypto.randomUUID(), "conta-654", "deposito", 1000.00, new Date("2025-03-06")),
];