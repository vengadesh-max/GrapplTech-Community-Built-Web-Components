import React from "react";

function JoinUs() {
  return (
    <div className="container">
      <div className="row text-center mb-5">
        <h2 style={{ color: "#0956ca" }}>
          Join Us in Building the Future: Contribute to GrapplTech!{" "}
        </h2>
        <p className="text-muted fs-5 mb-5">
          We welcome your passion and creativity! Please fill out the
          application form below so that our team can reach out to you. By
          participating in this initiative, you will gain valuable experience,
          and we will recognize your efforts with a certificate that you can
          proudly add to your resume and coursework.
        </p>
        <p className="text-muted fs-5 mb-3">
          The main advantage of this contribution is that it is considered as an
          internship experience, allowing you to receive a certificate upon
          completion. This certificate can be a valuable addition to your resume
          and coursework, showcasing your skills and dedication. Ready to make
          an impact? Apply now and become a part of the GrapplTech community!
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto", backgroundColor: "#0956ca" }}
        >
          Click here to apply
        </button>
      </div>
    </div>
  );
}

export default JoinUs;
