import React from "react";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__img">
        <img src="../images/hero.jpg" alt="new york city park" />
      </div>
      <div className="hero__btn--group">
        <button className="hero__btn" type="submit">
          Login
        </button>
        <button className="hero__btn" type="submit">
          Register
        </button>
      </div>
    </div>
  );
}

export default Hero;
