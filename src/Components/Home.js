import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

export default function Home() {

    const [trilhas, setTrilhas] = useState([]);
    const [trilhaPrincipal, setTrilhaPrincipal] = useState({});

    useEffect(() => {
        import('./../assets/css/home.css');

        fetch('/trilhas')
            .then(resp => resp.json())
            .then(resp => setTrilhas(resp));

        fetch('/trilhas/1')
            .then(resp => resp.json())
            .then(resp => setTrilhaPrincipal(resp))
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
                        <p>Com a EasyIPO, você pode aprender a investir com facilidade e confiança, com uma abordagem
                            amigável e acessível. Então, se você quer começar a investir e aproveitar melhor o seu
                            dinheiro, venha conhecer a EasyIPO, a plataforma que vai te ajudar a se tornar um investidor
                            de sucesso!</p>
                    </section>

                    <section className="main-trail">
                        <img src="/images/IPO.png" alt="IPOs" />
                            {
                                trilhaPrincipal.titulo
                                    ? <p><strong>{ trilhaPrincipal.titulo }</strong> - { trilhaPrincipal.descricao }</p>
                                    : <p>Carregando...</p>
                            }
                        <div className="btn btn-primary" onClick={openModal}>Iniciar Trilha</div>
                    </section>

                    <section className="trails-slider">
                        <h2>Mais Trilhas</h2>
                        <div className="trails-list">
                            { trilhas.map((trilha) => (
                                <div className="trail-card" key={trilha.codigo_trilha}>
                                    <div className="trail-thumb">
                                        <img src={ 'images/' + trilha.imagem } alt="{ trilha.titulo }" />
                                        <h3>{ trilha.titulo }</h3>
                                    </div>
                                    <p>{ trilha.titulo }</p>
                                    <Link to={'trilha/' + trilha.codigo_trilha} className="btn btn-primary">Iniciar</Link>
                                </div>
                            ))}
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
                    <p>{trilhaPrincipal.titulo}</p>
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
                    <Link to={'/trilha/' + trilhaPrincipal.codigo_trilha} className="btn btn-primary" title="Iniciar">Iniciar</Link>
                </div>
            </div>

        </>
    );
}