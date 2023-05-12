import React from "react";


function ElementsBox(props) {
    return (
        <div id="box">
            <div className="img">
                <img src={props.image} />
            </div>
            <div className="text">
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    )
}

export default ElementsBox;