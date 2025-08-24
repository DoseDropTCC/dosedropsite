import estrela from "../assets/iconeEstrela.png"
import insta from "../assets/redes/insta.png"
import wpp from "../assets/redes/wpp.png"
import gmail from "../assets/redes/gmail.png"

export function FooterSite() {
    return (
        <div className=" bg-vinho-um p-5 grid font-familjen ">
            <div className="flex justify-center p-5 gap-2">
                <p className=" mt-5 text-amarelo text-4xl">Clique na estrela para avaliar-nos!</p>
                <img c src={estrela} alt="Ícone de estrela" className="mt-4 inline-block align-middle w-10"/>
            </div>

            <div className="flex justify-center gap-15">
                <div className="footer-contatos">
                    <img src={insta} alt="Logo do Instagram" className="bt-header "/>
                    <p className="footer-contatos-txt">@dose_drop</p>
                </div>

                <div className="footer-contatos">
                    <img src={wpp} alt="Logo do Whatsapp" className="bt-header"/>
                    <p className="footer-contatos-txt"> 11 95821 - 7823</p>
                </div>

                <div className="footer-contatos">
                    <img src={gmail} alt="Logo do Gmail" className="bt-header"/>
                    <p className="footer-contatos-txt">dosedroptcc@gmail.com</p>
                </div>
            </div>

            <p className="text-amarelo flex justify-center mt-12 text-2xl">dose_drop - Todos os direitos reservados © 2024 - 2025</p>
        </div>
    )
}