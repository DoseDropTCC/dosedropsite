import estrela from "../assets/iconeEstrela.png"
import insta from "../assets/redes/insta.png"
import wpp from "../assets/redes/wpp.png"
import gmail from "../assets/redes/gmail.png"

export function FooterSite() {
  return (
    <footer className="bg-vinho-um p-6 md:p-10 font-familjen">
      
      <div className="flex flex-col md:flex-row justify-center items-center text-center gap-3 mb-8">
        <p className="text-amarelo text-2xl md:text-3xl lg:text-4xl">
          Clique na estrela para avaliar-nos!
        </p>
        <img 
          src={estrela} 
          alt="Ícone de estrela" 
          className="w-10 h-10 md:w-12 md:h-12 cursor-pointer hover:scale-110 transition-transform"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 mb-8">
        <div className="flex items-center gap-2">
          <img src={insta} alt="Logo do Instagram" className="w-8 h-8"/>
          <p className="text-amarelo text-lg">@dose_drop</p>
        </div>

        <div className="flex items-center gap-2">
          <img src={wpp} alt="Logo do Whatsapp" className="w-8 h-8"/>
          <p className="text-amarelo text-lg">11 95821 - 7823</p>
        </div>

        <div className="flex items-center gap-2">
          <img src={gmail} alt="Logo do Gmail" className="w-8 h-8"/>
          <p className="text-amarelo text-lg">dosedroptcc@gmail.com</p>
        </div>
      </div>

      <p className="text-amarelo text-center text-sm md:text-base lg:text-lg">
        dose_drop - Todos os direitos reservados © 2024 - 2025
      </p>
    </footer>
  )
}
