import { Button, Card } from "flowbite-react";
import { ImageProps } from "next/image";



interface CardsProps {
  src: string;
  titulo: string;
  conteudo: string;
  className: string;
  hRef: string
}


export default function Cartoes(children: CardsProps) {
  return (
    <>
      <div className="my-4 grid grid-cols-1">
        <div className="max-w-sm m-auto mt-1">
          <div className="bg-lime-300/30 p-5 rounded-xl">
            <Card imgSrc={children.src}>
              <a href={children.hRef} className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {children.titulo}
              </a>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {children.conteudo}
              </p>
              <a href={children.hRef}><Button gradientMonochrome="lime">Lime</Button></a>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
// imgSrc="https://static.clubeextra.com.br/img/uploads/1/56/22374056.PNG?im=Resize,width=200"
