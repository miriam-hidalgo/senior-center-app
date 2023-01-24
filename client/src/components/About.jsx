import React from "react";

function About() {
  return (
    <div className="about container">
      <div className="about__img">
        <img
          src="../images/learn_more.jpg"
          alt="hands with scrabble letters that spell the word senior"
        />
      </div>
      <div className="about__content">
        <h2>Senior Center Services</h2>
        <p className="about__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className="about__service">
        <div className="social-service">
          <h3 className="service">Social Work</h3>
          <p className="service-text">
            Meet with one of expert social workers to navigate how to safely age
            in place.
          </p>
        </div>
        <div className="social-service">
          <h3 className="service">Nurse</h3>
          <p className="service-text">
            Meet with our nurse who can serve as a liasion between you and your
            health care provider.
          </p>
        </div>
        <div className="social-service">
          <h3 className="service">Benefits</h3>
          <p className="service-text">
            Meet with a knowledgable benefits volunteer who can determine if you
            qualify for: Medicaid, Food Stamps, Supplemental Security
            Income-SSI.
          </p>
        </div>
        <div className="social-service">
          <h3 className="service">Medicare</h3>
          <p className="service-text">
            Meet with our Medicare counselor who can help with understanding
            what coverage is available to you as well as enrollment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
