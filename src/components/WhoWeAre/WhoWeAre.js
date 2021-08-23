import React, { useEffect } from "react";
import WWA from "../../assets/images/WWA.webp";
import "./whoWeAre.scss";
function WhoWeAre() {
  const observer = new IntersectionObserver((entries, observe) => {
    const circle = document.querySelector(".circle");
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        circle.style.transform = "translate(-50% , -50%)";
      } else {
        circle.style.transform = "translate(-100% , -50%)";
      }
    });
  }, {});
  useEffect(() => {
    observer.observe(document.querySelector(".wwr"));
  }, []);
  return (
    <div className="wwr">
      <div className="content">
        <div className="circle"></div>
        <div style={{ backgroundImage: `url(${WWA})` }} className="left"></div>
        <div className="right">
          <h2>We're not about pseudoscience and half-truths</h2>
          <p>
            From Omega-3 DHA from microalgae to regeneratively-farmed pea
            protein, our scientists studied diets and genetics to make daily
            essentials based on what we need.
          </p>
          <a className="link">Who We Are</a>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
