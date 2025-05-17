// src/components/ui/Button.tsx
import React from "react";

type ButtonProps = {
  variant?: "primario" | "secundario";
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
};

export default function Button({
  variant = "primario",
  children,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  let style = "px-4 py-2 rounded-lg font-semibold transition duration-200 min-w-40 ";

  if (variant === "primario") {
    style += "bg-cyan-800 text-white hover:bg-cyan-900";
  } else if (variant === "secundario") {
    style += "border border-cyan-800 text-cyan-800 hover:bg-cyan-300";
  }

  return (
    <button type={type} onClick={onClick} className={`${style} ${className}`}>
      {children}
    </button>
  );
}