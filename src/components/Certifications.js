import React from "react";
import { Link } from "react-router-dom";
const Certifications = () => {
  return (
    <section
      className="section has-background-white"
      style={{ marginTop: "10px" }}
    >
      <div className="container">
        <h1 className="title">
          Certifications
          <Link
            to="/editCertifications"
            className="button is-primary is-pulled-right"
          >
            Edit
          </Link>
        </h1>
      </div>
    </section>
  );
};

export default Certifications;
