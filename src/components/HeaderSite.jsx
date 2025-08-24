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
                <img src={doselogo} alt=" Dose Drop logo" className='font-erica rounded-3xl h-22 ml-10 m-5 bg-vermelho hover:h-20 hover:rounded-2xl duration-150 ease-in cursor-pointer'/>
                <h1 className='hover:text-amarelo-claro transition-colors duration-200 text-7xl cursor-pointer text-amarelo text-center ms-auto me-auto'>DoseDrop</h1>
 
            <div className='p-5 mr-10'>
               <button className="" onClick={toggle}>{theme === "dark" ? "" : ""}
                    <img src={iconelua} alt="Ícone da lua" className='bt-header'/>
                </button>
                <button>
                    <img src={iconeinfo} alt="Ícone de mais informações" className='bt-header'/>
                </button>
                <button>
                    <img src={iconelogin} alt="Ícone de login" className='bt-header'/>
                </button>
                <button >
                    <img src={iconeconfig} alt="Ícone de configurações" className='bt-header'/>
                </button>
            </div>
        </header>
    )
}