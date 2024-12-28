import React from "react";

function Footer() {
  return (
    <div
      className="container-fluid mt-4"
      style={{ backgroundColor: "#000000CC" }}
    >
      <div className="row">
        <div
          className="col-3 mt-4"
          style={{ color: "white", marginLeft: "80px" }}
        >
          <h1>All Rights Reserved</h1>
          <p>&copy; Copyright 2024 | GrapplTech</p>
        </div>
        <div className="col-3 fs-6 mt-3" style={{ color: "#97989B" }}>
          <p>Roshini Tech Hub, PFS Club House,</p>
          <br />
          <p>Marathahalli Main Rd, R.J.Gardens,</p>

          <p>Bengaluru, Karnataka 560037</p>
        </div>
        <div className="col-3 fs-6 mt-3" style={{ color: "#97989B" }}>
          <p>Mail : support@grappl.tech</p>
          <br />
          <p>careers@grappl.tech</p>

          <p>Phone : +91 XXXXXXXXXX</p>
        </div>
        <div className="col-2" id="social-link">
          <a href="https://www.linkedin.com/in/ashootoshkumar/">
            <i class="fa-brands fa-linkedin fs-1 mt-5"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-twitter fs-1"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-telegram fs-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
