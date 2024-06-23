import React from "react";

import "./sidebar.css";

import navbarData from "./navbarData";
import { Home, CookingPot } from "lucide-react";
function sidebar() {
  return (
    <>
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Controls
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav-menu">
            {navbarData.map((item, index) => (
              <li className="nav-links" key={index}>
                <span className="nav-icon">
                  <item.icon />
                </span>
                <span className="nav-item">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default sidebar;
