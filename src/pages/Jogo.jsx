import { Link } from "react-router"

import { Navegacao } from "../components/Navegacao"

export function Jogo() {

    return(
        <section className="bg-amarelo-claro dark:bg-vinho-dois">
            <Navegacao />
            <h1 className="font-erica text-vinho-um text-9xl flex justify-center mt-15 mb-10 dark:text-amarelo">Jogo</h1>
                <div className="flex p-5">
                <div  className="w-1/2">
                    <div>
                        <h2 className="flex justify-center items-center mx-10 font-erica  text-vinho-um text-6xl dark:text-amarelo">Elderies VS Medicines</h2>

                        <p className="p-jogo">Elderies VS Medicine será o nosso jogo, no estilo tower defense inspirado no Plants VS Zombies, jogo que popularizou os tower defenses.</p>
                        <p className="p-jogo">O objetivo sera defender sua base dos idosos, com medicamentos que possuem mecânicas únicas com o objetivo principal de curar idosos.</p>
                    </div>
                </div>
                <hr className="border-5 h-150 border-vinho-um rounded-full dark:border-amarelo mx-8" />

                <div  className="w-1/2">
                    <h2 className="font-erica text-vinho-um text-8xl flex justify-center mb-10 dark:text-amarelo">TRAILER</h2>
                    <div className="flex justify-center">
                        <iframe className="rounded-4xl mt-5"
                            width="740" 
                            height="485" 
                            src="https://www.youtube.com/embed/DXqMe5Xuvyw?si=QQeEWLgTiniVERXP" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; 
                            autoplay; 
                            clipboard-write; 
                            encrypted-media; 
                            gyroscope; 
                            picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen
                        >
                            </iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}