/* eslint-disable @next/next/no-img-element */
import { Carousel } from "flowbite-react";
import { Butterfly } from "phosphor-react";

export default function Carrossel() {
  return (
    <div className="h-56 sm:h-64 object-center md:h-70 md:w-full z-49 bg-lime-600 xl:h-80 2xl:h-96">
      <div className="bg-lime-600 w-full hidden md:transform md:ease-in-out md: md:block md: h-24">
        {" "}
        <div className="flex justify-around p-2 items-center sticky top-0 z-30">
          <a
            href="./"
            className="text-white font-extrabold text-3xl pb-5 text-transparent bg-clip-text bg-gradient-to-tr from-lime-600 to-neutral-900 hover:from-neutral-900 hover:to-lime-600 "
          >
            Fruto e Fruta
          </a>
          <a href="./">
            <Butterfly
              className="pl-2 pb-3 mx-auto mt-0 mb-2"
              size={70}
              weight="duotone"
            />
          </a>
        </div>
      </div>
      <Carousel slideInterval={5000}>
        <img
          className=""
          src="https://cdn.pixabay.com/photo/2017/09/22/19/05/casserole-dish-2776735__340.jpg"
          alt="temperos e vegetais na bandeja"
        />
        <img
          src="https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467__340.jpg"
          alt="..."
        />
        <img
          src="https://cdn.pixabay.com/photo/2017/12/29/16/34/fruit-3048001__340.jpg"
          alt="laranja cortada"
        />
        <img
          src="https://cdn.pixabay.com/photo/2020/04/22/17/24/strawberry-5079237__340.jpg"
          alt="morangos"
        />
        <img
          src="https://cdn.pixabay.com/photo/2012/06/21/00/48/fruits-50423__340.jpg"
          alt="amoras"
        />
      </Carousel>
    </div>
  );
}
