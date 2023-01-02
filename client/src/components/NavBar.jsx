import React from "react";

function NavBar() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav__menu");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav__item").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );

  return (
    <div className="navBar">
      <nav className="nav container">
        <div className="nav__logo">
          <a href="#" className="nav__link logo">
            <img src="images/logo-clean-hands-100.png" alt="" />
            <h1>Senior Center</h1>
          </a>
        </div>
        <ul
          className="nav__menu"
          // onClick={navMenu.classList.toggle("active")}
        >
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

        <div
          className="hamburger"
          onClick={hamburger.classList.toggle("active")}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
