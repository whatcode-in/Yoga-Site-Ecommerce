import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function BeachImages() {
  return (
    <>
      <section className="gallery-retreat">
        <div className="container gallery-container">
          <div className="gallery-grid">

          <div
           className="gallery-item obfuscateLink"
          >
          <iframe src="https://iframe.mediadelivery.net/embed/29925/112e36fc-b13e-45e0-aa6b-af3767e84cb5?autoplay=false&amp;preload=false"
            style={{width: "59%",height: "100%",position: "absolute",borderTopLeftRadius: "10px",borderBottomLeftRadius: "10px"}}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen="true"
            />
            </div>
{/* 
            <div
              className="gallery-item obfuscateLink"
              data-num="0"
               allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            >
              <img src="beach.jpg" />
            </div> */}
            <div
              className="gallery-item obfuscateLink"
              data-num="1"
              data-ref="aHR0cHM6Ly9pbnNweXJpYS5jb20vZW4vZ2FsbGVyeS8yMS1kaWFzLXJldGlyby1wcm9mdW5kby1kZXRveC1heXVydmVkaWNvLW1lZGl0YWNpb24teS15b2dhLTE="
            >
              <img src="beach_horses.jpeg" />
            </div>
            <div
              className="gallery-item obfuscateLink"
              data-num="2"
              data-ref="aHR0cHM6Ly9pbnNweXJpYS5jb20vZW4vZ2FsbGVyeS8yMS1kaWFzLXJldGlyby1wcm9mdW5kby1kZXRveC1heXVydmVkaWNvLW1lZGl0YWNpb24teS15b2dhLTE="
            >
              <img src="beach_ship.jpeg" />
            </div>
            <div
              className="gallery-item obfuscateLink"
              data-num="3"
              data-ref="aHR0cHM6Ly9pbnNweXJpYS5jb20vZW4vZ2FsbGVyeS8yMS1kaWFzLXJldGlyby1wcm9mdW5kby1kZXRveC1heXVydmVkaWNvLW1lZGl0YWNpb24teS15b2dhLTE="
            >
              <img src="beach_view.jpeg" />
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-retreat-mbl">
        <Carousel showThumbs={false} showArrows={true} centreMode={true}>
          <div>
        <iframe src="https://iframe.mediadelivery.net/embed/29925/112e36fc-b13e-45e0-aa6b-af3767e84cb5?autoplay=false&amp;preload=false"
            style={{width: "100%",height: "100%",marginTop: "5rem",marginLeft: "0",height: "200px"}}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen="true"
            />
            </div>


          <div className="carousel-item-mbl mt-12">
            
            <img
              className="block"
              src="beach_horses.jpeg"
              alt="First slide"
            />
          </div>

          <div className="carousel-item-mbl">
            <img
              className="block"
              src="beach_ship.jpeg"
              alt="Second Slide"
            />
          </div>

          <div className="carousel-item-mbl">
            <img
              className="block"
              src="beach_view.jpeg"
              alt="Third slide"
            />
          </div>
          
        </Carousel>
      </section>
    </>
  );
}