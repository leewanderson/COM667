import React from "react";
import CIEImage from "../assets/CIE.png";
import "../styles/Project.css";
function CIE() {
return (
    <div className="about">
    <div
        className="aboutTop"
        style={{ backgroundImage: `url(${CIEImage})` }}
    ></div>
    <div className="aboutBottom">
        <h1>CIE Monitoring</h1>
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

export default CIE;