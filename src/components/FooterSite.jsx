import estrela from "../assets/iconeEstrela.png";
import insta from "../assets/redes/insta.png";
import wpp from "../assets/redes/wpp.png";
import gmail from "../assets/redes/gmail.png";

export function FooterSite() {
  return (
    <footer className="bg-vinho-um text-amarelo font-familjen w-full text-center">

      {/* ===== DESKTOP ===== */}
      <div className="hidden md:block py-8 px-10">
        {/* Linha topo */}
        <div className="flex justify-center items-center gap-3 mb-6">
          <p className="text-3xl font-medium">
            Clique na estrela para avaliar-nos!
          </p>
          <img
            src={estrela}
            alt="Ícone de estrela"
            className="w-8 h-8 md:w-10 md:h-10"
          />
        </div>

        {/* Contatos */}
        <div className="flex justify-center items-center gap-20 mb-8">
          {/* Instagram */}
          <div className="flex flex-col items-center">
            <img
              src={insta}
              alt="Logo do Instagram"
              className="w-10 h-10 mb-2"
            />
            <p className="text-xl">@dose_drop</p>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center">
            <img
              src={wpp}
              alt="Logo do WhatsApp"
              className="w-10 h-10 mb-2"
            />
            <p className="text-xl">11 95821 - 7823</p>
          </div>

          {/* Gmail */}
          <div className="flex flex-col items-center">
            <img
              src={gmail}
              alt="Logo do Gmail"
              className="w-10 h-10 mb-2"
            />
            <p className="text-xl">dosedroptcc@gmail.com</p>
          </div>
        </div>

        {/* Rodapé */}
        <p className="text-2xl text-center">
          dose_drop - todos os direitos reservados 2024 - 2025
        </p>
      </div>

      {/* ===== MOBILE ===== */}
      <div className="flex flex-col items-center gap-6 p-8 md:hidden">
        {/* Título */}
        <p className="text-2xl font-medium underline decoration-amarelo mb-2">
          Alguma sugestão? contate-nos!
        </p>

        {/* Contatos */}
        <div className="flex flex-col">
          {/* Instagram */}
          <div className="flex gap-3 ">
            <p className="text-xl -ml-10">@dose_drop</p>
            <img src={insta} alt="Instagram" className="w-10 h-10 ml-25.5" />
          </div>

          {/* WhatsApp */}
          <div className="flex">
            <p className="text-xl -ml-10">11 95821 - 7823</p>
            <img src={wpp} alt="WhatsApp" className="w-10 h-10 ml-20" />
          </div>

          {/* Gmail */}
          <div className="flex">
            <p className="text-xl -ml-10">dosedroptcc@gmail.com</p>
            <img src={gmail} alt="Gmail" className="w-10 h-10 ml-3" />
          </div>
        </div>

        {/* Rodapé inferior */}
        <p className="text-lg mt-4 text-center">
          © dose_drop - todos os direitos reservados<br />
          2024 - 2025
        </p>
      </div>
    </footer>
  );
}
