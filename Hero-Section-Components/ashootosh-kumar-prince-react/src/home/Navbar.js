import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-light bg-light justify-content-between fixed-top">
      <a style={{ color: "black", marginLeft: "20px" }} href="">
        <i class="fa-solid fa-align-center fs-2"></i>
      </a>
      <h1 style={{ color: "#0956ca" }}>
        LEGO for Web Developers: Build Anything with Grabbit & Go{" "}
      </h1>
      <a style={{ color: "black" }} href="">
        <i class="fa-solid fa-moon fs-2"></i>
      </a>
      <form class="form-inline"></form>
    </nav>
  );
}

export default Navbar;
