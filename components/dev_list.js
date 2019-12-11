import React from "react";
import ExpertCard from "./expert_card";

const DevList = ({title, devs}) => {
    return (
        <div id="content">
            <h5 id="title">{title}</h5>
            <div id="dev-list">
                {devs.map((value, index) => {
                    return (
                        <div className="card">
                            <ExpertCard photo={"https://picsum.photos/320"} note={value.note} description={"description"}
                                            name={value.name} price={value.price}/>
                        </div>
                    )
                })}
            </div>
        <style jsx>{`
            #dev-list {
                display: flex;
                overflow-x: scroll;
            }

            #content {
                box-shadow: 0px 0px 15px #00000029;
                padding: 20px;
                border-radius: 25px;
                width: 90%;
                margin-right: auto;
                margin-left: auto;
            }

            #title {
                font-size: 30px;
                color: black;
                margin-left: 20px;
                margin-top: 20px;
                margin-bottom: 20px;
            }
            
            .card {
                margin-left: 5px;
                margin-right: 5px;
            }
        `}</style>
        </div>
    )
};

export default DevList