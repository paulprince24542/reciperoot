import React from "react";
import "./recipecard.css";

export default function recipecard({ name, type, image }) {
  return (
    <>
      <div className="col-md-3">
        <div className="menu-card">
          <div className="menu-item">
            {/* <img src={image} alt="" /> */}
            <span className="dish-name">{name}</span>
            <span className="dish-type">{type}</span>
          </div>
        </div>
      </div>
    </>
  );
}
