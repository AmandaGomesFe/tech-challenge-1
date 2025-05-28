"use client";

import Card from "@/components/Card";
import { FaDollarSign } from "react-icons/fa";
import { MdOutlineCheckBox } from "react-icons/md";

export default function OutrosServicos() {
    const IconButton = ({ icon, text }: any) => (
    <button className="flex flex-col items-center bg-transparent border-none cursor-pointer">
        <div className="bg-teal-100 rounded-full p-5 flex justify-center text-cyan-900 items-center text-4xl">
            {icon}
        </div>
        <span className="text-cyan-900 mt-2 font-bold">{text}</span>
    </button>
    );
  return (
    <div className="w-full bg-white rounded-xl p-6 mb-6">
        <div className="flex gap-8 p-5">
            <IconButton icon={<FaDollarSign />} text="Pontos" />
            <IconButton icon={<MdOutlineCheckBox />} text="Recarga" />
        </div>
    </div>
  );
}