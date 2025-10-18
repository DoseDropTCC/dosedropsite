import estrela from "../assets/iconeEstrela.png";
import insta from "../assets/redes/insta.png";
import wpp from "../assets/redes/wpp.png";
import gmail from "../assets/redes/gmail.png";

export function FooterSite() {
return ( <footer className="bg-vinho-um p-10 md:p-14 font-familjen">

  <div className="flex flex-col md:flex-row justify-center items-center text-center gap-4 mb-10">
    <p className="text-amarelo text-4xl md:text-6xl font-bold">
      Clique na estrela para avaliar-nos!
    </p>
    <img 
      src={estrela} 
      alt="Ícone de estrela" 
      className="w-14 h-14 md:w-20 md:h-20 cursor-pointer hover:scale-110 transition-transform"
    />
  </div>

  <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 mb-10">
    <div className="flex items-center gap-4">
      <img src={insta} alt="Logo do Instagram" className="w-10 h-10 md:w-14 md:h-14" />
      <p className="text-amarelo text-2xl md:text-3xl">@dose_drop</p>
    </div>

    <div className="flex items-center gap-4">
      <img src={wpp} alt="Logo do Whatsapp" className="w-10 h-10 md:w-14 md:h-14" />
      <p className="text-amarelo text-2xl md:text-3xl">11 95821 - 7823</p>
    </div>

    <div className="flex items-center gap-4">
      <img src={gmail} alt="Logo do Gmail" className="w-10 h-10 md:w-14 md:h-14" />
      <p className="text-amarelo text-2xl md:text-3xl">dosedroptcc@gmail.com</p>
    </div>
  </div>

  <p className="text-amarelo text-center text-xl md:text-2xl font-medium">
    dose_drop - Todos os direitos reservados © 2024 - 2025
  </p>
</footer>


);
}
