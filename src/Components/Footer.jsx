import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import img1 from "../images/logo3.png"
import { NavLink } from "react-router-dom";



function Footer() {
  return (
    <>
      <footer className="footer p-0">
        <div className="nav1 p-0">
          <div className="space"></div>
          <a className="logo-menu" href="index.html">
            <img className="logo-image" src={img1} alt="logo" />
          </a>
          <div className="navigacia1">
            <div className="foot-social-icon">
              <a href="www.facebook.com"> <img src="https://img.icons8.com/fluency/45/000000/facebook-new.png" /></a>
              <a href="https://instagram.com/muaz.shahzad?utm_medium=copy_link"> <img src="https://img.icons8.com/cute-clipart/45/000000/instagram-new.png" /></a>
              <a href="tel:+923032195673"> <img src="https://img.icons8.com/color/45/000000/whatsapp--v1.png" /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer;