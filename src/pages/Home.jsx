import React, {useContext, useState} from "react" 
import { Link } from "react-router"
import mito from "../assets/mito.jpg"
import mito2 from "../assets/mito2.jpg"
import mito3 from "../assets/mito3.jpg"
import mito4 from "../assets/mito4.jpg"
import setaD from "../assets/setaDireita.png"
import setaE from "../assets/setaEsquerda.png"
import dispenser from "../assets/dispenser.png"
import kawan from "../assets/criadores/kawanfoto.jpg"
import renato from "../assets/criadores/renataofoto.jpg"
import gustavo from "../assets/criadores/gustavofoto.jpg"
import gabriel from "../assets/criadores/gabrielfoto.jpg"
import { FooterSite } from "../components/FooterSite"
import kawanL from "../assets/fotosLinkedin/kawanLinkedin.png"
import renatoL from "../assets/fotosLinkedin/renatoLinkedin.png"
import gustavoL from "../assets/fotosLinkedin/gustavoLinkedin.png"
import gabrielL from "../assets/fotosLinkedin/gabrielLinkedin.png"
import Popup from 'reactjs-popup'


export function Home () {
    const [mouseKawan, setMouseKawan] = useState(false);
    const [mouseRenato, setMouseRenato] = useState(false);
    const [mouseGustavo, setMouseGustavo] = useState(false);
    const [mouseGabriel, setMouseGabriel] = useState(false);

    const handleMouseDentroKawan = () => { setMouseKawan(true); };
    const handleMouseForaKawan = () => { setMouseKawan(false); };
    const handleMouseDentroRenato = () => { setMouseRenato(true); };
    const handleMouseForaRenato = () => { setMouseRenato(false); };
    const handleMouseDentroGustavo = () => { setMouseGustavo(true); };
    const handleMouseForaGustavo = () => { setMouseGustavo(false); };
    const handleMouseDentroGabriel = () => { setMouseGabriel(true); };
    const handleMouseForaGabriel = () => { setMouseGabriel(false); };

    const kawanfoto = mouseKawan ? kawanL : kawan;
    const renatofoto = mouseRenato ? renatoL : renato;
    const gustavofoto = mouseGustavo ? gustavoL : gustavo;
    const gabrielfoto = mouseGabriel ? gabrielL : gabriel;

    const mitos = [mito, mito2, mito3, mito4];
    const [indiceAtual, setIndiceAtual] = useState(0);

    const proximoMito = () => {
      setIndiceAtual((prev) => (prev + 1) % mitos.length);
    };

    const anteriorMito = () => {
      setIndiceAtual((prev) => (prev - 1 + mitos.length) % mitos.length);
    };
    

    return (
        <main className="bg-amarelo-claro dark:bg-vinho-dois w-130 md:w-full ">
            
            <div className="relative flex justify-center items-center ">
                <button onClick={anteriorMito} className="absolute left-5 z-10">
                    <img src={setaE} alt="Anterior" className="w-20 h-20 shadow-2xl"/>
                </button>

                <div className="w-full h-50 flex justify-center items-center">
                    <img 
                        key={indiceAtual} 
                        src={mitos[indiceAtual]} 
                        alt={`Mito ${indiceAtual+1}`} 
                        className="bg-black w-full h-50 opacity-0 animate-fadeIn"
                    />
                </div>

                <button onClick={proximoMito} className="absolute right-5 z-10">
                    <img src={setaD} alt="Próximo" className="w-20 h-20 shadow-xl"/>
                </button>
            </div>

            <div className=" hidden md:font-familjen md:flex justify-center md:align-center md:p-6 md:text-vermelho md:bg-amarelo md:font-bold md:dark:bg-vinho-um md:dark:text-amarelo">
                <nav className="space-x-25 text-xl ">
                    <button >
                      <a href="#projeto" className="txt-links">Projeto</a>
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
                <img src={dispenser} alt="dispenser" className="ft-dispenser" />
                <p className="p-8 ">Uma caixa de remédios automática, para regular remédios para idosos, com o objetivo de orientar a hora certa de usar seus remédios.
                Também haverá despertadores caso o idoso não compareça para pegar seu remédio.</p>
            </div>

            <div className="cartao-ft">
                <img src={dispenser} alt="dispenser" className="ft-dispenser" />
                <p className="p-8">Seu diferencial será uma agenda para anotar os remédios que ja foram disponibilizados no devido dia, com uma tela LCD para executar essa função.</p>
            </div>

            <div id="projeto">
            <h1 className="font-erica text-vermelho text-8xl flex justify-center mt-15 dark:text-amarelo">Nosso App</h1>
            </div>
            <div className="flex justify-center">
            <iframe className="rounded-3xl mt-5"
                width="600" 
                height="345" 
                src="https://www.youtube.com/embed/DXqMe5Xuvyw?si=QQeEWLgTiniVERXP" 
                title="YouTube video player" 
                allow="accelerometer; 
                autoplay; 
                clipboard-write; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            >
            </iframe>

            </div>
            <nav className="mt-10 flex justify-center text-xl">
                <a href="https://youtu.be/eSRgRVx9ZjQ?si=fhzOWhVypZA9-qXp" className="ease-in-out duration-300 underline text-vermelho bg-amarelo p-5 font-familjen dark:bg-vermelho dark:text-amarelo hover:bg-vinho-um hover:text-amarelo shadow-2xl">CLIQUE AQUI PARA ACESSAR O NOSSO APP</a>
            </nav>

            <div>
              <h1 className="font-erica text-vermelho text-8xl flex justify-center mt-15 dark:text-amarelo">Sobre Nós</h1>

              <div className="p-20 md:flex md:justify-between ">
                <div>
                  <a href="https://www.linkedin.com/in/kawan-ribeiro-9013b9338" 
                   target="_blank" rel="noopener noreferrer" 
                   className="flex flex-col items-center"
                  > 
                  <img className="fotos-padrao transition-all duration-300" src={kawanfoto} onMouseEnter={handleMouseDentroKawan} onMouseLeave={handleMouseForaKawan} alt="Imagem Kawan"/>
                  <p className="txt-sobrenos">Kawan</p>
                  </a>
                </div>

                <div>
                   <a href="https://www.linkedin.com/in/renato-fideliz-787b24338" 
                   target="_blank" rel="noopener noreferrer" 
                   className="flex flex-col items-center"
                   > 
                  <img className="fotos-padrao" src={renatofoto} onMouseEnter={handleMouseDentroRenato} onMouseLeave={handleMouseForaRenato} alt="Imagem Renato"/>
                  <p className="txt-sobrenos">Renato</p>
                   </a>
                </div>
                
                <div>
                    <a href="https://www.linkedin.com/in/gustavo-miranda-de-aguiar-485102339" 
                     target="_blank" rel="noopener noreferrer" 
                     className="flex flex-col items-center"
                    > 
                    <img className="fotos-padrao" src={gustavofoto} onMouseEnter={handleMouseDentroGustavo} onMouseLeave={handleMouseForaGustavo} alt="Imagem Gustavo"/>
                    <p className="txt-sobrenos">Gustavo</p>
                    </a>
                </div>

                <div>
                  <a href="https://www.linkedin.com/in/gabriel-silva-oliveira-ab90bb339" 
                  target="_blank" rel="noopener noreferrer" 
                  className="flex flex-col items-center"
                 >
                  <img className="fotos-padrao" src={gabrielfoto} onMouseEnter={handleMouseDentroGabriel} onMouseLeave={handleMouseForaGabriel} alt="Imagem Gabriel" />
                  <p className="txt-sobrenos">Gabriel</p>
                  </a>
                </div>
            </div>
           </div>
           <FooterSite />
        </main>
    )
}
