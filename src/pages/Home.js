import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/v1background.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> NIDCS Onboarding </h1>
        <p>Onboarding Materials for all NIDCS Projects</p>
        <Link to="/menu">
          <button>View Projects</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
