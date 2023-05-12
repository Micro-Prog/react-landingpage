import React from "react";
import Navbar from "./Navbar";

function Header() {
    return (
        <div id="main">
            <Navbar />
            <div className="headText">
                <h1>The First Application<span> Platform on the Internet</span></h1>
                <p className="details">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores fugit minus rerum praesentium temporibus tempore aut animi accusantium quia aperiam ipsa numquam, labore ullam expedita fugiat magnam. Error, quis asperiores.</p>
                <a href="#" className="cv-btn">Download PDF</a>
            </div>
        </div>
    )
}

export default Header;