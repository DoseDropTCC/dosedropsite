import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Navegacao } from "../components/Navegacao";

import neyma from "../assets/configuracao/perfil.jpg";
import olhoAbertoClaro from "../assets/configuracao/olhoAberto.png";
import olhoFechadoClaro from "../assets/configuracao/olhoFechado.png";
import olhoAbertoEscuro from "../assets/configuracao/olhoAberto2.png";
import olhoFechadoEscuro from "../assets/configuracao/olhoFechado2.png";

export function Configuracao() {
  // olhos (usamos duas variações de ícones se quiser)
  const [clickOlho1, setClickOlho1] = useState(false);
  const [clickOlho2, setClickOlho2] = useState(false);
  const { theme } = useContext(ThemeContext); // mantém o theme provider existente
  const isDark = theme === "dark";

  // escolhe os ícones (se preferir sempre os claros, troque aqui)
  const olho1 = isDark ? (clickOlho1 ? olhoFechadoEscuro : olhoAbertoEscuro) : (clickOlho1 ? olhoFechadoClaro : olhoAbertoClaro);
  const olho2 = isDark ? (clickOlho2 ? olhoFechadoEscuro : olhoAbertoEscuro) : (clickOlho2 ? olhoFechadoClaro : olhoAbertoClaro);

  return (
    <section className={`min-h-screen ${isDark ? "bg-[#430202] text-[#F7DE85]" : "bg-[#FFFBEA] text-[#720C0C]"}`}>
      <div className="hidden md:block">
      <Navegacao />
      </div>

      {/* ---------------- MOBILE: código atual (visível até md) ---------------- */}
      <div className="block md:hidden flex flex-col items-center px-4 py-6 max-w-[430px] mx-auto">
        {/* Bloco de informações (mobile) */}
        <div className={`italic rounded-2xl w-full p-5 mb-8 shadow-md border ${isDark ? "bg-[#720C0C] border-none text-[#F7DE85]" : "bg-[#FFFBEA] border-[#720C0C] text-[#720C0C]"}`}>
          <div className="flex items-center space-x-4 mb-6">
            <img src={neyma} alt="perfil" className={`rounded-3xl w-20 h-20 border-2 ${isDark ? "border-white" : "border-[#720C0C]"}`} />
            <div>
              <p className="font-erica text-lg mb-1">Nome:</p>
              <p className={`font-familjen text-xl font-semibold ${isDark ? "text-[#F7DE85]" : "text-[#B22C23]"}`}>NeymarJr</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-erica text-lg mb-1">Email:</p>
              <p className={`font-familjen text-base ${isDark ? "text-[#F7DE85]" : "text-[#B22C23]"}`}>********@gmail.com</p>
            </div>
            <button onClick={() => setClickOlho1(prev => !prev)} aria-label="Mostrar/Esconder email">
              <img className="w-9 h-9" src={olho1} alt="Ícone do olho" />
            </button>
          </div>

          <hr className={`border-t-2 my-2 ${isDark ? "border-[#F7DE85]" : "border-[#720C0C]"}`} />

          <div className="flex items-center justify-between mt-4">
            <div>
              <p className="font-erica text-lg mb-1">Senha:</p>
              <p className={`font-familjen text-base ${isDark ? "text-[#F7DE85]" : "text-[#B22C23]"}`}>**********</p>
            </div>
            <button onClick={() => setClickOlho2(prev => !prev)} aria-label="Mostrar/Esconder senha">
              <img className="w-9 h-9" src={olho2} alt="Ícone do olho" />
            </button>
          </div>
        </div>

        <h1 className={`font-erica text-4xl mb-8 w-full text-center ${isDark ? "text-[#F7DE85]" : "text-[#B22C23]"}`}>Configurações</h1>

        <form className="w-full space-y-6">
          <div>
            <label className="font-familjen font-bold block mb-1" htmlFor="nome">Nome</label>
            <input id="nome" type="text" placeholder="Editar nome" className={`w-full p-3 rounded-xl outline-none placeholder-[#FFFBEA] ${isDark ? "bg-[#B3453D] text-white" : "bg-[#B22C23] text-[#FFFBEA]"}`} />
          </div>

          <div>
            <label className="font-familjen font-bold block mb-1" htmlFor="email">E-mail</label>
            <input id="email" type="email" placeholder="Trocar e-mail" className={`w-full p-3 rounded-xl outline-none placeholder-[#FFFBEA] ${isDark ? "bg-[#B3453D] text-white" : "bg-[#B22C23] text-[#FFFBEA]"}`} />
          </div>

          <div>
            <label className="font-familjen font-bold block mb-1" htmlFor="senha">Senha</label>
            <input id="senha" type="password" placeholder="Trocar senha" className={`w-full p-3 rounded-xl outline-none placeholder-[#FFFBEA] ${isDark ? "bg-[#B3453D] text-white" : "bg-[#B22C23] text-[#FFFBEA]"}`} />
          </div>

          <div className="flex flex-col gap-4 mt-6">
            <button type="submit" className={`w-full py-3 rounded-xl font-familjen text-xl ${isDark ? "bg-[#720C0C] text-[#F7DE85]" : "bg-[#B22C23] text-[#FFFBEA]"}`}>Salvar</button>
            <button type="button" className={`w-full py-3 rounded-xl font-familjen text-xl ${isDark ? "bg-[#B22C23] text-white" : "bg-[#B3453D] text-[#FFFBEA]"}`}>Excluir minha conta</button>
          </div>
        </form>
      </div>

      {/* ---------------- DESKTOP: código antigo (visível a partir de md) ---------------- */}
      <div className="hidden md:block">
        <div className="container mx-auto px-8 py-8 -ml-8 h-225 ">
          <div className="flex h-full">
            {/* Painel esquerdo (antigo) */}
            <div className="bg-vinho-um italic h-auto w-200 dark:bg-vinho-um ml-2 rounded-2xl">
              <div className="flex p-6 w-40">
                <img src={neyma} alt="neyma" className="rounded-3xl size-25 mt-5 border-2 border-white flex items-center hover:scale-95 ease-in-out duration-300"/>
                <ul className="m-auto">
                  <li className="info-config ">Nome:</li>
                  <li className="txt-config">NEYMA</li>
                </ul>
              </div>

              <hr className="hr-config" />

              <div className="flex items-center px-5 py-4">
                <ul>
                  <li className="info-config">Email:</li>
                  <li className="txt-config">NeymaTeAmo123@gmail.com</li>
                </ul>
                <img className="size-15 ml-auto cursor-pointer" src={olho1} onClick={() => setClickOlho1(prev => !prev)} alt="Ícone do olho"/>
              </div>

              <hr className="hr-config" />

              <div className="flex items-end px-5 py-4">
                <ul>
                  <li className="info-config">Senha:</li>
                  <li className="txt-config">neymalindao123</li>
                </ul>
                <img className="size-15 ml-auto cursor-pointer" src={olho2} onClick={() => setClickOlho2(prev => !prev)} alt="Ícone do olho"/>
              </div>
            </div>

            {/* Área central / direita (antigo) */}
            <div className="mx-auto mt-0 align-text-top w-full ml-55">
              <h1 className="font-erica text-vinho-um text-8xl flex justify-center mb-10  dark:text-amarelo">Configurações</h1>

              <section className="flex items-center justify-center">
                <div className="w-[520px]">
                  <div className="mb-6">
                    <p className="p-config">Nome:</p>
                    <input type="text" placeholder="Editar Nome" className="input-config" />
                  </div>
                  <div className="mb-6">
                    <p className="p-config">E-mail:</p>
                    <input type="text" placeholder="Trocar E-mail" className="input-config" />
                  </div>
                  <div className="mb-6">
                    <p className="p-config">Senha:</p>
                    <input type="text" placeholder="Mudar a senha" className="input-config" />
                  </div>
                </div>
              </section>

              <div className="w-100 mx-auto mb-15 mt-8 flex flex-col items-center gap-4">
                <button className="bt-config1 w-80">Salvar</button>
                <button className="bt-config2 w-80">Excluir conta</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
