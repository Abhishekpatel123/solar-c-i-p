import React from "react";
import BannerImage from "../../assets/images/Home-Hero-Desktop.jpg";
import "./Banner.scss";

function Banner() {
  return (
    <div className="banner">
      <div
        style={{
          backgroundImage: `url(${BannerImage})`,
        }}
        className="content"
      >
        <h1 class="title">
          <div>The future</div>
          <div className="right">of health</div>
          <div>
            <em style={{ letterSpacing: "3px", fontFamily: "Dutch801" }}>
              — is clear.
            </em>
          </div>
        </h1>
        <button>Shop All</button>
      </div>
    </div>
  );
}

export default Banner;
