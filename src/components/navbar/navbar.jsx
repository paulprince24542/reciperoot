import React from "react";

import "./navbar.css";
import Sidebar from "../sidebar/sidebar";

function navbar() {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="navbar">
            <div className="toggle-button">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="navbar-header">Recipe Root</div>
          </div>
        </div>
      </div>
      <Sidebar />
    </>
  );
}

export default navbar;
