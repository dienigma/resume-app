import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Awards = ({ awards }) => {
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
        {awards.length > 0 && awards.map(award => <p>{award.title}</p>)}
      </div>
    </section>
  );
};

const mapStateToPros = state => {
  return {
    awards: state.awards
  };
};

export default connect(mapStateToPros)(Awards);
