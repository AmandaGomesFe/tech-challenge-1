interface ButtonProps {
  color: "azul" | "laranja" | "none";
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ color, children, onClick }: ButtonProps) {
  const buttonClasses = {
    azul: "bg-[#004D61] text-white",
    laranja: "",
    none: 'bg-transparent border-2 border-[#004D61] text-black'
  };

  return (
    <button 
      className={`${buttonClasses[color]} cursor-pointer font-semibold px-4 py-2 rounded-lg`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
}