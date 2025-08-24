import { Link } from "react-router"

export function Navegacao (){
    return(
        <div>
            <div className="font-familjen flex justify-center align-center p-6 text-vermelho dark:text-amarelo">
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
        </div>
    )
}