import React, { useRef } from "react";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
const navRef = useRef();

const openNav=()=>{
  navRef.current.classList.toggle("none")
}

  return (
    <div>
      <nav id="navbar">
        <div className="container">
          <div className="nav_head">
            <div className="float_left">
              <p>Visit us</p>
              <p>Online Support</p>
            </div>
            <div className="float_right">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-square-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>
          <div className="nav_main">
            <div className="nav_image">
              <img
                className="img1"
                src="https://preview.colorlib.com/theme/woodrox/img/logo-2.png.webp"
                alt=""
              />
              <img
                className="img2"
                src="https://preview.colorlib.com/theme/woodrox/img/logo-2.png.webp"
                alt=""
              />
            </div>
            <div className="nav_pages">
              <ul className="main_pages ">
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link>
                  <NavLink>
                    <li className="pages">
                      Pages
                      <div className="page_down">
                        <ul className="page-down-list">
                          <Link to={"/project"}>
                            <li>Project</li>
                          </Link>
                          <Link to={"/project-details"}>
                            <li>Project Details</li>
                          </Link>
                          <li>Elements</li>
                        </ul>
                      </div>
                    </li>
                  </NavLink>
                </Link>
                <Link>
                  <li className="blog">
                    <p>Blog</p>
                    <div className="blog_down">
                      <ul>
                        <li>Blog</li>
                        <li>Blog Details</li>
                      </ul>
                    </div>
                  </li>
                </Link>
                <Link to={"/contact"}>Contact</Link>
              </ul>
              <div className="nav_bar ">
                <i onClick={openNav} class="fa-solid fa-bars"></i>
              </div>
              
              {/* responsivlikde gelecek hisse */}
              <ul ref={navRef} className="aside none">
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link>
                  <NavLink>
                    <li className="pages">
                      Pages
                      <div className="page_down">
                        <ul className="page-down-list">
                          <Link to={"/project"}>
                            <li>Project</li>
                          </Link>
                          <Link to={"/project-details"}>
                            <li>Project Details</li>
                          </Link>
                          <li>Elements</li>
                        </ul>
                      </div>
                    </li>
                  </NavLink>
                </Link>
                <Link>
                  <li className="blog">
                    <p>Blog</p>
                    <div className="blog_down">
                      <ul>
                        <li>Blog</li>
                        <li>Blog Details</li>
                      </ul>
                    </div>
                  </li>
                </Link>
                <Link to={"/contact"}>Contact</Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
