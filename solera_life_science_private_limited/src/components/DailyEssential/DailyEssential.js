import React from "react";
import DE_Data from "../../data/dailyEssential";
import "./DailyEssential.scss";

function DailyEssential() {
  return (
    <div className="daily-essentail">
      <h2>
        Daily essentials with good intentions — for living life or creating it.
      </h2>
      <div className="cards">
        {DE_Data.map(({ title, image }) => {
          return (
            <div className="de-card">
              <div className="logo">
                <img src={image} />
              </div>
              <div className="title">{title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DailyEssential;
