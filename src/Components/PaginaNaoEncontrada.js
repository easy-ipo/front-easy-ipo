import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

export default function PaginaNaoEncontrada() {

    useEffect(() => {
        import('./../assets/css/home.css');
    }, []);

    return (
        <div className="content-home">
            <div className="wrapper">
                <section className="main-title">
                    <h2>Erro 404 - Página não encontrada</h2>
                </section>
            </div>
        </div>
    );
}