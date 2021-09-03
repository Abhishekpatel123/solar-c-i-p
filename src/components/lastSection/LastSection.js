import React from "react";
import Map from "../../assets/images/Map.jpg";
import "./LastSection.scss";

export default function LastSection() {
  return (
    <section className="last-section">
      <div className="container m-20">
        <div className="content">
          <h2 >You deserve traceability</h2>
          <p>
            We share our sources, studies, and suppliers — daily essentials
            backed by the first visible supply chain of its kind.
          </p>

          <div className="link">
            <a href="#">Meet Our Ingredients</a>
          </div>

          <div className="link">
            <a href="#">Our Clinical Study</a>
          </div>
        </div>
      </div>
      <div className="illustration m-20">
        <div style={{ textAlign: "center" }}>
          <img src={Map} alt="" srcset="" />
        </div>
      </div>
    </section>
  );
}
