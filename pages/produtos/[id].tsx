import { useRouter } from "next/router";
import dados from "../../dados.json";
import NavBar from "../components/NavBar";




// dica dos paths estáticos
export async function getStaticPaths() {
  // const paths = [
  //   { params: { id: '1' } },
  //   { params: { id: '2' } },
  //   { params: { id: '3' } }
  // ]
  const paths = dados.produtos.map((produtoAtual) => {
    return { params: { id: `${produtoAtual.id}` } };
  });
  console.log("dados:", dados);
  console.log("paths:", paths);

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context: { params: { id: any } }) {
  console.log("Contexto", context.params.id);
  const id = context.params.id;

  const produto = dados.produtos.find((currentPost: { id: any }) => {
    if (currentPost.id === id) {
      return true;
    }
    return false;
  });

  console.log(produto);

  return {
    props: {
      id: produto?.id,
      nome: produto?.nome,
      preco: produto?.preco,
      url: produto?.url,
    },
  };
}

export default function PostByIdScreen(props: {
  nome: any;
  preco: any;
  url: any;
}) {
  // console.log(props);
  const router = useRouter();
  // console.log(router);
  const produto = {
    nome: props.nome,
    preco: props.preco,
    url: props.url,
  };

  if (router.isFallback) {
    return "Essa página não existe!";
  }

  return (
    <>
    <NavBar/>
      <div className="container">
        <h1>{produto.nome}</h1>
        <img src={produto.url} alt="" srcSet="" />
     
      </div>
      
    </>
  );
}
