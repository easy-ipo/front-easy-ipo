import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

export default function Cadastro() {

    useEffect(() => {
        import('./../assets/css/forms.css');
    }, []);

    return (
        <section className="form-container form-register">
            <h1>Cadastre-se</h1>
            <p className="form-text">Etapa 1 de 2</p>
            <form action="" method="post">
                <input type="text" className="form-input" id="nome" name="nome" placeholder="Seu nome" required/>
                <input type="email" className="form-input" id="email" name="email" placeholder="Seu email" required/>
                <input type="password" className="form-input" id="senha" name="senha" placeholder="Sua senha" required/>
                <div className="form-inline">
                    <input type="number" step="1" className="form-input" id="idade" name="idade" placeholder="Sua idade"
                           required/>
                    <select name="tipo_investidor" id="tipo_investidor" className="form-select minimal">
                        <option value="">Perfil de investidor</option>
                        <option value="1">Conservador</option>
                        <option value="2">Moderado</option>
                        <option value="3">Arrojado</option>
                    </select>
                </div>

                <Link to="/cadastro-endereco">
                    <button type="button" className="btn btn-primary" title="Continuar">Continuar</button>
                </Link>

                <div className="form-inline">
                    <button type="submit" className="btn btn-light">Google</button>
                    <button type="submit" className="btn btn-light">Facebook</button>
                </div>
            </form>
            <div className="form-text" id="register">
                Já possui uma conta? <Link to="/login" title="Login">Acesse Aqui</Link>
            </div>
        </section>
    );
}