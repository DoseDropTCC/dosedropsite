import { Link } from "react-router"
import passoMotor from "../assets/pecasProjeto/passoMotor.png"
import esp from "../assets/pecasProjeto/esp.png"
import sensorToque from "../assets/pecasProjeto/sensorToque.png"
import buzzer from "../assets/pecasProjeto/buzzer.png"
import display from "../assets/pecasProjeto/display.png"
import filamento from "../assets/pecasProjeto/filamento.png"
import resultado from "../assets/pecasProjeto/resultado.png"
import { Navegacao } from "../components/Navegacao"

export function Produto() {
    return(
        
        <main className="bg-amarelo-claro">
            <Navegacao />
            <h1 className="font-erica text-vinho-um text-8xl flex justify-center mt-15 mb-10">Produto</h1>

            <section className="flex">
                <div className="mt-5 w-1/2">
                    <h2 className=" flex font-erica justify-center text-vinho-um text-3xl">Componentes:</h2>
                    <div className="cartao-produto">
                        <ul className="cartao-produto-ul">
                            <li>Servo Motor MG996R 180° </li>
                            <li>Tower Pro</li>
                            <li>Valor: R$ 67,90</li>
                        </ul>
                        <img src={passoMotor} alt="Imagem do Passo Motor" className='rounded-4xl size-40'/>
                    </div>

                    <div className="cartao-produto">
                        <ul className="cartao-produto-ul">
                            <li>Módulo WiFi ESP32s </li>
                            <li>Bluetooth 38 pinos</li>
                            <li>Valor: R$ 69,90</li>
                        </ul>
                        <img src={esp} alt="Imagem do Esp 32" className='rounded-full size-40'/>
                    </div>

                    <div className="cartao-produto">
                        <ul className="cartao-produto-ul">
                            <li>Módulo WiFi ESP32s </li>
                            <li>Bluetooth 38 pinos</li>
                            <li>Valor: R$ 69,90</li>
                        </ul>
                        <img src={sensorToque} alt="Imagem do Esp 32" className='rounded-full size-40'/>
                    </div>

                    <div className="cartao-produto">
                        <ul className="cartao-produto-ul">
                            <li>Módulo WiFi ESP32s </li>
                            <li>Bluetooth 38 pinos</li>
                            <li>Valor: R$ 69,90</li>
                        </ul>
                        <img src={buzzer} alt="Imagem do Esp 32" className='rounded-full size-40'/>
                    </div>

                    <div className="cartao-produto">
                        <ul className="cartao-produto-ul">
                            <li>Módulo WiFi ESP32s </li>
                            <li>Bluetooth 38 pinos</li>
                            <li>Valor: R$ 69,90</li>
                        </ul>
                        <img src={display} alt="Imagem do Esp 32" className='rounded-full size-40'/>
                    </div>

                    <div className="cartao-produto">
                        <ul className="cartao-produto-ul">
                            <li>Módulo WiFi ESP32s </li>
                            <li>Bluetooth 38 pinos</li>
                            <li>Valor: R$ 69,90</li>
                        </ul>
                        <img src={filamento} alt="Imagem do Esp 32" className='rounded-full size-40'/>
                    </div>
                </div>
                <div>
                    <h2 className="flex justify-center font-erica  text-vinho-um text-3xl">Apresentação:</h2>
                    <div className="flex justify-center">
                        <iframe className="rounded-3xl mt-5"
                        width="600" 
                        height="345" 
                        src="https://www.youtube.com/embed/DXqMe5Xuvyw?si=QQeEWLgTiniVERXP" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; 
                        autoplay; 
                        clipboard-write; 
                        encrypted-media; 
                        gyroscope; 
                        picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen
                    >
                        </iframe>
                    </div>
                    <h2 className=" flex justify-center font-familjen text-vinho-um text-3xl mt-5">O projeto final custou R$305,76</h2>
                    <hr className="border-5 border-vinho-dois m-5" />
                    <h2 className=" flex justify-center font-erica  text-vinho-um text-3xl mt-5">Resultado final:</h2>
                    <img className="w-180 rounded-3xl mt-10" src={resultado} alt="Imagem do produto final" />
                </div>

            </section>
        </main>
    )
}