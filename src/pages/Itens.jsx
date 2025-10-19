import { Link } from "react-router";
import { Navegacao } from "../components/Navegacao";

import passoMotor from "../assets/pecasProjeto/passoMotor.png";
import esp from "../assets/pecasProjeto/esp.png";
import sensorToque from "../assets/pecasProjeto/sensorToque.png";
import buzzer from "../assets/pecasProjeto/buzzer.png";
import display from "../assets/pecasProjeto/display.png";
import filamento from "../assets/pecasProjeto/filamento.png";

import lapisA from "../assets/itens/LapisA.png";
import lixeiraA from "../assets/itens/lixeiraA.png";
import lapisV from "../assets/itens/LapisV.png";
import lixeiraV from "../assets/itens/lixeiraV.png";

export function Itens() {
  const itens = [
    { img: passoMotor, nome: "Motor de Passo 28BYJ-48", preco: "R$: 67,90" },
    { img: esp, nome: "ESP32s Bluetooth 38 pinos", preco: "R$: 69,90" },
    { img: display, nome: "TFT Polegadas 240x320", preco: "R$: 74,60" },
    { img: buzzer, nome: "ZX Buzzer 5v Ativo", preco: "R$: 2,50" },
    { img: sensorToque, nome: "Sensor de toque", preco: "R$: 13,40" },
    { img: filamento, nome: "Filamento Preto/multicolor", preco: "R$: 101,50" },
  ];

  return (
    <main className="bg-amarelo-claro dark:bg-vinho-dois min-h-screen p-4 sm:p-6 md:p-10">
      <section>
        {/* Navegação — só aparece no desktop */}
        <div className="hidden md:block">
          <Navegacao />
        </div>

        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 mt-10 text-center md:text-left">
          <h1 className="font-erica text-vermelho text-3xl sm:text-5xl md:text-7xl dark:text-amarelo">
            Itens Cadastrados
          </h1>
          <button className="font-erica text-vinho-dois text-lg sm:text-2xl md:text-3xl rounded-2xl bg-amarelo w-40 sm:w-52 md:w-60 h-12 sm:h-16 md:h-20 cursor-pointer p-2">
            + Novo item
          </button>
        </div>

        {/* Cabeçalho Desktop */}
        <ul className="hidden md:flex font-erica text-center text-vermelho text-4xl gap-40 mt-10 dark:text-amarelo">
          <li className="pl-13">Foto</li>
          <li>Nome</li>
          <li className="pl-10">Preço</li>
          <li className="-ml-8">Ações</li>
        </ul>

        <hr className="border-amarelo border-8 dark:border-vermelho mt-3" />

        {/* Itens */}
        {itens.map((item, idx) => (
          <div key={idx}>
            {/* ===== DESKTOP ===== */}
            <div className="hidden md:block">
              <img
                src={item.img}
                alt={`Imagem de ${item.nome}`}
                className={`rounded-3xl size-40 ml-6 mt-3 ${
                  item.nome.includes("Filamento") ? "bg-white" : ""
                }`}
              />

              {/* Ícones apenas no desktop */}
              <div>
                <img
                  src={lapisA}
                  alt="icone lápis amarelo"
                  className="rounded-2xl size-30 ml-195 -mt-35 dark:hidden"
                />
                <img
                  src={lapisV}
                  alt="icone lápis vermelho"
                  className="rounded-2xl size-30 ml-195 -mt-35 hidden dark:block"
                />
                <img
                  src={lixeiraA}
                  alt="icone lixeira amarela"
                  className="rounded-2xl size-30 ml-207 -mt-30 dark:hidden"
                />
                <img
                  src={lixeiraV}
                  alt="icone lixeira vermelha"
                  className="rounded-2xl size-30 ml-225 -mt-30 hidden dark:block"
                />
              </div>

              <ul className="flex text-vermelho text-3xl gap-40 mt-10 dark:text-amarelo">
                <li className="-mt-30 pl-52">{item.nome}</li>
                <li
                  className={
                    idx === 0
                      ? "-mt-30 -ml-22"
                      : idx === 1
                      ? "-mt-30 -ml-26"
                      : idx === 2
                      ? "-mt-30 -ml-15"
                      : idx === 3
                      ? "-mt-30 ml-0.5"
                      : idx === 4
                      ? "-mt-30 ml-7"
                      : "-mt-30 -ml-27"
                  }
                >
                  {item.preco}
                </li>
              </ul>

              <hr className="border-amarelo border-8 dark:border-vermelho -mt-2" />
            </div>

            {/* ===== MOBILE ===== */}
            <div className="block md:hidden">
              <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 mt-6 text-center sm:text-left">
                <img
                  src={item.img}
                  alt={`Imagem de ${item.nome}`}
                  className={`rounded-3xl w-24 sm:w-32 mx-auto sm:mx-0 ${
                    item.nome.includes("Filamento") ? "bg-white" : ""
                  }`}
                />
                <p className="font-erica text-lg sm:text-2xl text-vermelho dark:text-amarelo">
                  {item.nome}
                </p>
                <p className="text-lg sm:text-2xl text-vermelho dark:text-amarelo">
                  {item.preco}
                </p>
              </div>

              <hr className="border-amarelo border-2 sm:border-4 dark:border-vermelho mt-4" />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
