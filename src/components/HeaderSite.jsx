import doselogo from '../assets/iconesHeader/doseDropLogo.png'
import iconelua from '../assets/iconesHeader/iconeLua.png'
import iconelogin from '../assets/iconesHeader/iconeLogIn.png'
import iconeconfig from '../assets/iconesHeader/iconeConfig.png'
import iconeinfo from '../assets/iconesHeader/iconeInfo.png'
import menuA from "../assets/imagensMobile/menuMobileA.png"
import doselogom from "../assets/imagensMobile/DoseDropLogoM.png"
import { ThemeContext } from "../context/ThemeContext"
import { useContext } from "react"


export function HeaderSite () {

  const { theme, toggle } = useContext(ThemeContext)

  return (
    <header className="font-erica flex flex-wrap justify-between items-center bg-vinho-um min-h-20 md:min-h-28 w-full px-4">
      
      <nav className="flex items-center gap-4">
        
        <a href="/">
          <img 
            src={doselogo} 
            alt="Dose Drop Logo" 
            className="hidden md:flex h-16 md:h-20 rounded-xl md:ml-6 hover:scale-105 transition duration-150 cursor-pointer" 
          />
        </a>

        <a href="/">
          <h1 className="hidden md:flex text-amarelo md:text-5xl lg:text-6xl font-bold hover:text-amarelo-claro transition-colors duration-300 cursor-pointer">
            DoseDrop
          </h1>
        </a>
      </nav>

      <nav className="flex items-center gap-4">
        <div className="hidden md:flex gap-5">
          <button onClick={toggle}>
            <img src={iconelua} alt="Ícone Lua" className="h-13 w-14 md:h-15 md:w-15 cursor-pointer"/>
          </button>
          <a href="/tuto">
            <img src={iconeinfo} alt="Ícone de mais informações" className="h-13 w-14 md:h-15 md:w-15 cursor-pointer"/>
          </a>
          <a href="/login">
            <img src={iconelogin} alt="Ícone de login" className="h-13 w-14 md:h-15 md:w-15 cursor-pointer"/>
          </a>
          <a href="/configuracao">
            <img src={iconeconfig} alt="Ícone de configurações" className="h-13 w-14 md:h-15 md:w-15 cursor-pointer"/>
          </a>
        </div>

        <a href="/menu" className="block md:hidden">
          <img src={menuA} alt="menu mobile" className="h-10 w-10"/>
        </a>
      </nav>
    </header>
  )
}
