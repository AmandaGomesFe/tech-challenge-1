import Image from 'next/image';
import pixel3 from '../resources/Pixels3.png';
import pixel4 from '../resources/Pixels3.png';

const Card = ({children, background, titulo}: any) => {
  return (
    <div className={`relative bg-white bg-cover bg-center rounded-lg flex flex-col justify-between p-4 overflow-hidden`} style={{backgroundColor: background}}>
        <h1 className="text-2xl z-10 font-bold mb-6 m-6">{ titulo }</h1>
        <div className="relative z-10 text-black">
            {children}
        </div>
        <div className="w-64 h-64 absolute top-0 right-0">
            <Image src={pixel3} alt="Imagem" className="w-full h-full object-contain" />
        </div>
        <div className="w-64 h-64 absolute bottom-0 left-0 ">
            <Image src={pixel4} alt="Imagem" className="w-full h-full object-contain" />
        </div>
    </div>
  );
};

export default Card;
