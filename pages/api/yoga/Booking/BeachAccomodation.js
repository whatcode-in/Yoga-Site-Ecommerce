import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function GardenAccommodation() {
  return (
    <div id="alojamiento" className="white-box-lft white-box-tit">
            <h2>Accommodation</h2>
            <div className="carac-list">
              <ul>
                <li>
                  <div className="cara-lft">
                    <div className="ls-lft without-label">
                      <i className="icon tipo"></i>
                    </div>
                    <div className="ls-rgt">
                      <strong>Apartment</strong>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <ul className="facil-lst rerr">
              <li>
                <div style={{ position: "relative", marginBottom: "50px" }}>
                  <p className="vermas">
                    Two charming accommodations. One in Sotogrand, and another
                    one in a duplex penthouse in Manilva Playa. Only 6 minutes
                    between both. Wonderful panoramic views of the beach. Both
                    have a pool. Less than 10 minutes to get to the beach. Total
                    Number of Rooms: 8 double rooms that can be for individual
                    use as well. Each bedroom has its own bathroom.{" "}
                  </p>
                  <a className="vermas">
                    <span >View more</span>
                    <img
                      className="arrow-see-more"
                      src="https://inspyria.com/Themes/ETR/images/icons/arrow-down-gray.svg"
                      alt="View more"
                      title="View more"
                    />
                  </a>{" "}
                </div>

                <div>
                  <Carousel showThumbs={false} showArrows={true} centreMode={true}>

                      <div className="h-96 carousel-item" >
                      <img
                        className='block'
                        src="pool_beach.jpeg"
                        alt="First slide"
                       style={{objectFit:"fill",width:"100%"}}
                      />
                    </div>
                  

                      <div className="h-96 carousel-item">
                      <img
                        className='block'
                        src="room3.jpeg"
                        alt="Second slide"
                        style={{objectFit:"fill",width:"100%"}}
                      />
                      </div>
                    

                      <div className="h-96 carousel-item">
                      <img
                        className='block'
                        src="lobby.jpg"
                        alt="Third slide"
                        style={{objectFit:"fill",width:"100%"}}
                      />
                    </div>
                  </Carousel>

                  

                  
                </div>
              </li>
            </ul>

            <div className="room-title">Rooms</div>

            <ul className="aloj-list ">
              <li>
                <img
                  className=""
                  data-src="https://inspyria.com/storage/media/2021/06/ROOM DOUBLE 2-medium.jpg"
                  alt="Double room"
                  src="https://inspyria.com/storage/media/2021/06/ROOM DOUBLE 2-medium.jpg"
                />
                <h3 className='text-center font-semibold text-2xl'>Double room</h3>
                <div className="btn-open-room">
                  <a className="fancybox9826 show" href="#poup-txt9826">
                    View room
                  </a>
                </div>
              </li>
            </ul>
          </div>
  )
}