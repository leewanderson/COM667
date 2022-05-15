import React from "react";
import SucdenImage from "../assets/Sucden.jpg";
import "../styles/Project.css";
function Sucden() {
return (
    <div className="about">
    <div
        className="aboutTop"
        style={{ backgroundImage: `url(${SucdenImage})` }}
    ></div>
    <div className="aboutBottom">
        <h1>Sucden Monitoring</h1>
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

export default Sucden;
