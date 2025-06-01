import { Meta, StoryObj } from "@storybook/react";
import Card from "@/components/Card";

const meta: Meta<typeof Card> = {
  title: "Componentes/Card",
  component: Card,
  args: {
    titulo: "Título do Card",
    background: "#f0f0f0",
    children: "Este é um conteúdo de exemplo dentro do card.",
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const SemBackground: Story = {
  args: {
    background: "white",
  },
};
