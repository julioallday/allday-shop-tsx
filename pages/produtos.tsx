import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useEffect, useState } from "react";
import dados from "../dados.json";

export default function Post() {
  const router = useRouter();
  const dadoRouter = router.query.id;
  const [produtoAtual, setProdutoAtual] = useState({
    nome: "",
    preco: "",
    url: "",
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const idProduto = urlParams.get("id");

    if(idProduto != undefined)
    {

    const produtoAtualTemp = dados.produtos.find((element) => {return element.id.toString() == idProduto;});
    if (produtoAtualTemp != undefined)
      {
      setProdutoAtual(produtoAtualTemp);
      }
    }
  }, []);

  return (
    <div>
      <ul>
        <li>
          <button type="button" onClick={() => router.push("")}>
            dfsjdfjisodhfsodh
          </button>
        </li>
      </ul>
    </div>
  );
}
