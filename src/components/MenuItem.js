import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ image, name, info}) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <h5> &nbsp;&nbsp;&nbsp; {info} </h5>
    </div>
  );
}

export default MenuItem;
