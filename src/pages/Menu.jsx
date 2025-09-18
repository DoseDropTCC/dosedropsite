import { Link } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext" 
import iconelua from "../assets/iconesHeader/iconeLua.png"
import iconeinfo from "../assets/iconesHeader/iconeInfo.png"
import iconeconfig from "../assets/iconesHeader/iconeConfig.png"
import iconelogin from "../assets/iconesHeader/iconeLogIn.png"

export function Menu() {
  const { theme, toggle } = useContext(ThemeContext)  

  return (
    <main className={`min-h-screen font-erica flex flex-col 
      ${theme === "dark" ? "bg-vinho-dois text-amarelo" : "bg-amarelo-claro text-vinho-um"}`}>

      <div className={`flex justify-around py-4 
        ${theme === "dark" ? "bg-vinho-um" : "bg-amarelo-claro"}`}>
        
        <button onClick={toggle}>
          <img src={iconelua} alt="Trocar tema" className="size-18 cursor-pointer" />
        </button>

        <Link to="/tuto"><img src={iconeinfo} alt="info" className="size-18"/></Link>
        <Link to="/configuracao"><img src={iconeconfig} alt="config" className="size-18"/></Link>
        <Link to="/login"><img src={iconelogin} alt="login" className="size-18"/></Link>
      </div>

      <nav className="flex flex-col text-center mt-4 text-2xl">
        <Link to="/" className="py-4 border-b-4">Home</Link>
        <Link to="/produto" className="py-4 border-b-4">Produto</Link>
        <Link to="/jogo" className="py-4 border-b-4">Jogo</Link>
        <Link to="/referencias" className="py-4 border-b-4">Referências</Link>
        <Link to="/itens" className="py-4 border-b-4">Itens</Link>
      </nav>

      <footer className="mt-auto text-center p-4">
        <p>Alguma sugestão? contate-nos!</p>
      </footer>
    </main>
  )
}
