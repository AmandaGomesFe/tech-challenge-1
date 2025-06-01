import Investimentos from "@/app/aplicacao/components/investimentos";
import { investimentos } from "@/data/instancias";

export default {
  title: "Páginas/Investimentos",
  component: Investimentos,
  parameters: {
    docs: {
      description: {
        component:
          "Essa página exibe um resumo dos investimentos do usuário, incluindo renda fixa, renda variável e estatísticas visuais.",
      },
    },
  }
};

export const Default = {
};