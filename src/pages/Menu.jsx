import { Link } from "react-router-dom"
import iconelua from "../assets/iconesHeader/iconeLua.png"
import iconeinfo from "../assets/iconesHeader/iconeInfo.png"
import iconeconfig from "../assets/iconesHeader/iconeConfig.png"
import iconelogin from "../assets/iconesHeader/iconeLogIn.png"

export function Menu() {
  return (
    <main className="bg-amarelo-claro min-h-screen font-erica flex flex-col">
      {/* Topo com fechar e logo */}
      <header className="flex justify-between items-center bg-vinho-um p-4">
        <Link to="/" className="text-amarelo text-3xl font-bold">X</Link>
        <img src="/logo192.png" alt="logo" className="h-10 w-10" /> {/* coloca sua logo aqui */}
      </header>

      {/* Ícones principais */}
      <div className="flex justify-around bg-amarelo-claro py-4">
        <button><img src={iconelua} alt="tema" className="h-12 w-12"/></button>
        <Link to="/tuto"><img src={iconeinfo} alt="info" className="h-12 w-12"/></Link>
        <Link to="/configuracao"><img src={iconeconfig} alt="config" className="h-12 w-12"/></Link>
        <Link to="/login"><img src={iconelogin} alt="login" className="h-12 w-12"/></Link>
      </div>

      {/* Links do menu */}
      <nav className="flex flex-col text-center mt-4 text-2xl text-vinho-um">
        <Link to="/projeto" className="py-4 border-b-4 border-vinho-um">Projeto</Link>
        <Link to="/produto" className="py-4 border-b-4 border-vinho-um">Produto</Link>
        <Link to="/sobre" className="py-4 border-b-4 border-vinho-um">Sobre nós</Link>
        <Link to="/jogo" className="py-4 border-b-4 border-vinho-um">Jogo</Link>
        <Link to="/referencias" className="py-4 border-b-4 border-vinho-um">Referências</Link>
        <Link to="/itens" className="py-4 border-b-4 border-vinho-um">Itens</Link>
      </nav>

      {/* Rodapé */}
      <footer className="mt-auto text-center p-4 text-vinho-um">
        <p>Alguma sugestão? contate-nos!</p>
      </footer>
    </main>
  )
}
