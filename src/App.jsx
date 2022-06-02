import { HashRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import "./App.css";
import UserLogin from "./components/UserLogin";
import Pokedex from "./components/Pokedex";
import PokemonInfo from "./components/PokemonInfo";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Config from "./components/Config";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    const userName = useSelector((state) => state.userName);

    return (
        <HashRouter>
            <div className="App">
                {userName && <Header />}
                <Routes>
                    <Route path="/" element={<UserLogin />} />
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/pokedex" element={<Pokedex />} />
                        <Route path="/pokedex/:id" element={<PokemonInfo />} />
                        <Route path="/config" element={<Config />} />
                    </Route>
                </Routes>
                {!userName && <Footer />}
            </div>
        </HashRouter>
    );
}

export default App;
