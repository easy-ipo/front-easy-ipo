import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

export default function Cadastro() {

    useEffect(() => {
        import('./../assets/css/forms.css');
    }, []);

    return (
        <section className="form-container form-register">
            <h1>Informe seu endereço</h1>
            <form action="" method="post">
                <input type="text" className="form-input" id="cep" name="cep" placeholder="CEP" maxLength="8" required />

                <input type="text" className="form-input" id="logradouro" name="logradouro" placeholder="Logradouro" required />
                
                <div className="form-inline">
                    <input type="number" step="1" className="form-input" id="numero" name="numero" placeholder="Número" />
                    <input type="text" step="1" className="form-input" id="complemento" name="complemento" placeholder="Complemento"/>
                </div>
                
                <input type="text" className="form-input" id="bairro" name="bairro" placeholder="Bairro" required />
                
                <div className="form-inline">
                    <input type="text" className="form-input" id="uf" name="uf" placeholder="UF" maxLength="2" />
                    <input type="text" className="form-input" id="cidade" name="cidade" placeholder="Cidade"/>
                </div>

                <label className="checkbox-group">
                    <input type="checkbox" id="aceite" />
                    <span className="form-checkbox"></span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et quam quis nulla congue malesuada.
                </label>
                
                <button type="submit" className="btn btn-primary">Finalizar Cadastro</button>
                
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