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
        <main className="bg-amarelo-claro dark:bg-vinho-dois min-h-screen p-4 sm:p-6 md:p-10">
       <section>
            <Navegacao />

            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-10 text-center md:text-left">
             <h1 className="font-erica text-vermelho text-3xl sm:text-5xl md:text-7xl dark:text-amarelo">
               Itens Cadastrados
             </h1>
              <button className="font-erica text-vinho-dois text-lg sm:text-2xl md:text-3xl rounded-2xl bg-amarelo w-40 sm:w-52 md:w-60 h-12 sm:h-16 md:h-20 cursor-pointer p-2">
                + Novo item
              </button>
            </div>

            <div className="overflow-x-auto mt-10">
                <ul className="grid grid-cols-4 text-center font-erica text-vermelho text-base sm:text-2xl md:text-4xl dark:text-amarelo">
                    <li>Foto</li>
                    <li>Nome</li>
                    <li>Preço</li>
                    <li>Ações</li>
                </ul>
                <hr className="border-amarelo border-2 sm:border-4 md:border-6 dark:border-vermelho mt-4"/>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4 mt-6 text-center sm:text-left">
              <img src={passoMotor} alt="Imagem do Passo Motor" className='rounded-3xl w-24 sm:w-32 md:w-40 mx-auto sm:mx-0'/>
              <p className="font-erica text-lg sm:text-2xl md:text-4xl text-vermelho dark:text-amarelo">Motor de Passo 28BYJ-48</p>
              <p className="text-lg sm:text-2xl md:text-3xl text-vermelho dark:text-amarelo">R$: 67,90</p>
              <p className="text-lg sm:text-xl md:text-2xl text-vermelho dark:text-amarelo">...</p>
            </div>
            <hr className="border-amarelo border-2 sm:border-4 md:border-8 dark:border-vermelho mt-4"/>

            <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4 mt-6 text-center sm:text-left">
              <img src={esp} alt="Imagem esp32" className='rounded-3xl w-24 sm:w-32 md:w-40 mx-auto sm:mx-0'/>
              <p className="font-erica text-lg sm:text-2xl md:text-4xl text-vermelho dark:text-amarelo">Módulo WiFi ESP32s Bluetooth 38 pinos</p>
              <p className="text-lg sm:text-2xl md:text-3xl text-vermelho dark:text-amarelo">R$: 69,90</p>
              <p className="text-lg sm:text-xl md:text-2xl text-vermelho dark:text-amarelo">...</p>
            </div>
            <hr className="border-amarelo border-2 sm:border-4 md:border-8 dark:border-vermelho mt-4"/>

            <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4 mt-6 text-center sm:text-left">
              <img src={display} alt="Imagem display" className='rounded-3xl w-24 sm:w-32 md:w-40 mx-auto sm:mx-0'/>
              <p className="font-erica text-lg sm:text-2xl md:text-4xl text-vermelho dark:text-amarelo">Módulo Display TFT 240x320</p>
              <p className="text-lg sm:text-2xl md:text-3xl text-vermelho dark:text-amarelo">R$: 74,60</p>
              <p className="text-lg sm:text-xl md:text-2xl text-vermelho dark:text-amarelo">...</p>
            </div>
            <hr className="border-amarelo border-2 sm:border-4 md:border-8 dark:border-vermelho mt-4"/>

            <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4 mt-6 text-center sm:text-left">
              <img src={buzzer} alt="Imagem buzzer" className='rounded-3xl w-24 sm:w-32 md:w-40 mx-auto sm:mx-0'/>
              <p className="font-erica text-lg sm:text-2xl md:text-4xl text-vermelho dark:text-amarelo">ZX Buzzer 5v Ativo</p>
              <p className="text-lg sm:text-2xl md:text-3xl text-vermelho dark:text-amarelo">R$: 2,50</p>
              <p className="text-lg sm:text-xl md:text-2xl text-vermelho dark:text-amarelo">...</p>
            </div>
            <hr className="border-amarelo border-2 sm:border-4 md:border-8 dark:border-vermelho mt-4"/>

            <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4 mt-6 text-center sm:text-left">
              <img src={sensorToque} alt="Imagem Sensor de toque" className='rounded-3xl w-24 sm:w-32 md:w-40 mx-auto sm:mx-0'/>
              <p className="font-erica text-lg sm:text-2xl md:text-4xl text-vermelho dark:text-amarelo">Sensor de Toque</p>
              <p className="text-lg sm:text-2xl md:text-3xl text-vermelho dark:text-amarelo">R$: 13,40</p>
              <p className="text-lg sm:text-xl md:text-2xl text-vermelho dark:text-amarelo">...</p>
            </div>
            <hr className="border-amarelo border-2 sm:border-4 md:border-8 dark:border-vermelho mt-4"/>

            <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-4 mt-6 text-center sm:text-left">
              <img src={filamento} alt="Imagem filamento" className='rounded-3xl w-24 sm:w-32 md:w-40 bg-white mx-auto sm:mx-0'/>
              <p className="font-erica text-lg sm:text-2xl md:text-4xl text-vermelho dark:text-amarelo">Filamento Preto/Multicolor</p>
              <p className="text-lg sm:text-2xl md:text-3xl text-vermelho dark:text-amarelo">R$: 101,50</p>
              <p className="text-lg sm:text-xl md:text-2xl text-vermelho dark:text-amarelo">...</p>
            </div>
            <hr className="border-amarelo border-2 sm:border-6 md:border-10 dark:border-vermelho mt-4"/>
        </section>
       </main>
    )
}
