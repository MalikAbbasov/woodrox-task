import React from "react";
import "./detail.scss";
function Details() {
  return (
    <div>
      <section id="details">
        <div className="container">
          <div className="detail_up">
            <img
              src="https://preview.colorlib.com/theme/woodrox/img/project-details-1.jpg.webp"
              alt=""
            />
            <div className="info">
              <h4>LAVENDAR AMBIENT COLORLIB</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
              <div className="rate">
                <div className="rates">
                  <h5>Rating</h5>
                  <p className="rates_text">
                    : <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </p>
                </div>
                <div className="rates">
                  <h5>Client</h5>
                  <p className="rates_text">: Colordib</p>
                </div>
                <div className="rates">
                  <h5>Website</h5>
                  <p className="rates_text">: colorlib.com</p>
                </div>
                <div className="rates">
                  <h5>Completed</h5>
                  <p className="rates_text">: 10 nov 2003</p>
                </div>
              </div>
            </div>
          </div>
          <div className="detail_down">
            <p className="up">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </p>
            <p className="down">
              Voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Details;
