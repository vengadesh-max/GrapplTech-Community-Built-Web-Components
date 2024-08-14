import React from "react";

function ApplicationForm() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4 text-center">
          <i
            class="fa-regular fa-file-lines fs-1 mb-3"
            style={{ color: "#0956ca" }}
          ></i>
          <h3>Fill out the application form</h3>
          <p className="text-muted fs-5 mt-3">
            Provide your personal details, resume, and explain your motivation
            for contributing to GrapplTech.
          </p>
        </div>
        <div className="col-4 text-center">
          <i class="fa-solid fa-eye fs-1 mb-3" style={{ color: "#0956ca" }}></i>
          <h3>Review process</h3>
          <p className="text-muted fs-5 mt-3">
            Our team will carefully review your application and resume. You will
            be notified of the outcome within 1 week.
          </p>
        </div>
        <div className="col-4 text-center">
          <i
            class="fa-solid fa-medal fs-1 mb-3"
            style={{ color: "#0956ca" }}
          ></i>
          <h3>Certificate issuance</h3>
          <p className="text-muted fs-5 mt-3">
            Upon successful review and completion of your contribution, we will
            issue a certificate of appreciation. This will serve as an
            internship experience, enhancing your professional credentials.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ApplicationForm;
