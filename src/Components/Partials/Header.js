import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Header() {

    const [menuMobileClass, setMenuMobileClass] = useState('');

    function openMenu() {
        setMenuMobileClass('open');
    }

    function closeMenu() {
        setMenuMobileClass('');
    }

    return (
        <>
            <div id="menu-mobile" className={menuMobileClass}>
                <div className="menu-mobile-content">
                    <div className="menu-mobile-top">
                        <div className="user-data">
                            <img src="images/avatar.png" alt="Avatar" className="user-avatar" />
                            <div className="user-name-score">
                                <h4 className="user-name">Fulano da Silva</h4>
                                <div className="user-score">
                                    <img src="images/star-gold.svg" alt="Score" />
                                    <img src="images/star-gold.svg" alt="Score" />
                                    <img src="images/star-gold.svg" alt="Score" />
                                    <img src="images/star-gold.svg" alt="Score" />
                                    <img src="images/star-grey.svg" alt="Score" />
                                </div>
                            </div>
                        </div>
                        <div id="menu-close-icon">
                            <img src="images/caret.svg" alt="Fechar" onClick={closeMenu} />
                        </div>
                    </div>
                </div>
                <div className="menu-mobile-btns">
                    <Link to="cadastre-se" className="btn btn-secondary" title="Cadastrar">Cadastrar</Link>
                    <Link to="login" className="btn btn-primary" title="Entrar">Entrar</Link>
                    <Link to="/" className="logout">Sair da conta</Link>
                </div>
            </div>

            <header className="site-header-footer">
                <div className="wrapper">

                    <div className="logo">
                        <Link to="/" title="Easy IPO"><img src="images/easy-ipo.svg" alt="Easy IPO" /></Link>
                    </div>

                    <div className="btns-header">
                        <Link to="cadastre-se" className="btn btn-secondary" title="Cadastrar">Cadastrar</Link>
                        <Link to="login" className="btn btn-primary" title="Entrar">Entrar</Link>
                    </div>

                    <div id="menu-mobile-icon">
                        <img src="images/menu-mobile-icon.svg" alt="Menu" onClick={openMenu} />
                    </div>

                </div>
            </header>
        </>
    );
}