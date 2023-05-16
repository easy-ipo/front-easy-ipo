import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";

export default function PaginaNaoEncontrada() {

    return (
        <>
            <Helmet>
                <title>EasyIPO - Página não encontrada</title>
                <link rel="stylesheet" href="/css/home.css" />
            </Helmet>
            <div className="content-home">
                <div className="wrapper">
                    <section className="main-title">
                        <h2>Erro 404 - Página não encontrada</h2>
                    </section>
                </div>
            </div>
        </>
    );
}