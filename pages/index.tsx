// FUNCIONAIS
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import axios from "axios";
import nookies from 'nookies'

// COMPONENTES
import Head from "next/head";
import dados from "../dados.json"
import NavBar from "./components/NavBar";
import Mostruario from "./components/Mostruario";
import Painel from "./components/Painel";
import ItemCard from "./components/itemCard";
import SessaoAplicativo from "./components/SessaoAplicativo";
import Rodape from "./components/Rodape";


const Home: NextPage = () => {

  function salvarCookies() {
    nookies.set(null, 'nosso dado', 'nosso valor');
    console.log("tudo certo");


  }

  const [produtosNativos, setProdutosNativos] = useState([{
    id: "",
    title: "",
    price: "",
    image: "",
    description: "",
  }])

  const dadosNativos = dados;

  const [produtos, setProdutos] = useState([{
    id: "",
    title: "",
    price: "",
    image: "",
    description: "",
  }])

  // CONEXÃO COM API
  useEffect(() => {
    salvarCookies();

    const request = axios.get("https://fakestoreapi.com/products/category/electronics")
      .then((response) => {
        setProdutos(response.data);
      })
      .catch(() => (error: any) => {
        console.log(error);
      });


  }, [])
  function carregarInicio() { }

  return (
    <>

      <Head>
        <title>AllDay Shop ©</title>
        <meta
          name="description"
          content="Produtos veganos, orgânicos e naturais. Somos a empresa mais jovem a conquistar o selo eureciclo - O selo eureciclo garante um sistema de logística reversa para a reciclagem da quantidade de material equivalente a que a Fruto e Fruta coloca no mercado através da compensação ambiental. Dessa forma, o impacto negativo da embalagem está sendo compensado do meio ambiente e a cadeia de reciclagem está sendo valorizada"
        />
      </Head>

      <div id="fundoPrincipal" className="md:flex min-h-screen relative">
        {/* NAVBAR */}
        <NavBar />
        <div className="w-full">
          <div className="grid grid-cols-1">
            <Mostruario />
            <Painel />

            <div id="produtos" className="grid grid-cols-1 py-16 rounded-t-3xl md:mt-20 md:grid sm:grid-cols-2 sm:gap-0 md:gap-0 lg:gap-4 lg:grid-cols-3">
              {/* CARDS */}
              {produtos.map((produto, index) => (index <= 11 ?

                <ItemCard
                  key={produto.id}
                  hRef={`http://localhost:3000/produtos?id=${produto.id}`}
                  className="mt-2"
                  src={produto.image}
                  titulo={produto.title}
                  conteudo={produto.price.toString()}
                />
                : null
              ))}

              {dadosNativos.map((produto, index) => (index <= 20 ?

                <ItemCard
                  key={produto.id}
                  hRef={`http://localhost:3000/produtos?id=${produto.id}`}
                  className="mt-2"
                  src={produto.image}
                  titulo={produto.title}
                  conteudo={produto.price.toString()}
                />
                : null
              ))}
            </div>
            <div className="grid grid-cols-1 justify-center">
              <SessaoAplicativo />
              <Rodape />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

