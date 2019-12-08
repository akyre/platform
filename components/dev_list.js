import React from "react";
import HorizontalScroll from 'react-scroll-horizontal'
import ExpertCard from "./expert_card";

const DevList = ({devs}) => {
    const child = {width: `400px`, height: `320px`};

    return (
        <div style={{height: "320px", marginLeft: "50px"}}>
            <HorizontalScroll>
                {devs.map((value, index) => {
                    return <div style={child} key={index}>
                        <ExpertCard photo={"https://picsum.photos/320"} note={value.note} description={"description"}
                                    name={value.name} price={value.price}/>
                    </div>
                })}
            </HorizontalScroll>
        </div>
    )
};

export default DevList