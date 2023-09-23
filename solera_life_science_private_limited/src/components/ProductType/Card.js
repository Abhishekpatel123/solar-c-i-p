import React from "react";

function Card({ image, title }) {
  return (
    <div className="pt-card">
      <div className="image">
        <img src={image} />
      </div>
      <div className="title">{title}</div>
    </div>
  );
}

export default Card;