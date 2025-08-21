import doselogo from '../assets/iconesHeader/doseDropLogo.png'
import iconelua from '../assets/iconesHeader/iconeLua.png'
import iconelogin from '../assets/iconesHeader/iconeLogIn.png'
import iconeconfig from '../assets/iconesHeader/iconeConfig.png'
import iconeinfo from '../assets/iconesHeader/iconeInfo.png'
import { Link } from "react-router"

export function HeaderSite () {
    return (
        <header className='font-erica flex justify-center items-center bg-vinho-um'>
                <img src={doselogo} alt=" Dose Drop logo" className='font-erica rounded-3xl h-22 ml-10 m-5 bg-vermelho'/>
                <h1 className='text-7xl text-amarelo text-center ms-auto me-auto'>DoseDrop</h1>
 
            <div className='p-5 mr-10'>
               <button>
                    <img src={iconelua} alt="Ícone da lua" className='bt-header' />
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