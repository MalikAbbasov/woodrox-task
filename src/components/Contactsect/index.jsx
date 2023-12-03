import React from "react";
import "./contact.scss";
function Contactsect() {
  return (
    <div>
      <section id="contact">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1388.187038371158!2d49.83192646198635!3d40.42237300252032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403087bf2105c159%3A0xf05fc021393616df!2sAvtopilot%20Prius%20Servis!5e0!3m2!1sen!2saz!4v1701623410492!5m2!1sen!2saz"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="container">
          <div className="connect">
            <div className="connection">
              <i class="fa-solid fa-house"></i>
              <div className="text">
                <h6>California, United States</h6>
                <p>Santa monica bullevard</p>
              </div>
            </div>
            <div className="connection">
              <i class="fa-solid fa-phone"></i>
              <div className="text">
                <h6>055-249-91-32</h6>
                <p>Istediyiniz vaxt elaqe saxlaya bilersiniz.</p>
              </div>
            </div>
            <div className="connection">
              <i class="fa-solid fa-envelope"></i>
              <div className="text">
                <h6>malik.abbasov03@gmail.com</h6>
                <p>Xahis edirem bos "mail"-ler gondermeyin.</p>
              </div>
            </div>
          </div>
          <div className="login">
            <input type="text" placeholder="Enter your Name" />
            <input type="mail" placeholder="Enter your Mail" />
            <input type="text" placeholder="Enter subject" />
          </div>
          <div className="message">
            <input type="text" placeholder="Enter your message" />
            <div className="btn">
            <button>Send Message</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contactsect;
