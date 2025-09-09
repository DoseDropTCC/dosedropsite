import doselogo from '../assets/iconesHeader/doseDropLogo.png'
import iconelua from '../assets/iconesHeader/iconeLua.png'
import iconelogin from '../assets/iconesHeader/iconeLogIn.png'
import iconeconfig from '../assets/iconesHeader/iconeConfig.png'
import iconeinfo from '../assets/iconesHeader/iconeInfo.png'
import menuA from "../assets/imagensMobile/menuMobileA.png"
import menuV from "../assets/imagensMobile/menuMobileV.png"
import doselogom from "../assets/imagensMobile/DoseDropLogoM.png"
import { ThemeContext } from "../context/ThemeContext"
import {useContext} from "react"
import { Link } from "react-router"



export function HeaderSite () {

    const { theme, toggle } = useContext(ThemeContext)

    return (
        <header className='font-erica flex justify-between items-center bg-vinho-um h-35 w-220 md:w-full'>
                <nav className='flex items-center'>
                    <a href="/"> <img src={doselogom} alt="Dose Drop Logo Mobile" className='block md:hidden h-35 w-35' /> </a>
                    <a href="/"> <img src={doselogo} alt=" Dose Drop logo" className='hidden md:block font-erica md:rounded-3xl h-25 rounded-xl md:h-22 md:ml-10 m-5 hover:size-20 duration-150 ease-in cursor-pointer'/></a>
                    <a href="/"><h1 className='hover:text-amarelo-claro  transition-colors duration-350 text-7xl ml-20 md:ml-80 cursor-pointer text-amarelo' onClick={() => setOpen(!open)}>DoseDrop</h1>
                    </a>
                </nav>
                
            <nav className='flex p-5 mr-10'>
                <div className='hidden md:flex'>
                 <button className="bt-header" onClick={toggle}>{theme === "dark" ? "" : ""}
                     <img src= {iconelua} className='bt-header'/>
                 </button>
                 <button className="">
                     <a href="/tuto"><img src={iconeinfo} alt="Ícone de mais informações" className='bt-header'/></a>
                 </button>
                 <button className="">
                     <img src={iconelogin} alt="Ícone de login" className='bt-header'/>
                 </button>
                 <button className="">
                     <a href="/configuracao"><img src={iconeconfig} alt="Ícone de configurações" className='bt-header'/></a>
                 </button>
                </div>
                <button><a href="/"><img src={menuA} alt="menu mobile" className='h-25 w-25 block md:hidden'/></a></button>
            </nav>
        </header>
    )
}