import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import ModalConquista from "./Partials/ModalConquista";
import {Helmet} from "react-helmet";

export default function Trilha({match}) {

    let { codigo_trilha } = useParams();

    const [fasesTrilha, setFasesTrilha] = useState([]);
    const [modalOpened, setModalOpened] = useState(false);
    const [fase, setFase] = useState(1);

    useEffect(() => {
        fetch('/fases_trilhas/trilha/' + codigo_trilha)
            .then(resp => resp.json())
            .then(resp => setFasesTrilha(resp));
    }, []);

    function codigoFaseTrilhaAtual(){
        if(fasesTrilha.length > 0) {
            const trilha_atual = fasesTrilha.filter(t => Number(t.numero_fase) === fase);
            return trilha_atual.length > 0 ? trilha_atual[0].codigo_fase_trilha : null;
        }
        return null;
    }

    function classeFase(i) {
        return fase === i ? 'trail-pin user-pin' : 'trail-pin';
    }

    function nextStep() {
        if (fase < fasesTrilha.length) {
            setFase(fase + 1);
        } else {
            setModalOpened(true);
        }
    }

    function previousStep() {
        if (fase > 1) {
            setFase(fase - 1);
        }
    }

    return (
        <>
            <Helmet>
                <title>EasyIPO - Trilhas</title>
                <link rel="stylesheet" href="/css/trail.css" />
                <link rel="stylesheet" href="/css/_modal.css" />
            </Helmet>
            <section className="content-trail">
                <div className="wrapper">
                    {
                        fasesTrilha.length > 0
                            ? fasesTrilha.map((faseTrilha) => (
                                <div className="trail-step" key={ faseTrilha.numero_fase }>
                                    <div className={ classeFase(faseTrilha.numero_fase) }>
                                        <span>{ faseTrilha.numero_fase }</span>
                                    </div>
                                </div>
                            ))
                            : <h2>Carregando...</h2>
                    }
                </div>
            </section>

            <section className="btns-trilha">
                <button className="btn btn-primary" id="previous-step" onClick={ previousStep }>Voltar</button>
                <Link to={'/conteudo-trilha/' + codigoFaseTrilhaAtual()} title="Iniciar Fase" className="btn btn-secondary">Iniciar Fase</Link>
                <button className="btn btn-primary" id="next-step" onClick={ nextStep }>Pular</button>
            </section>

            { modalOpened && <ModalConquista>
                <span className="close" onClick={ () => setModalOpened(false) }>&times;</span>
            </ModalConquista> }

        </>
    );
}