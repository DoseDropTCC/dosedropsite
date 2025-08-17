import doselogo from '../assets/doseDropLogo.png'
import iconelua from '../assets/iconeLua.png'
import iconelogin from '../assets/iconeLogIn.png'
import iconeconfig from '../assets/iconeConfig.png'
import iconeinfo from '../assets/iconeInfo.png'
export function HeaderSite () {
    return (
        <header className='flex justify-center items-center bg-vinho-um'>
                <img src={doselogo} alt=" Dose Drop logo" className='font-erica rounded-3xl h-22 ml-10 m-5 bg-vermelho'/>
                <h1 className='text-7xl text-amarelo text-center ms-auto me-auto'>DoseDrop</h1>
 
            <div className='p-5 mr-10'>
               <button>
                    <img src={iconelua} alt="Ícone da lua" className='h-20'/>
                </button>
                <button>
                    <img src={iconeinfo} alt="Ícone de mais informações" className='h-20'/>
                </button>
                <button>
                    <img src={iconelogin} alt="Ícone de login" className='h-20'/>
                </button>
                <button >
                    <img src={iconeconfig} alt="Ícone de configurações" className='h-20'/>
                </button>
            </div>
        </header>
    )
}