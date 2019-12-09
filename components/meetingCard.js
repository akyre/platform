import React from 'react'

const Card = ({ expert_name = "Robert Lafondue", expert_title = "Développeur Swift", meeting_date = "Lundi 23 Septembre 2019 - 20h30", expert_img = "/Image_10.png" }) => {
    return (
        <div className="card-item">
            <div>          
            <div className="expert-image">
            </div>

                <h4 className="expert-name">{expert_name}</h4>
                <h5 className="expert-title">{expert_title}</h5>
                <h6 className="meeting-date">{meeting_date}</h6>
            </div>
            
            <div className="points-button">
                <img onClick={() => console.log("Perfect")} src="Points.svg"/>
            </div>

            <div className="message-button">
                <img onClick={() => console.log("it works")} src="Icon_message.svg"/>
            </div>
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap');

                .card-item {
                    display: flex;                  
                    background-color: #1A95FF;
                    border-radius: 16px;
                    width: 350px;
                    height: 100px;
                }

                .expert-image {
                    background-image: url(${expert_img});
                    background-size: 100%;
                    display: block;
                    width: 50px;
                    height: 50px;
                    border-radius: 50px;
                    margin-left: 10px;
                    margin-right: auto;
                    margin-top: 10px;
                }

                .expert-name {
                    text-align:
                    font-size: 30px;
                    font-family: 'Roboto', sans-serif;
                    font-weight: 300;
                    font-style: italic;
                    color: #FDFDF6;
                    margin-left: 80px;
                    margin-right: auto;
                    margin-top: -50px;
                }
                .expert-title {
                    text-align:
                    font-size: 24px;
                    font-family: 'Roboto', sans-serif;
                    font-weight: 300;
                    font-style: 'Roboto', sans-serif;
                    color: #FDFDF6;
                    margin-left: 80px;
                    margin-right: auto;
                    margin-bottom: 10px;
                }

                .meeting-date {
                    text-align:
                    font-size: 24px;
                    font-family: 'Roboto', sans-serif;
                    font-weight: 300;
                    font-style: italic;
                    color: #FDFDF6;
                    margin-left: 80px;
                    margin-right: auto;
                    margin-top: -50px;
                }

                .points-button {
                    width: 30px;
                    height: 30px;
                    color: #626262;
                    font-size: 20px;
                    display: block;
                    margin-left: auto;
                    margin-right: -95px;
                    margin-top: 5px;
                }

                .message-button {
                    width: 50px;
                    height: 50px;
                    color: #626262;
                    font-size: 20px;
                    display: block;
                    margin-left: auto;
                    margin-right: 15px;
                    margin-top: 45px;
                }

                img {
                    width: 100%;
                    height: 100%;
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