import React from "react";
import NIEImage from "../assets/NIE.jpg";
import "../styles/Project.css";
function NIE() {
return (
    <div className="about">
    <div
        className="aboutTop"
        style={{ backgroundImage: `url(${NIEImage})` }}
    ></div>
    <div className="aboutBottom">
        <h1>NIE Monitoring</h1>
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

export default NIE;