import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

export default function ConteudoTrilha() {

    let {codigo_fase_trilha} = useParams();

    const [trilha, setTrilha] = useState([]);
    const [faseTrilha, setFaseTrilha] = useState([]);
    const [respostas, setRepostas] = useState([]);
    const [alternativaCorreta, setAlternativaCorreta] = useState(false);
    const [modalOpened, setModalOpened] = useState(false);

    useEffect(() => {
        import('./../assets/css/trail-content.css');
        import('./../assets/css/_modal.css');

        fetch('/fases_trilhas/' + codigo_fase_trilha)
            .then(resp => resp.json())
            .then(resp => {
                setFaseTrilha(resp);
                fetchTrilha(resp.codigo_trilha);
            });

        fetch('/respostas/fase_trilha/' + codigo_fase_trilha)
            .then(resp => resp.json())
            .then(resp => setRepostas(resp));
    }, []);

    function fetchTrilha(codigo_trilha) {
        fetch('/trilhas/' + codigo_trilha)
            .then(resp => resp.json())
            .then(resp => setTrilha(resp));
    }

    return (
        <div className="content-trail-content">
            <div className="wrapper-trail-content">
                <div className="top-trail-content">
                    <h1 className="trail-title">{ trilha.titulo || 'Carregando...' }</h1>
                    <div className="trail-pin">
                        <span>{ faseTrilha.numero_fase }</span>
                    </div>
                </div>

                <p>{ faseTrilha.conteudo }</p>

                <div className="container-quizz">
                    <h2 className="quizz-title">Quizz</h2>

                    <h3>{ faseTrilha.pergunta }</h3>
                    {
                        respostas.map((resposta, i) => (
                            <label htmlFor={'alternativa_' + i} key={ resposta.codigo_resposta }>
                                <input
                                    type="radio"
                                    name="alternativas[]"
                                    id={'alternativa_' + i}
                                    onChange={() => setAlternativaCorreta(resposta.resposta_correta === 1)}
                                />
                                { resposta.texto_alternativa }
                            </label>
                        ))
                    }

                    <button
                        className="btn btn-primary btn-quizz"
                        id="btn-quizz-save"
                        onClick={() => setModalOpened(true)}
                    >Responder</button>
                    <Link to={ '/trilha/' + faseTrilha.codigo_trilha } title="Voltar"
                          className="btn btn-secondary btn-quizz" id="btn-quizz-back">Voltar</Link>
                </div>
            </div>

            <div
                id="modal-alternativa-correta"
                className="modal"
                style={modalOpened ? { display: 'block' } : { display: 'none' }}
            >
                <div className="modal-content">
                    {
                        alternativaCorreta
                            ? <h2>Parabéns, você acertou!</h2>
                            : <h2>Que pena, você errou!</h2>
                    }
                    <Link to={'/trilha/' + faseTrilha.codigo_trilha} className="btn btn-primary" title="Voltar">Continuar</Link>
                </div>
            </div>

        </div>
    );
}