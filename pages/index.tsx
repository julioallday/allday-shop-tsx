import type { NextPage } from "next";
import Head from "next/head";
import Carrossel from "./components/Carrossel";
import NavBar from "./components/NavBar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Inicio | Fruto e Fruta</title>

        <meta
          name="description"
          content="Produtos veganos, orgânicos e naturais. Somos a empresa mais jovem a conquistar o selo eureciclo - O selo eureciclo garante um sistema de logística reversa para a reciclagem da quantidade de material equivalente a que a Fruto e Fruta coloca no mercado através da compensação ambiental. Dessa forma, o impacto negativo da embalagem está sendo compensado do meio ambiente e a cadeia de reciclagem está sendo valorizada"
        />
      </Head>
      <div className="flex flex-col">
        <header>
          <NavBar />
        </header>
        <main>
          <Carrossel />
        </main>
      </div>
    </div>
  );
};

export default Home;
