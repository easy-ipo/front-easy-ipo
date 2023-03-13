import React from "react";
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="site-header-footer">
            <div className="wrapper">

                <div className="logo">
                    <Link to="/" title="Easy IPO"><img src="images/easy-ipo.svg" alt="Easy IPO" /></Link>
                </div>

                <div className="btns-header">
                    <Link to="cadastre-se" className="btn btn-secondary" title="Cadastrar">Cadastrar</Link>
                    <Link to="login" className="btn btn-primary" title="Entrar">Entrar</Link>
                </div>

            </div>
        </footer>
    )
}