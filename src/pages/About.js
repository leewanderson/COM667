import React from "react";
import MonitoringImage from "../assets/monitoring.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MonitoringImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Onboarding Site</h1>
        <p>This project was created with the intention of allowing new starts to get up to speed with all projects.</p>
        <p>Each project will contain a "Points of Contact" list. For any queries regarding this website, use the contact form to lodge a question or piece of feedback.</p>
        <p>For any more urgent queries, please refer to the contacts listed below</p>
        <h2>Points of Contact</h2>
        <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Note</th>
        </tr>
        <tr>
            <td>Lee Anderson</td>
            <td>lee.anderson@version1.com</td>
            <td>For any queries regarding site content and feature requests</td>
        </tr>
        </table>
        <p><br></br></p>
      </div>
    </div>
  );
}

export default About;
