import { Routes, Route } from "react-router"
import { Home } from "../pages/Home"
import { Projeto } from "../pages/Projeto"
import { SobreNos } from "../pages/SobreNos"
import { Jogo } from "../pages/Jogo"
import { Referencias } from "../pages/Referencias"
import { Itens } from "../pages/Itens"

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" index element={<Home />}/>
            <Route path="/projeto" element={<Projeto />}/>
            <Route path="/sobrenos" element={<SobreNos />}/>
            <Route path="/jogo" element={<Jogo />}/>
            <Route path="/referencias" element={<Referencias />}/>
            <Route path="/itens" element={<Itens />}/>
        </Routes>
    )
}