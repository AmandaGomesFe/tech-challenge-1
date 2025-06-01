import Cartoes from "@/app/aplicacao/components/cartoes";
import { Usuario } from "@/entities/usuario";

const usuarioExemplo: any= {
  nome: "Joana Fonseca Gomes",
  // Adicione outras propriedades necessárias para o tipo Usuario
};

export default {
  title: "Páginas/Cartões",
  component: Cartoes,
  parameters: {
    docs: {
      description: {
        component:
          "Essa página exibe os cartões físico e virtual do usuário, permitindo configurar limites e bloqueios através de um modal.",
      },
    },
  },
  argTypes: {
    usuario: {
      description: "Usuário que possui os cartões.",
      control: "object",
    },
  },
};

export const Default = {
  args: {
    usuario: usuarioExemplo,
    modalAberto: false,
    tipoModal: null,
    limite: 1000,
  },
};
