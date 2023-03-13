import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

export default function Trilha() {

    useEffect(() => {
        import('./../assets/css/trail.css');
    }, []);

    // const [modalOpened, setModalOpened] = useState(false);
    //
    // function openModal() {
    //     setModalOpened(true);
    // }
    //
    // function closeModal() {
    //     setModalOpened(false);
    // }

    return (
        <>
            <section className="content-trail">
                <div className="wrapper">
                    <div className="trail-step">
                        <div className="trail-pin">
                            <span>4</span>
                        </div>
                    </div>
                    <div className="trail-step">
                        <div className="trail-pin">
                            <span>3</span>
                        </div>
                    </div>
                    <div className="trail-step">
                        <div className="trail-pin">
                            <span>2</span>
                        </div>
                    </div>
                    <div className="trail-step">
                        <div className="trail-pin user-pin">
                            <span>1</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="btns-trilha">
                <button className="btn btn-primary" id="previous-step" onClick="previousStep()">Voltar</button>
                <Link to="/conteudo-trilha" title="Iniciar Fase" className="btn btn-secondary">Iniciar Fase</Link>
                <button className="btn btn-primary" id="next-step" onClick="nextStep()">Pular</button>
            </section>

        </>
    );
}