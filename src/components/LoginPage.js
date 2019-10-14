import React from "react";
import { Link } from "react-router-dom";
export default () => {
  return (
    <section className="hero is-primary is-large">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Resume App</h1>
          <h2 className="subtitle">Buiid resumes easily.</h2>
          <Link to="/resume" className="button is-primary is-inverted is-large">
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};
