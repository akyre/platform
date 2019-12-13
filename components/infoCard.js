import React from 'react'

const Card = props => {
    return (
        <div className="card-item">
            <h4 className="title">{props.title}</h4>
            <div className="image">
                <img src="/Image_10.png"/>
            </div>
            <p>
                {props.children}
            </p>
            <a href={props.href}>{props.button}</a>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap');

                .card-item {
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                    width: 500px;
                    box-shadow: 0px 0px 25px 0px #ccc;
                    background-color: white;
                }

                .title {
                    text-align: center;
                    font-size: 30px;
                    font-family: 'Roboto', sans-serif;
                    font-weight: 300;
                    font-style: italic;
                }

                a {
                    width: 200px;
                    height: 50px;
                    border-radius: 16px;
                    border: 3px solid #626262;
                    background-color: white;
                    color: #626262;
                    display: inline-block;
                    text-decoration: none;
                    font-size: 20px;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    margin-bottom: 30px;
                    line-height: 50px;
                    text-align: center;
                }

                a:hover {
                    background-color: #626262;
                    color: white;
                    margin-left: auto;
                    margin-right: auto;
                }

                .image {
                    display: block;
                    width: 200px;
                    height: 200px;
                    margin-left: auto;
                    margin-right: auto;
                }

                img {
                    width: 100%;
                    height: 100%;
                }

                p {
                    text-align: center;
                    font-size: 20px;
                    font-family: 'Roboto', sans-serif;
                    font-weight: 300;
                    margin-left: 30px;
                    margin-right: 30px;
                }
            `}</style>
        </div>
    )
}

const InfoCard = () => {
    return (
        <div className="services">
            <h3 className="main-title">Nos services</h3>
            <div className="card-container">
                <Card className="card" title="Code review" button="En savoir plus" href="/codeReview">Le service de code-review vous permet d’obtenir des conseils personnalisés et accessibles sur vos projets de développement. Ce service garantit une mise en relation rapide avec l’un de nos experts qui pourra ainsi vous conseiller et vous accompagner dans votre projet...</Card>
                <Card className="card" title="Benchmarking" button="En développement..." href="/codeBenchmarking">Le service de benchmark de code a pour vocation de fournir une vision étendue des performances de son code. Nous fournissons des données en temps réel sur la vitesse d'exécution de votre code avec pour principal objectif l'identification des faiblesses de votre architecture...</Card>
                <Card className="card" title="Code analytics" button="En développement..." href="/codeAnalytics">L'analyse de votre projet vise à vous fournir un récapitulatif des améliorations pouvant être apportées à votre projet. Ces améliorations se basent sur les bonnes pratiques de programmation identifiées par notre intelligence artificielle et ont pour but de rendre votre code plus lisible, maintenable et modulable.</Card>
            </div>
            <style jsx>{`
                .card-container {
                    display: flex;
                    justify-content: space-between;
                    margin-left: 5%;
                    margin-right: 5%;
                    margin-bottom: 50px;
                    color: black;
                }

                .main-title {
                    font-size: 45px;
                    font-family: 'Roboto', sans-serif;
                    font-weight: 500;
                    margin-left: 7%;
                    color: black;
                }
            `}</style>
        </div>
    )
}

export default InfoCard
