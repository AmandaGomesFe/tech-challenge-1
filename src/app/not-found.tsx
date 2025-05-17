import Link from "next/link";
import imagem404 from "../resources/404.png"
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center">
        <div className="p-8 max-w-lg">
            <p className="text-xl font-bold mt-4 text-cyan-800 mb-4">Ops! Não encontramos a página...</p>
            <p className="text-md text-cyan-800">E olha que exploramos o universo procurando por ela!</p>
            <p className="text-md text-cyan-800">Que tal voltar e tentar novamente?</p>
            <Link href="/">
                <button className="mt-6 cursor-pointer bg-orange-400 text-white py-2 px-6 rounded-lg hover:bg-orange-500 transition">
                    Voltar ao início
                </button>
            </Link>
            <div className="flex justify-center mt-6">
            <Image src={imagem404} alt='Imagem 404'></Image>
            </div>
        
        </div>
    </div>
    );
}