import { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/Button";

const meta: Meta<typeof Button> = {
  title: "Componentes/Button",
  component: Button,
  args: {
    children: "Clique Aqui",
    variant: "primario",
    onClick: () => alert("Botão clicado!"),
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primario: Story = {
  args: {
    variant: "primario",
  },
};

export const Secundario: Story = {
  args: {
    variant: "secundario",
  },
};
