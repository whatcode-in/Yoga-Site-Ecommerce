import React from 'react'
import { X } from 'react-feather';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function GardenAccommodation() {

  const [showMore,setShowMore] = React.useState(false)
  const [openModal1,setOpenModal1] = React.useState(false)
  const [openModal2,setOpenModal2] = React.useState(false)
  const [openModal3,setOpenModal3] = React.useState(false)

  const toggleModal1 = () => {
    setOpenModal1(!openModal1);
  };

  const toggleModal2 = () => {
    setOpenModal2(!openModal2)
  }

  const toggleModal3 = () => {
    setOpenModal3(!openModal3)
  }

  {/*Modal1 */}
  function Modal1(){
    return (
      <div className="z-50 mt-2 fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-20 md:mt-5  h-screen overflow-y-auto ">
    <div className="lg:h-4/5 md:h-auto bg-white rounded-lg shadow-lg max-w-4xl w-full md:flex">
      <div className="md:w-3/4 beach-popup-images">

      <Carousel className='beach-popup-carousel' showThumbs={false} showArrows={true} centreMode={true} >
        {/* Left side content */}
          <li className="beach-popup-image-list" aria-hidden="true" style={{width: "100%"}}>
            <img  data-src="https://inspyria.com/storage/media/2021/06/DUPLEX BATHROOM SHARED-medium_large.jpg" alt="Suite room" src="https://inspyria.com/storage/media/2021/06/DUPLEX BATHROOM SHARED-medium_large.jpg" draggable="false" />
        </li>
        <li style={{ width: "100%" }} className="beach-popup-image-list">
          <img  data-src="https://inspyria.com/storage/media/2023/03/2f608125-dc04-4ae1-8ea8-ec38fd3d3b40-medium_large.jpg" alt="Suite room" src="https://inspyria.com/storage/media/2023/03/2f608125-dc04-4ae1-8ea8-ec38fd3d3b40-medium_large.jpg" draggable="false" />
        </li>
        <li style={{ width: "100%"}} className="beach-popup-image-list">
          <img  data-src="https://inspyria.com/storage/media/2023/03/6a34a754-1d82-4ff8-8db6-9c75e25bf169-medium-medium_large.jpg" alt="Suite room" src="https://inspyria.com/storage/media/2023/03/6a34a754-1d82-4ff8-8db6-9c75e25bf169-medium-medium_large.jpg" draggable="false" />
        </li>
        <li style={{ width: "100%" }} className="beach-popup-image-list">
            <img  data-src="https://inspyria.com/storage/media/2023/03/4d2a10ab-8183-4146-b68a-9ca982a37328-medium_large.jpg" alt="Suite room" src="https://inspyria.com/storage/media/2023/03/4d2a10ab-8183-4146-b68a-9ca982a37328-medium_large.jpg" draggable="false" />
        </li>
        <li style={{ width: "100%" }} className="beach-popup-image-list">
            <img  data-src="https://inspyria.com/storage/media/2021/06/DUPLEX SUITE 1-medium_large.jpg" alt="Suite room" src="https://inspyria.com/storage/media/2021/06/DUPLEX SUITE 1-medium_large.jpg" draggable="false" />
        </li>
        <li style={{  width: "100%" }} className="beach-popup-image-list">
          <img  data-src="https://inspyria.com/storage/media/2021/06/DUPLEX SUITE LR-medium_large.jpg" alt="Suite room" src="https://inspyria.com/storage/media/2021/06/DUPLEX SUITE LR-medium_large.jpg" draggable="false" />
        </li>
   
      </Carousel>

      </div>
      <div className="beach-popup-scroll md:w-2/6 md:flex-shrink-0 md:border-l md:border-gray-200 overflow-y-auto">
        {/* Right side content */}
        <div className=" p-4 md:p-6 lg:h-full lg:overflow-y-scroll">
          <div className="flex justify-end">
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={toggleModal1}
            >
              <X size={24} />
            </button>
          </div>



        <div className="popup-title">
                                    <h2>Suite room</h2>
                    <ul className="carac-list-popup">
              <li><img style={{width: "30px",height: "30px"}} alt="personas" className="icon-room-modal" data-src="https://inspyria.com/Themes/ETR//images/icons/plazas-min.png" src="https://inspyria.com/Themes/ETR//images/icons/plazas-min.png"/> 2 people per room</li>
                                                    
        <li><img style={{width: "30px",height: "30px"}} alt="cama" className="icon-room-modal" data-src="https://inspyria.com/Themes/ETR//images/icons/camaindividual-min.png" src="https://inspyria.com/Themes/ETR//images/icons/camaindividual-min.png"/>
                                                                    Double Bed                                                            </li>
                        
                        

                    </ul>
                                </div>

          <div className='popup-amenities'>
            <h2>Amenities</h2>
            <ul className='popup-amenities-list'>
              <li>WiFi</li>
              <li>Private Bathroom</li>
              <li>Toiletries</li>
              <li>Views of Nature</li>
              <li>Sheets</li>
              <li>Towels</li>
              <li>Blankets</li>
              <li>Soap</li>
              
            </ul>

            <div className='popup-amenities-description mt-2'>
            Beautiful room with great space and luminosity. Penthouse. It includes a private living room, Beautiful Sea Views, a spacious bathroom with a shower and a hydromassage bathtub. Dressing room.
            </div>

            <div className="info-purchase mt-2">

            <div className="icon-purchase bed">
                <img style={{width: "22px",marginRight:'0.5rem'}} data-src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png" src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png"/>
                <span>Shared</span>
            </div>
            <div className="icon-purchase person">
                <img style={{width: "22px",marginRight:'0.5rem'}} class="" data-src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png" src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png"/>
                <span data-textsingle="Spot" data-textplural="Spots">4 Spots</span>
            </div>
            <div className="icon-purchase date">
                <img style={{width: "22px",marginRight:'0.5rem'}} className="" data-src="https://inspyria.com/Themes/ETR/images/icons/fechas-min.png" src="https://inspyria.com/Themes/ETR/images/icons/fechas-min.png"/>
                <span>Invalid date - Invalid date</span>
            </div>
            <div className="icon-purchase price ">
                <img style={{width: "22px",marginRight:'0.5rem'}} className="" data-src="https://inspyria.com/Themes/ETR/images/icons/dinero-min.png" src="https://inspyria.com/Themes/ETR/images/icons/dinero-min.png"/>
                <span data-text="Total Price">€2700 Total Price</span>
            </div>
                    
            </div>

          </div>

          <div className="proteccion-datos">
                        <img style={{width: "50px"}} data-src="https://inspyria.com/Themes/ETR//images/org-confianza-min.png" src="https://inspyria.com/Themes/ETR//images/org-confianza-min.png"/>
                        <p style={{marginLeft: "1rem"}}>You can trust <span class="orange">Mava Vida</span>! Your information is safe and secure with us. </p>
                    </div>
            <div className="cta-box">
                  <a
                    className="fancyboxContacto show dskbtn"
                    href="https://yoga-site-six.vercel.app/contact-us"
                  >
                    Send question
                  </a>
                  {/* <button type="submit" className="submit submit-green">
                    Reserve
                  </button> */}
                </div>
               

          
        </div>
      </div>
    </div>
  </div>
    )
  }



  {/*Modal 2 */}
  function Modal2(){
    return (
      <div className="z-50 mt-2 fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-20 md:mt-5  h-screen overflow-y-auto ">
    <div className="lg:h-4/5 md:h-auto bg-white rounded-lg shadow-lg max-w-4xl w-full md:flex">
      <div className="md:w-3/4 beach-popup-images">

      <Carousel className='beach-popup-carousel' showThumbs={false} showArrows={true} centreMode={true} >
        {/* Left side content */}
          <li className="beach-popup-image-list" aria-hidden="true" style={{width: "100%"}}>
            <img  data-src="https://inspyria.com/storage/media/2021/06/ROOM DOUBLE 2-medium_large.jpg" alt="Suite room" src="https://inspyria.com/storage/media/2021/06/ROOM DOUBLE 2-medium_large.jpg" draggable="false" />
        </li>
        <li style={{ width: "100%" }} className="beach-popup-image-list">
          <img  data-src="https://inspyria.com/storage/media/2021/06/DUPLEX BATHROOM SHARED-medium_large.jpg" alt="Suite room" src="https://inspyria.com/storage/media/2021/06/DUPLEX BATHROOM SHARED-medium_large.jpg"
 draggable="false" />
        </li>
        <li style={{ width: "100%"}} className="beach-popup-image-list">
          <img  data-src="https://inspyria.com/storage/media/2021/06/DUPLEX ROOM DOUBLE 1-medium_large.jpg" alt="Suite room" src="https://inspyria.com/storage/media/2021/06/DUPLEX ROOM DOUBLE 1-medium_large.jpg" draggable="false" />
        </li>
        <li style={{ width: "100%" }} className="beach-popup-image-list">
            <img  data-src="https://inspyria.com/storage/media/2021/02/Screen Shot 2021-02-17 at 4.15.46 PM-medium_large.png" alt="Suite room" src="https://inspyria.com/storage/media/2021/02/Screen Shot 2021-02-17 at 4.15.46 PM-medium_large.png" draggable="false" />
        </li>
        <li style={{ width: "100%" }} className="beach-popup-image-list">
            <img  data-src="https://inspyria.com/storage/media/2021/06/DUPLEX BATHROOM SHARED-medium_large.jpg" alt="Suite room" src="https://inspyria.com/storage/media/2021/06/DUPLEX BATHROOM SHARED-medium_large.jpg"draggable="false" />
        </li>
        <li style={{  width: "100%" }} className="beach-popup-image-list">
          <img  data-src="https://inspyria.com/storage/media/2021/06/ROOM DOUBLE 2-medium_large.jpg" alt="Suite room" src="https://inspyria.com/storage/media/2021/06/ROOM DOUBLE 2-medium_large.jpg" draggable="false" />
        </li>
   
      </Carousel>

      </div>
      <div className="beach-popup-scroll md:w-2/6 md:flex-shrink-0 md:border-l md:border-gray-200 overflow-y-auto">
        {/* Right side content */}
        <div className=" p-4 md:p-6 lg:h-full lg:overflow-y-scroll">
          <div className="flex justify-end">
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={toggleModal2}
            >
              <X size={24} />
            </button>
          </div>



        <div className="popup-title">
                                    <h2>Suite room</h2>
                    <ul className="carac-list-popup">
              <li><img style={{width: "30px",height: "30px"}} alt="personas" className="icon-room-modal" data-src="https://inspyria.com/Themes/ETR//images/icons/plazas-min.png" src="https://inspyria.com/Themes/ETR//images/icons/plazas-min.png"/> 2 people per room</li>
                                                    
        <li><img style={{width: "30px",height: "30px"}} alt="cama" className="icon-room-modal" data-src="https://inspyria.com/Themes/ETR//images/icons/camaindividual-min.png" src="https://inspyria.com/Themes/ETR//images/icons/camaindividual-min.png"/>
                                                                    Double Bed                                                            </li>
                        
                        

                    </ul>
                                </div>

          <div className='popup-amenities'>
            <h2>Amenities</h2>
            <ul className='popup-amenities-list'>
              <li>WiFi</li>
              <li>Shared Bathroom</li>
              <li>Toiletries</li>
              <li>Views of Nature</li>
              <li>Sheets</li>
              <li>Towels</li>
              <li>Heating</li>
              <li>Blankets</li>
              <li>Soap</li>
              <li>Pool Towel</li>
              
            </ul>

            <div className='popup-amenities-description mt-2'>
            Beautiful double room or single use. Wifi, bright. Private bathroom.
            </div>

            <div className="info-purchase mt-2">

            <div className="icon-purchase bed">
                <img style={{width: "22px",marginRight:'0.5rem'}} data-src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png" src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png"/>
                <span>Private</span>
            </div>
            <div className="icon-purchase person">
                <img style={{width: "22px",marginRight:'0.5rem'}} class="" data-src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png" src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png"/>
                <span data-textsingle="Spot" data-textplural="Spots">1 Spot</span>
            </div>
            <div className="icon-purchase date">
                <img style={{width: "22px",marginRight:'0.5rem'}} className="" data-src="https://inspyria.com/Themes/ETR/images/icons/fechas-min.png" src="https://inspyria.com/Themes/ETR/images/icons/fechas-min.png"/>
                <span>Invalid date - Invalid date</span>
            </div>
            <div className="icon-purchase price ">
                <img style={{width: "22px",marginRight:'0.5rem'}} className="" data-src="https://inspyria.com/Themes/ETR/images/icons/dinero-min.png" src="https://inspyria.com/Themes/ETR/images/icons/dinero-min.png"/>
                <span data-text="Total Price">€660 Total Price</span>
            </div>
                    
            </div>

          </div>

          <div className="proteccion-datos">
                        <img style={{width: "50px"}} data-src="https://inspyria.com/Themes/ETR//images/org-confianza-min.png" src="https://inspyria.com/Themes/ETR//images/org-confianza-min.png"/>
                        <p style={{marginLeft: "1rem"}}>You can trust <span class="orange">Mava Vida</span>! Your information is safe and secure with us. </p>
                    </div>
            <div className="cta-box">
                  <a
                    className="fancyboxContacto show dskbtn"
                    href="https://yoga-site-six.vercel.app/contact-us"
                  >
                    Send question
                  </a>
                  {/* <button type="submit" className="submit submit-green">
                    Reserve
                  </button> */}
                </div>
               

          
        </div>
      </div>
    </div>
  </div>
    )
  }



  {/*Modal 3 */}
  function Modal3(){
    return (
      <div className="z-50 mt-2 fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-20 md:mt-5  h-screen overflow-y-auto ">
    <div className="lg:h-4/5 md:h-auto bg-white rounded-lg shadow-lg max-w-4xl w-full md:flex">
      <div className="md:w-3/4 beach-popup-images">

      <Carousel className='beach-popup-carousel' showThumbs={false} showArrows={true} centreMode={true} >
        {/* Left side content */}
          <li className="beach-popup-image-list" aria-hidden="true" style={{width: "100%"}}>
            <img  data-src="https://inspyria.com/storage/media/2021/06/DUPLEX SEA VIEWS-1-medium_large.jpg" alt="Suite room" src="https://inspyria.com/storage/media/2021/06/DUPLEX SEA VIEWS-1-medium_large.jpg" draggable="false" />
        </li>
        
        <li className="beach-popup-image-list" aria-hidden="true" style={{width: "100%"}}>
            <img  data-src="https://inspyria.com/storage/media/2021/06/DUPLEX SEA VIEWS-1-medium_large.jpg"
 alt="Suite room" src="https://inspyria.com/storage/media/2021/06/DUPLEX SEA VIEWS-1-medium_large.jpg"
 draggable="false" />
        </li>

        <li className="beach-popup-image-list" aria-hidden="true" style={{width: "100%"}}>
            <img  data-src="https://inspyria.com/storage/media/2021/06/DUPLEX BATHROOM SHARED-medium_large.jpg"
 alt="Suite room" src="https://inspyria.com/storage/media/2021/06/DUPLEX BATHROOM SHARED-medium_large.jpg"
 draggable="false" />
        </li>
   
      </Carousel>

      </div>
      <div className="beach-popup-scroll md:w-2/6 md:flex-shrink-0 md:border-l md:border-gray-200 overflow-y-auto">
        {/* Right side content */}
        <div className=" p-4 md:p-6 lg:h-full lg:overflow-y-scroll">
          <div className="flex justify-end">
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={toggleModal3}
            >
              <X size={24} />
            </button>
          </div>



        <div className="popup-title">
                                    <h2>Suite room</h2>
                    <ul className="carac-list-popup">
              <li><img style={{width: "30px",height: "30px"}} alt="personas" className="icon-room-modal" data-src="https://inspyria.com/Themes/ETR//images/icons/plazas-min.png" src="https://inspyria.com/Themes/ETR//images/icons/plazas-min.png"/> 2 people per room</li>
                                                    
        <li><img style={{width: "30px",height: "30px"}} alt="cama" className="icon-room-modal" data-src="https://inspyria.com/Themes/ETR//images/icons/camaindividual-min.png" src="https://inspyria.com/Themes/ETR//images/icons/camaindividual-min.png"/>
                                                                    Double Bed            
                                                                    
                                                                                                                    </li>
  <li><img style={{width: "30px",height: "30px"}} alt="personas" className="icon-room-modal" src="https://inspyria.com/Themes/ETR//images/icons/bano-min.png" data-src="https://inspyria.com/Themes/ETR//images/icons/bano-min.png"/> Private</li>       
                        

                    </ul>
                                </div>

          <div className='popup-amenities'>
            <h2>Amenities</h2>
            <ul className='popup-amenities-list'>
              <li>WiFi</li>
              <li>Private Bathroom</li>
              <li>Toiletries</li>
              <li>Views of Nature</li>
              <li>Sheets</li>
              <li>Heating</li>
              <li>Towels</li>
              <li>Blankets</li>
              <li>Beach Towel</li>
              <li>Soap</li>
              
            </ul>

            <div className='popup-amenities-description mt-2'>
            Beautiful double or single-use room. Views of the sea and the pool.
            </div>

            <div className="info-purchase mt-2">

            <div className="icon-purchase bed">
                <img style={{width: "22px",marginRight:'0.5rem'}} data-src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png" src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png"/>
                <span>Private</span>
            </div>
            <div className="icon-purchase person">
                <img style={{width: "22px",marginRight:'0.5rem'}} class="" data-src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png" src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png"/>
                <span data-textsingle="Spot" data-textplural="Spots">1 Spot</span>
            </div>
            <div className="icon-purchase date">
                <img style={{width: "22px",marginRight:'0.5rem'}} className="" data-src="https://inspyria.com/Themes/ETR/images/icons/fechas-min.png" src="https://inspyria.com/Themes/ETR/images/icons/fechas-min.png"/>
                <span>Invalid date - Invalid date</span>
            </div>
            <div className="icon-purchase price ">
                <img style={{width: "22px",marginRight:'0.5rem'}} className="" data-src="https://inspyria.com/Themes/ETR/images/icons/dinero-min.png" src="https://inspyria.com/Themes/ETR/images/icons/dinero-min.png"/>
                <span data-text="Total Price">€660 Total Price</span>
            </div>
                    
            </div>

          </div>

          <div className="proteccion-datos">
                        <img style={{width: "50px"}} data-src="https://inspyria.com/Themes/ETR//images/org-confianza-min.png" src="https://inspyria.com/Themes/ETR//images/org-confianza-min.png"/>
                        <p style={{marginLeft: "1rem"}}>You can trust <span class="orange">Mava Vida</span>! Your information is safe and secure with us. </p>
                    </div>
            <div className="cta-box">
                  <a
                    className="fancyboxContacto show dskbtn"
                    href="https://yoga-site-six.vercel.app/contact-us"
                  >
                    Send question
                  </a>
                  {/* <button type="submit" className="submit submit-green">
                    Reserve
                  </button> */}
                </div>
               

          
        </div>
      </div>
    </div>
  </div>
    )
  }


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
                <div style={{position: 'relative',marginBottom: "50px" }}>
                  <p >
                    Two charming accommodations. One in Sotogrand, and another
                    one in a duplex penthouse in Manilva Playa. Only 6 minutes
                    between both. Wonderful panoramic views of the beach. Both
                    have a pool. Less than 10 minutes to get to the beach. Total
                    Number of Rooms: 8 double rooms that can be for individual
                    use as well. Each bedroom has its own bathroom.
                    
                      {showMore && <>Almost all rooms have a bathroom with a bathtub as well as a shower.BEACH DUPLEX Views in Manilva, Malaga.
                       Beautiful Duplex Penthouse with Panoramic Views Playa Salvaje de Manilva.
                        It has a swimming pool. Total Rooms 3. Total Bathrooms: 2. Pool and Garden. 2 plants. 
                        Terrace. Beach views. On the Attic floor, it has 1 Suite room with its own bathtub and shower, 
                        dressing room and living room. On the ground floor there are 2 double rooms that share a bathroom. 
                        Spacious dining room and lounge. Laundry area with dryer and washing machine.Both facilities have
                         a pool and beach. Access to the beach 6 minutes. Total Number of Rooms: 8 double rooms that can 
                         be for individual use. Each room has its own bathroom.Our program takes place in the area between 
                         Sotogrande and Manilva (12 minutes from each other by car). Meals, workshops, 
                         Yoga classes, cooking classes, etc.. are held at Villa Jardín Shanti in Sotogrande. 
                         Both accommodations are next to the beach. The transfer from the Villa to the Duplex 
                         is included in the price of the program.</>}
                   
                  </p>


                  <a className="vermas" onClick={() => setShowMore(prev => !prev)}>
                    <span >{showMore ? "View Less" : "View more"}</span>
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
                        data-src="https://inspyria.com/storage/media/2021/08/WhatsApp Image 2021-08-30 at 11.15.52-2-large.jpeg" 
                        alt="Shanti Beach House and Shanti Garden House" 
                        src="https://inspyria.com/storage/media/2021/08/WhatsApp Image 2021-08-30 at 11.15.52-2-large.jpeg"
      
                       style={{objectFit:"fill",width:"100%"}}
                      />
                    </div>
                  

                      <div className="h-96 carousel-item">
                      <img
                        className='block'
                        data-src="https://inspyria.com/storage/media/2021/08/WhatsApp Image 2021-08-30 at 11.15.52-large.jpeg" 
                        alt="Shanti Beach House and Shanti Garden House" 
                        src="https://inspyria.com/storage/media/2021/08/WhatsApp Image 2021-08-30 at 11.15.52-large.jpeg"
                        style={{objectFit:"fill",width:"100%"}}
                      />
                      </div>
                    

                      <div className="h-96 carousel-item">
                      <img
                        className='block'
                        data-src="https://inspyria.com/storage/media/2021/02/Screen Shot 2021-02-17 at 4.17.18 PM-large.png" 
                        alt="Shanti Beach House and Shanti Garden House" 
                        src="https://inspyria.com/storage/media/2021/02/Screen Shot 2021-02-17 at 4.17.18 PM-large.png"
                        style={{objectFit:"fill",width:"100%"}}
                      />
                    </div>

                    <div className="h-96 carousel-item">
                      <img
                        className='block'
                        data-src="https://inspyria.com/storage/media/2021/02/Screen Shot 2021-02-17 at 4.18.21 PM-large.png" alt="Shanti Beach House and Shanti Garden House" src="https://inspyria.com/storage/media/2021/02/Screen Shot 2021-02-17 at 4.18.21 PM-large.png"
                        style={{objectFit:"fill",width:"100%"}}
                      />
                    </div>

                    <div className="h-96 carousel-item">
                      <img
                        className='block'
                        data-src="https://inspyria.com/storage/media/2021/06/DUPLEX SEA VIEWS-1-large.jpg" alt="Shanti Beach House and Shanti Garden House" src="https://inspyria.com/storage/media/2021/06/DUPLEX SEA VIEWS-1-large.jpg"
                        style={{objectFit:"fill",width:"100%"}}
                      />
                    </div>

                    <div className="h-96 carousel-item">
                      <img
                        className='block'
                        data-src="https://inspyria.com/storage/media/2021/06/DUPLEX ROOM DOUBLE 1-large.jpg" alt="Shanti Beach House and Shanti Garden House" src="https://inspyria.com/storage/media/2021/06/DUPLEX ROOM DOUBLE 1-large.jpg"
                        style={{objectFit:"fill",width:"100%"}}
                      />
                    </div>

                    <div className="h-96 carousel-item">
                      <img
                        className='block'
                        data-src="https://inspyria.com/storage/media/2021/06/DUPLEX BATHROOM SHARED-large.jpg" alt="Shanti Beach House and Shanti Garden House" src="https://inspyria.com/storage/media/2021/06/DUPLEX BATHROOM SHARED-large.jpg"
                        style={{objectFit:"fill",width:"100%"}}
                      />
                    </div>

                    <div className="h-96 carousel-item">
                      <img
                        className='block'
                        data-src="https://inspyria.com/storage/media/2021/06/DUPLEX SUITE LR2-large.jpg" alt="Shanti Beach House and Shanti Garden House" src="https://inspyria.com/storage/media/2021/06/DUPLEX SUITE LR2-large.jpg"
                        style={{objectFit:"fill",width:"100%"}}
                      />
                    </div>

                    <div className="h-96 carousel-item">
                      <img
                        className='block'
                        data-src="https://inspyria.com/storage/media/2021/02/Screen Shot 2021-02-17 at 4.15.46 PM-large.png" alt="Shanti Beach House and Shanti Garden House" src="https://inspyria.com/storage/media/2021/02/Screen Shot 2021-02-17 at 4.15.46 PM-large.png"
                        style={{objectFit:"fill",width:"100%"}}
                      />
                    </div>

                    <div className="h-96 carousel-item">
                      <img
                        className='block'
                        data-src="https://inspyria.com/storage/media/2021/02/Screen Shot 2021-02-17 at 4.16.53 PM-large.png" alt="Shanti Beach House and Shanti Garden House" src="https://inspyria.com/storage/media/2021/02/Screen Shot 2021-02-17 at 4.16.53 PM-large.png"
                        style={{objectFit:"fill",width:"100%"}}
                      />
                    </div>

                 
                    <div className="h-96 carousel-item">
                      <img
                        className='block'
                        data-src="https://inspyria.com/storage/media/2021/08/WhatsApp Image 2021-08-30 at 11.15.52-2-large.jpeg" alt="Shanti Beach House and Shanti Garden House" src="https://inspyria.com/storage/media/2021/08/WhatsApp Image 2021-08-30 at 11.15.52-2-large.jpeg"
                        style={{objectFit:"fill",width:"100%"}}
                      />
                    </div>


                    <div className="h-96 carousel-item">
                      <img
                        className='block'
                        data-src="https://inspyria.com/storage/media/2021/08/WhatsApp Image 2021-08-30 at 11.15.52-large.jpeg" alt="Shanti Beach House and Shanti Garden House" src="https://inspyria.com/storage/media/2021/08/WhatsApp Image 2021-08-30 at 11.15.52-large.jpeg"
                        style={{objectFit:"fill",width:"100%"}}
                      />
                    </div>


                    <div className="h-96 carousel-item">
                      <img
                        className='block'
                        data-src="https://inspyria.com/storage/media/2021/02/Screen Shot 2021-02-17 at 4.17.18 PM-large.png" alt="Shanti Beach House and Shanti Garden House" src="https://inspyria.com/storage/media/2021/02/Screen Shot 2021-02-17 at 4.17.18 PM-large.png"
                        style={{objectFit:"fill",width:"100%"}}
                      />
                    </div>


                    <div className="h-96 carousel-item">
                      <img
                        className='block'
                        data-src="https://inspyria.com/storage/media/2021/02/Screen Shot 2021-02-17 at 4.18.21 PM-large.png" alt="Shanti Beach House and Shanti Garden House" src="https://inspyria.com/storage/media/2021/02/Screen Shot 2021-02-17 at 4.18.21 PM-large.png"
                        style={{objectFit:"fill",width:"100%"}}
                      />
                    </div>
                  </Carousel>
                </div>
              </li>
            </ul>

            <div className="room-title">Rooms</div>

   
            <ul class="aloj-list">
                  <li>
                      <img class="" data-src="https://inspyria.com/storage/media/2023/03/2f608125-dc04-4ae1-8ea8-ec38fd3d3b40-medium.jpg" alt="Suite room" onclick="$('.fancybox9808').click();" src="https://inspyria.com/storage/media/2023/03/2f608125-dc04-4ae1-8ea8-ec38fd3d3b40-medium.jpg"/>
                          <h3>Suite room</h3>
                      <div class="btn-open-room" onClick={toggleModal1}><a class="fancybox9808 show" href="#poup-txt9808">View room</a></div>
                    </li>

                    {openModal1 && <Modal1/>}
                                                                                                <li>
                     <img class="" data-src="https://inspyria.com/storage/media/2021/06/ROOM DOUBLE 2-medium.jpg" alt="Double room" onclick="$('.fancybox9826').click();" src="https://inspyria.com/storage/media/2021/06/ROOM DOUBLE 2-medium.jpg"/>
                        <h3>Double room</h3>
                        <div class="btn-open-room" onClick={toggleModal2}><a class="fancybox9826 show" href="#poup-txt9826">View room</a></div>
                    </li>

                    {openModal2 && <Modal2/>}
                                                                                                <li>
                      <img class="" data-src="https://inspyria.com/storage/media/2021/02/Screen Shot 2021-02-17 at 4.15.35 PM-medium.png" alt="Double Room" onclick="$('.fancybox9827').click();" src="https://inspyria.com/storage/media/2021/02/Screen Shot 2021-02-17 at 4.15.35 PM-medium.png"/>
                            <h3>Double Room</h3>
                        <div class="btn-open-room" onClick={toggleModal3}><a class="fancybox9827 show" href="#poup-txt9827">View room</a></div>
                    </li>

                    {openModal3 && <Modal3/>}
                                                    
                    </ul>
          </div>
  )
}