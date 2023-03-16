import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function Gallery() {
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
              <img src="https://inspyria.com/storage/media/2021/02/chelsea-shapouri-kEF2XCBE4TY-unsplash-4-medium_large.jpg" />
            </div>
            <div
              className="gallery-item obfuscateLink"
              data-num="1"
              data-ref="aHR0cHM6Ly9pbnNweXJpYS5jb20vZW4vZ2FsbGVyeS8yMS1kaWFzLXJldGlyby1wcm9mdW5kby1kZXRveC1heXVydmVkaWNvLW1lZGl0YWNpb24teS15b2dhLTE="
            >
              <img src="https://inspyria.com/storage/media/2021/02/Canales-yoga-youtube-medium_large.jpg" />
            </div>
            <div
              className="gallery-item obfuscateLink"
              data-num="2"
              data-ref="aHR0cHM6Ly9pbnNweXJpYS5jb20vZW4vZ2FsbGVyeS8yMS1kaWFzLXJldGlyby1wcm9mdW5kby1kZXRveC1heXVydmVkaWNvLW1lZGl0YWNpb24teS15b2dhLTE="
            >
              <img src="https://inspyria.com/storage/media/2021/02/Pranayama-medium_large.jpg" />
            </div>
            <div
              className="gallery-item obfuscateLink"
              data-num="3"
              data-ref="aHR0cHM6Ly9pbnNweXJpYS5jb20vZW4vZ2FsbGVyeS8yMS1kaWFzLXJldGlyby1wcm9mdW5kby1kZXRveC1heXVydmVkaWNvLW1lZGl0YWNpb24teS15b2dhLTE="
            >
              <img src="https://inspyria.com/storage/media/2021/02/main-medium_large.jpg" />
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-retreat-mbl">
        <Carousel showThumbs={false} showArrows={true} centreMode={true}>
          <div className="carousel-item-mbl mt-12">
            <img
              className="block"
              src="https://inspyria.com/storage/media/2021/02/joven-deportiva-practica-yoga-meditacion-playa-cerca-oceano_97712-3980-large.jpg"
              alt="First slide"
            />
          </div>

          <div className="carousel-item-mbl">
            <img
              className="block"
              src="https://inspyria.com/storage/media/2021/09/WhatsApp%20Image%202021-07-05%20at%2016.02.43-2-large.jpeg"
              alt="Second slide"
            />
          </div>

          <div className="carousel-item-mbl">
            <img
              className="block"
              src="https://inspyria.com/storage/media/2021/08/WhatsApp%20Image%202021-08-30%20at%2011.15.52-large.jpeg"
              alt="Third slide"
            />
          </div>
          
        </Carousel>
      </section>
    </>
  );
}
