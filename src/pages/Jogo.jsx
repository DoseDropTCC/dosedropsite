import { Navegacao } from "../components/Navegacao"

export function Jogo() {
  return (
    <section className="bg-amarelo-claro dark:bg-vinho-dois min-h-screen">
      {/* Navegação */}
      <Navegacao />

      {/* Título principal */}
      <h1 className="font-erica text-vinho-um text-3xl sm:text-5xl md:text-7xl lg:text-9xl flex justify-center mt-10 mb-6 dark:text-amarelo">
        Jogo
      </h1>

      <div className="flex flex-col md:flex-row p-4 md:p-6">
        {/* Texto */}
        <div className="w-full md:w-1/2">
          <div>
            <h2 className="flex justify-center items-center mx-2 md:mx-6 font-erica text-center text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-vinho-um dark:text-amarelo">
              Elderies VS Medicines
            </h2>

            <p className="bg-amarelo italic text-vermelho text-base sm:text-lg md:text-xl lg:text-2xl m-4 p-5 leading-relaxed font-semibold shadow-lg rounded-2xl dark:text-amarelo dark:bg-vermelho">
              Elderies VS Medicine será o nosso jogo, no estilo tower defense
              inspirado no Plants VS Zombies, jogo que popularizou os tower
              defenses.
            </p>

            <p className="bg-amarelo italic text-vermelho text-base sm:text-lg md:text-xl lg:text-2xl m-4 p-5 leading-relaxed font-semibold shadow-lg rounded-2xl dark:text-amarelo dark:bg-vermelho">
              O objetivo será defender sua base dos idosos, com medicamentos que
              possuem mecânicas únicas com o objetivo principal de curar idosos.
            </p>
          </div>
        </div>

        {/* Linha divisória */}
        <hr className="hidden md:block border-4 border-vinho-um rounded-full dark:border-amarelo mx-6" />
        <hr className="block md:hidden border-2 border-vinho-um rounded-full dark:border-amarelo my-6" />

        {/* Trailer */}
        <div className="w-full md:w-1/2">
          <h2 className="font-erica text-vinho-um text-2xl sm:text-4xl md:text-6xl lg:text-8xl flex justify-center mb-6 dark:text-amarelo">
            TRAILER
          </h2>
          <div className="flex justify-center">
            <div className="w-full md:w-11/12 lg:w-3/4 aspect-video rounded-3xl overflow-hidden shadow-lg">
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
      </div>
    </section>
  )
}
