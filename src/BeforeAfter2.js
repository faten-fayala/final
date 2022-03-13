import { borderRadius } from '@mui/system';
import React, { useState } from 'react'
import ReactDOM from "react-dom";
import ItemsCarousel from "react-items-carousel";
const BeforeAfter2 = () => {
    const [active, setaAtive] = useState(0);
  return (
    <div>
            <ItemsCarousel
        infiniteLoop={false}
        gutter={6}//space between image
        activePosition={"center"}
        chevronWidth={60}
        disableSwipe={false}
        alwaysShowChevrons={true}
        numberOfCards={2}
        slidesToScroll={1}
        outsideChevron={true}
        showSlither={false}
        firstAndLastGutter={false}
        activeItemIndex={active}
        requestToChangeActive={value => setaAtive(value)}
        rightChevron={">" }
        leftChevron={"<"}
   
        // leftChevron={<button>{'<'}</button>}
        // rightChevron={<button>{'>'}</button>}
      >
        {/* {Array.from(new Array(10)).map((_, i) => (
          <div
            key={i}
            style={{
              height: 400,
              background: "url(https://placeimg.com/380/200/nature)"
            }}
          />
        ))} */}
        <div style={{ width:500,height: 400, background: '#EEE', borderRadius:8}}>First card</div>
        <div style={{ width:500,height: 400, background: '#EEE'  ,borderRadius:8}}>Second card</div>
        <div style={{ width:500,height: 400, background: '#EEE',borderRadius:8 }}>Third card</div>
        <div style={{ width:500,height: 400, background: '#EEE',borderRadius:8 }}>Fourth card</div>
         {/* <img  height = "400"  src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/02/Before-After-Comparison-Slider-With-Touch-Support.jpg?fit=814%2C591&ssl=1"/>
         <img height = "400" src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/02/Before-After-Comparison-Slider-With-Touch-Support.jpg?fit=814%2C591&ssl=1"/>
         <img height = "400"src="https://thumbs.dreamstime.com/b/fond-de-coeur-d-amour-d-arc-en-ciel-60045149.jpg"/>
         <img height = "400" src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/02/Before-After-Comparison-Slider-With-Touch-Support.jpg?fit=814%2C591&ssl=1"/> */}
      </ItemsCarousel>
    </div>
  )
}

export default BeforeAfter2