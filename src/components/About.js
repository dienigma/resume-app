import React from "react";

const About = () => {
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
            <p className="title is-4">John Doe</p>
            <p className="subtitle is-6">johnDoe@gmail.com</p>
            <p className="subtitle is-6">1233456789</p>
            <p className="subtitle is-6">Bangalore, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
