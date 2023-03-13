import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

export default function Cadastro() {

    useEffect(() => {
        import('./../assets/css/forms.css');
    }, []);

    return (
        <section className="form-container form-register">
            <h1>Acessar a conta</h1>
            <form action="" method="post">
                <input type="email" className="form-input" id="email" name="email" placeholder="Seu email" required/>
                <input type="password" className="form-input" id="senha" name="senha" placeholder="Sua senha" required/>
                <div className="form-text" id="forgot-password">
                    Esqueceu a senha? <Link to="/esqueceu-a-senha" title="Esqueceu a senha?">Clique Aqui</Link>
                </div>
                <button type="submit" className="btn btn-primary">Entrar</button>
                <div className="form-inline">
                    <button type="submit" className="btn btn-light">Google</button>
                    <button type="submit" className="btn btn-light">Facebook</button>
                </div>
            </form>
            <div className="form-text" id="register">
                Não tem uma conta? <Link to="/cadastre-se" title="Cadastre-se">Criar Aqui</Link>
            </div>
        </section>
    );
}