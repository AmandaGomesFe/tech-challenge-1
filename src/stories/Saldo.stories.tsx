import Saldo from "@/app/aplicacao/components/saldo";

const contaExemplo= {
  saldo: 2500.75, // Valor fictício para exibição
};

export default {
  title: "Páginas/Saldo",
  component: Saldo,
  parameters: {
    docs: {
      description: {
        component:
          "O componente Saldo exibe o saldo da conta corrente do usuário com a opção de ocultar ou mostrar os valores.",
      },
    },
  },
};

export const Default = {
  args: {
    conta: contaExemplo,
  },
};
