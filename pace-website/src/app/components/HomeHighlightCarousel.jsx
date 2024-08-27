"use client";

// components/Carousel3D.js
import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";

export default function HomeHighlightCarousel() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      key: 1,
      content: (
        <img
          src="about_cta_bg.png"
          alt="1"
          style={{ width: "100%", height: "100%" }}
        />
      ),
    },
    {
      key: 2,
      content: (
        <img
          src="about_cta_bg.png"
          alt="2"
          style={{ width: "100%", height: "100%" }}
        />
      ),
    },
    {
      key: 3,
      content: (
        <img
          src="about_cta_bg.png"
          alt="3"
          style={{ width: "100%", height: "100%" }}
        />
      ),
    },
    {
      key: 4,
      content: (
        <img
          src="about_cta_bg.png"
          alt="4"
          style={{ width: "100%", height: "100%" }}
        />
      ),
    },
    {
      key: 5,
      content: (
        <img
          src="about_cta_bg.png"
          alt="5"
          style={{ width: "100%", height: "100%" }}
        />
      ),
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        margin: "auto",
        position: "relative",
      }}
    >
      <Carousel
        slides={slides}
        goToSlide={index}
        offsetRadius={2}
        showNavigation={true}
        animationConfig={config.gentle}
      />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={() => setIndex((index - 1 + slides.length) % slides.length)}
          style={{ marginRight: "10px" }}
        >
          Prev
        </button>
        <button onClick={() => setIndex((index + 1) % slides.length)}>
          Next
        </button>
      </div>
    </div>
  );
}

// export default function HomeHighlightCarousel() {
//   return (
//     <>
//       <section className="home__high__carousel">
//         <div className="highlightC__inner page-width">
//           <h1>Higlights of the Year</h1>
//           <p>
//             Founded in 2015 with the launch of Cot and Candy,
//             <br /> <span>PACE</span> Ecommerce Ventures Ltd.
//           </p>
//         </div>
//       </section>

//     </>
//   );
// }
