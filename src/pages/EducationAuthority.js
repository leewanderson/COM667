import React from "react";
import EducationAuthorityImage from "../assets/EducationAuthority.PNG";
import "../styles/Project.css";
function EducationAuthority() {
return (
    <div className="about">
    <div
        className="aboutTop"
        style={{ backgroundImage: `url(${EducationAuthorityImage})` }}
    ></div>
    <div className="aboutBottom">
        <h1>Education Authority Monitoring</h1>
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

export default EducationAuthority;