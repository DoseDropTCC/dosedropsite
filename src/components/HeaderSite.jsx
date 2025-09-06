import doselogo from '../assets/iconesHeader/doseDropLogo.png'
import iconelua from '../assets/iconesHeader/iconeLua.png'
import iconelogin from '../assets/iconesHeader/iconeLogIn.png'
import iconeconfig from '../assets/iconesHeader/iconeConfig.png'
import iconeinfo from '../assets/iconesHeader/iconeInfo.png'
import { ThemeContext } from "../context/ThemeContext"
import {useContext} from "react"
import { Link } from "react-router"



export function HeaderSite () {

    const { theme, toggle } = useContext(ThemeContext)

    return (
        
        <header className='font-erica flex justify-center items-center bg-vinho-um'>
                <nav className='flex items-center'>
                    <a href="/"> <img src={doselogo} alt=" Dose Drop logo" className='font-erica rounded-3xl h-22 ml-10 m-5 bg-vermelho hover:h-20 duration-150 ease-in cursor-pointer'/></a>
                    <a href="/"><h1 className='hover:text-amarelo-claro transition-colors duration-350 text-7xl cursor-pointer text-amarelo text-center ms-auto me-auto'>DoseDrop</h1>
                    </a>    
                </nav>
                
            <nav className='flex p-5 mr-10'>
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
            </nav>
        </header>
    )
}