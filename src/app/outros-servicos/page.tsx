"use client";

import Card from "@/components/Card";
import Image from "next/image";

import iconeDoacao from "../../resources/iconeDoacoes.png";
import iconeSeguros from "../../resources/iconeSeguros.png";
import iconeCartoes from "../../resources/iconeCartoes.png";
import iconeEmprestimos from "../../resources/iconeEmprestimo.png";
import iconePix from "../../resources/iconePix.png";
import iconeCelular from "../../resources/iconeCelular.png";

export default function OutrosServicos() {
    const IconButton = ({ icon, text }: { icon: any; text: string }) => (
        <button className="flex flex-col justify-center items-center w-44 h-44 rounded-xl p-4 bg-gray-100 shadow-md cursor-pointer transition-transform hover:scale-105">
            <Image src={icon} alt="icone" width={44} height={44} />
            <span className="text-cyan-900 mt-2 font-bold text-lg text-center">{text}</span>
        </button>
    );

    return (
        <Card background="white" titulo="Confira os serviços disponíveis">
            <div className="w-full flex flex-col items-center gap-6">
                <div className="grid sm:grid-cols-3 gap-8 justify-center grid-cols-1">
                    <IconButton icon={iconeEmprestimos} text="Empréstimo" />
                    <IconButton icon={iconeCartoes} text="Meus Cartões" />
                    <IconButton icon={iconeDoacao} text="Doações" />
                    <IconButton icon={iconePix} text="Pix" />
                    <IconButton icon={iconeSeguros} text="Seguros" />
                    <IconButton icon={iconeCelular} text="Crédito Celular" />
                </div>
            </div>
        </Card>
    );
}