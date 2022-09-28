
import React, { useRef } from "react";

import { useEffect, useState } from "react";

import dados from "../dados.json";

import NavBar from "../components/NavBar";
import { Dropdown } from "flowbite-react";
import Rodape from "../components/Rodape";
import nookies from 'nookies'
import Image from "next/image";


export default function Post() {
  const curtidaRef: any = useRef();

  function cookiesCurtida() {
    nookies.set(null, 'curtiuProduto', 'true', {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
  }

  const [hasUserClicked, setHasUserClicked] = useState(false)

  function handleClick() {

  }

  function curtidaProduto() {
    curtidaRef.current.classList.toggle("text-red-500");
    setHasUserClicked(!hasUserClicked);
    cookiesCurtida()
  }

  useEffect(() => {

  }, [])

  const [produtoAtual, setProdutoAtual] = useState({
    nome: "",
    valor: "",
    descricao: "",
    imagem: ""
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const idProduto = urlParams.get("id");

    if (idProduto != undefined) {

      const produtoAtualTemp = dados.find((element) => { return element.id.toString() == idProduto; });
      if (produtoAtualTemp != undefined) {
        setProdutoAtual({
          nome: produtoAtualTemp.title,
          valor: produtoAtualTemp.price.toString(),
          descricao: produtoAtualTemp.description,
          imagem: produtoAtualTemp.image
        })
      }
    }
  }, []);


  return (
    <div className="md:flex min-h-screen relative">
      <NavBar />
      <div className="grid grid-cols-1 mx-auto w-full inset-0">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 sm:px-20 gap-1 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto items-center  flex flex-wrap md:flex-col ">
              <img
                alt="ecommerce"
                className="max-w-[77%] h-[8rem] mx-auto md:h-[20rem] lg:h-[26rem] object-center rounded"
                src={produtoAtual.imagem}
              />
              <div className="lg:w-fill w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="md:text-2xl title-font font-medium mb-1 title-font text-gray-500 tracking-widest">
                  {produtoAtual.nome}
                </h2>
                <Dropdown.Item>
                  <p className="leading-relaxed rounded-md">
                    {produtoAtual.descricao}
                  </p>
                </Dropdown.Item>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Quantidade</span>
                    <div className="relative">
                      <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                        <option>1x</option>
                        <option>10x</option>
                        <option>20x</option>
                        <option>50x</option>
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-white">
                    ${produtoAtual.valor}
                  </span>
                  <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Adicionar ao carrinho
                  </button>
                  <button ref={curtidaRef} onClick={curtidaProduto} className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center ml-4">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"

                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Rodape />
        </section>

      </div>
    </div>
  );
}
