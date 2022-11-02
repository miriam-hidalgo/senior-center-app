import React from "react";

function NavBar() {
  return (
    <div className="navBar">
      <nav className="nav container">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" className="nav__link logo">
              <img src="images/logo.png" alt="" />
            </a>
          </li>
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
      </nav>
    </div>
  );
}

export default NavBar;
