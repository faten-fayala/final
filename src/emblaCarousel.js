// import React from "react";
// // import { useEmblaCarousel } from "embla-carousel-react";
// import useEmblaCarousel from 'embla-carousel-react'
// //import Autoplay from 'embla-carousel-autoplay'
// import styled from "@emotion/styled";

// const Container = styled.div`
//   background-color: #eeeeee;
//   height: auto;
//   padding: 30px;
// `;

// const EmblaContainer = styled.div`
//   display: flex;
//   width: 100%;
// `;

// const Slide = styled.div`
//   flex: 0 0 auto;
//   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
//     Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
//   font-size: 60px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: pink;
//   border-radius: 4px;
//   margin: auto 5px;
//   width: 80%;
//   height: 300px;
// `;

// const EmblaCarousel = () => {
//   // const [EmblaCarouselReact] = useEmblaCarousel({
//   //   loop: false,
//   //   dragFree: true
//   // });
 
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])
//   return (
//     // <Container>
//     //   <EmblaCarouselReact>
//     //     <EmblaContainer>
//     //       <Slide>WHAT</Slide>
//     //       <Slide>IF</Slide>
//     //       <Slide>YOU</Slide>
//     //       <Slide>CAROUSEL</Slide>
//     //     </EmblaContainer>
//     //   </EmblaCarouselReact>
//     // </Container>
//     <div className="embla" ref={emblaRef}>
//       <div className="embla__container">
//         <div className="embla__slide">Slide 1</div>
//         <div className="embla__slide">Slide 2</div>
//         <div className="embla__slide">Slide 3</div>
//       </div>
//     </div>
//   );
// };

// export default EmblaCarousel;