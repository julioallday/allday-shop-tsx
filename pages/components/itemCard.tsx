/* eslint-disable react/jsx-no-target-blank */



interface CardsProps {
    src: string;
    titulo: string;
    conteudo: string;
    className: string;
    hRef: string;
    
  }



export default function ItemCard(children:CardsProps) {
  return (
    <>
      <div className="flex flex-cols-1 text-center text justify-items-center ">
        <div className="w-30 h-24">
          <div className="text-sm text-white py-1">
            <a
              href="https://www.material-tailwind.com/docs/html/card?ref=tailwindcomponents"
              className="text-white font-semibold"
              target="_blank"
            >

            </a>

            <a
              href="https://www.creative-tim.com?ref=tailwindcomponents"
              className="text-white font-semibold"
              target="_blank"
            >
            </a>
            .
          </div>
        </div>
        <div className="relative max-w-md mx-auto xl:max-w-2xl min-w-0 break-words bg-white shadow-lg rounded-xl">
          <div className="card w-52">
            <div className="card-header mx-4">
              <a
                href="https://www.material-tailwind.com"
                blur-shadow-image="true"
              >
                <img
                  className="w-auto rounded-lg"
                  src={children.src}
                  alt=""
                />
              </a>
            </div>
            <div className="card-body w-44">
              <a href="#">
                <h4 className="font-semibold">{children.titulo}</h4>
              </a>
              <p className="opcacity-60 mb-4">
                {children.conteudo}
              </p>
              <button className="button button-pink" data-ripple-light="true">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
