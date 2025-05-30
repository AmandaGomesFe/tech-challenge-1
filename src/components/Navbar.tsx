import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./Button";
import Logo from "../resources/Logo.png";

type NavbarProps = {
  abrirModalCadastro: () => void;
  abrirModalLogin: () => void;
  rolarPara: (id: string) => void;
};

export default function Navbar({
  abrirModalCadastro,
  abrirModalLogin,
  rolarPara,
}: NavbarProps) {
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 top-0 left-0 w-full transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex flew-row justify-between items-center px-6 py-4">
        <Image src={Logo} alt="Logo" width={146} height={32} />
        <button
          className="md:hidden"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu"
        >
          {menuAberto ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        <div className="hidden md:flex w-full justify-between items-center px-6 py-4">
          <div className="flex w-full gap-8">
            <button onClick={() => rolarPara("sobre")} className="text-cyan-800 font-semibold hover:text-cyan-300">
              Sobre
            </button>
            <button onClick={() => rolarPara("servicos")} className="text-cyan-800 font-semibold hover:text-cyan-300">
              Serviços
            </button>
          </div>
          <div className="flex gap-4 items-center">
            <Button variant="primario" onClick={abrirModalCadastro}>
              Abrir Conta
            </Button>
            <Button variant="secundario" onClick={abrirModalLogin}>
              Já tenho conta
            </Button>
          </div>
        </div>
      </div>

      {menuAberto && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-4 px-6 py-4 md:hidden">
          <button
            onClick={() => {
              rolarPara("sobre");
              setMenuAberto(false);
            }}
            className="text-cyan-800 font-semibold hover:text-cyan-300"
          >
            Sobre
          </button>
          <button
            onClick={() => {
              rolarPara("servicos");
              setMenuAberto(false);
            }}
            className="text-cyan-800 font-semibold hover:text-cyan-300"
          >
            Serviços
          </button>
          <Button variant="primario" onClick={abrirModalCadastro}>
            Abrir Conta
          </Button>
          <Button variant="secundario" onClick={abrirModalLogin}>
            Já tenho conta
          </Button>
        </div>
      )}
    </nav>
  );
}