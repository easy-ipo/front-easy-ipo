import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

export default function ConteudoTrilha() {

    let {codigo_fase_trilha} = useParams();
    const [faseTrilha, setFaseTrilha] = useState([]);

    useEffect(() => {
        import('./../assets/css/trail-content.css');

        fetch('/respostas/' + codigo_fase_trilha)
            .then(resp => resp.json())
            .then(resp => setFaseTrilha(resp));
    }, []);

    function campoFase(campo) {
        return faseTrilha.length > 0 ? faseTrilha[0][campo] : null
    }

    return (
        <div className="content-trail-content">
            <div className="wrapper-trail-content">
                <div className="top-trail-content">
                    <h1 className="trail-title">{campoFase('TITULO')}</h1>
                    <div className="trail-pin">
                        <span>{campoFase('NUMERO_FASE')}</span>
                    </div>
                </div>

                <p>{campoFase('CONTEUDO')}</p>

                <div className="container-quizz">
                    <h2 className="quizz-title">Quizz</h2>

                    <h3><span>01.</span> {campoFase('PERGUNTA')}</h3>

                    {
                        faseTrilha.map((resposta, i) => (
                            <label htmlFor={'resposta_' + i}>
                                <input type="checkbox" name={'resposta_' + i} id={'resposta_' + i}/>
                                {resposta.TEXTO_ALTERNATIVA}
                            </label>
                        ))
                    }

                    <button className="btn btn-primary btn-quizz" id="btn-quizz-save">Responder</button>
                    <Link to={'trilha' + campoFase('CODIGO_TRILHA')} title="Voltar" className="btn btn-secondary btn-quizz"
                          id="btn-quizz-back">Voltar</Link>
                </div>
            </div>
        </div>
    );
}