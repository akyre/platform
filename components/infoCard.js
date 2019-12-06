import React from 'react'

const Card = props => {
    return (
        <div className="card-item">
            <h4 className="title">{props.title}</h4>
            <div className="image">
                <img src="/image_10.png"/>
            </div>
            <p>
                {props.children}
            </p>
            <button>{props.button}</button>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap');

                .card-item {
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                    width: 350px;
                    box-shadow: 0px 0px 25px 0px #ccc;
                }

                .title {
                    text-align: center;
                    font-size: 30px;
                    font-family: 'Roboto', sans-serif;
                    font-weight: 300;
                    font-style: italic;
                }

                button {
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
                    margin-bottom: 10px;
                }

                button:hover {
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
                    font-size: 15px;
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
                <Card className="card" title="Analyse" button="En savoir plus"> This is the content of the card, Call History Manager keep your call history forever and list them category wise for ease of access. Quick and advanced search options helps you to easily access data you are looking for. 

Call History Manager allows you to export calls to excel file. This app can backup your logs and restore them on same phone or other. There is a useful statistics page to give you more insight about calls you are making/receiving.  </Card>
                <Card className="card" title="Benchmarking" button="En développement..."> This is the content of the card, more details, Call History Manager keep your call history forever and list them category wise for ease of access. Quick and advanced search options helps you to easily access data you are looking for. 

Call History Manager allows you to export calls to excel file. This app can backup your logs and restore them on same phone or other. There is a useful statistics page to give you more insight about calls you are making/receiving. </Card>
                <Card className="card" title="Peer coding" button="En développement..."> This is the content of the card with more details. Call History Manager keep your call history forever and list them category wise for ease of access. Quick and advanced search options helps you to easily access data you are looking for. 

Call History Manager allows you to export calls to excel file. This app can backup your logs and restore them on same phone or other. There is a useful statistics page to give you more insight about calls you are making/receiving. </Card>
            </div>
            <style jsx>{`
                .card-container {
                    display: flex;
                    justify-content: space-between;
                    margin-left: 5%;
                    margin-right: 5%;
                }

                .main-title {
                    font-size: 45px;
                    font-family: 'Roboto', sans-serif;
                    font-weight: 500;
                    margin-left: 7%;
                }
            `}</style>
        </div>
    )
}

export default InfoCard