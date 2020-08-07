import React from "react";
// import ReactDOM from "react-dom";

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-light-green b2 dib br2 ma2 pa3 grow shadow-5 bw-2 tc">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="Robots"></img>
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
