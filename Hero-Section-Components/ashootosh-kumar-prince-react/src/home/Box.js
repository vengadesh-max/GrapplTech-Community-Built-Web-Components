import React from "react";

function Box() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4 text-center">
          <i
            class="fa-solid fa-house fs-1 mb-3"
            style={{ color: "#0956ca" }}
          ></i>
          <h4>Mix and match like a coding fashionista</h4>
          <p className="text-muted fs-5 mt-3">
            Forget monolithic libraries, pick the exact components you need to
            build your dream website.
          </p>
        </div>
        <div className="col-4 text-center">
          <i
            class="fa-solid fa-bag-shopping fs-1 mb-3"
            style={{ color: "#0956ca" }}
          ></i>
          <h4>Stop writing the same code over and over (and over)</h4>
          <p className="text-muted fs-5 mt-3">
            Why waste time when the GrapplTech community has already done the
            heavy lifting? Snag those pre-built components and focus on what
            matters - making your website epic.
          </p>
        </div>
        <div className="col-4 text-center">
          <i
            class="fa-solid fa-mug-hot fs-1 mb-3"
            style={{ color: "#0956ca" }}
          ></i>
          <h4>Channel your inner couch potato coder</h4>
          <p className="text-muted fs-5 mt-3">
            Building websites shouldn't be a chore. Grab a cup of chai (or your
            beverage of choice) and browse our curated selection of web
            components.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Box;
