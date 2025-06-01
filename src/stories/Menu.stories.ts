import Menu from "@/stories/Menu";

export default {
  title: "Componentes/Menu Lateral",
  component: Menu,
  parameters: {
    docs: {
      description: {
        component: "O menu lateral permite a navegação entre diferentes seções da aplicação.",
      },
    },
  },
  argTypes: {
    menuSelecionado: {
      description: "Define qual item do menu está ativo.",
      control: "select",
      options: ["inicio", "transferencias", "investimentos", "outros"],
    },
  },
};

export const Default = {
  args:{
    menuSelecionado:"investimentos",
  },
};
