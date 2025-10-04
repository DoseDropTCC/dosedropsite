import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Scroll } from "./Scroll.jsx"

export function Navegacao (){
    
    return(
        <div>
            <div className="hidden md:flex font-familjen justify-center align-center p-6 text-vermelho dark:text-amarelo">
                <nav className="space-x-25 text-xl ">
                    <button >
                      <Link to='/' className="txt-links"> Projeto </Link>
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
        </div>
    )
}