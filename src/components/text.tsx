// import Slider from "react-slick";
// import { CardSmall } from "./small-card";
// import "../../../style/slick.scss";
// import "../../../style/slick-theme.scss";
// import React, { useEffect, useState } from "react";
// import { API_SERVER_1 } from "../../../config/constant";
// import axios from "axios";
// import { Spinner } from "react-bootstrap";

// export const CardSmallSlider: React.FC = () => {
//   const sliderRef = React.createRef<Slider>();
//   const [data, setData] = useState<any>([]);
//   const [slidesToScroll, setSlidesToScroll] = useState<number>(1);

//   async function getData() {

//     const axiosInstance = axios.create({
//       baseURL: `${API_SERVER_1}`,
//       headers: { "Content-Type": "application/json" },
//     });
//     try {
//       axiosInstance
//         .get(`blogs/`)
//         .then((data) => {
//           if (data) {
//             setData(data.data);
//             if (data.data?.length <= 4) {
//               setSlidesToScroll(data.data?.length);
//             } else {
//               setSlidesToScroll(4);
//             }
//           } else {
//             console.log("Not Authorized");
//           }
//         })
//         .catch((e) => {});
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   const settings = {
//     dots: false,
//     infinite: true,
//     arrow: false,
//     speed: 1000,
//     slidesToShow: slidesToScroll,
//     slidesToScroll: 1,

//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false,
//         },
//       },
//       {
//         breakpoint: 800,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 700,
//         settings: {
//           slidesToShow: 1.5,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
  
//   return (
//     <div className="smallCardSlider">
//       <div className="flex justify-between mb-2">
//         <div
//           className="Heading  d-flex flex-row"
//           style={{ fontSize: "28px", fontWeight: "600" }}
//         >
//           News
//         </div>
//         <div className="arrows d-flex flex-row justify-content-end">
//           <button
//             onClick={() => {
//               sliderRef.current?.slickPrev();
//             }}
//             className="px-3 py-2 m-1"
//             style={{
//               backgroundColor: "#F2f2f2",
//               borderRadius: "100px",
//               border: "none",
//             }}
//           >
//             <svg
//               width="12"
//               height="16"
//               viewBox="0 0 10 16"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M7.50001 15.5L9.26251 13.7375L3.53751 8L9.26251 2.2625L7.50001 0.5L1.23978e-05 8L7.50001 15.5Z"
//                 fill="#8D8D8D"
//               />
//             </svg>
//           </button>
//           <button
//             onClick={() => {
//               sliderRef.current?.slickNext();
//             }}
//             className="px-3 py-2 m-1"
//             style={{
//               backgroundColor: "#F2f2f2",
//               borderRadius: "100px",
//               border: "none",
//             }}
//           >
//             <svg
//               width="12"
//               height="16"
//               viewBox="0 0 10 16"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M2.49999 0.5L0.737488 2.2625L6.46249 8L0.737488 13.7375L2.49999 15.5L9.99999 8L2.49999 0.5Z"
//                 fill="#8D8D8D"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {data.length === 0 ? (
//         <div className="container mt-5 pt-5" style={{ maxWidth: "100px" }}>
//           <Spinner animation="border" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </Spinner>
//         </div>
//       ) : (
//         <Slider {...settings} ref={sliderRef}>
//           {data.map((value: any, index: number) => {
//             return <CardSmall card={value} />
//           })}
//         </Slider>
//       )}
//     </div>
//   );
// };
