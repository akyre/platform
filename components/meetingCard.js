import React from 'react'

const Card = ({ message_button = "test", expert_name = "Robert", expert_title = "Swift", meeting_date = "Date", expert_img }) => {
    return (
        <div className="card-item">
            <h4 className="expert-name">{expert_name}</h4>
            <h5 className="expert-title">{expert_title}</h5>
            <h6 className="meeting-date">{meeting_date}</h6>
            
            <div className="image">
                <img src="../Image10.png"/>

            </div>

            <button>{message_button}</button>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap');

                .card-item {
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                    background-color: #1A95FF;
                    border-radius: 16px;
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

                .expert-name {
                    text-align:
                    font-size: 24px;
                    font-family: 'Roboto', sans-serif;
                    font-weight: 300;
                    font-style: 'Roboto', sans-serif;
                    margin-left: 15px;
                    margin-right: auto;
                    margin-bottom: 10px;
                }
                .expert-title {
                    text-align:
                    font-size: 24px;
                    font-family: 'Roboto', sans-serif;
                    font-weight: 300;
                    font-style: 'Roboto', sans-serif;
                    margin-left: 15px;
                    margin-right: auto;
                    margin-bottom: 10px;
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
                    width: 100px;
                    height: 00px;
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

const MeetingCard = () => {
    return (
        <div className="services">
            <h3 className="main-title">Mes rendez-vous</h3>
            <div className="card-container">
                <Card className="card" title="Analyse" button="En savoir plus"> This is the content of the card, Call History Manager keep your call history forever and list them category wise for ease of access. Quick and advanced search options helps you to easily access data you are looking for. 

Call History Manager allows you to export calls to excel file. This app can backup your logs and restore them on same phone or other. There is a useful statistics page to give you more insight about calls you are making/receiving.  </Card>
            </div>
            <style jsx>{`
                .card-container {
                    display: flex;
                    justify-content: space-between;
                    margin-left: 5%;
                    margin-right: 5%;
                }

                .main-title {
                    font-size: 80px;
                    font-family: 'Roboto', sans-serif;
                    font-weight: 500;
                    margin-left: 7%;
                }
            `}</style>
        </div>
    )
}

export default MeetingCard