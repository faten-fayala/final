import React from 'react';
import Certifications from '../Certifications';
import patterncircleblack from '../images/pattern-circle-black.png'
import patterncircle from '../images/pattern-circle.png'
const About = () => {
  return <div className="section-elements about">
    <img src={patterncircleblack} alt="" className="pattern-circle-black"/>
<div className="myPhoto">
 {/* <img src={patterncircle} alt="" className="pattern-circle"/> */}
 
</div>
<div>
<Certifications/>
</div>
  </div>;
};

export default About;
