import React from "react";

export default function Body() {
  return (
    <section>
      <div className="grid-container">
        <div className="grid-item">
          <div className="headingPart">
            <div className="circle"></div>
            <div className="subHeading">SPEED UP</div>
            <div className="subHeading">COMMUNICATIONS</div>
          </div>
          <div className="heading">Hi I'm Hasnur Alam Ujjol</div>
          <div className="description">
            {" "}
            AU Stuido is the place for everything related to a project
            to-do-list or commuinaction.
          </div>
          <div>
            <button className="hireMeBtn"> Hire me</button>
          </div>
          <div className="iconHolder">
            <img src="" alt="instagram" className="icon" />
            <img src="" alt="twitter" className="icon" />
            <img src="" alt="facebook" className="icon" />
          </div>
          <div>
            <img src="" alt="Down Arraw" className="downArrow" />
          </div>
        </div>
        <div className="grid-item">
          <img src="" alt="the Big P" className="potrait" />
        </div>
      </div>
    </section>
  );
}
