import { Link } from "react-router"
import mito from "../assets/mito.jpg"
import dispenser from "../assets/dispenser.png"
import kawan from "../assets/criadores/kawanfoto.jpg"
import renato from "../assets/criadores/renataofoto.jpg"
import gustavo from "../assets/criadores/gustavofoto.jpg"
import gabriel from "../assets/criadores/gabrielfoto.jpg"
import { FooterSite } from "../components/FooterSite"


export function Home () {
    return (
        <main className="bg-amarelo-claro">
            <div className="flex justify-center items-center">
                <img src={mito} alt="bolsoMito" className="bg-black w-full h-50"/>
            </div>

            <div className="font-familjen flex justify-center align-center p-6 text-vermelho bg-amarelo font-bold">
                <nav className="space-x-25 text-xl ">
                    <button >
                      <Link to='/projeto' className="txt-links"> Projeto </Link>
                    </button>
                    <button>
                        <Link to='/produto' className="txt-links"> Produto </Link>
                    </button>
                    <button>
                        <Link to='/jogo' className="txt-links"> Jogo </Link>
                    </button>
                    <button>
                        <Link to='/referencias' className="txt-links"> Referências </Link>
                    </button>
                    <button>
                        <Link to='/itens' className="txt-links"> Itens </Link>
                    </button>
                </nav>
            </div>

            <div className="cartao-ft">
                <img src={dispenser} alt="dispenser" className="rounded-xl h-80 w-80" />
                <p className="p-8">Uma caixa de remédios automática, para regular remédios para idosos, com o objetivo de orientar a hora certa de usar seus remédios.
                Também haverá despertadores caso o idoso não compareça para pegar seu remédio.</p>
            </div>

            <div className="cartao-ft">
                <img src={dispenser} alt="dispenser" className="rounded-xl h-80 w-80" />
                <p className="p-8">Seu diferencial será uma agenda para anotar os remédios que ja foram disponibilizados no devido dia, com uma tela LCD para executar essa função.</p>
            </div>

            <h1 className="font-erica text-vermelho text-8xl flex justify-center mt-15">Nosso App</h1>
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

            <nav className="mt-10 flex justify-center text-xl">
                <a href="https://youtu.be/eSRgRVx9ZjQ?si=fhzOWhVypZA9-qXp" className="underline text-vermelho bg-amarelo p-5 font-familjen">CLIQUE AQUI PARA ACESSAR O NOSSO APP</a>
            </nav>

            <div>
              <h1 className="font-erica text-vermelho text-8xl flex justify-center mt-15">Sobre Nós</h1>

              <div className="p-20 flex justify-between ">
                <div>
                  <img className="fotos-padrao" src={kawan} alt="Imagem Kawan"/>
                  <p className="txt-sobrenos">Kawan</p>
                </div>

                <div>
                  <img className="fotos-padrao" src={renato} alt="Imagem Renato"/>
                  <p className="txt-sobrenos">Renato</p>
                </div>
                
                <div>
                    <img className="fotos-padrao" src={gustavo} alt="Imagem Gustavo"/>
                    <p className="txt-sobrenos">Gustavo</p>
                </div>

                <div>
                  <img className="fotos-padrao" src={gabriel} alt="Imagem Gabriel" />
                  <p className="txt-sobrenos">Gabriel</p>
                </div>
            </div>
           </div>
           <FooterSite />
        </main>
    )
}