"use client";
import { useState } from "react";
import Cadastrar from "../components/Modal/cadastro";
import Login from "../components/Modal/login";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Adicionamos o Footer
import Image from "next/image";
import Ilustracao from "../resources/Ilustração Banner.png";
import Dispositivos from "../resources/Ícone Dispositivos.png";
import Pontos from "../resources/Ícone Pontos.png";
import Presente from "../resources/Ícone Presente.png";
import Saque from "../resources/Ícone Saque.png";

export default function Home() {
    const [isOpenCadastro, setIsOpenCadastro] = useState(false);
    const [isOpenLogin, setIsOpenLogin] = useState(false);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="flex flex-col w-full">
            <Navbar
                abrirModalCadastro={() => setIsOpenCadastro(true)}
                abrirModalLogin={() => setIsOpenLogin(true)}
                rolarPara={scrollToSection}
            />

            {isOpenCadastro && (
                <Cadastrar fecharModal={() => setIsOpenCadastro(false)} />
            )}
            {isOpenLogin && <Login fecharModal={() => setIsOpenLogin(false)} />}

            <section
                id="sobre"
                className="flex flex-col-reverse md:flex-row md:py-20 md:px-16 p-6 text-start items-center md:gap-32"
            >
                <h1 className="text-3xl md:text-4xl text-cyan-900 font-bold mb-6">
                    Experimente mais liberdade no controle da sua vida
                    financeira. Crie sua conta com a gente!
                </h1>
                <Image src={Ilustracao} alt="Logo" width={662} height={412} />
            </section>

            {/* SESSÃO: SOBRE */}
            <section
                id="sobre"
                className="md:py-20 md:px-16 p-6  text-center text-cyan-900"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre o ByteBank</h2>
                <p className="max-w-3xl mx-auto text-lg">
                    O Bytebank é uma solução digital moderna que nasceu com o
                    objetivo de tornar a gestão financeira mais simples, segura
                    e acessível para todos. Com tecnologia de ponta e foco na
                    experiência do usuário, oferecemos uma plataforma intuitiva
                    para abrir contas, realizar transações e acompanhar suas
                    finanças de forma descomplicada — tudo em um só lugar.
                </p>
            </section>

            {/* SESSÃO: SERVIÇOS */}
            <section
                id="servicos"
                className="md:py-20 md:px-16 p-6  text-center text-cyan-900"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-10">
                    Vantagens do nosso banco
                </h2>
                <div className="flex flex-row mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src={Presente}
                            alt="Logo"
                            width={73}
                            height={56}
                        />
                        <h3 className="text-xl text-amber-500 font-semibold">
                            Conta e cartão gratuitos
                        </h3>
                        <p>
                            Isso mesmo, nossa conta é digital, sem custo fixo e
                            mais que isso: sem tarifa de manutenção.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src={Saque} alt="Logo" width={73} height={56} />
                        <h3 className="text-xl text-amber-500 text-xl font-semibold">
                            Saques sem custo
                        </h3>
                        <p>
                            Você pode sacar gratuitamente 4x por mês de qualquer
                            Banco 24h.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src={Pontos} alt="Logo" width={73} height={56} />
                        <h3 className="text-xl text-amber-500 text-xl font-semibold">
                            Programa de pontos
                        </h3>
                        <p>
                            Você pode acumular pontos com suas compras no
                            crédito sem pagar mensalidade!
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src={Dispositivos}
                            alt="Logo"
                            width={73}
                            height={56}
                        />
                        <h3 className="text-xl text-amber-500 text-xl font-semibold">
                            Seguro Dispositivos
                        </h3>
                        <p>
                            Seus dispositivos móveis (computador e laptop)
                            protegidos por uma mensalidade simbólica.
                        </p>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <Footer />
        </div>
    );
}
