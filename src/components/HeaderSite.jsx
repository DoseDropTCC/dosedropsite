import doselogo from '../assets/doseDropLogo.png'
import iconelua from '../assets/iconeLua.png'
import iconelogin from '../assets/iconeLogIn.png'
import iconeconfig from '../assets/iconeConfig.png'

export function HeaderSite () {
    return (
        <header>
                <img src={doselogo} alt="Dose Drop logo" />
                <h1>DoseDrop</h1>

            <div>
               <button className='icon-hover'>
                        <img src={iconelua} alt="Ícone da lua" />
                </button>
                <button>
                    <img src={iconelogin} alt="Ícone de login" />
                </button>
                <button >
                    <img src={iconeconfig} alt="Ícone de configurações" />
                </button>
            </div>
        </header>
    )
}