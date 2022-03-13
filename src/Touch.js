import React from 'react'
import {Carousel} from '3d-react-carousal';
const Touch = () => {  let slides = [
    
    <img  src="https://picsum.photos/900/600/?random" alt="1" />,
    <img  src="https://picsum.photos/900/601/?random" alt="2" />  ,
    <img  src="https://picsum.photos/900/602/?random" alt="3" />  ,
    <img  src="https://picsum.photos/900/603/?random" alt="4" />  ,
    <img src="https://picsum.photos/900/604/?random" alt="5" /> 
  ];
  return (
    <div>

<Carousel slides={slides} autoplay={false} interval={5000}/>
    </div>
  )
}

export default Touch