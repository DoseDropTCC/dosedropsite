import remedioRef from "../assets/remedioRef.png"

export function Referencias() {
    return(
        <main className="bg-amarelo-claro dark:bg-vinho-dois min-h-screen w-full">
            
            <section className="flex flex-col md:flex-row items-center md:items-start px-4 md:px-12 py-10 max-w-5xl mx-auto">
                
                {/* Coluna de textos */}
                <div className="w-full md:w-1/2">
                    <h1 className="font-erica text-vinho-um text-3xl sm:text-5xl md:text-7xl text-center mb-10 dark:text-amarelo">
                        REFERÊNCIAS
                    </h1>

                    <nav className="space-y-6">
                        <ul className="refs">
                            <li className="refs-h1 font-bold">
                                <a href="https://estudosemdesign.emnuvens.com.br/design/article/view/377">REFERÊNCIA #1</a>
                            </li>
                            <li className="refs-p text-sm sm:text-base">
                                Dificuldades e estratégias no uso de múltiplos medicamentos por idosos no contexto do design da informação
                            </li>
                        </ul>

                        <ul className="refs">
                            <li className="refs-h1 font-bold">
                                <a href="https://share.google/i1JId4xkypC8p1g4J">REFERÊNCIA #2</a>
                            </li>
                            <li className="refs-p text-sm sm:text-base">
                                PERDAS DE MEDICAMENTOS OCORRIDAS NA FARMÁCIA DE UM HOSPITAL UNIVERSITÁRIO: IDENTIFICAÇÃO DAS CAUSAS
                            </li>
                        </ul>

                        <ul className="refs">
                            <li className="refs-h1 font-bold">
                                <a href="https://sustenere.inf.br/index.php/naturalresources/article/view/CBPC2237-9290.2021.001.0010">REFERÊNCIA #3</a>
                            </li>
                            <li className="refs-p text-sm sm:text-base">
                                Resíduos farmacêuticos: riscos ambientais do descarte inadequado de medicamentos
                            </li>
                        </ul>

                        <ul className="refs">
                            <li className="refs-h1 font-bold">
                                <a href="https://share.google/waUiEQazBxLhdvRja">REFERÊNCIA #4</a>
                            </li>
                            <li className="refs-p text-sm sm:text-base">
                                FACILIDADES E DIFICULDADES NA ASSISTÊNCIA AO IDOSO NA ESTRATÉGIA DE SAÚDE DA FAMÍLIA
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Coluna da imagem */}
                <div className="hidden md:block w-1/2 mt-8">
                    <img 
                        className="h-200 w-full object-contain" 
                        src={remedioRef} 
                        alt="Cartela de Remédios" 
                    />
                </div>
            </section>
        </main>
    )
}
