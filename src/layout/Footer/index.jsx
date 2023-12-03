import React from 'react'
import "./footer.scss"
function Footer() {
  return (
    <div>
      <footer id='footer'>
        <div className="container">
          <div className="about">
            <h2>ABOUT ME</h2>
            <p>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills,</p>
            <p>Copyright ©2023 All rights reserved | This template is made with by Colorlib</p>
          </div>
          <div className="letter">
            <h2>NEWSLETTER</h2>
            <p>Stay updated with our latest trends</p>
            <div className="send">
            <input type="mail" placeholder='Enter e-mail' />
            <button><i class="fa-solid fa-right-long"></i> </button>
            </div>
          </div>
          <div className="follow">
            <h2>FOLLOW ME</h2>
            <p>_malik_abbasov_</p>
            <div className="icons">
            <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-square-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer