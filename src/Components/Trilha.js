import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import ModalConquista from "./Partials/ModalConquista";

export default function Trilha() {

    useEffect(() => {
        import('./../assets/css/trail.css');
        import('./../assets/css/_modal.css');
    }, []);

    const [modalOpened, setModalOpened] = useState(false);
    const [fase, setFase] = useState(1);  
    const fases_trilha = [1, 2, 3,4];

    function classeFase(i) {
        return fase === i ? 'trail-pin user-pin' : 'trail-pin';
    }

    function nextStep() {
        if (fase < fases_trilha.length) {
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
                        fases_trilha.reverse().map((i) => (
                            <div className="trail-step" key={ i }>
                                <div className={ classeFase(i) }>
                                    <span>{ i }</span>
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