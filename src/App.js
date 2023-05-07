import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Components/Home';
import CadastroUsuario from './Components/CadastroUsuario';
import Login from './Components/Login';
import Header from './Components/Partials/Header';
import Footer from './Components/Partials/Footer';
import EsqueceuSenha from "./Components/EsqueceuSenha";
import Trilha from "./Components/Trilha";
import ConteudoTrilha from "./Components/ConteudoTrilha";
import PaginaNaoEncontrada from "./Components/PaginaNaoEncontrada";

export default function App() {

    return (
        <div className="container">
            <BrowserRouter>

                <Header/>

                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/cadastre-se" element={<CadastroUsuario/>}/>
                    <Route exact path="/login" element={<Login/>}/>
                    <Route exact path="/esqueceu-a-senha" element={<EsqueceuSenha/>}/>
                    <Route exact path="/trilha/:codigo_trilha" element={<Trilha/>}/>
                    <Route exact path="/conteudo-trilha/:codigo_fase_trilha" element={<ConteudoTrilha/>}/>
                    <Route path="*" element={<PaginaNaoEncontrada />}/>
                </Routes>

                <Footer/>

            </BrowserRouter>
        </div>
    );
}