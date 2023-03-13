import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

export default function ConteudoTrilha() {

    useEffect(() => {
        import('./../assets/css/trail-content.css');
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
        <div className="content-trail-content">
            <div className="wrapper-trail-content">
                <div className="top-trail-content">
                    <h1 className="trail-title">O que é um <span>IPO</span>?</h1>
                    <div className="trail-pin">
                        <span>1</span>
                    </div>
                </div>

                <h2>1. A Decisão pela abertura de capital</h2>
                <img src="/images/video-conteudo-trilha.png" className="trail-video" alt="Vídeo" />
                    <p>A decisão pela abertura de capital é, sem dúvidas, uma das mais importantes e complexas decisões
                        a serem tomadas por uma empresa. Afinal, altera significativamente a estrutura organizacional,
                        transforma o posicionamento estratégico, aumenta transparência e altera a forma como a companhia
                        é vista pelo mercado e a sociedade.</p>
                    <p>É importante que os acionistas realizem uma avaliação criteriosa das vantagens e façam as devidas
                        ponderações antes de realizar esse relevante passo da abertura de capital.</p>

                    <h2>2. Doloremque laudantium, totam rem aperiam</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo.</p>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>

                    <div className="container-quizz">
                        <h2 className="quizz-title">Quizz</h2>
                        <h3><span>01.</span> Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit.</h3>
                        <label htmlFor="resposta_1">
                            <input type="checkbox" name="resposta_1" id="resposta_1"/>
                            Ipsum dolor sit amet, consectetur adipiscing elit. Praesent et quam quis nulla congue
                            malesuada.
                        </label>
                        <label htmlFor="resposta_2">
                            <input type="checkbox" name="resposta_2" id="resposta_2"/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt.
                        </label>
                        <label htmlFor="resposta_3">
                            <input type="checkbox" name="resposta_3" id="resposta_3"/>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id
                            est laborum.
                        </label>
                        <label htmlFor="resposta_4">
                            <input type="checkbox" name="resposta_4" id="resposta_4"/>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                        </label>
                        <label htmlFor="resposta_5">
                            <input type="checkbox" name="resposta_5" id="resposta_5"/>
                            Ipsum dolor sit amet, consectetur adipiscing elit. Praesent et quam quis nulla congue
                            malesuada.
                        </label>

                        <button className="btn btn-primary btn-quizz" id="btn-quizz-save">Responder</button>
                        <Link to="/trilha" title="Voltar" className="btn btn-secondary btn-quizz"
                              id="btn-quizz-back">Voltar</Link>
                    </div>
            </div>
        </div>
);
}