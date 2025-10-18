import { Navegacao } from "../components/Navegacao"
import remedioRef from "../assets/remedioRef.png"

export function Referencias() {
    return (
        <main className="bg-amarelo-claro w-full overflow-x-hidden dark:bg-vinho-dois md:dark:bg-vinho-dois">

          <div className="hidden md:block">
           <Navegacao />
          </div>

            {/* MOBILE: layout atual */}
            <section className="flex flex-col md:hidden items-center px-4 py-10">
                <h1 className="font-erica text-vinho-um text-3xl sm:text-5xl text-center mb-10 dark:text-amarelo">
                    REFERÊNCIAS
                </h1>

                <nav className="space-y-6">
                <ul className="refs">
                   <li className="refs-h1 font-bold text-vinho-um dark:text-amarelo">
                     <a href="https://estudosemdesign.emnuvens.com.br/design/article/view/377">
                       REFERÊNCIA #1
                       </a>
                   </li>
                      <li className="refs-p text-vinho-um dark:text-amarelo">
                      Dificuldades e estratégias no uso de múltiplos medicamentos por idosos no contexto do design da informação
                   </li>
                </ul>

                <ul className="refs">
                  <li className="refs-h1 font-bold text-vinho-um dark:text-amarelo">
                   <a href="https://share.google/i1JId4xkypC8p1g4J">REFERÊNCIA #2</a>
                   </li>
                   <li className="refs-p text-vinho-um dark:text-amarelo">
                   PERDAS DE MEDICAMENTOS OCORRIDAS NA FARMÁCIA DE UM HOSPITAL UNIVERSITÁRIO: IDENTIFICAÇÃO DAS CAUSAS
                   </li>
                </ul>

                <ul className="refs">
                 <li className="refs-h1 font-bold text-vinho-um dark:text-amarelo">
                  <a href="https://sustenere.inf.br/index.php/naturalresources/article/view/CBPC2237-9290.2021.001.0010">
                     REFERÊNCIA #3
                  </a>
                 </li>
                 <li className="refs-p text-vinho-um dark:text-amarelo">
                  Resíduos farmacêuticos: riscos ambientais do descarte inadequado de medicamentos
                 </li>
                </ul>

                <ul className="refs">
                 <li className="refs-h1 font-bold text-vinho-um dark:text-amarelo">
                   <a href="https://share.google/waUiEQazBxLhdvRja">REFERÊNCIA #4</a>
                 </li>
                  <li className="refs-p text-vinho-um dark:text-amarelo">
                   FACILIDADES E DIFICULDADES NA ASSISTÊNCIA AO IDOSO NA ESTRATÉGIA DE SAÚDE DA FAMÍLIA
                  </li>
                </ul>

                </nav>

                <img
                    className="w-full h-auto object-cover rounded-lg mt-10"
                    src={remedioRef}
                    alt="Cartela de Remédios"
                />
            </section>

            {/* DESKTOP: layout antigo */}
            <section className="hidden md:flex justify-between items-start px-20 py-16">
                <div className="w-1/2">
                    <h1 className="font-erica text-vinho-um text-7xl flex justify-center mb-10 dark:text-amarelo">
                        REFERÊNCIAS
                    </h1>
                    <nav>
                        <ul className="refs">
                            <li className="refs-h1">
                                <a href="https://estudosemdesign.emnuvens.com.br/design/article/view/377">
                                    REFERÊNCIA #1
                                </a>
                            </li>
                            <li className="refs-p">
                                Dificuldades e estratégias no uso de múltiplos medicamentos
                                por idosos no contexto do design da informação
                            </li>
                        </ul>

                        <ul className="refs">
                            <li className="refs-h1">
                                <a href="https://share.google/i1JId4xkypC8p1g4J">REFERÊNCIA #2</a>
                            </li>
                            <li className="refs-p">
                                PERDAS DE MEDICAMENTOS OCORRIDAS NA FARMÁCIA DE UM
                                HOSPITAL UNIVERSITÁRIO: IDENTIFICAÇÃO DAS CAUSAS
                            </li>
                        </ul>

                        <ul className="refs">
                            <li className="refs-h1">
                                <a href="https://sustenere.inf.br/index.php/naturalresources/article/view/CBPC2237-9290.2021.001.0010">
                                    REFERÊNCIA #3
                                </a>
                            </li>
                            <li className="refs-p">
                                Resíduos farmacêuticos: riscos ambientais do descarte inadequado
                                de medicamentos
                            </li>
                        </ul>

                        <ul className="refs">
                            <li className="refs-h1">
                                <a href="https://share.google/waUiEQazBxLhdvRja">REFERÊNCIA #4</a>
                            </li>
                            <li className="refs-p">
                                FACILIDADES E DIFICULDADES NA ASSISTÊNCIA AO IDOSO NA ESTRATÉGIA DE
                                SAÚDE DA FAMÍLIA
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="w-1/2 flex justify-center items-center">
                    <img
                        className="h-[550px] w-[110%] mb:ml-10 object-cover rounded-xl shadow-lg"
                        src={remedioRef}
                        alt="Cartela de Remédios"
                    />
                </div>
            </section>
        </main>
    )
}
