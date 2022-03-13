// import React, { useRef } from "react";
// import "swiper/swiper.scss";
// import "../styles.css";
// import SwiperCore, {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
//   Lazy
// } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   MdKeyboardArrowRight as RightIcon,
//   MdKeyboardArrowLeft as LeftIcon
// } from "react-icons/md";

// SwiperCore.use([Navigation, Pagination, Lazy, A11y, Scrollbar]);

// export default function MySwiper({ Component, data, title, id }) {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);
//   const pagRef = useRef(null);

//   return (
//     <div style={{ paddingBottom: "2rem", paddingTop: "1rem" }} id={id}>
//       <div className="navi">
//         <h1>{title}</h1>
//         <div ref={pagRef}>PAG</div>
//         <div
//           ref={prevRef}
//           style={{
//             border: "1ox solid",
//             cursor: "pointer",
//             display: "grid",
//             placeItems: "center",
//             lineHeight: 0
//           }}
//         >
//           <LeftIcon size={40} />
//         </div>
//         <div
//           ref={nextRef}
//           style={{
//             border: "1ox solid",
//             cursor: "pointer",
//             display: "grid",
//             placeItems: "center",
//             lineHeight: 0
//           }}
//         >
//           <RightIcon size={40} />
//         </div>
//       </div>
//       <Swiper
//         spaceBetween={16}
//         slidesPerView={1}
//         pagination={{ dynamicBullets: true, clickable: true }}
//         navigation
//         lazy
//         scrollbar={{ draggable: true }}
//         onSwiper={(swiper) => console.log(swiper)}
//         onSlideChange={(e) => console.log("slide change:", e)}
//         loop
//         onInit={(swiper) => {
//           swiper.params.navigation.prevEl = prevRef.current;
//           swiper.params.navigation.nextEl = nextRef.current;
//           swiper.params.pagination.el = pagRef;
//           swiper.navigation.init();
//           swiper.navigation.update();
//           // swiper.pagination.init();
//           // swiper.pagination.update();
//         }}
//       >
//         {data.map((item) => (
//           <SwiperSlide>
//             <Component {...item} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
