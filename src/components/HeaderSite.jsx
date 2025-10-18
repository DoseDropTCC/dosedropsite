import doselogo from '../assets/iconesHeader/doseDropLogo.png'
import iconelua from '../assets/iconesHeader/iconeLua.png'
import iconelogin from '../assets/iconesHeader/iconeLogIn.png'
import iconeconfig from '../assets/iconesHeader/iconeConfig.png'
import iconeinfo from '../assets/iconesHeader/iconeInfo.png'
import menuA from "../assets/imagensMobile/menuMobileA.png"
import iconemobile from "../assets/iconesHeader/iconemobile.png"
import { ThemeContext } from "../context/ThemeContext"
import { useContext } from "react"

export function HeaderSite() {

  const { theme, toggle } = useContext(ThemeContext)

  return (
    <header className="font-erica flex justify-between items-center bg-vinho-um min-h-20 md:min-h-28 w-full px-4">
      
      {/* Esquerda — logo desktop / ícone mobile */}
      <nav className="flex items-center gap-4">
        {/* Ícone mobile (só aparece em telas pequenas) */}
        <a href="/" className="block md:hidden">
          <img
           src={iconemobile}
           alt="Ícone mobile"
           className="h-25 w-25 object-contain  hover:scale-110 transition-transform duration-150 cursor-pointer"
          />
        </a>

        {/* Logo + nome (apenas desktop) */}
        <a href="/" className="hidden md:flex items-center gap-3">
          <img
            src={doselogo}
            alt="Dose Drop Logo"
            className="h-16 md:h-20 ml-10 rounded-xl hover:scale-105 transition duration-150 cursor-pointer"
          />
          <h1 className="text-amarelo md:text-5xl ml-5 lg:text-6xl font-bold hover:text-amarelo-claro transition-colors duration-300 cursor-pointer ">
            DoseDrop
          </h1>
        </a>
      </nav>

      {/* Direita — ícones */}
      <nav className="flex items-center gap-4">
        {/* Ícones desktop */}
        <div className="hidden md:flex gap-5">
          <button onClick={toggle}>
            <img src={iconelua} alt="Ícone Lua" className=" md:size-20 cursor-pointer" />
          </button>
          <a href="/tuto">
            <img src={iconeinfo} alt="Ícone de mais informações" className="md:size-20 cursor-pointer" />
          </a>
          <a href="/login">
            <img src={iconelogin} alt="Ícone de login" className="md:size-20 cursor-pointer" />
          </a>
          <a href="/configuracao">
            <img src={iconeconfig} alt="Ícone de configurações" className="md:size-20 cursor-pointer" />
          </a>
        </div>

        {/* Menu mobile */}
        <a href="/menu" className="block md:hidden">
          <img src={menuA} alt="menu mobile" className="h-15 w-15" />
        </a>
      </nav>
    </header>
  )
}
