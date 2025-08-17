import { Link } from "react-router"
import mito from "../assets/mito.jpg"
import dispenser from "../assets/dispenser.png"

export function Home () {
    return (
        <main>
            <div className="flex justify-center items-center">
                <img src={mito} alt="bolsoMito" className="bg-black w-full h-50"/>
            </div>

            <div className="flex justify-center align-center p-8 text-vermelho bg-amarelo">
                <nav className="space-x-25 text-xl">
                    <button>
                        <Link to='/produtos'> Projeto </Link>
                    </button>
                    <button>
                        <Link to='/produtos'> Produto </Link>
                    </button>
                    <button>
                        <Link to='/sobrenos'> Sobre nós </Link>
                    </button>
                    <button>
                        <Link to='/jogo'> Jogo </Link>
                    </button>
                    <button>
                        <Link to='/referencias'> Referências </Link>
                    </button>
                    <button>
                        <Link to='/itens'> Itens </Link>
                    </button>
                </nav>
            </div>

            <div className="flex items-center bg-amarelo w-250 rounded-2xl text-vermelho text-3xl m-auto mt-10">
                <img src={dispenser} alt="dispenser" className="rounded-xl h-80 w-80" />
                <p className="p-8">Uma caixa de remédios automática, para regular remédios para idosos, com o objetivo de orientar a hora certa de usar seus remédios.
                Também haverá despertadores caso o idoso não compareça para pegar seu remédio.</p>
            </div>

            <div className="flex items-center bg-amarelo w-250 rounded-2xl text-vermelho text-3xl m-auto mt-10">
                <img src={dispenser} alt="dispenser" className="rounded-xl h-80 w-80" />
                <p className="p-8">Seu diferencial será uma agenda para anotar os remédios que ja foram disponibilizados no devido dia, com uma tela LCD para executar essa função.</p>
            </div>

            <h1 className="text-vermelho text-8xl flex justify-center mt-15 ratio ratio 16x9">Nosso App</h1>
            <div>
                <iframe src="https://youtu.be/MubkEwyxLAA?si=Aj2RT4eJQrJflYeH" title="YouTube video" allowFullScreen></iframe>
            </div>
        </main>
    )
}