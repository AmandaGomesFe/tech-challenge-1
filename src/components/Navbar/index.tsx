import Link from "next/link";
import Button from "../Button";

const Navbar = ({ abrirModalCadastro, abrirModalLogin }: any) => {
  return (
    <nav className="p-6">
      <div className="container flex items-center justify-between">
        <div className="flex justify-between w-90">
          <h1 className="text-lg font-semibold">Bytebank</h1>
          <Link href="" className="font-semibold">Sobre</Link>
          <Link href="" className="font-semibold">Serviços</Link>
        </div>
        
        <div className="flex justify-around w-90">
          <Button onClick={abrirModalCadastro} color="azul">Abrir minha conta</Button>
          <Button onClick={abrirModalLogin} color="none">Já tenho conta</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;