import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import { Home } from "../pages/Home"
import { Produto } from "../pages/Produto"
import { Jogo } from "../pages/Jogo"
import { Referencias } from "../pages/Referencias"
import { Itens } from "../pages/Itens"
import { Tuto } from "../pages/Tuto"
import { HeaderSite } from "../components/HeaderSite"
import { Configuracao } from "../pages/Configuracao"
import { Menu }  from "../pages/Menu"


export function AppRoutes() {
    return(
        <Routes>
            <Route path="/headersite" element={<HeaderSite/>}/>
            <Route path="/" index element={<Home />}/>
            <Route path="/produto" element={<Produto />}/>
            <Route path="/jogo" element={<Jogo />}/>
            <Route path="/referencias" element={<Referencias />}/>
            <Route path="/itens" element={<Itens />}/>
            <Route path="/tuto" element={<Tuto />}/>
            <Route path="/configuracao" element={<Configuracao />}/>
            <Route path="/menu" element={<Menu />}/>
        </Routes>
    )
}