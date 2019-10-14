import React from "react";
import { Link } from "react-router-dom";
const Experience = () => {
  return (
    <section
      className="section has-background-white"
      style={{ marginTop: "10px" }}
    >
      <div className="container">
        <h1 className="title">
          Experience
          <Link
            to="/editExperience"
            className="button is-primary is-pulled-right"
          >
            Edit
          </Link>
        </h1>
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec nisi
          vitae diam semper rutrum. Etiam non lectus sodales, rhoncus est
          mollis, interdum libero. Nullam vitae mattis urna. Etiam maximus
          mattis metus, ac euismod mi feugiat nec. Sed in leo purus. Donec eu
          convallis urna, sed venenatis eros. Fusce vestibulum varius libero,
          sit amet sollicitudin felis viverra et. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Ut mattis diam at purus pharetra
          vestibulum. Aenean tincidunt eros ac nulla dictum, in dapibus sapien
          interdum. Morbi diam erat, viverra vel tristique a, tempus quis nisl.
          Etiam sagittis erat eget dui tincidunt tempus.
        </p>
      </div>
    </section>
  );
};

export default Experience;
