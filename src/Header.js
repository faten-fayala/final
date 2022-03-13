import { Link } from "react-router-dom";
import React from "react";
import "./Header.css";
import fahmiimg from "./images/fahmi.png";
const Header = () => {
  return (
    <div className="section">
      <div className="intro">
        <hr />
        <h1>
          Your <h1 className="dream">Dream</h1> Body
        </h1>
        <h2>A few clicks away</h2>
      </div>
      <div className="programs">
        <ul>
        <Link to='/online-coaching'>  <button className="programs-btn"><li>Online coaching</li></button></Link>
        <Link to='/OnetoOneTraining'><button className="programs-btn"><li>One to One Training</li></button> </Link>
        <Link to='/Customize-diet-planner'><button className="programs-btn"> <li>Customize diet planner</li></button> </Link>
        <Link to='/Group-Training'><button className="programs-btn"> <li>Group Training</li></button> </Link>
        </ul>
      </div>
      <img className="icon"src='./icon.png'/>
      <div className="text">
        <h1>Our programs</h1>
        <hr />
      </div>

      <div className="header">
        <img className="imgfahmi" src={fahmiimg} alt="" />
        <div className="blue">
          <div className="jaune"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
