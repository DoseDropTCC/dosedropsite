import { Link } from "react-router"
import { Navegacao } from "../components/Navegacao"

export function Itens() {
    return(
       <section className="dark:bg-vinho-dois">
         <div>
            <Navegacao />
            <h1 className="font-familjen flex justify-center align-center p-6 text-amarelo bg-vermelho font-bold">Itens Cadastrados</h1>
        </div>
       </section>
    )
}