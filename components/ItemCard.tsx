/* eslint-disable react/jsx-no-target-blank */

import Image from "next/image";
import Link from "next/link";

interface CardsProps {
  src: string;
  titulo: string;
  conteudo: string;
  className: string;
  hRef: string;
}

export default function ItemCard(children: CardsProps) {
  return (
    <>
      <Link href={children.hRef}>
        <div className="flex flex-cols-1 text-center mb-20 m-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 group justify-items-center ">
          <div className="w-30 h-24">
            <div className="text-sm text-white py-1">
              <a className="text-white font-semibold" target="_blank"></a>
              <Link href={children.hRef}>
                <a className="text-white font-semibold" target="_blank"></a>
              </Link>
            </div>
          </div>
          <div className="relative max-w-md mb-12 mx-auto xl:max-w-2xl min-w-0 break-words bg-white shadow-lg rounded-xl">
            <div className="card grid gap-2 pt-5 justify-center w-52">
              <div className=" card-header m-auto mx-4">
                <Link href={children.hRef}>
                  <a>
                    <img
                      className="w-auto m-auto h-40 rounded-3xl"
                      src={children.src}
                      alt=""
                    />
                  </a>
                </Link>
              </div>
              <div className="card-body group m-auto pr-2 w-44">
                <Link href={children.hRef}>
                  <a>
                    <h4 className="font-semibold my-auto ">{children.titulo.substring(0, 25)}...</h4>
                  </a>
                </Link>
                <p className="opcacity-60 mb-4">${children.conteudo}</p>
                <button
                  type="button"
                  className="bg-gray-200 font-extrabold focus:ring transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 group-hover:bg-gray-600 border-black hover:border-teal-600 rounded-3xl w-36 h-10 ml-2 mb-5"
                  data-ripple-light="true"
                >
                  <Link href={children.hRef}>Comprar</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
