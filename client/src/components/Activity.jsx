import React from "react";

function Activity() {
  return (
    <div className="activity">
      <div className="activity__img">
        <img src="../images/activity.jpg" alt="welcome mat" />
      </div>
      <div className="activity__content">
        <h2>Activities</h2>
        <p className="activity__text">
          Learn more about our current activities, class offerings, and events!
        </p>
        <div className="activity__btn--group">
          <button className="activity__btn" type="submit">
            Learn More!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Activity;
