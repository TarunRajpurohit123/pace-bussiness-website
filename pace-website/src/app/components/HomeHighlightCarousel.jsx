"use client";

// components/Carousel3D.js
import React, { useEffect, useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";

export default function HomeHighlightCarousel() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      key: 1,
      content: <img src="https://picsum.photos/1500/801/?random" alt="1" />,
    },
    {
      key: 2,
      content: <img src="https://picsum.photos/1500/801/?random" alt="2" />,
    },
    {
      key: 3,
      content: <img src="https://picsum.photos/1500/801/?random" alt="3" />,
    },
    {
      key: 4,
      content: <img src="https://picsum.photos/1500/801/?random" alt="4" />,
    },
    {
      key: 5,
      content: <img src="https://picsum.photos/1500/801/?random" alt="5" />,
    },
  ];

  useEffect(() => {
    // Set up an interval to update the state every second (1000 milliseconds)
    const interval = setInterval(() => {
      const ThreeNext = document.getElementById("3dNext");
      if (ThreeNext) {
        ThreeNext?.click();
      }
    }, 4000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="home__high__carousel">
        <div className="highlightC__inner page-width">
          <h1>Higlights of the Year</h1>
          <p>
            Founded in 2015 with the launch of Cot and Candy,
            <br /> <span>PACE</span> Ecommerce Ventures Ltd.
          </p>
        </div>
      </section>
      <div
        className="page-width"
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
            onClick={() =>
              setIndex((index - 1 + slides.length) % slides.length)
            }
            style={{ marginRight: "10px" }}
          >
            Prev
          </button>
          <button
            id="3dNext"
            onClick={() => setIndex((index + 1) % slides.length)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
