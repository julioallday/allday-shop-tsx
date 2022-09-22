import { Card } from "flowbite-react";
import type { NextPage } from "next";
import Head from "next/head";
import { Cards } from "phosphor-react";
import { useState } from "react";
import Carrossel from "./components/Carrossel";
import Cartoes from "./components/Cartoes";
import EspacamentoYColorido from "./components/EspacamentoColorido";
import NavBar from "./components/NavBar";

const Home: NextPage = () => {
  const [cards, setCards] = useState(0);

  return (
    <div>
      <Head>
        <title>Inicio | Fruto e Fruta</title>

        <meta
          name="description"
          content="Produtos veganos, orgânicos e naturais. Somos a empresa mais jovem a conquistar o selo eureciclo - O selo eureciclo garante um sistema de logística reversa para a reciclagem da quantidade de material equivalente a que a Fruto e Fruta coloca no mercado através da compensação ambiental. Dessa forma, o impacto negativo da embalagem está sendo compensado do meio ambiente e a cadeia de reciclagem está sendo valorizada"
        />
      </Head>
      <div className="md:flex">
        <NavBar />

        <div className="w-full">
          <EspacamentoYColorido />
          <Carrossel />
          <EspacamentoYColorido />
          <br />
          <div className="md:mt-20 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            <Cartoes
              hRef="#"
              className="mt-2"
              src="https://static.clubeextra.com.br/img/uploads/1/56/22374056.PNG?im=Resize,width=200"
              titulo="Tofu Macio Orgânico Ecobras Bandeja 270g"
              conteudo="R$23,99"
            />
            <Cartoes
              hRef="1"
              className="mt-2"
              src="https://static.clubeextra.com.br/img/uploads/1/56/22374056.PNG?im=Resize,width=200"
              titulo="Tofu Macio Orgânico Ecobras Bandeja 270g"
              conteudo="R$23,99"
            />
            <Cartoes
              hRef="#"
              className="mt-2"
              src="https://static.clubeextra.com.br/img/uploads/1/56/22374056.PNG?im=Resize,width=200"
              titulo="Tofu Macio Orgânico Ecobras Bandeja 270g"
              conteudo="R$23,99"
            />
            <Cartoes
              hRef="#"
              className="mt-2"
              src="https://static.clubeextra.com.br/img/uploads/1/56/22374056.PNG?im=Resize,width=200"
              titulo="Tofu Macio Orgânico Ecobras Bandeja 270g"
              conteudo="R$23,99"
            />
            <Cartoes
              hRef="#"
              className="mt-2"
              src="https://static.clubeextra.com.br/img/uploads/1/56/22374056.PNG?im=Resize,width=200"
              titulo="Tofu Macio Orgânico Ecobras Bandeja 270g"
              conteudo="R$23,99"
            />
            <Cartoes
              hRef="#"
              className="mt-2"
              src="https://static.clubeextra.com.br/img/uploads/1/56/22374056.PNG?im=Resize,width=200"
              titulo="Tofu Macio Orgânico Ecobras Bandeja 270g"
              conteudo="R$23,99"
            />
            <Cartoes
              hRef="#"
              className="mt-2"
              src="https://static.clubeextra.com.br/img/uploads/1/56/22374056.PNG?im=Resize,width=200"
              titulo="Tofu Macio Orgânico Ecobras Bandeja 270g"
              conteudo="R$23,99"
            />
            <Cartoes
              hRef="#"
              className="mt-2"
              src="https://static.clubeextra.com.br/img/uploads/1/56/22374056.PNG?im=Resize,width=200"
              titulo="Tofu Macio Orgânico Ecobras Bandeja 270g"
              conteudo="R$23,99"
            />
            <span className="hidden lg:block">
            <Cartoes
              hRef="#"
              className="mt-2"
              src="https://static.clubeextra.com.br/img/uploads/1/56/22374056.PNG?im=Resize,width=200"
              titulo="Tofu Macio Orgânico Ecobras Bandeja 270g"
              conteudo="R$23,99"
            />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
