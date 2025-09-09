import { Link } from "react-router"
import { Navegacao } from "../components/Navegacao"
import passoMotor from "../assets/pecasProjeto/passoMotor.png"
import esp from "../assets/pecasProjeto/esp.png"
import sensorToque from "../assets/pecasProjeto/sensorToque.png"
import buzzer from "../assets/pecasProjeto/buzzer.png"
import display from "../assets/pecasProjeto/display.png"
import filamento from "../assets/pecasProjeto/filamento.png"

export function Itens() {
    return(
        <main className="bg-amarelo-claro dark:bg-vinho-dois">
       <section className="">
            <Navegacao />
            <div className="flex items-center justify-center gap-20 mt-10">
             <h1 className="font-erica text-vermelho text-7xl dark:text-amarelo">Itens Cadastrados</h1>
              <button className="font-erica text-vinho-dois text-3xl rounded-2xl bg-amarelo w-60 h-20 cursor-pointer p-2">+ Novo item</button>
            </div>

            <div>
                <ul className="flex font-erica text-vermelho text-5xl  gap-40 mt-10  dark:text-amarelo">
                    <li className="pl-15 -mt-0 ">Foto</li>
                    <li className="pr-70 mt-0">Nome</li>
                    <li className="-mt-0">Preço</li>
                    <li className="mt-0">Ações</li>
                </ul>
                <hr className="border-amarelo border-6 dark:border-vermelho mt-5"/>
                <img src={passoMotor} alt="Imagem do Passo Motor" className='rounded-3xl size-40 ml-8  mt-3'/>
            </div>
            <div>
                <ul className="flex text-vermelho text-4xl  ml-auto gap-40 mt-10 dark:text-amarelo">
                    <li className="-mt-33 pl-55">Motor de Passo 28BYJ-48</li>
                    <li className="-mt-33 ml-38">R$: 67,90</li>
                </ul>
                <hr className="border-amarelo border-8 dark:border-vermelho -mt-6"/>
                <img src={esp} alt="Imagem esp32" className='rounded-3xl size-40 ml-8  mt-3'/>
            </div>
            <div>
                <ul className="flex text-vermelho text-4xl ml-auto gap-40 mt-10 dark:text-amarelo">
                    <li className="-mt-33 pl-55">Módulo WiFi ESP32s Bluetooth 38 pinos</li>
                    <li className="-mt-33 -ml-20">R$: 69,90</li>
                </ul>
                <hr className="border-amarelo border-8 dark:border-vermelho -mt-6"/>
                <img src={display} alt="Imagem do display" className="rounded-3xl size-40 ml-8  mt-3"/>
            </div>
            <div>
                <ul className="flex text-vermelho text-4xl ml-auto gap-40 mt-10 dark:text-amarelo">
                    <li className="-mt-33 pl-55">Módulo Display TFT Polegadas 240x 320</li>
                    <li className="-mt-33 -ml-20">R$: 74,60</li>
                </ul>
                <hr className="border-amarelo border-8 dark:border-vermelho -mt-6"/>
                <img src={buzzer} alt="Imagem buzzer" className="rounded-3xl size-40 ml-8  mt-3"/>
            </div>
            <div>
                <ul className="flex text-vermelho text-4xl ml-auto gap-40 mt-10 dark:text-amarelo">
                    <li className="-mt-33 pl-55">ZX Buzzer 5v Ativo</li>
                    <li className="-mt-33 ml-66">R$: 2,50</li>
                </ul>
                <hr className="border-amarelo border-8 dark:border-vermelho -mt-6"/>
                <img src={sensorToque} alt=" imagem Sensor de toque" className="rounded-3xl size-40 ml-8  mt-3"/>
            </div>
            <div>
                <ul className="flex text-vermelho text-4xl ml-auto gap-40 mt-10 dark:text-amarelo">
                    <li className="-mt-33 pl-55">Sensor de toque</li>
                    <li className="-mt-33 ml-75">R$: 13,40</li>
                </ul>
                <hr className="border-amarelo border-8 dark:border-vermelho -mt-6"/>
                <img src={filamento} alt="Imagem filamento" className='rounded-3xl size-40 ml-8 bg-white  mt-3'/>
            </div>
            <div>
            <ul className="flex text-vermelho text-4xl ml-auto gap-40 mt-10 dark:text-amarelo">
                    <li className="-mt-33 pl-55">Filamento Preto/multicolor</li>
                    <li className="-mt-33 ml-34">R$: 101,50</li>
                </ul>
                <hr className="border-amarelo border-10 dark:border-vermelho -mt-5 bg-amarelo-claro dark:bg-vinho-dois"/>
            </div>
        </section>
       </main>
    )
}