import { Link } from "react-router"
import { Navegacao } from "../components/Navegacao"
import remedioRef from "../assets/remedioRef.png"

export function Referencias() {
    return(
        <main className="bg-amarelo-claro dark:bg-vinho-dois min-w-220 h-full">
            <Navegacao />
            <section className="flex">
            <div className="mb:w-1/2 mb:mt-15">
                <h1 className="font-erica text-vinho-um text-7xl flex justify-center text-center mt-15 mb-10 dark:text-amarelo" >REFERÊNCIAS</h1>
                <nav className="refs">
                    <ul className="refs">
                        <li className="refs-h1"><a href="https://estudosemdesign.emnuvens.com.br/design/article/view/377">REFERÊNCIA #1</a></li>
                        <li className="refs-p">Dificuldades e estratégias no uso de múltiplos medicamentos
por idosos no contexto do design da informação
</li>
                    </ul>
                    <ul className="refs">
                        <li className="refs-h1"><a href="https://share.google/i1JId4xkypC8p1g4J">REFERÊNCIA #2</a></li>
                        <li className="refs-p">PERDAS DE MEDICAMENTOS OCORRIDAS NA FARMÁCIA DE UM
HOSPITAL UNIVERSITÁRIO: IDENTIFICAÇÃO DAS CAUSAS 
</li>
                    </ul>
                    <ul className="refs">
                        <li className="refs-h1"><a href="https://sustenere.inf.br/index.php/naturalresources/article/view/CBPC2237-9290.2021.001.0010">REFERÊNCIA #3</a></li>
                        <li className="refs-p">Resíduos farmacêuticos: riscos ambientais do descarte inadequado
                        de medicamentos</li>
                    </ul>
                    <ul className="refs">
                        <li className="refs-h1"><a href="https://share.google/waUiEQazBxLhdvRja">REFERÊNCIA #4</a></li>
                        <li className="refs-p">FACILIDADES E DIFICULDADES NA ASSISTÊNCIA AO IDOSO NA ESTRATÉGIA DE
                        SAÚDE DA FAMÍLIA</li>
                    </ul>
                </nav>
            </div>
            <div className="w-1/2 mt-15">
                <img className="hidden md:block h-200 w-full" src={remedioRef} alt="Cartela de Remédios" />
            </div>
            </section>

        </main>
    )
}