import { Navegacao } from "../components/Navegacao"

export function Jogo() {
  return (
    <section className="bg-amarelo-claro dark:bg-vinho-dois min-h-screen w-full overflow-x-hidden">
          <div className="hidden md:block">
           <Navegacao />
          </div>

      {/* Título principal */}
      <h1 className="font-erica text-vinho-um text-4xl sm:text-6xl md:text-8xl lg:text-9xl flex justify-center mt-10 mb-10 dark:text-amarelo">
        Jogo
      </h1>

      {/* Container principal */}
      <div className="flex flex-col md:flex-row items-center md:items-start p-5 md:p-8">
        
        {/* --- Coluna esquerda (texto) ---  feito por grabriel silva de oliveira pinto*/}
        <div className="w-full md:w-1/2">
          <h2 className="flex justify-center text-center font-erica text-vinho-um text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 dark:text-amarelo">
            Medicine Attack
          </h2>

          <p className="bg-amarelo italic text-vermelho text-base sm:text-lg md:text-2xl m-4 p-5 leading-relaxed font-semibold shadow-lg rounded-2xl dark:text-amarelo dark:bg-vermelho">
            Medicine Attack é um jogo de plataforma baseado na franquia super mario bros e mega man, estilo plataforma pixel art.
          </p>

          <p className="bg-amarelo italic text-vermelho text-base sm:text-lg md:text-2xl m-4 p-5 leading-relaxed font-semibold shadow-lg rounded-2xl dark:text-amarelo dark:bg-vermelho">
            O objetivo se consiste em derrotar robos interdimencionais, assim chegando ao boss que é um guardiao dimencional que te enviara para o mundo do eternavirus eternamax, um virus mortal que assombra o mundo moderno.
          </p>
        </div>

        {/* --- Linha divisória --- */}
        <hr className="hidden md:block border-4 h-[500px] border-vinho-um rounded-full dark:border-amarelo mx-8" />
        <hr className="block md:hidden border-2 border-vinho-um rounded-full dark:border-amarelo my-6 w-1/2" />

        {/* --- Coluna direita (vídeo) --- */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h2 className="font-erica text-vinho-um text-3xl sm:text-5xl md:text-7xl lg:text-8xl mb-6 dark:text-amarelo">
            TRAILER
          </h2>

          <div className="w-full max-w-[740px] aspect-video rounded-3xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/DXqMe5Xuvyw?si=QQeEWLgTiniVERXP"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
