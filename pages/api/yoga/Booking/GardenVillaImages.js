import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function GardenVillaImages() {
  return (
    <>
      <section className="gallery-retreat">
        <div className="container gallery-container">
          <div className="gallery-grid">
            <div
              className="gallery-item obfuscateLink"
              data-num="0"
              data-ref="aHR0cHM6Ly9pbnNweXJpYS5jb20vZW4vZ2FsbGVyeS8yMS1kaWFzLXJldGlyby1wcm9mdW5kby1kZXRveC1heXVydmVkaWNvLW1lZGl0YWNpb24teS15b2dhLTE="
            >
              <img src="house_view.jpeg" />
            </div>
            <div
              className="gallery-item obfuscateLink"
              data-num="1"
              data-ref="aHR0cHM6Ly9pbnNweXJpYS5jb20vZW4vZ2FsbGVyeS8yMS1kaWFzLXJldGlyby1wcm9mdW5kby1kZXRveC1heXVydmVkaWNvLW1lZGl0YWNpb24teS15b2dhLTE="
            >
              <img src="hill.jpeg" />
            </div>
            <div
              className="gallery-item obfuscateLink"
              data-num="2"
              data-ref="aHR0cHM6Ly9pbnNweXJpYS5jb20vZW4vZ2FsbGVyeS8yMS1kaWFzLXJldGlyby1wcm9mdW5kby1kZXRveC1heXVydmVkaWNvLW1lZGl0YWNpb24teS15b2dhLTE="
            >
              <img src="detox.jpg" />
            </div>
            <div
              className="gallery-item obfuscateLink"
              data-num="3"
              data-ref="aHR0cHM6Ly9pbnNweXJpYS5jb20vZW4vZ2FsbGVyeS8yMS1kaWFzLXJldGlyby1wcm9mdW5kby1kZXRveC1heXVydmVkaWNvLW1lZGl0YWNpb24teS15b2dhLTE="
            >
              <img src="bottles.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-retreat-mbl">
        <Carousel showThumbs={false} showArrows={true} centreMode={true}>
          <div className="carousel-item-mbl mt-12">
            <img
              className="block"
              src="house_view.jpeg"
              alt="First slide"
            />
          </div>

          <div className="carousel-item-mbl">
            <img
              className="block"
              src="hill.jpeg"
              alt="Second slide"
            />
          </div>

          <div className="carousel-item-mbl">
            <img
              className="block"
              src="detox.jpg"
              alt="Third slide"
            />
          </div>
          
        </Carousel>
      </section>
    </>
  );
}