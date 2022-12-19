import React from "react";

function NavBar() {
  return (
    <div className="navBar">
      <nav className="nav container">
        <div className="nav__logo">
          <a href="#" className="nav__link logo">
            <img src="images/logo-clean-hands-100.png" alt="" />
            <h1>Senior Center</h1>
          </a>
        </div>
        <ul className="nav__menu">
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

        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
