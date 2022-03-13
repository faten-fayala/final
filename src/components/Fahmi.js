import React from 'react';
import BeforeAndAfter from '../BeforeAndAfter';
import Header from '../Header';
import Programs from '../Programs';
import About from './About';
import CalculateBmioriginal from './CalculateBmioriginal';
import Contact from './Contact';
import Main from './Main';
import Scroll from "./Scroll";
import Slideshow from '../Swipere'
import ScrollToTop from "react-scroll-to-top";
import Swipere from '../Swipere';
import CalculateBmi from './CalculateBmi';
import Touch from '../Touch';
import BeforeAfterCarousel from '../BeforeAfterCarousel';
import EmblaCarousel from '../emblaCarousel';
import Certifications from '../Certifications';
import Example from './Example'

const Fahmi = () => {
  return <div>

    {/* <Touch/> */}
    {/* <BeforeAfterCarousel/> */}
    {/* <Certifications/> */}
    {/* <EmblaCarousel /> */}
    {/* <Example/> */}
      <Header/>
      <Programs/>
      <About/>
      <BeforeAndAfter/>
      <Contact/>
      <CalculateBmi/>
      {/* <ScrollToTop smooth component={<Scroll/>}/> */}
   {/* <Swipere/> */}
  </div>;
};

export default Fahmi;
