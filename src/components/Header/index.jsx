import React from "react";
import "./header.scss";
function Header() {
  return (
    <div>
      <header id="header">
        <div className="container">
          <div className="text">
            <h2>PRECISE CONCEPT DESIGN FOR STYLISH LIVING</h2>
            <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
            <button>Get Started</button>
          </div>
          <div className="sections">
            <div className="icons right"><i class="fa-solid fa-couch"></i></div>
            <div className="icons"><i class="fa-solid fa-bed"></i></div>
            <div className="icons right"><i class="fa-solid fa-network-wired"></i></div>
            <div className="icons"><i class="fa-solid fa-landmark"></i></div>
            <div className="icons right"><i class="fa-solid fa-door-closed"></i></div>
            <div className="icons"><i class="fa-solid fa-kitchen-set"></i></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
