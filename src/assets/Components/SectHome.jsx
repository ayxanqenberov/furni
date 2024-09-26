import React from "react";
import "../scss/_sectHome.scss";
import "../scss/_header.scss";
import Header from "./Header";

function Sect() {
  return (
    <>
    <Header/>
    <section className="hero">
      <div className="hero-content">
        <h1>Modern Interior Design Studio</h1>
        <p>
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
        <div className="buttons">
          <button className="primary-btn">Shop Now</button>
          <button className="secondary-btn">Explore</button>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://themewagon.github.io/furni/images/couch.png"
          alt="Modern Sofa"
        />
      </div>
    </section>
    </>
  );
}

export default Sect;
