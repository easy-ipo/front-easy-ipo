import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import ModalConquista from "./Partials/ModalConquista";

export default function Trilha({match}) {

    let { codigo_trilha } = useParams();

    const [fasesTrilha, setFasesTrilha] = useState([]);
    const [modalOpened, setModalOpened] = useState(false);
    const [fase, setFase] = useState(1);

    useEffect(() => {
        import('./../assets/css/trail.css');
        import('./../assets/css/_modal.css');

        fetch('/fases_trilha/' + codigo_trilha)
            .then(resp => resp.json())
            .then(resp => setFasesTrilha(resp));
    }, []);

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
            <section className="content-trail">
                <div className="wrapper">
                    {
                        fasesTrilha.map((faseTrilha) => (
                            <div className="trail-step" key={ faseTrilha.NUMERO_FASE }>
                                <div className={ classeFase(faseTrilha.NUMERO_FASE) }>
                                    <span>{ faseTrilha.NUMERO_FASE }</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className="btns-trilha">
                <button className="btn btn-primary" id="previous-step" onClick={ previousStep }>Voltar</button>
                <Link to="/conteudo-trilha" title="Iniciar Fase" className="btn btn-secondary">Iniciar Fase</Link>
                <button className="btn btn-primary" id="next-step" onClick={ nextStep }>Pular</button>
            </section>

            { modalOpened && <ModalConquista>
                <span className="close" onClick={ () => setModalOpened(false) }>&times;</span>
            </ModalConquista> }

        </>
    );
}