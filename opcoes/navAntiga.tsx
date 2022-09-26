import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
const [hasUserClicked, setHasUserClicked] = useState(false)

function handleClick () {
  setHasUserClicked(!hasUserClicked);
}



  return (
    <>
      <header>
        <nav className="flex flex-row justify-between mx-4 my-2 ">
          <div>
            <h1 className="text-lime-600 font-serif">Fruto e Fruta 2.0</h1>
          </div>
          <button onClick={handleClick}>teste</button>
          
           `<div className="bg-lime-600">
            <ul className="grid grid-cols-1 gap-4">

              <Link href={"./"}>
                <li>
                  <a>Home</a>
                </li>
              </Link>

              <Link href={"./produtos"}>
                <li>
                  <a>Produtos</a>
                </li>
              </Link>
              <Link href={"./EncontreNos"}>
                <li>
                  <a>Encontre-nos</a>
                </li>
              </Link>
              <Link href={"./FaleConosco"}>
                <li>
                  <a>Fale conosco</a>
                </li>
              </Link>
            </ul>
          </div>
          
        </nav>
      </header>
    </>
  );
}
