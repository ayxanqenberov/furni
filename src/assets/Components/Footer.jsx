// Footer.js
import React from 'react';
import "../scss/_footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Furni.</h4>
            <p>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae
              odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
              Aliquam vulputate velit imperdiet dolor tempor tristique.
              Pellentesque habitant
            </p>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4>About us</h4>
            <ul>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">Knowledge base</a>
              </li>
              <li>
                <a href="#">Live chat</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4>Jobs</h4>
            <ul>
              <li>
                <a href="#">Our team</a>
              </li>
              <li>
                <a href="#">Leadership</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4>Nordic Chair</h4>
            <ul>
              <li>
                <a href="#">Kruzo Aero</a>
              </li>
              <li>
                <a href="#">Ergonomic Chair</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
