import React from "react";
import pattern from "./images/patternbaf.png";
import patternblue from "./images/patternblue.png";
const Programs = () => {
  return (
    <div className="section-elements">
      <img src={pattern} alt="" className="pattern" />
      <img src={patternblue} alt="" className="pattern-blue" />
      <div className="element">
        <h1 className="title">Programs</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
          saepe maxime deserunt veritatis tempore totam hic vitae sapiente harum
          nihil.
        </p>
        <button className="btn">Book online one to one sessions</button>
      </div>

      <div>carousel</div>
    </div>
  );
};

export default Programs;
