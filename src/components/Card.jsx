import React from "react";

function Card(props) {
  return (
    <div className="main">
      <div className="card">
        <div className="header">
          <h2 className="nameheader">{props.name}</h2>
        </div>
        <img className="image" src={props.imgURL} alt="" />
        <div className="content">
          <p className="phone">{props.nim}</p>
          <p className="email">{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
