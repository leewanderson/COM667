import React from "react";
import HarrowImage from "../assets/Harrow.png";
import "../styles/Project.css";
function Harrow() {
return (
    <div className="about">
    <div
        className="aboutTop"
        style={{ backgroundImage: `url(${HarrowImage})` }}
    ></div>
    <div className="aboutBottom">
        <h1>Harrow Council Monitoring</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum!
        </p>
    </div>
    </div>
);
}

export default Harrow;