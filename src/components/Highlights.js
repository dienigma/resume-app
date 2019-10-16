import React from "react";
import { connect } from "react-redux";
const Highlights = ({ highlights }) => {
  return (
    <div className="card">
      <div className="card-content">
        <p className="title">Highlights</p>
        <div className="content">
          {highlights.map(highlight => (
            <em>{highlight}</em>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    highlights: state.highlights
  };
};
export default connect(mapStateToProps)(Highlights);
