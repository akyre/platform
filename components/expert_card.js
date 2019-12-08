import React from "react";

const ExpertCard = ({name, note, photo, description, price}) => (
    <div>
        <div className={"expertCardBox"}>
            <div className={"topShadow"}>
                {name}
            </div>
            <div className={"bottomShadow"}>
                <div>
                    {description} - {price + "c"}
                </div>
                <div className={"flexColumn"}>
                    {note}
                    <div className={"star"}>

                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            .star {
                margin-left: 5px;
                width: 20px;
                height: 20px;
                background-color: yellow;
                clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
            }
            .expertCardBox {
                width: 320px;
                height: 320px;
                box-shadow: 3px 3px 10px #00000029;
                border-radius: 23px;
                background: transparent url('${photo}') 0% 0% no-repeat padding-box;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            .topShadow {
                background-color: #262525;
                height: 73px;
                width: 100%;
                background: rgba(0, 0, 0, 0.6);
                border-top-left-radius: 23px;
                border-top-right-radius: 23px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #FDFDF6;
            }
            .bottomShadow {
                background-color: #262525;
                height: 73px;
                width: 100%;
                background: rgba(0, 0, 0, 0.6);
                border-bottom-left-radius: 23px;
                border-bottom-right-radius: 23px;
                color: #FDFDF6;
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-direction: column;
            }
            .flexColumn {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
            }
        `}</style>
    </div>

);

export default ExpertCard