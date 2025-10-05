import { Link } from "react-router"
import { Navegacao } from "../components/Navegacao"
import neyma from "../assets/configuracao/perfil.jpg"
import olhoAbertoClaro from "../assets/configuracao/olhoAberto.png"
import olhoFechadoClaro from "../assets/configuracao/olhoFechado.png"
import olhoAbertoEscuro from "../assets/configuracao/olhoAberto2.png"
import olhoFechadoEscuro from "../assets/configuracao/olhoFechado2.png"
import { useState } from "react"

export function Configuracao() {
    const [clickOlho1, setClickOlho1] = useState(false);
    const [clickOlho2, setClickOlho2] = useState(false);

    const handleClickOlho1On = () => {
        setClickOlho1((prev) => !prev);
    };

    const handleClickOlho2On = () => {
        setClickOlho2((prev) => !prev);
    };
    
    const olho1 = clickOlho1 ? olhoFechadoClaro : olhoAbertoClaro;
    const olho2 = clickOlho2 ? olhoFechadoClaro : olhoAbertoClaro;

   return (
    <section className="bg-amarelo-claro dark:bg-vinho-dois">
    <Navegacao />
        <div className="">
            <div  className="flex h-full">
                <div className="bg-vinho-um italic h-auto w-100 dark:bg-vinho-um">
                    
                    <div className="flex p-5 w-40">
                        <img src={neyma} alt="neyma" className="rounded-3xl size-25 mt-5 border-2 border-white flex items-center hover:size-22 ease-in-out duration-300"/>
                        <ul className="m-auto">
                            <li className="info-config">Nome:</li>
                            <li className="txt-config">NEYMA</li>
                        </ul>
                    </div> 
                    <hr className="hr-config"/>
                    <div className="flex">
                        <ul>
                            <li className="info-config">Email:</li>
                            <li className="txt-config">NeymaTeAmo123@gmail.com</li>
                        </ul>
                        <img className="size-15 mr-auto" src={olho1} onClick={handleClickOlho1On} alt="Ícone do olho"/>
                    </div>
                    <hr className="hr-config"/>     
                    <div className="flex items-end">
                        <ul>
                            <li className="info-config">Senha:</li>
                            <li className="txt-config">neymalindao123</li>
                        </ul>
                        <img className="size-15 mr-auto" src={olho2} onClick={handleClickOlho2On} alt="Ícone do olho"/>
                    </div>      
                </div>

                <div className="mx-auto mt-0 align-text-top">
                  <h1 className="font-erica text-vinho-um text-8xl flex justify-center mb-10 dark:text-amarelo">Configurações</h1>
                  <section className="flex items-center justify-center"> 
                    <div className="">
                        <div>
                            <p className="p-config">Nome:</p>
                            <input type="text" placeholder="Editar Nome" className="input-config"/>
                        </div>
                        <div>
                            <p className="p-config">E-mail:</p>
                            <input type="text" placeholder="Trocar E-mail" className="input-config"/>
                        </div>
                        <div>
                            <p className="p-config">Senha:</p>
                            <input type="text" placeholder="Mudar a senha" className="input-config"/>
                        </div>
                    </div>
                  </section>
                  <div className="w-100 mx-auto mb-15">
                    <button className="bt-config1">Salvar</button>
                    <button className="bt-config2">Excluir conta</button>
                  </div>
                </div>
             </div>
        </div>
  </section>
)
}