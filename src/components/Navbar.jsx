import React, { useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="nav_container">
      <div className="wrapper">
        <img src="./logo.png" alt="brand-image" width={100} />
        <ul className={`${show ? "hide": "nav_links"}`}>
          <li>Residence</li>
          <li>Our Values</li>
          <li>Get Started</li>
          <button className="btn">
            <a href="#">contact us</a>
          </button>
        </ul>

        {/* menu button for small sizes devices */}
        
          {show ? (
            <AiOutlineClose
              size={30}
              className="menu"
              onClick={() => setShow(!show)}
            />
          ) : (
            <BiMenuAltRight
              size={30}
              className="menu"
              onClick={() => setShow(!show)}
            />
          )}
      </div>
    </nav>
  );
};

export default Navbar;
