import { Link } from "react-router"
import { Navegacao } from "../components/Navegacao"
import remedioRef from "../assets/remedioRef.png"

export function Referencias() {
    return(
        <main className="bg-amarelo-claro dark:bg-vinho-dois">
            <Navegacao />
            <section className="flex">
            <div className="w-1/2 mt-15">
                <h1 className="font-erica text-vinho-um text-7xl flex justify-center mt-15 mb-10 dark:text-amarelo" >REFERÊNCIAS</h1>
                <nav className="refs">
                    <ul className="refs">
                        <li className="refs-h1">REFERÊNCIA #1</li>
                        <li className="refs-p">TITULO DO ARTIGO REF 1</li>
                    </ul>
                    <ul className="refs">
                        <li className="refs-h1">REFERÊNCIA #2</li>
                        <li className="refs-p">TITULO DO ARTIGO REF 2</li>
                    </ul>
                    <ul className="refs-h1">
                        <li>REFERÊNCIA #3</li>
                    </ul>
                    <ul className="refs-h1">
                        <li>REFERÊNCIA #4</li>
                    </ul>
                </nav>
            </div>
            <div className="w-1/2 mt-15">
                <img className="h-200 w-full" src={remedioRef} alt="Cartela de Remédios" />
            </div>
            </section>

        </main>
    )
}