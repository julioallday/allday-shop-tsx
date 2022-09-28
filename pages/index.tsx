// FUNCIONAIS
import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import nookies, { parseCookies } from 'nookies'

// COMPONENTES
import Head from "next/head";
import dados from "../dados.json"
import NavBar from "../components/NavBar";
import Painel from "../components/Painel";
import ItemCard from "../components/ItemCard"
import SessaoAplicativo from "../components/SessaoAplicativo";
import Rodape from "../components/Rodape";
import Mapa from "../components/Mapa";


const Home: NextPage = () => {

  const btnCookieRef: any = useRef()

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
    carregarInicio()


  }, [])
  async function carregarInicio() {
    await axios.get("https://fakestoreapi.com/products/category/electronics")
      .then((response) => {
        setProdutos(response.data);
      })
      .catch(() => (error: any) => {
        console.log(error);
      });

  }

  return (
    <>
      <Head>
        <title>AllDay Shop ©</title>
        <meta
          name="description"
          content="Produtos veganos, orgânicos e naturais. Somos a empresa mais jovem a conquistar o selo eureciclo - O selo eureciclo garante um sistema de logística reversa para a reciclagem da quantidade de material equivalente a que a Fruto e Fruta coloca no mercado através da compensação ambiental. Dessa forma, o impacto negativo da embalagem está sendo compensado do meio ambiente e a cadeia de reciclagem está sendo valorizada"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
              <link rel="manifest" href="/site.webmanifest"></link>
            </Head>
            <div ref={btnCookieRef} className="btn-cookies bg-blue-600 w-96 h-50" ></div>
            <div id="fundoPrincipal" className="md:flex min-h-screen relative">
              {/* NAVBAR */}
              <NavBar />
              <div className="w-full">
                <div className="grid grid-cols-1">
                  <section className="text-gray-600 body-font">
                    <div className="container px-5 py-12 mb-0 mx-auto">
                      <div className="flex flex-col text-center w-full ">
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-5xl">
                          ``Welcome to<span className="text-azul-hover italic"> paradise``</span>
                        </p>
                      </div>
                    </div>
                  </section>
                  <Painel />
                  <div id="produtos" className="grid grid-cols-1 py-16 rounded-t-3xl md:mt-20 sm:grid-cols-2 sm:gap-0 md:gap-0 lg:gap-4 lg:grid-cols-3 xl:grid-cols-4">
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
                    <Mapa />
                    <Rodape />
                  </div>
                </div>
              </div>
            </div>
          </>
          );
};

          export default Home;

