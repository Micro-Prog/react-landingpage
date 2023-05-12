import React from "react";
import ElementsBox from "./ElementsBox";
import element1 from '../images/element1.png'
import element2 from '../images/element2.png'
import element3 from '../images/element3.png'


function Elements() {
    return (
        <div id="elements">
            <div className="container">
                <ElementsBox image={element1} title='Courses' />
                <ElementsBox image={element2} title='More Tools' />
                <ElementsBox image={element3} title='Resources' />
            </div>
        </div>
    )
}

export default Elements;