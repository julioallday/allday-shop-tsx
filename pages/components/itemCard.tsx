/* eslint-disable react/jsx-no-target-blank */

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
      <div className="flex flex-cols-1 text-center text justify-items-center ">
        <div className="w-30 h-24">
          <div className="text-sm text-white py-1">
            <Link href={children.hRef}>
              <a className="text-white font-semibold" target="_blank"></a>
            </Link>
            <Link href={children.hRef}>
              <a className="text-white font-semibold" target="_blank"></a>
            </Link>
          </div>
        </div>
        <div className="relative max-w-md mb-12 mx-auto xl:max-w-2xl min-w-0 break-words bg-white shadow-lg rounded-xl">
          <div className="card grid gap-2 pt-5 justify-center w-52">
            <div className=" card-header mx-4">
              <Link href={children.hRef}>
                <a>
                  <img
                    className="w-auto h-40 rounded-3xl"
                    src={children.src}
                    alt=""
                  />
                </a>
              </Link>
            </div>
            <div className="card-body w-44">
              <Link href={children.hRef}>
                <a>
                  <h4 className="font-semibold">{children.titulo}</h4>
                </a>
              </Link>
              <p className="opcacity-60 mb-4">{children.conteudo}</p>
              <button
                type="button"
                className="bg-lime-900 rounded-3xl w-36 h-10 ml-2 mb-5"
                data-ripple-light="true"
              >
              <Link href={children.hRef}><a>  Read More</a></Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
