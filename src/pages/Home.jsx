import React, { useState } from "react";
import { Link } from "react-router";
import mito from "../assets/mito.jpg";
import mito2 from "../assets/mito2.jpg";
import mito3 from "../assets/mito3.jpg";
import mito4 from "../assets/mito4.jpg";
import setaD from "../assets/setaDireita.png";
import setaE from "../assets/setaEsquerda.png";
import dispenser from "../assets/dispenser.png";
import kawan from "../assets/criadores/kawanfoto.jpg";
import renato from "../assets/criadores/renataofoto.jpg";
import gustavo from "../assets/criadores/gustavofoto.jpg";
import gabriel from "../assets/criadores/gabrielfoto.jpg";
import { FooterSite } from "../components/FooterSite";
import kawanL from "../assets/fotosLinkedin/kawanLinkedin.png";
import renatoL from "../assets/fotosLinkedin/renatoLinkedin.png";
import gustavoL from "../assets/fotosLinkedin/gustavoLinkedin.png";
import gabrielL from "../assets/fotosLinkedin/gabrielLinkedin.png";
import img1 from "../assets/fotosProjeto/img1.png";
import img2 from "../assets/fotosProjeto/img2.png";
import Popup from "reactjs-popup";

export function Home() {
  const [mouseKawan, setMouseKawan] = useState(false);
  const [mouseRenato, setMouseRenato] = useState(false);
  const [mouseGustavo, setMouseGustavo] = useState(false);
  const [mouseGabriel, setMouseGabriel] = useState(false);

  const kawanfoto = mouseKawan ? kawanL : kawan;
  const renatofoto = mouseRenato ? renatoL : renato;
  const gustavofoto = mouseGustavo ? gustavoL : gustavo;
  const gabrielfoto = mouseGabriel ? gabrielL : gabriel;

  const mitos = [mito, mito2, mito3, mito4];
  const [indiceAtual, setIndiceAtual] = useState(0);

  const proximoMito = () => {
    setIndiceAtual((prev) => (prev + 1) % mitos.length);
  };

  const anteriorMito = () => {
    setIndiceAtual((prev) => (prev - 1 + mitos.length) % mitos.length);
  };

  return (
    <main className="bg-amarelo-claro dark:bg-vinho-dois w-full owerflow-x">
     <div className="relative flex justify-center items-center">
  <button onClick={anteriorMito} className="absolute left-2 md:left-5 z-10">
    <img
      src={setaE}
      alt="Anterior"
      className="w-12 h-12 md:w-20 md:h-20 shadow-none bg-transparent"
    />
  </button>

  <div className="w-full h-[200px] md:h-[275px] flex justify-center items-center">
    <img
      key={indiceAtual}
      src={mitos[indiceAtual]}
      alt={`Mito ${indiceAtual + 1}`}
      className="bg-black w-full h-[200px] md:h-[275px] object-cover opacity-0 animate-fadeIn"
    />
  </div>

  <button onClick={proximoMito} className="absolute right-2 md:right-5 z-10">
    <img
      src={setaD}
      alt="Próximo"
      className="w-12 h-12 md:w-20 md:h-20 shadow-none bg-transparent"
    />
  </button>
</div>

      
      <div className="hidden md:flex font-familjen justify-center p-6 text-vermelho bg-amarelo font-bold dark:bg-vinho-um dark:text-amarelo">
        <nav className="space-x-10 text-xl">
          <a href="#projeto" className="txt-links">Projeto</a>
          <Link to="/produto" className="txt-links">Produto</Link>
          <Link to="/jogo" className="txt-links">Jogo</Link>
          <Link to="/referencias" className="txt-links">Referências</Link>
          <Link to="/itens" className="txt-links">Itens</Link>
        </nav>
      </div>

      
      <div className="cartao-ft ">
        <img src={img1} alt="dispenser" className="ft-dispenser" />
        <p className="p-2 text-center md:text-left">
          Uma caixa de remédios automática, para regular remédios para idosos, com o objetivo de
          orientar a hora certa de usar seus remédios.
          </p>
      </div>

      <div className="cartao-ft ">
        <img src={img2} alt="dispenser" className="ft-dispenser" />
        <p className="p-2 text-center md:text-left">
          Seu diferencial é a quantidade de motores para executar a função de despejar o remedio, com 2 motores a automação
          se torna extremamente eficiente junto a um lcd que mostra o timer em tempo real para o usuario compreender melhor o processo.
        </p>
      </div>

   
      <div id="projeto">
  <h1 className="font-erica text-vermelho text-4xl md:text-8xl flex justify-center mt-10 mb-10 md:mt-15 md:mb-15 dark:text-amarelo">
    Nosso App
  </h1>
</div>

<div className="flex justify-center px-2">
  <div className="relative w-full max-w-3xl" style={{ aspectRatio: "16 / 9" }}>
    <iframe
      className="absolute top-0 left-0 w-full h-full rounded-2xl md:rounded-3xl"
      src="https://www.youtube.com/embed/YaaEGniKtfI"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  </div>
</div>


      <nav className="mt-10 flex justify-center text-base md:text-xl px-4">
        <a
          href=""
          className="ease-in-out duration-300 underline text-center text-vermelho bg-amarelo px-4 py-3 font-familjen dark:bg-vermelho dark:text-amarelo hover:bg-vinho-um hover:text-amarelo shadow-2xl rounded-lg"
        >
          CLIQUE AQUI PARA ACESSAR O NOSSO APP
        </a>
      </nav>

      
      <div>
        <h1 className="font-erica text-vermelho text-4xl md:text-8xl flex justify-center mt-10 mb-10 md:mt-15 md:mb-15 dark:text-amarelo">
          Sobre Nós
        </h1>

        <div className="p-10 flex flex-col md:flex-row md:mx-20 gap-10 items-center md:p-8 md:justify-between">
          <a
            href="https://www.linkedin.com/in/kawan-ribeiro-9013b9338"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <img
              className="fotos-padrao w-32 h-32 mr-11 md:m-0 md:w-40 md:h-40 rounded-full transition-all duration-300 cursor-pointer "
              src={kawanfoto}
              onMouseEnter={() => setMouseKawan(true)}
              onMouseLeave={() => setMouseKawan(false)}
              onClick={() => setMouseKawan((prev) => !prev)}
              alt="Imagem Kawan"
            />
            <p className="txt-sobrenos mt-2">Kawan</p>
          </a>

          <a
            href="https://www.linkedin.com/in/renato-fideliz-787b24338"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <img
              className="fotos-padrao w-32 h-32 mr-11 md:m-0 md:w-40 md:h-40 rounded-full object-cover cursor-pointer"
              src={renatofoto}
              onMouseEnter={() => setMouseRenato(true)}
              onMouseLeave={() => setMouseRenato(false)}
              onClick={() => setMouseRenato((prev) => !prev)}
              alt="Imagem Renato"
            />
            <p className="txt-sobrenos mt-2">Renato</p>
          </a>

          <a
            href="https://www.linkedin.com/in/gustavo-miranda-de-aguiar-485102339"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <img
              className="fotos-padrao w-32 h-32 mr-11 md:m-0 md:w-40 md:h-10 rounded-full object-cover cursor-pointer"
              src={gustavofoto}
              onMouseEnter={() => setMouseGustavo(true)}
              onMouseLeave={() => setMouseGustavo(false)}
              onClick={() => setMouseGustavo((prev) => !prev)}
              alt="Imagem Gustavo"
            />
            <p className="txt-sobrenos mt-2">Gustavo</p>
          </a>

          <a
            href="https://www.linkedin.com/in/gabriel-silva-oliveira-ab90bb339"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <img
              className="fotos-padrao w-32 h-32 mr-11 md:m-0 md:w-40 md:h-40 rounded-full object-cover cursor-pointer"
              src={gabrielfoto}
              onMouseEnter={() => setMouseGabriel(true)}
              onMouseLeave={() => setMouseGabriel(false)}
              onClick={() => setMouseGabriel((prev) => !prev)}
              alt="Imagem Gabriel"
            />
            <p className="txt-sobrenos mt-2">Gabriel</p>
          </a>
        </div>
      </div>

      <FooterSite />
    </main>
  );
}
