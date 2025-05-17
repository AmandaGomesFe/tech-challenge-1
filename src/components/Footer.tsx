import Image from "next/image";
import Logo from "../resources/Logo-branco.png";
import logoWhatsApp from "../resources/Whatsapp.png";
import logoYoutube from "../resources/Youtube.png";
import logoInstagram from "../resources/Instagram.png";

const Footer = () => {
  return (
    <footer className="bg-cyan-800 text-white py-8 px-8 flex flex-col items-start md:flex-row md:justify-around text-left">
      <div className="mb-6 md:mb-0">
        <h4 className="text-lg font-bold mb-2">Serviços</h4>
        <ul className="list-none p-0 space-y-2">
          <li>Conta corrente</li>
          <li>Conta PJ</li>
          <li>Cartão de crédito</li>
        </ul>
      </div>
      <div className="mb-6 md:mb-0">
        <h4 className="text-lg font-bold mb-2">Contato</h4>
        <ul className="list-none p-0 space-y-2">
          <li>0800 004 250 08</li>
          <li>meajuda@bytebank.com.br</li>
          <li>ouvidoria@bytebank.com.br</li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-4">Desenvolvido por Alura</h4>
        <div className="flex flex-col items-start gap-4">
          <Image src={Logo} alt="Logo" width={150} height={48} />
          <div className="flex gap-4 justify-start">
            <Image src={logoInstagram} alt="Instagram" width={32} height={32} className="w-8" />
            <Image src={logoWhatsApp} alt="WhatsApp" width={32} height={32} className="w-8" />
            <Image src={logoYoutube} alt="YouTube" width={32} height={32} className="w-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;