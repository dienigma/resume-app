import React from "react";
import { connect } from "react-redux";
const About = ({ firstName, lastName, email, phone, location }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by4">
          <img
            className="is-rounded"
            src="https://bulma.io/images/placeholders/128x128.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{`${firstName} ${lastName}`}</p>
            <p className="subtitle is-6">{email}</p>
            <p className="subtitle is-6">{phone}</p>
            <p className="subtitle is-6">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    phone: state.phone,
    location: state.location
  };
};

export default connect(mapStateToProps)(About);
