import React from "react";

const Header = () => {
  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
      style={{ margin: "10px" }}
    >
      <div className="navbar-brand" style={{ marginLeft: "10px" }}>
        <a className="navbar-item">Flexiple</a>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item button is-primary "
          style={{ margin: "10px" }}
        >
          Download
        </a>
        <a
          className="navbar-item button is-primary "
          style={{ margin: "10px" }}
        >
          Share
        </a>
        <a className="navbar-item button " style={{ margin: "10px" }}>
          logout
        </a>
      </div>
    </nav>
  );
};

export default Header;
