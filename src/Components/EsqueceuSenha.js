import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";

export default function EsqueceuSenha() {

    return (
        <>
            <Helmet>
                <title>EasyIPO - Esqueceu a senha</title>
                <link rel="stylesheet" href="/css/forms.css" />
            </Helmet>
            <section className="form-container form-register">
                <h1>Esqueceu a senha?</h1>
                <p className="form-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et quam quis
                    nulla congue malesuada. Duis bibendum nec ex et porttitor.</p>
                <form action="" method="post">
                    <input type="email" className="form-input" id="email" name="email" placeholder="Seu email" required />
                        <button type="submit" className="btn btn-primary">Enviar e-mail de recuperação</button>
                </form>
                <div className="form-text" id="register">
                    Sua <strong>nova senha</strong> de acesso <strong>foi enviada por e-mail</strong> com sucesso!
                </div>
            </section>
        </>
    );
}