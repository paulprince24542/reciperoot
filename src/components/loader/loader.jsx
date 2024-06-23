import React from "react";
import "./loader.css";
import { useSelector } from "react-redux";

function loader() {
  const recipe = useSelector((state) => state.recipe);
  console.log("loading state", recipe);
  return (
    <>
      {!recipe.loading ? (
        <div className="boxes">
          <div className="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default loader;
