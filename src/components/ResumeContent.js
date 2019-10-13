import React from "react";
import About from "./About";
import Highlights from "./Highlights";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Awards from "./Awards";
const ResumeContent = () => {
  return (
    <div className="columns">
      <div className="column is-4" style={{ margin: "10px" }}>
        <About />
        <Highlights />
      </div>
      <div className="column" style={{ margin: "10px" }}>
        <Education />
        <Experience />
        <Skills />
        <Certifications />
        <Awards />
      </div>
    </div>
  );
};

export default ResumeContent;
