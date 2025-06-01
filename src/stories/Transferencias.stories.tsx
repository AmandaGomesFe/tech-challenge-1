import Transferencias from "@/app/aplicacao/components/transferencia";

export default {
  title: "Páginas/Transferências",
  component: Transferencias,
  parameters: {
    docs: {
      description: {
        component:
          "O componente Transferências permite ao usuário realizar e visualizar transferências agendadas, incluindo PIX, depósitos e transferências bancárias.",
      },
    },
  },
};

export const Default = {};
