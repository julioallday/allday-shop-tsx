
import type { NextPage } from "next";
import Head from "next/head";

import { useEffect, useState } from "react";

import axios from "axios";

import Dados from "../dados.json";


import NavBar from "./components/NavBar";


import ItemCard from "./components/itemCard";

import Painel from "./components/Painel";

import Aplicativo from "./components/Aplicativo";

import Rodape from "./components/Rodape";


const Home: NextPage = () => {
  
  const produtos = Dados;


useEffect(() => {
  var axios = require('axios');

  var config = {
    method: 'get',
    url: 'https://fakestoreapi.com/products/category/electronics',
    headers: { }
  };
  
  axios(config)
  .then(function (response:any) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error:any) {
    console.log(error);
  });
  
  
}, [])



  return (
    <>
      <Head>
        <title>AllDay Shopp.</title>

        <meta
          name="description"
          content="Produtos veganos, orgânicos e naturais. Somos a empresa mais jovem a conquistar o selo eureciclo - O selo eureciclo garante um sistema de logística reversa para a reciclagem da quantidade de material equivalente a que a Fruto e Fruta coloca no mercado através da compensação ambiental. Dessa forma, o impacto negativo da embalagem está sendo compensado do meio ambiente e a cadeia de reciclagem está sendo valorizada"
        />
      </Head>
      <div id="fundoPrincipal" className="md:flex bg-scroll bg-auto bg-no-repeat bg- min-h-screen relative">
        <NavBar />
          <div className="w-full inset-0">
            <div className="grid grid-cols-1">
              <Painel/>
                <div id="produtos" className="grid grid-cols-1 md:mt-20 md:grid md:grid-cols-2 sm:gap-1 md:gap-0 lg:gap-4 lg:grid-cols-3">
                {produtos.map((produto, index) => ( index <= 11 ?
              
                <ItemCard
                  key={produto.id}
                  hRef={`http://localhost:3000/produtos?id=${produto.id}`}
                  className="mt-2"
                  src={produto.image}
                  titulo={produto.title}
                  conteudo={produto.price.toString()}
                />
                : null))}

            </div>
            <div className="grid grid-cols-1 justify-center">


            <Aplicativo/>

            <Rodape/>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default Home;
