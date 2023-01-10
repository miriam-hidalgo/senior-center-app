import React, { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState("closed");

  const toggleMenu = () => {
    setOpen(open === "closed" ? "active" : "closed");
  };

  return (
    <div className="navBar">
      <nav className="nav container">
        <div className="nav__logo">
          <a href="#" className="nav__link logo">
            <img src="images/logo-clean-hands-100.png" alt="" />
            <h1>Senior Center</h1>
          </a>
        </div>
        <ul onClick={toggleMenu} className={`nav__menu ${open}`}>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Classes & Activities
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              About Us
            </a>
          </li>
        </ul>

        <div onClick={toggleMenu} className={`hamburger ${open}`}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
