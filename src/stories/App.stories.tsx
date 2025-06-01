import App from "@/app/aplicacao/page";
import { useState } from "react";

export default {
  title: "Páginas/App",
  component: App,
  parameters: {
    docs: {
      description: {
        component: "Página principal da aplicação contendo menus, extrato, transferências e configurações do usuário.",
      },
    },
  },
  decorators: [
    (Story:any, context: any) => {
      const [menuSelecionado, setMenuSelecionado] = useState(context.args.menuSelecionado);
      const [menuMobileAberto, setMenuMobileAberto] = useState(context.args.menuMobileAberto);
      const [menuUserAberto, setMenuUserAberto] = useState(context.args.menuUserAberto);

      return (
        <Story 
          args={{ menuSelecionado, menuMobileAberto, menuUserAberto }} 
        />
      );
    },
  ],
};

export const Default = {
};
