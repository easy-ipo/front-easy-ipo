import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

export default function Home() {

    useEffect(() => {
        import('./../assets/css/home.css');
    }, []);

    const [modalOpened, setModalOpened] = useState(false);

    const youtube_video_url = 'https://www.youtube.com/embed/5TaIqCeKZ_I';

    function openModal() {
        setModalOpened(true);
    }

    function closeModal() {
        setModalOpened(false);
    }

    return (
        <>
            <div className="content-home">
                <div className="wrapper">

                    <section className="main-title">
                        <h2>Aprenda a investir de<br />
                            uma forma diferente.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et quam quis nulla congue
                            malesuada. Duis bibendum nec ex et porttitor.</p>
                    </section>

                    <section className="main-trail">
                        <img src="/images/IPO.png" alt="IPOs" />
                        <p>Lorem ipsum dolor sit amet, consectetur elit ctetur adipisc elit. Praesent et quam
                            quis nulla congue malesuada. Praesent et quam quis nulla congue malesuada.</p>
                        <div className="btn btn-primary" onClick={openModal}>Iniciar Trilha IPO</div>
                    </section>

                    <section className="trails-slider">
                        <h2>Mais Trilhas</h2>
                        <div className="trails-list">
                            <div className="trail-card">
                                <div className="trail-thumb">
                                    <img src="/images/thumb-trilha-1.png" alt="Trilha 1" />
                                    <h3>Prospectos</h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                                <Link to="#" className="btn btn-primary">Iniciar</Link>
                            </div>
                            <div className="trail-card">
                                <div className="trail-thumb">
                                    <img src="/images/thumb-trilha-2.png" alt="Trilha 2" />
                                    <h3>Ações</h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                                <Link to="#" className="btn btn-primary">Iniciar</Link>
                            </div>
                            <div className="trail-card">
                                <div className="trail-thumb">
                                    <img src="/images/thumb-trilha-3.png" alt="Trilha 3" />
                                    <h3>Fundos Imobiliários</h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                                <Link to="#" className="btn btn-primary">Iniciar</Link>
                            </div>
                            <div className="trail-card">
                                <div className="trail-thumb">
                                    <img src="/images/thumb-trilha-4.png" alt="Trilha 4" />
                                    <h3>BDRs</h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                                <Link to="#" className="btn btn-primary">Iniciar</Link>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

            <div
                id="modal-video"
                className="modal"
                style={modalOpened ? { display: 'block' } : { display: 'none' }}
            >
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <iframe
                        width="100%"
                        height="315"
                        src={modalOpened ? youtube_video_url : ''}
                        id="youtube-video"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <Link to="trilha" className="btn btn-primary" title="Iniciar">Iniciar</Link>
                </div>
            </div>

        </>
    );
}