import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Bytebank</h1>

        <ul className="flex space-x-6 text-white">
          <li>
            <Link href="/">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="">
              Serviços
            </Link>
          </li>
        </ul>

        <div className="space-x-4">
          {/* <button className="text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
            Abrir minha conta
          </button>
          <button className="border px-4 py-2 rounded-md hover:bg-green-500 hover:text-white transition">
            Já tenho conta
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;