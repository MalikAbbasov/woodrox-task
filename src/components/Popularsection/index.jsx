import React from "react";
import "./popular.scss";
function Popularsection() {
  return (
    <div>
      <section id="popular">
        <h1>MOST POPULAR FURNITURES</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          laboriosam ducimus in officia numquam, laudantium tempore facere
          voluptatum atque commodi.
        </p>
        <div className="cards">
          <div className="card">
            <img
              src="https://preview.colorlib.com/theme/woodrox/img/furniture/furniture-1.jpg.webp"
              alt=""
            />
            <h3>Green Butter Sofa</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In ex
              vero modi laudantium, libero ut.
            </p>
          </div>
          <div className="card">
            <img
              src="https://preview.colorlib.com/theme/woodrox/img/furniture/furniture-2.jpg.webp"
              alt=""
            />
            <h3>Green Butter Sofa</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In ex
              vero modi laudantium, libero ut.
            </p>
          </div>
          <div className="card">
            <img
              src="https://preview.colorlib.com/theme/woodrox/img/furniture/furniture-3.jpg.webp"
              alt=""
            />
            <h3>Green Butter Sofa</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In ex
              vero modi laudantium, libero ut.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Popularsection;
