import Link from "next/link";
import { useRef, useState } from "react";

import { Barcode, House, List, Newspaper, UserSquare } from "phosphor-react";


export default function NavBar() {
  const tituloDaPagina = "AllDay Shop"

  const ancoras = ["Home", "Produtos", "Newsletter", "Contato"]

  const sideBarRef: any = useRef();

  const [hasUserClicked, setHasUserClicked] = useState(false);


  function toogleSideBar() {
    sideBarRef.current.classList.toggle("-translate-x-full");
  }
  return (

    
    <div className="max-h-screen fixed md:sticky md:top-0 z-50 text-white py-0 inset-0">
      {/*MOBILE SIDEBAR*/}
      <div className="bg-gray-400 h-14 md:hidden flex justify-evenly p-2 items-center sticky top-0 z-30">
        <div className="bg-gray-400 h-14 w-full ">
        </div>
        <button
          onClick={toogleSideBar}
          className="rounded focus:bg-gray-600 hover:animate-bounce"
        >
          <List
            size={45}
            className="md:hidden focus:border-lime-700/30 focus:border-gray-500"
          />
        </button>
      </div>
      {/*SIDEBAR PRINCIPAL*/}
      <div
        ref={sideBarRef}
        className=" bg-gray-400 md:bg-gray-500/20 w-56 space-y-0 text-gray-900 absolute inset-y-0 left-0 transform -translate-x-full
        md:relative md:translate-x-0 z-50 transition duration-200 ease-in-out flex flex-col child:transition-all md:max-h-screen md:min-h-screen md:top-0"
      >
        <nav className="flex flex-col w-52 grow space-y-3  border ml-2 mt-0 mb-4 bg-gray-400 border-zinc-300 hover:border-white rounded-t-full">
          <div className="mt-10 justify-center">
            <div className="translate-x-[70px] mb-8">
              <Link href="./"><a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-16 h-16 text-white p-2 bg-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-full"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </a></Link>
            </div>
            <Link href="./"><a>
              <div className="mx-auto text-center">
                <span className="text-white font-extrabold text-3xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-transparent bg-clip-text bg-gradient-to-tr  from-neutral-900 to-yellow-300 hover:from-yellow-300 hover:to-neutral-900 ">

                  {tituloDaPagina}
                </span>
              </div>
            </a></Link>
          </div>
          <div className="mt-8 mb-4">
            <ul className="m-2 grid mt-10 gap-4">
              <Link href="./">
                <li className="mb-2 px-4 py-4 bg-gray-900 border-x-2 hover:border-gray-900 text-gray-100 font-extrabold flex flex-row hover:font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 border-gray-200 hover:text-neutral-900 hover:bg-[#F4F2F0] rounded-lg">
                  <span>
                    <House size={32} weight="duotone" />
                  </span>
                  <button>
                    <span className="ml-2 hover">{ancoras[0]}</span>
                  </button>

                </li>
              </Link>
              <Link href="./#produtos"><a>
                <li className="mb-2 px-4 py-4 bg-gray-900 border-x-2 hover:border-gray-900 text-gray-100 font-extrabold flex flex-row hover:font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 border-gray-200 hover:text-neutral-900 hover:bg-[#F4F2F0] rounded-lg">
                  <span>
                    <Barcode size={32} weight="duotone" />
                  </span>
                  <button>
                    <span className="ml-2 hover">{ancoras[1]}</span>
                  </button>
                </li>
              </a></Link>
              <Link href="/newsletter"><a>
                <li className="mb-2 px-4 py-4 bg-gray-900 border-x-2 hover:border-gray-900 text-gray-100 font-extrabold flex flex-row hover:font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 border-gray-200 hover:text-neutral-900 hover:bg-[#F4F2F0] rounded-lg">
                  <span>
                    <Newspaper size={32} weight="duotone" />
                  </span>
                  <button>
                    <span className="ml-2 hover">{ancoras[2]}</span>
                  </button>
                </li>
              </a></Link>
              <Link href="../#rodape"><a>
                <li className="mb-2 px-4 py-4 bg-gray-900 border-x-2 hover:border-gray-900 text-gray-100 font-extrabold flex flex-row hover:font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 border-gray-200 hover:text-neutral-900 hover:bg-[#F4F2F0] rounded-lg">
                  <span>
                    <UserSquare size={32} weight="duotone" />
                  </span>
                  <button>
                    <span className="ml-2 hover">{ancoras[3]}</span>
                  </button>
                </li>
              </a></Link>
            </ul>
            <div className="grid grid-cols-1">
              <button
                onClick={toogleSideBar}
                className="block md:hidden font-extrabold focus:ring transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-red-600 hover:text-yellow-500 m-2 px-4 py-2 rounded-md border border-lime-600 bg-gray-900  text-amber-400"
              >
                Fechar
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
