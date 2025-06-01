import { Meta, StoryObj } from "@storybook/react";
import Navbar from "../components/Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Componentes/Navbar",
  component: Navbar,
  args: {
    abrirModalCadastro: () => alert("Cadastro"),
    abrirModalLogin: () => alert("Login"),
    rolarPara: (id: string) => console.log(`Rolando para ${id}`),
  },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};
