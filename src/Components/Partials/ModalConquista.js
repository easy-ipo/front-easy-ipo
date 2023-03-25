import React from "react";
import {Link} from "react-router-dom";

export default function ModalConquista({children}) {
    return (
        <div id="modal-finished" className="modal">
            <div className="modal-content">
                { children }
                <div className="modal-finished-content">
                    <div className="trail-score">
                        <img src="/images/star-gold.svg" alt="Score"/>
                        <img src="/images/star-gold.svg" alt="Score"/>
                        <img src="/images/star-gold.svg" alt="Score"/>
                        <img src="/images/star-gold.svg" alt="Score"/>
                        <img src="/images/star-grey.svg" alt="Score"/>
                    </div>
                    <h2>
                        <strong>Parabéns!</strong>
                        Você conquistou
                        <strong>4 estrelas</strong>
                    </h2>
                    <Link to="/" className="btn btn-primary" title="Continuar para a próxima fase">Continuar para a
                        próxima fase</Link>
                </div>
            </div>
        </div>
    )
}