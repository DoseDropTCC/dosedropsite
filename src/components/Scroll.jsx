import { Link } from "react-router"
import { useRef } from "react";

export function Scroll() {
  const projetoRef = useRef(null);

  const scrollToProjeto = (e) => {
    e.preventDefault();
    projetoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
      <div>
        <nav className="">
         <Link to='/projeto' className="txt-links"> Projeto </Link>
          href="#projeto"
          onClick={scrollToProjeto}
      </nav>
    </div>
  )
}