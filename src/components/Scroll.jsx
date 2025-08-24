import { Link } from "react-router"
import { useRef } from "react";

export function Scroll () {
    const Projeto = useRef(null)

    const scrollToProjeto= (e) => {
        e.preventDefault();
        Projeto.current?.scrollIntoView({ behavior: "smooth" });
    
    return(
       <div>
            <nav>
                <link rel="/projeto" href="txt-links" />
            </nav>
       </div>

    )
    }
}