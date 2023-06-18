import React from "react";
import "../style/module.hero.css";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="hero_container">
      <div className="left_section_wrapper">
        <h2>Discover most beautiful property</h2>

        <p className="desc">
          Uncover a wide range of properties that effortlessly cater to your
          needs. Bid farewell to all the challenges associated with finding your
          perfect abode.
        </p>

        <div className="btn_wrapper">
          <div>
            <HiOutlineLocationMarker style={{ color: "#3a5eef" }} />
            <input type="text" placeholder="Search your keyword" />
          </div>
          <button className="btn">Search</button>
        </div>
        <div className="product_container">
          <div>
            <label>
              1000 <span>+</span>
            </label>
            <p>premimum product</p>
          </div>
          <div>
            <label>
              500k <span>+</span>
            </label>
            <p>Happy Customer</p>
          </div>

          <div>
            <label>
              100<span>+</span>
            </label>
            <p>Awards Winning</p>
          </div>

          <div>
            <label>
              20 <span>+</span>
            </label>
            <p>Branches</p>
          </div>
        </div>
      </div>

      <div className="right_section_wrapper">
        <div className="frame">
          <img src="./hero-image.png" alt="hero image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
