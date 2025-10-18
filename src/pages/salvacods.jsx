import { useState } from "react";
import neyma from "../assets/configuracao/perfil.jpg";
import olhoAbertoClaro from "../assets/configuracao/olhoAberto.png";
import olhoFechadoClaro from "../assets/configuracao/olhoFechado.png";

export function Configuracao() {
  const [clickOlho1, setClickOlho1] = useState(false);
  const [clickOlho2, setClickOlho2] = useState(false);

  const handleClickOlho1On = () => setClickOlho1((prev) => !prev);
  const handleClickOlho2On = () => setClickOlho2((prev) => !prev);

  const olho1 = clickOlho1 ? olhoFechadoClaro : olhoAbertoClaro;
  const olho2 = clickOlho2 ? olhoFechadoClaro : olhoAbertoClaro;

  return (
    <section className="min-h-screen flex flex-col items-center px-4 py-6 max-w-[430px] mx-auto bg-vinho-dois text-vinho-um">
      {/* Título */}
      <h1 className="font-erica text-amarelo text-4xl mb-6 text-center drop-shadow">
        Configurações
      </h1>

      {/* Bloco de informações do usuário */}
      <div className="bg-amarelo-claro rounded-2xl w-full p-5 mb-8 shadow-lg border-2 border-vinho-um">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src={neyma}
            alt="perfil"
            className="rounded-full w-20 h-20 border-2 border-vinho-um"
          />
          <div>
            <p className="text-vinho-um font-erica text-lg mb-1">Nome:</p>
            <p className="text-vinho-um font-familjen text-xl font-semibold">
              NeymarJr
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-vinho-um font-erica text-lg mb-1">Email:</p>
            <p className="text-vinho-um font-familjen text-base font-semibold">
              ********@gmail.com
            </p>
          </div>
          <button onClick={handleClickOlho1On} aria-label="Mostrar/Esconder email">
            <img className="w-6 h-6" src={olho1} alt="Ícone do olho" />
          </button>
        </div>

        <hr className="border-t-2 border-vinho-um my-2" />

        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-vinho-um font-erica text-lg mb-1">Senha:</p>
            <p className="text-vinho-um font-familjen text-base font-semibold">
              ************
            </p>
          </div>
          <button onClick={handleClickOlho2On} aria-label="Mostrar/Esconder senha">
            <img className="w-6 h-6" src={olho2} alt="Ícone do olho" />
          </button>
        </div>
      </div>

      {/* Formulário */}
      <form className="w-full bg-amarelo-claro rounded-2xl p-5 shadow-md border-2 border-vinho-um">
        <div className="mb-5">
          <label className="text-vinho-um font-familjen font-bold block mb-1" htmlFor="nome">
            Nome:
          </label>
          <input
            id="nome"
            type="text"
            placeholder="Editar nome"
            className="w-full bg-vermelho-claro text-amarelo-claro p-3 rounded-xl outline-none placeholder-amarelo-claro"
          />
        </div>

        <div className="mb-5">
          <label className="text-vinho-um font-familjen font-bold block mb-1" htmlFor="email">
            E-mail:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Trocar e-mail"
            className="w-full bg-vermelho-claro text-amarelo-claro p-3 rounded-xl outline-none placeholder-amarelo-claro"
          />
        </div>

        <div className="mb-6">
          <label className="text-vinho-um font-familjen font-bold block mb-1" htmlFor="senha">
            Senha:
          </label>
          <input
            id="senha"
            type="password"
            placeholder="Trocar senha"
            className="w-full bg-vermelho-claro text-amarelo-claro p-3 rounded-xl outline-none placeholder-amarelo-claro"
          />
        </div>

        <div className="flex flex-col gap-4">
          <button
            type="submit"
            className="bg-vinho-um text-amarelo w-full py-3 rounded-xl font-familjen text-xl shadow"
          >
            Salvar
          </button>
          <button
            type="button"
            className="bg-vermelho text-amarelo-claro w-full py-3 rounded-xl font-familjen text-xl shadow"
          >
            Excluir minha conta
          </button>
        </div>
      </form>
    </section>
  );
}
