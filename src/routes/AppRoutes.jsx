import { Routes, Route } from "react-router"
import { Home } from "../pages/Home"
import { Produto } from "../pages/Produto"
import { Jogo } from "../pages/Jogo"
import { Referencias } from "../pages/Referencias"
import { Itens } from "../pages/Itens"
import { Tuto } from "../pages/Tuto"

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" index element={<Home />}/>
            <Route path="/produto" element={<Produto />}/>
            <Route path="/jogo" element={<Jogo />}/>
            <Route path="/referencias" element={<Referencias />}/>
            <Route path="/itens" element={<Itens />}/>
            <Route path="/tuto" element={<Tuto />}/>
        </Routes>
    )
}