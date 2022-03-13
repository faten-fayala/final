import React, { useEffect, useState } from 'react';
import logo from "../images/logo.png";
import fahmibfit from "../images/fahmibfit.png";
import { Link } from "react-router-dom";
const Navbar = () => {
const [scrolled, setScrolled] = useState(false)
useEffect(() => {
 window.addEventListener('scroll', ()=>{
        const isTop = window.scrollY < 100
        if(isTop !== true){
          setScrolled(true)
        }else{
          setScrolled(false)
        }
    })
}, [])

  return <div className={scrolled? "navbar-dreamhouse-scrolled": "navbar-dreamhouse"}>
     <div className="navb">
     <Link to='/'> <div >
          <img className="logo" src={logo} alt="" />
          <img src={fahmibfit} alt="" />
        </div>
     </Link> 
        <div>
        <Link to="/programs" className="navi">Programs</Link>
        <Link to="/contact" className="navi">About us</Link>
        <Link to="/contact" className="navi">Contact</Link>
        </div>
  </div>
  </div>
 
};

export default Navbar;
