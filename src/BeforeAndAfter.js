import React from 'react';
import BeforeAfter2 from './BeforeAfter2';
import BeforeAfterCarousel from './BeforeAfterCarousel';
import Card from './components/Card';
import beforeafter from './images/beforeafter.png'
import pattern from "./images/patternbaf.png";
import Touch from './Touch';
const BeforeAndAfter = () => {
  return <div className="section-elements">

<img src={beforeafter} alt="" className="zigzag"/>
<img src={pattern} alt="" className="pattern-blue" />
<div className="element">
  <h1 className="title-baf">Before and after</h1>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
    saepe maxime deserunt veritatis tempore totam hic vitae sapiente harum
    nihil.
  </p>
  <button className="btn">Get your own one to one training</button>
</div>

<div className="touch">
  {/* <Touch/> */}
 <Card/>
  </div>
</div>

};

export default BeforeAndAfter;
