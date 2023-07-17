// import React, { useState } from "react";
// import CarouselCard from "../../../Components/CarouselCard/CarouselCard";
// import logo1 from "../../../Assets/carousel/img1.png";
// import logo2 from "../../../Assets/carousel/img2.png";
// import logo3 from "../../../Assets/carousel/img3.png";
// import "./Carousel.css";

// const Carousel = () => {
//   const elements = [
//     {
//       logo: logo1,
//       heading: "Letters",
//       cardno: "1",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
//     },
//     {
//       logo: logo2,
//       heading: "Letters",
//       cardno: "2",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
//     },
//     {
//       logo: logo3,
//       heading: "Letters",
//       cardno: "3",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
//     },
//     {
//       logo: logo3,
//       heading: "Letters",
//       cardno: "4",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
//     },
//   ];

//   const [active, setActive] = useState(1);

//   const btnpressprev = () => {
//     let box = document.querySelector(".carousel_container");
//     let scrollwidth = box.clientWidth > 430 ? 430 : box.clientWidth - 80;
//     box.scrollLeft = box.scrollLeft - scrollwidth;
//     if (active - 1 > 0) {
//       setActive(active - 1);
//     }
//   };

//   const btnpressnext = () => {
//     let box = document.querySelector(".carousel_container");
//     let scrollwidth = box.clientWidth > 430 ? 430 : box.clientWidth - 80;
//     let maxScroll = box.clientWidth > 430 ? 2 : 3;

//     box.scrollLeft = box.scrollLeft + scrollwidth;
//     if (active + 1 <= 2) {
//       setActive(active + 1);
//     }
//   };
//   return (
//     <div className="carousel">
//       <div className="carousel_container">
//         {elements.map((element) => (
//           <CarouselCard
//             active={active}
//             btnpressnext={btnpressnext}
//             btnpressprev={btnpressprev}
//             cardno={element.cardno}
//             logo={element.logo}
//             heading={element.heading}
//             content={element.content}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;


import React, { useState } from "react";
import CarouselCard from "../../../Components/CarouselCard/CarouselCard";
import logo1 from "../../../Assets/carousel/img1.png";
import logo2 from "../../../Assets/carousel/img2.png";
import logo3 from "../../../Assets/carousel/img3.png";
import "./Carousel.css";

const Carousel = () => {
  const elements = [
    {
      logo: logo1,
      heading: "Letters",
      cardno: "1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  ",
    },
    {
      logo: logo2,
      heading: "Letters",
      cardno: "2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      logo: logo3,
      heading: "Letters",
      cardno: "3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
    },
    {
      logo: logo3,
      heading: "Letters",
      cardno: "4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    },
  ];

  const [active, setActive] = useState(1);

  const btnpressprev = () => {
    let box = document.querySelector(".carousel_container");
    let scrollwidth = box.clientWidth > 430 ? 430 : box.clientWidth - 80;
    box.scrollLeft = box.scrollLeft - scrollwidth;
    if (active - 1 > 0) {
      setActive(active - 1);
    }
  };

  const btnpressnext = () => {
    let box = document.querySelector(".carousel_container");
    let scrollwidth = box.clientWidth > 430 ? 430 : box.clientWidth - 80;
    let maxScroll = box.clientWidth > 430 ? 2 : 3;

    box.scrollLeft = box.scrollLeft + scrollwidth;
    if (active + 1 <= 2) {
      setActive(active + 1);
    }
  };
  return (
    <div className="carousel">
      <div className="carousel_container">
        {elements.map((element) => (
          <CarouselCard
            active={active}
            btnpressnext={btnpressnext}
            btnpressprev={btnpressprev}
            cardno={element.cardno}
            logo={element.logo}
            heading={element.heading}
            content={element.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
