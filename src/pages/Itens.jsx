import { Link } from "react-router" 
import { Navegacao } from "../components/Navegacao" 
import passoMotor from "../assets/pecasProjeto/passoMotor.png" 
import esp from "../assets/pecasProjeto/esp.png" 
import sensorToque from "../assets/pecasProjeto/sensorToque.png" 
import buzzer from "../assets/pecasProjeto/buzzer.png" 
import display from "../assets/pecasProjeto/display.png" 
import filamento from "../assets/pecasProjeto/filamento.png" 
import lapisA from "../assets/itens/LapisA.png" 
import lixeiraA from "../assets/itens/lixeiraA.png" 
import lapisV from "../assets/itens/LapisV.png" 
import lixeiraV from "../assets/itens/lixeiraV.png"  



export function Itens() {
  return(
    <main className="bg-amarelo-claro dark:bg-vinho-dois">
     <section>
        <Navegacao />
        <div className="flex items-center justify-center gap-20 mt-10">
          <h1 className="font-erica text-vermelho sm:text-2xl lg:text-7xl  dark:text-amarelo">Itens Cadastrados</h1>
          <button className="font-erica text-vinho-dois text-3xl rounded-2xl bg-amarelo w-60 h-20 cursor-pointer p-2">+ Novo item</button>
        </div>
     <div>
        <div >
          <ul className="flex font-erica text-center text-vermelho text-4xl gap-40 mt-10 dark:text-amarelo ">
            <li className="pl-20 -mt-0 ">Foto</li>
            <li className="pl- mt-0">Nome</li>
            <li className="pl-60 -mt-0">Preço</li>
            <li className="mt-0">Ações</li>
          </ul>
          <hr className="border-amarelo border-8 dark:border-vermelho mt-3" />
          <img
            src={passoMotor}
            alt="Imagem do Passo Motor"
            className="rounded-3xl size-40 ml-8 mt-3"
          />
        </div>
        <div>
          <img src={lapisA} alt="icone lápis amarelo" className="rounded-2xl size-30 ml-260 -mt-35 dark:hidden"/>
          <img src={lapisV} alt="icone lápis vermelho" className="rounded-2xl size-30 ml-260 -mt-35 hidden dark:block"/>
          <img src={lixeiraA} alt="icone lixeira amarela" className="rounded-2xl size-30 ml-290 -mt-30 dark:hidden"/>
          <img src={lixeiraV} alt="icone lixeira vermelha" className="rounded-2xl size-30 ml-290 -mt-30 hidden dark:block"/>
        </div>

        <div>
          <ul className="flex text-vermelho text-3xl  gap-40 mt-10 dark:text-amarelo">
            <li className="-mt-30 pl-65">Motor de Passo 28BYJ-48</li>
            <li className="-mt-30 ml-20">R$: 67,90</li>
          </ul>
          <hr className="border-amarelo border-8 dark:border-vermelho -mt-2" />
          <img
            src={esp}
            alt="Imagem esp32"
            className="rounded-3xl size-40 ml-8 mt-3"
          />
        </div>

        <div>
          <img src={lapisA} alt="icone lápis amarelo" className="rounded-2xl size-30 ml-260 -mt-35 dark:hidden"/>
          <img src={lapisV} alt="icone lápis vermelho" className="rounded-2xl size-30 ml-260 -mt-35 hidden dark:block"/>
          <img src={lixeiraA} alt="icone lixeira amarela" className="rounded-2xl size-30 ml-290 -mt-30 dark:hidden"/>
          <img src={lixeiraV} alt="icone lixeira vermelha" className="rounded-2xl size-30 ml-290 -mt-30 hidden dark:block"/>
        </div>

        <div>
          <ul className="flex text-vermelho text-3xl  gap-40 mt-10 dark:text-amarelo"> 
            <li className="-mt-30 pl-60">Módulo WiFi ESP32s Bluetooth 38 pinos</li> 
            <li className="-mt-30 -ml-23">R$: 69,90</li> 
          </ul>
          <hr className="border-amarelo border-8 dark:border-vermelho -mt-2"/>
          <img src={display} alt="Imagem do display" className="rounded-3xl size-40 ml-8 mt-3"/>
        </div>

        <div>
          <img src={lapisA} alt="icone lápis amarelo" className="rounded-2xl size-30 ml-260 -mt-35 dark:hidden"/>
          <img src={lapisV} alt="icone lápis vermelho" className="rounded-2xl size-30 ml-260 -mt-35 hidden dark:block"/>
          <img src={lixeiraA} alt="icone lixeira amarela" className="rounded-2xl size-30 ml-290 -mt-30 dark:hidden"/>
          <img src={lixeiraV} alt="icone lixeira vermelha" className="rounded-2xl size-30 ml-290 -mt-30 hidden dark:block"/>
        </div>

        <div> 
          <ul className="flex text-vermelho text-3xl ml-auto gap-40 mt-10 dark:text-amarelo"> 
            <li className="-mt-30 pl-60">Módulo Display TFT Polegadas 240x 320</li>
            <li className="-mt-30 -ml-23">R$: 74,60</li>
          </ul>
          <hr className="border-amarelo border-8 dark:border-vermelho -mt-2"/>
          <img src={buzzer} alt="Imagem buzzer" className="rounded-3xl size-40 ml-8 mt-3"/>
        </div>

        <div>
          <img src={lapisA} alt="icone lápis amarelo" className="rounded-2xl size-30 ml-260 -mt-35 dark:hidden"/>
          <img src={lapisV} alt="icone lápis vermelho" className="rounded-2xl size-30 ml-260 -mt-35 hidden dark:block"/>
          <img src={lixeiraA} alt="icone lixeira amarela" className="rounded-2xl size-30 ml-290 -mt-30 dark:hidden"/>
          <img src={lixeiraV} alt="icone lixeira vermelha" className="rounded-2xl size-30 ml-290 -mt-30 hidden dark:block"/>
        </div>

        <div> 
          <ul className="flex text-vermelho text-3xl ml-auto gap-40 mt-10 dark:text-amarelo">
            <li className="-mt-30 pl-60">ZX Buzzer 5v Ativo</li> 
            <li className="-mt-30 ml-50">R$: 2,50</li> 
          </ul> 
          <hr className="border-amarelo border-8 dark:border-vermelho -mt-2"/>
          <img src={sensorToque} alt=" imagem Sensor de toque" className="rounded-3xl size-40 ml-8 mt-3"/>
        </div>

        <div>
          <img src={lapisA} alt="icone lápis amarelo" className="rounded-2xl size-30 ml-260 -mt-35 dark:hidden"/>
          <img src={lapisV} alt="icone lápis vermelho" className="rounded-2xl size-30 ml-260 -mt-35 hidden dark:block"/>
          <img src={lixeiraA} alt="icone lixeira amarela" className="rounded-2xl size-30 ml-290 -mt-30 dark:hidden"/>
          <img src={lixeiraV} alt="icone lixeira vermelha" className="rounded-2xl size-30 ml-290 -mt-30 hidden dark:block"/>
        </div>

        <div> 
          <ul className="flex text-vermelho text-3xl ml-auto gap-40 mt-10 dark:text-amarelo"> 
            <li className="-mt-30 pl-60">Sensor de toque</li>
            <li className="-mt-30 ml-57">R$: 13,40</li> 
          </ul> 
          <hr className="border-amarelo border-8 dark:border-vermelho -mt-2"/>
          <img src={filamento} alt="Imagem filamento" className="rounded-3xl size-40 ml-8 bg-white mt-3"/>
        </div>

        <div>
          <img src={lapisA} alt="icone lápis amarelo" className="rounded-2xl size-30 ml-260 -mt-35 dark:hidden"/>
          <img src={lapisV} alt="icone lápis vermelho" className="rounded-2xl size-30 ml-260 -mt-35 hidden dark:block"/>
          <img src={lixeiraA} alt="icone lixeira amarela" className="rounded-2xl size-30 ml-290 -mt-30 dark:hidden"/>
          <img src={lixeiraV} alt="icone lixeira vermelha" className="rounded-2xl size-30 ml-290 -mt-30 hidden dark:block"/>
        </div>

        <div>
          <ul className="flex text-vermelho text-3xl ml-auto gap-40 mt-10 dark:text-amarelo">
            <li className="-mt-30 pl-60">Filamento Preto/multicolor</li>
            <li className="-mt-30 ml-23">R$: 101,50</li>
          </ul>
          <hr className="border-amarelo border-10 dark:border-vermelho -mt-2 bg-amarelo-claro dark:bg-vinho-dois"/>
        </div>
        </div>
      </section>
    </main>
  )
}
