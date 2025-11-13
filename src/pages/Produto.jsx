import { Navegacao } from "../components/Navegacao"

import passoMotor from "../assets/pecasProjeto/passoMotor.png"
import esp from "../assets/pecasProjeto/esp.png"
import buzzer from "../assets/pecasProjeto/buzzer.png"
import filamento from "../assets/pecasProjeto/filamento.png"
import resultado from "../assets/pecasProjeto/resultado.png"
import rtc from "../assets/pecasProjeto/rtc.jpg"
import led from "../assets/pecasProjeto/led.png"
import lcd from "../assets/pecasProjeto/lcd.png"
import img4 from "../assets/fotosProjeto/img4.png"


export function Produto() {
  return (
    <main className="bg-amarelo-claro dark:bg-vinho-dois w-full overflow-x-hidden min-h-screen">
      {/* Navegação — escondida no mobile */}
      <div className="hidden md:block">
        <Navegacao />
      </div>

      {/* Título */}
      <h1 className="font-erica text-vinho-um text-4xl sm:text-5xl md:text-7xl lg:text-8xl flex justify-center mt-10 mb-10 dark:text-amarelo">
        Produto
      </h1>

      {/* Container principal */}
      <section className="flex flex-col md:flex-row gap-10 px-4 md:px-10 lg:px-20">
        {/* --- Coluna Esquerda: Componentes --- */}
        <div className="w-full md:w-1/2 mt-5">
          <h2 className="flex justify-center font-erica text-vinho-um text-2xl sm:text-3xl md:text-4xl dark:text-amarelo">
            Componentes:
          </h2>

          {/* Cada item do produto */}
          <div className="cartao-produto">
            <img src={passoMotor} alt="Passo Motor" className="ft-cartao-produto rounded-3xl" />
            <ul className="cartao-produto-ul rounded-2xl">
              <li>Servo Motor MG996R 180°</li>
              <li>Tower Pro</li>
              <li>Valor: R$ 67,90</li>
            </ul>
          </div>

          <div className="cartao-produto">
            <img src={esp} alt="ESP 32" className="ft-cartao-produto rounded-3xl" />
            <ul className="cartao-produto-ul rounded-2xl">
              <li>Módulo WiFi ESP32s</li>
              <li>Bluetooth 38 pinos</li>
              <li>Valor: R$ 69,90</li>
            </ul>
          </div>

          <div className="cartao-produto">
            <img src={led} alt="Sensor de Toque" className="ft-cartao-produto rounded-3xl" />
            <ul className="cartao-produto-ul rounded-2xl">
              <li>LED Vermelho Difuso</li>
              <li>3mm</li>
              <li>Valor: R$ 1,00</li>
            </ul>
          </div>

          <div className="cartao-produto">
            <img src={buzzer} alt="Buzzer" className="ft-cartao-produto rounded-3xl" />
            <ul className="cartao-produto-ul rounded-2xl">
              <li>Buzzer Passivo 5v</li>
              <li>3,5 - 5V</li>
              <li>Valor: R$ 2,50</li>
            </ul>
          </div>

          <div className="cartao-produto">
            <img src={lcd} alt="Display LCD" className="ft-cartao-produto rounded-3xl" />
            <ul className="cartao-produto-ul rounded-2xl">
              <li>Display LCD I2C</li>
              <li>16x2</li>
              <li>Valor: R$ 29,90</li>
            </ul>
          </div>

          {/* Filamento — mantém rounded e bg branco no desktop */}
          <div className="cartao-produto">
            <img
              src={filamento}
              alt="Filamento PLA Fibra de Carbono"
              className="ft-cartao-produto rounded-3xl bg-white md:bg-white md:rounded-2xl"
            />
            <ul className="cartao-produto-ul rounded-2xl">
              <li>Filamento PLA Fibra de Carbono</li>
              <li>1,75mm 1Kg</li>
              <li>Valor: R$ 177,69</li>
            </ul>
          </div>
          <div className="cartao-produto">
            <img src={rtc} alt="Passo Motor" className="ft-cartao-produto rounded-3xl" />
            <ul className="cartao-produto-ul rounded-2xl">
              <li></li>
              <li>Módulo Tiny RTC DS1307
              <li>Real Time Clock</li>
              </li>
              <li>Valor: R$ 8,90</li>
            </ul>
          </div>
        </div>

        {/* --- Coluna Direita: Apresentação / Resultado --- */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h2 className="font-erica text-vinho-um text-2xl sm:text-3xl md:text-4xl dark:text-amarelo">
            Apresentação:
          </h2>

          <div className="flex justify-center mt-5 w-full">
            <iframe
              className="rounded-3xl w-full max-w-xl aspect-video"
              src="https://www.youtube.com/embed/kMD0yxVX6mI?autoplay=0&start=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <h2 className="flex justify-center font-familjen text-vinho-um text-lg sm:text-xl md:text-2xl mt-5 dark:text-amarelo">
            O projeto final custou R$305,76
          </h2>

          <hr className="border-2 rounded-full border-vermelho m-5 dark:border-amarelo w-3/4" />

          <h2 className="flex justify-center font-erica text-vinho-um text-2xl sm:text-3xl mt-5 dark:text-amarelo">
            Resultado final:
          </h2>
         <div>
          <img
            className="w-full max-w-xl mx-auto rounded-3xl mt-10 mb-24"
            src={img4}
            alt="Imagem do produto final"
          />
          </div>
        </div>
      </section>
    </main>
  )
}
