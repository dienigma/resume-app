import React from "react";
import { Link } from "react-router-dom";
const Awards = () => {
  return (
    <section
      className="section has-background-white"
      style={{ marginTop: "10px" }}
    >
      <div className="container">
        <h1 className="title">
          Awards, Events And Publications
          <Link to="/editAwards" className="button is-primary is-pulled-right">
            Edit
          </Link>
        </h1>
      </div>
    </section>
  );
};

export default Awards;
