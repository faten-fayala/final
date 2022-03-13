import React,{useState} from 'react'
import TouchCarousel from 'react-touch-carousel'
//import Reactcardstack from "react-cards-stack";
 import { Carousel } from 'react-responsive-carousel';
 import Reactcardstack from 'react-cards-stack'
const BeforeAfterCarousel = () => {
// const [isopen, setIsOpen] = useState(false)
//   const  onTinderSwipe=()=> {
//        Tinder.swipe();
//       }
//       const   onToggle=() =>{
//        setIsOpen(!isopen);
//       }
    
//      const stackEnd=(e)=> {
//         console.log("e");
//       }
const [first, setfirst] = useState(false)
    const arr = [
       "https://thumbs.dreamstime.com/b/fond-de-coeur-d-amour-d-arc-en-ciel-60045149.jpg",
  
       "https://thumbs.dreamstime.com/b/fond-de-coeur-d-amour-d-arc-en-ciel-60045149.jpg",
   
        // "https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg",
        // "https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg",
        // "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg",
        // "https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg"
      ];

  return (
    <div>BeforeAfterCarousel
                {/* <Reactcardstack
          images={arr}
          infinite={true}
          effect={"krisna"}
          direction={"topRight"}
          query={"this is stacked cards"}
          onstackendfn={stackEnd}
        />  */}
         <Reactcardstack images={arr} />
   
    </div>
  )
}

export default BeforeAfterCarousel