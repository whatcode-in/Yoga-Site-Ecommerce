import React, { useEffect, useRef, useState } from "react";
import { X } from 'react-feather';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import { Accordion, Carousel } from "react-bootstrap";
import BeachAccomodation from "./BeachAccomodation";
import DateRangePickers from "./DateRangePickers";
import FAQ from "./FAQ";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
import { Padding } from "@mui/icons-material";

export default function MainSection() {

{/*MODAL PART STARTS*/}
const [windowWidth, setWindowWidth] = useState(1500);

useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);
  console.log('window width: ',windowWidth)

  return () => window.removeEventListener('resize', handleResize);
}, [windowWidth]);


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
      <div className="z-50 mt-2 fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-20 md:mt-5  h-screen overflow-y-auto sm:mt-12">
    <div className="lg:h-4/5 md:h-auto bg-white rounded-lg shadow-lg max-w-4xl w-full md:flex">
      <div className="md:w-3/4 beach-popup-images">

      <Carousel className='beach-popup-carousel' showThumbs={false} showArrows={true} centreMode={true} >
        {/* Left side content */}
          <li className="beach-popup-image-list" aria-hidden="true" style={{width: "100%"}}>
            <img  data-src="https://inspyria.com/storage/media/2023/03/6a34a754-1d82-4ff8-8db6-9c75e25bf169-medium-medium_large.jpg" alt="Suite room" src="https://inspyria.com/storage/media/2021/06/DUPLEX%20BATHROOM%20SHARED-medium_large.jpg" draggable="false" />
        </li>
        <li style={{ width: "100%" }} className="beach-popup-image-list">
          <img  data-src="https://inspyria.com/storage/media/2023/03/4d2a10ab-8183-4146-b68a-9ca982a37328-medium_large.jpg" alt="Suite room" src="https://inspyria.com/storage/media/2023/03/4d2a10ab-8183-4146-b68a-9ca982a37328-medium_large.jpg" draggable="false" />
        </li>
        <li style={{ width: "100%"}} className="beach-popup-image-list">
          <img  data-src="https://inspyria.com/storage/media/2021/06/DUPLEX%20SUITE%201-medium_large.jpg" alt="Suite room" src="https://inspyria.com/storage/media/2021/06/DUPLEX%20SUITE%201-medium_large.jpg" draggable="false" />
        </li>
        <li style={{ width: "100%" }} className="beach-popup-image-list">
            <img  data-src="https://inspyria.com/storage/media/2021/06/DUPLEX%20SUITE%20LR2-medium_large.jpg" alt="Suite room" src="https://inspyria.com/storage/media/2021/06/DUPLEX%20SUITE%20LR2-medium_large.jpg" draggable="false" />
        </li>
        <li style={{ width: "100%" }} className="beach-popup-image-list">
            <img  data-src="https://inspyria.com/storage/media/2021/06/DUPLEX%20SUITE%202-medium_large.jpg" alt="Suite room" src="https://inspyria.com/storage/media/2021/06/DUPLEX%20SUITE%202-medium_large.jpg" draggable="false" />
        </li>
        <li style={{  width: "100%" }} className="beach-popup-image-list">
          <img  data-src="https://inspyria.com/storage/media/2021/06/DUPLEX%20SUITE%20LR-medium_large.jpg" alt="Suite room" src="https://inspyria.com/storage/media/2021/06/DUPLEX%20SUITE%20LR-medium_large.jpg" draggable="false" />
        </li>
        <li style={{  width: "100%" }} className="beach-popup-image-list">
          <img  data-src="https://inspyria.com/storage/media/2021/06/DUPLEX%20BATHROOM%20SUITE-medium_large.jpg" alt="Suite room" src="https://inspyria.com/storage/media/2021/06/DUPLEX%20BATHROOM%20SUITE-medium_large.jpg" draggable="false" />
        </li>
        <li style={{  width: "100%" }} className="beach-popup-image-list">
          <img  data-src="https://inspyria.com/storage/media/2023/03/2f608125-dc04-4ae1-8ea8-ec38fd3d3b40-medium_large.jpg" alt="Suite room" src="https://inspyria.com/storage/media/2023/03/2f608125-dc04-4ae1-8ea8-ec38fd3d3b40-medium_large.jpg" draggable="false" />
        </li>

   
      </Carousel>

      </div>
      <div className="beach-popup-scroll md:w-2/6 md:flex-shrink-0 md:border-l md:border-gray-200 overflow-y-auto z-50">
        {/* Right side content */}
        <div className="p-4 md:p-6 lg:h-full lg:overflow-y-scroll">
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
                <img style={{width: "22px",marginRight:'0.5rem'}} className="" data-src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png" src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png"/>
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
                        <p style={{marginLeft: "1rem"}}>You can trust <span className="orange">Mava Vida</span>! Your information is safe and secure with us. </p>
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
      <div className="z-50 mt-12 fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-20 md:mt-5  h-screen overflow-y-auto ">
    <div className="lg:h-4/5 md:h-auto bg-white rounded-lg shadow-lg max-w-4xl w-full md:flex">
      <div className="md:w-3/4 beach-popup-images">

      <Carousel className='beach-popup-carousel' showThumbs={false} showArrows={true} centreMode={true} >
        {/* Left side content */}
          <li className="beach-popup-image-list" aria-hidden="true" style={{width: "100%"}}>
            <img  data-src="https://inspyria.com/storage/media/2021/06/ROOM%20DOUBLE%202-medium_large.jpg" alt="Suite room" src="https://inspyria.com/storage/media/2021/06/ROOM%20DOUBLE%202-medium_large.jpg" draggable="false" />
        </li>
        <li style={{ width: "100%" }} className="beach-popup-image-list">
          <img  data-src="https://inspyria.com/storage/media/2021/06/DUPLEX%20ROOM%20DOUBLE%201-medium_large.jpg" alt="Suite room" src="https://inspyria.com/storage/media/2021/06/DUPLEX%20ROOM%20DOUBLE%201-medium_large.jpg"
 draggable="false" />
        </li>
        <li style={{ width: "100%"}} className="beach-popup-image-list">
          <img  data-src="https://inspyria.com/storage/media/2021/06/DUPLEX%20SEA%20VIEWS-1-medium_large.jpg" alt="Suite room" src="https://inspyria.com/storage/media/2021/06/DUPLEX%20SEA%20VIEWS-1-medium_large.jpg" draggable="false" />
        </li>
        <li style={{ width: "100%" }} className="beach-popup-image-list">
            <img  data-src="https://inspyria.com/storage/media/2021/06/DUPLEX%20BATHROOM%20SHARED-medium_large.jpg" alt="Suite room" src="https://inspyria.com/storage/media/2021/06/DUPLEX%20BATHROOM%20SHARED-medium_large.jpg" draggable="false" />
        </li>
        <li style={{ width: "100%" }} className="beach-popup-image-list">
            <img  data-src="https://inspyria.com/storage/media/2021/06/DUPLEX%20BATHROOM%20SHARED-medium_large.jpg" alt="Suite room" src="https://inspyria.com/storage/media/2021/06/DUPLEX%20BATHROOM%20SHARED-medium_large.jpg"draggable="false" />
        </li>
   
      </Carousel>

      </div>
      <div className="z-50 beach-popup-scroll md:w-2/6 md:flex-shrink-0 md:border-l md:border-gray-200 overflow-y-auto">
        {/* Right side content */}
        <div className="p-4 md:p-6 lg:h-full lg:overflow-y-scroll">
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
                <img style={{width: "22px",marginRight:'0.5rem'}} className="" data-src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png" src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png"/>
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
                        <p style={{marginLeft: "1rem"}}>You can trust <span className="orange">Mava Vida</span>! Your information is safe and secure with us. </p>
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
      <div className="z-50 mt-12 fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-20 md:mt-5  h-screen overflow-y-auto ">
    <div className="lg:h-4/5 md:h-auto bg-white rounded-lg shadow-lg max-w-4xl w-full md:flex">
      <div className="md:w-3/4 beach-popup-images">

      <Carousel className='beach-popup-carousel' showThumbs={false} showArrows={true} centreMode={true} >
        {/* Left side content */}
          <li className="beach-popup-image-list" aria-hidden="true" style={{width: "100%"}}>
            <img  data-src="https://inspyria.com/storage/media/2021/06/DUPLEX%20BATHROOM%20SHARED-medium_large.jpg" alt="Suite room" src="https://inspyria.com/storage/media/2021/06/DUPLEX%20BATHROOM%20SHARED-medium_large.jpg" draggable="false" />
        </li>
        
        <li className="beach-popup-image-list" aria-hidden="true" style={{width: "100%"}}>
            <img  data-src="https://inspyria.com/storage/media/2021/11/Inspyria_retiro_detox%20(13)-medium_large.jpeg"
 alt="Suite room" src="https://inspyria.com/storage/media/2021/11/Inspyria_retiro_detox%20(13)-medium_large.jpeg"
 draggable="false" />
        </li>

   
      </Carousel>

      </div>
      <div className="beach-popup-scroll md:w-2/6 md:flex-shrink-0 md:border-l md:border-gray-200 overflow-y-auto">
        {/* Right side content */}
        <div className=" p-4 md:p-6 lg:h-full lg:overflow-y-scroll z-50">
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
                <img style={{width: "22px",marginRight:'0.5rem'}} className="" data-src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png" src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png"/>
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
                        <p style={{marginLeft: "1rem"}}>You can trust <span className="orange">Mava Vida</span>! Your information is safe and secure with us. </p>
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
{/*MODAL PART END*/}


















  // const {user}=useAuth();
  const [participants, setParticipants] = useState(1);
  const [day, setDay] = useState(15);
  const [night, setNight] = useState(14);
  const [isClicked, setIsClicked] = useState(false);
  const [packageNumb, setSetPackageNumb] = useState(4);
  const [ind, setInd] = useState(0);
  const [error, setError] = useState("");
  const [booking, setBooking] = useState([]);
  

  let [individualroomcost, setindividualroomcost] = useState(499);
  let [sharedroomcost, setsharedroomcost] = useState(499);

  let [roomCost1,setRoomCost1] = useState(195 * 3)
  let [roomCost2,setRoomCost2] = useState(165 * 3)
  let [roomCost3,setRoomCost3] = useState(185 * 3)
  let [roomCost4,setRoomCost4] = useState(180 * 3 * 2)

  /*removed room from participants 2 and placed it in 1 but kept the index same as 5 and removed the *2 multiplier */
  let [roomCost5,setRoomCost5] = useState(225 * 3)

  let [roomCost6,setRoomCost6] = useState(205 * 3 * 2)
  let [roomCost7,setRoomCost7] = useState(225 * 3 * 2)
  let [roomCost8,setRoomCost8] = useState(205* 3 * 2)

  let roomList = [
    "Garden Villa: Double Room Individual Use with Ensuite shower",
    "Beach Duplex: Double Room Single use\n or Individual with shared bathroom&gt",
    "Beach Duplex: Double Room Individual Use Doble or Individual",
    "Garden Villa: Double Room Use with en Suite Shower",

    "Garden Villa: Suite Room Individual Occupancy with Ensuite shower and bathtub",
    
    "Garden Villa: Suite Room Double Use with Ensuite shower and bathtub & gt",
    "Duplex Beach: Suite Room Individual Occupancy with Ensuite shower and bathtub",
    "Duplex Beach: Suite Room Double Use with Ensuite shower and bathtub &gt"
  ]

  const [datesBooked,setDatesBooked] = useState(null)
  const router = useRouter()

  // form data
  const [data, setData] = useState({
    name: "",
    mobile: "",
    email: "",
    info: "",
  });
  const handleInd = (value) => {
    setInd(value);
  };

  const [totalCost, setTotalCost] = useState(0);

  // handle package

  const handlePackage = (value) => {
    setIsClicked(true);
    if (value === 4) {
      setDay(4);
      setNight(3);
    } else if (value === 6) {
      setDay(6);
      setNight(5);
    } else if (value === 7) {
      setDay(7);
      setNight(6);
    } else if (value === 8) {
      setDay(8);
      setNight(7);
    } else if (value === 9) {
      setDay(9);
      setNight(8);
    } else if (value === 10) {
      setDay(10);
      setNight(9);
    } else if (value === 11) {
      setDay(11);
      setNight(10);
    } else if (value === 12) {
      setDay(12);
      setNight(11);
    } else if (value === 13) {
      setDay(13);
      setNight(12);
    } else if (value === 14) {
      setDay(14);
      setNight(13);
    } else if (value === 15) {
      setDay(15);
      setNight(14);
    } else if (value === 16) {
      setDay(16);
      setNight(15);
    } else if (value === 17) {
      setDay(17);
      setNight(16);
    } else if (value === 18) {
      setDay(18);
      setNight(17);
    } else if (value === 19) {
      setDay(19);
      setNight(18);
    } else if (value === 20) {
      setDay(20);
      setNight(19);
    } else if (value === 21) {
      setDay(21);
      setNight(20);
    } else if (value === 22) {
      setDay(22);
      setNight(21);
    } else if (value === 23) {
      setDay(23);
      setNight(22);
    } else if (value === 24) {
      setDay(24);
      setNight(23);
    } else if (value === 25) {
      setDay(25);
      setNight(24);
    } else if (value === 26) {
      setDay(26);
      setNight(25);
    } else if (value === 27) {
      setDay(27);
      setNight(26);
    } else if (value === 28) {
      setDay(28);
      setNight(27);
    }
    
  };

  //  handle dropdown
  const handleOnchange = (value) => {
    setIsClicked(false);
    if (value === 15) {
      setDay(15);
      setNight(14);
    } else if (value === 16) {
      setDay(16);
      setNight(15);
    } else if (value === 17) {
      setDay(17);
      setNight(16);
    } else if (value === 18) {
      setDay(18);
      setNight(17);
    } else if (value === 19) {
      setDay(19);
      setNight(18);
    } else if (value === 20) {
      setDay(20);
      setNight(19);
    } else if (value === 21) {
      setDay(21);
      setNight(20);
    }
  };

  // increasing participant number
  const handleIncrease = () => {
    setIsClicked(true);
    if (day >= 4 && day < 28) {
      setDay(day + 1);
      setNight(night + 1);
    } else if (day > 28 && day < 4) {
    }
  };

  // decreasing participant number
  const handleDecrease = () => {
    setIsClicked(true);
    if (day <= 28 && day > 4) {
      setDay(day - 1);
      setNight(night - 1);
    } else if (day <= 4 && day >= 28) {
    }
  };

  const handleGetVenue = async () => {
    const response = await fetch('https://blushing-plum-belt.cyclic.app/api/admin/get-venue-by-name?name=Venue 3 Duplex By The Beach');
    const data = await response.json();
    setDatesBooked(data.datesBooked);
  };

  // calender functionality
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // select date
  const [startDateData, setStartDatesData] = useState("2023-03-7");
  const [endDateData, setEndDatesData] = useState("");
  const handleSetDate = (value) => {
    let startedDay = value[0].startDate.getDate();
    let startMonth = value[0].startDate.getMonth() + 1;
    let endedDay = value[0].endDate.getDate();
    let endedMonth = value[0].endDate.getMonth() + 1;

    if (startedDay > 0 && startedDay <= 9) {
      startedDay = "0" + startedDay;
    }
    if (startMonth > 0 && startMonth <= 9) {
      startMonth = "0" + startMonth;
    }
    if (endedDay > 0 && endedDay <= 9) {
      endedDay = "0" + endedDay;
    }
    if (endedMonth > 0 && endedMonth <= 9) {
      endedMonth = "0" + endedMonth;
    }
    const startDate =
      value[0].startDate.getFullYear() + "-" + startMonth + "-" + startedDay;

    const endDate =
      value[0].endDate.getFullYear() + "-" + endedMonth + "-" + endedDay;

    // finding date range
    const date1 = new Date(value[0]?.startDate.toISOString().slice(0, 10));
    const date2 = new Date(value[0]?.endDate.toISOString().slice(0, 10));
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const datesSelect = [];
    if (diffDays > 0) {
      for (let i = 0; i < diffDays + 1; i++) {
        let d = value[0]?.startDate.getDate() + i;
        let month = value[0].startDate.getMonth() + 1;
        if (d > 0 && d <= 9) {
          d = "0" + d;
        }
        if (month > 0 && month <= 9) {
          month = "0" + month;
        }
        const newD = value[0].startDate.getFullYear() + "-" + month + "-" + d;
        datesSelect.push(newD);
      }
    } else {
      datesSelect.push(endDate);
    }

    console.log("datesSelect", datesSelect, startDate, endDate);
    // checking is date is present in blocked date
    const matchDate = [];
    datesSelect.forEach((d) => {
      const present = booking.includes(d);
      if (present) {
        matchDate.push(d);
      }
    });

    if (matchDate.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${matchDate.join(",")}   is already booked`,
      });

      return null;
    }
    // selecting date
    setStartDatesData(startDate);
    setEndDatesData(endDate);
    setDates(value);

    console.log("matchDate", matchDate);
  };

  // total price calculation

  const pack4 = ["4 days / 3 nights"];
  let pack4vals = [4];

  let pack7 = [
    "7 days / 6 nights",
    "8 days / 7 nights",
    "9 days / 8 nights",
    "10 days / 9 nights",
    "11 days / 11 nights",
    "12 days / 11 nights",
    "13 days / 12 nights",
    "",
  ];
  let pack7vals = [6, 7, 8, 9, 10, 11, 12, 13];

  const pack14 = [
    "14 days / 13 nights",
    "15 days / 14 nights",
    "16 days / 15 nights",
    "17 days / 18 nights",
    "18 days / 17 nights",
    "19 days / 18 nights",
    "20 days / 19 nights",
    "21 days / 20 nights",
  ];
  let pack14vals = [13, 14, 15, 16, 17, 18, 19, 20];

  let pack21 = [
    "22 days / 21 nights",
    "23 days / 22 nights",
    "24 days / 23 nights",
    "25 days / 24 nights",
    "26 days / 25 nights",
    "27 days / 26 nights",
    "28 days / 27 nights",
  ];
  let pack21vals = [21, 22, 23, 24, 25, 26, 27];

  useEffect(() => {

    handleGetVenue()

    if(ind == 0){
      setTotalCost(0)
    }


 if(packageNumb === 4){
    setRoomCost1(195 * 3)
    setRoomCost2(165 * 3)
    setRoomCost3(185 * 3)
    setRoomCost4(180 * 3 * 2)
    setRoomCost5(225 * 3)
    setRoomCost6(205 * 3 * 2)
    setRoomCost7(225 * 3 * 2)
    setRoomCost8(205* 3 * 2)
    if (ind === 1) setTotalCost(195 * 3)
    if (ind === 2) setTotalCost(165 * 3)
    if (ind === 3) setTotalCost(185 * 3)
    if (ind === 4) setTotalCost(180 * 3 * 2)
    if (ind === 5) setTotalCost(225 * 3 * 2)
    if (ind === 6) setTotalCost(205 * 3 * 2)
    if (ind === 7) setTotalCost(225 * 3 * 2)
    if (ind === 8) setTotalCost(205* 3 * 2)
  }
  else{
    setRoomCost1(night * 195)
    setRoomCost2(night * 165)
    setRoomCost3(night * 185)
    setRoomCost4(night * 180 * 2)
    setRoomCost5(night * 225)
    setRoomCost6(night * 205 * 2)
    setRoomCost7(night * 225 * 2)
    setRoomCost8(night * 205 * 2)

    if (ind === 1) setTotalCost(195 * night)
      if (ind === 2) setTotalCost(165 * night)
      if (ind === 3) setTotalCost(185 * night)
    if (ind === 4) setTotalCost(180 * night * 2)
    if (ind === 5) setTotalCost(225 * night * 2)
    if (ind === 6) setTotalCost(205 * night * 2)
    if (ind === 7) setTotalCost(225 * night * 2)
  if (ind === 8) setTotalCost(205 * night* 2)

  
  }}, [day, night, participants, ind]);
  console.log("total", totalCost);

  let ref1 = useRef();
  let ref2 = useRef();

  // form data
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // saving firestore
  const saveToFireStore = async () => {
    // const newCityRefNew = doc(db, "user-booking", "nurul.islam02310@gmail.com");

    // const result = await updateDoc(newCityRefNew, {
    //   bookingDates: arrayUnion(...dates),
    // });
    const citiesRef = doc(db, "user-booking", user.email);
    const docSnap = await getDoc(citiesRef);
    console.log("user docSnap", docSnap, docSnap.exists());
    if (docSnap?.data()) {
      const result = await updateDoc(citiesRef, {
        bookingDates: arrayUnion({
          package: `${day}-day/${night}-night`,
          start: startDateData,
          end: endDateData,
          cost: totalCost,
        }),
      });
    } else {
      const resultTwo = await setDoc(
        doc(db, "user-booking", user.email),
        {
          bookingDates: [
            {
              package: `${day}-day/${night}-night`,
              start: startDateData,
              end: endDateData,
              cost: totalCost,
            },
          ],
        },
        { merge: true }
      );
      console.log("user new add", resultTwo);
    }
  };
  // email sending

  const handleSendEmail = () => {
    if (data.name === "" || data.email === "" || data.mobile === "") {
      setError("Please fill up the form");
      return null;
    }

    if (startDateData === "" || endDateData === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select Date",
      });
      return null;
    }
    setError("");

    // sending to fire store
    
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your info successfully sent",
      showConfirmButton: false,
      timer: 1500,
    });
    // all error handaling done
    const messageTwo = `Name: ${data.name} Email: ${data.email}  Day:${day} night:${night} start:${startDateData} end:${endDateData} total:${totalCost}`;
    // emailjs
    //   .send(
    //     "service_oyac08p",
    //     "template_33heapt",
    //     {
    //       from_name: "tanvir",
    //       to_name: "nurul",
    //       reply_to: "ni163034@gmail.com",
    //       message: messageTwo,
    //     },
    //     "WUMFgN-AKEjhdZoco"
    //   )
    //   .then(
    //     (result) => {
    //       console.log("emailjs", result, result.text);
    //       if (result.status === 200) {
    //         Swal.fire({
    //           position: "center",
    //           icon: "success",
    //           title: "Your info successfully sent",
    //           showConfirmButton: false,
    //           timer: 1500,
    //         });

    //       } else {
    //         Swal.fire({
    //           icon: "error",
    //           title: "Oops...",
    //           text: "Something went wrong!",
    //         });
    //       }
    //     },
    //     (error) => {
    //       console.log("emailjs", error.text);
    //       Swal.fire({
    //         icon: "error",
    //         title: "Oops...",
    //         text: error.text,
    //       });
    //     }
    //   );
  };

  // fetching booked data
  // const fetchData = async () => {
  //   const citiesRef = doc(db, "booking", "LA");
  //   const docSnap = await getDoc(citiesRef);

  //   if (docSnap?.data()) {
  //     setBooking(docSnap?.data().bookingDates);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  function handleSetParticipants(index){
      setParticipants(index)
      setInd(0)
  }

  function createNewBooking(){

    console.log('index: ',ind)


    setError("");
    console.log("start date new: ",startDateData)

    let newTotalCost = 0



    let roomType = ""
    
    if(ind === 1 ) roomType = roomList[0]
    else if (ind === 2) roomType = roomList[1]
    else if(ind === 3) roomType = roomList[2]
    else if(ind ===  4) roomType = roomList[3]
    else if (ind === 5) roomType = roomList[4]
    else if(ind === 6) roomType = roomList[5]
    else if(ind ===  7) roomType = roomList[6]
    else if(ind ===  8) roomType = roomList[7]


    const bookingData =  {
      mobile:data.mobile,
      name:data.name,
      email:data.email,
      participants: participants,
      info : data.info,
      day: day,
      night: night,
      packageNumber: packageNumb,
      typeOfRetreat: "Duplex By The Beach",
      typeOfRoom: roomType,
      totalCost: totalCost,
      startDate: startDateData
  }


  router.push({
    pathname: '/ConfirmBooking',
    query: {data: JSON.stringify(bookingData)}
  });

      
}
//     fetch('https://blushing-plum-belt.cyclic.app/api/admin/add-booking', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       mobile:data.mobile,
//       name:data.name,
//       email:data.email,
//       participants: participants,
//       info: data.info,
//       day: day,
//       night: night,
//       packageNumber: packageNumb,
//       typeOfRetreat: "Duplex By The Beach",
//       typeOfRoom: roomType,
//       totalCost: totalCost,
//       startDate: startDateData,
//     })
//   }) 
//   .then(newData => 
  
//     Swal.fire({
//       icon: "success",
//       title: "Booking successfull",
//     }),
//     sendBookingEmailToUser()
// ).catch(error => console.error("booking error: ",error));
//   }


   function sendBookingEmailToUser(){
    // var templateParams = {
    //   to_name: data.name,
    //   name: data.name,
    //   typeOfRetreat: "Duplex By The Beach",
    //   mobile: data.mobile,
    //   bookingEmail: data.email,
    //   participants: participants,
    //   information: data.info,
    //   night: night,
    //   totalCost: totalCost,
    //   startDateData: startDateData,
    //   to_email: data.email,
    //   from_email: "vihaandoshi2@gmail.com",
    //   reply_to: "mava@mavavida.com",
    // }

    //   emailjs.send('service_5jp61oq','template_j95s176', templateParams,'tTXBXjG1V10p-IVST')
    //   .then(function(response) {
    //     console.log('SUCCESS!', response.status, response.text);
    //   }, function(err) {
    //     console.log('FAILED...', err);
    //   });
  }

  return (
    <section className="retiros-sec retiros">
      <div className="container book-now-conatiner">
        {/* left side */}

        <div className="retro-lft">
          <div className="white-box-lft main-box">
            <div className="ret-tit-lft description">
              <div id="main-desc" className="descripcion-vermas">
              <h5 style={{ padding: '10px' }}>Please select duration:</h5>

                <div className="book-btn-container desktop-version-btn">
                  <button
                    onClick={() => setSetPackageNumb(4)}
                    className={
                      packageNumb === 4
                        ? "book-btn-container-selected"
                        : "book-btn-container-select"
                    }
                  >
                    4 days
                  </button>
                  <button
                    onClick={() => setSetPackageNumb(7)}
                    className={
                      packageNumb === 7
                        ? "book-btn-container-selected"
                        : "book-btn-container-select"
                    }
                  >
                    7-14 days
                  </button>
                  <button
                    onClick={() => setSetPackageNumb(14)}
                    className={
                      packageNumb === 14
                        ? "book-btn-container-selected"
                        : "book-btn-container-select"
                    }
                  >
                    14-20 days
                  </button>
                  <button
                    onClick={() => setSetPackageNumb(21)}
                    className={
                      packageNumb === 21
                        ? "book-btn-container-selected"
                        : "book-btn-container-select"
                    }
                  >
                    21-28 days
                  </button>
                </div>

                <h2 className="eslogan">
                  A holistic, natural and integrative cure that heals inside and
                  out in a magical environment.
                </h2>
                <p>
                  🤗Duplex By The Beach Retreat based on the nutrition and lifestyle
                  of Ayurvedic science. A holistic, natural and integrative cure
                  that heals inside and out.
                </p>
                <p>
                  Depending on the health status of the participant, several
                  types of DETOX can be done, including Fasting and
                  Semi-Fasting. The program includes Ayurvedic curative detox
                  daily menu (in Fasting or Semi-Fasting format (as applicable
                  in each case). The basis of Detox curative nutrition is the
                  use of organically grown fresh fruits and vegetables from
                  local farmers. All of this prepared with healing herbs and
                  spices. A wonder for the senses and health. 🌱🥬🥦
                </p>
                <p>✅Also includes:</p>
                <p>
                  ➡️Daily Meditation Practice, Relaxation Techniques, Breathing
                  Techniques and Yoga Postures. These are key to comprehensive
                  health treatment from a perspective that encompasses body and
                  mind.
                </p>
                <p>
                  ➡️Daily walks on the Beach and Mountain with spectacular
                  views.
                </p>
                <p>
                  It is also possible to book massage therapies, facial and/or
                  body treatments, personal trainer, horseback riding, Nutrition
                  workshops, Ayurvedic and Vegan Cuisine, additional Yoga
                  classes and courses, among others.🤍
                </p>
                <p>This program is available in different durations:</p>
              </div>

              {/* <button className="btn-org more">
                <span>View more</span>
                <img
                  className="arrow-see-more"
                  src="https://inspyria.com/Themes/ETR/images/icons/arrow-down-gray.svg"
                  alt="View more"
                  title="View more"
                />
              </button> */}
            </div>

            {/* <div className="ret-tit-rgt">
              <div className="retiro-reviews">
                <span>
                  <div className="ratings-empty">
                    <div className="ratings-full"></div>
                  </div>
                </span>
                <span className="mark">9.8 / 10</span>{" "}
                <a href="#reviewsret">View</a>
              </div>
            </div> */}
          </div>

          <div className="white-box-lft white-box-tit box-summary-reviews only-dsk">
            <div className="item-box-summary">
              <div>
                <div className="retiro-reviews">
                  <div className="rating">
                    Excellent
                    <span className="mark">9.8</span>
                  </div>

                  <a href="#reviewsret" style={{ color: "#333" }}>
                    See 29 reviews
                  </a>
                </div>
              </div>
            </div>

            <div className="item-box-summary column">
              <span className="plazasdisponibles custom">Open to All</span>
            </div>

            <div className="item-box-summary">
              <img
                className="ret-badge verificado"
                src="https://inspyria.com/Themes/ETR/images/Retiro-Popular-2-min.png"
                alt=""
              />
            </div>
          </div>

          <div className="retro-lft single-retiro">
            <div className="white-box-lft white-box-tit no-pad">
              <div
                className="divider no-border single-retiro"
                style={{ margin: "0 -40px 20px" }}
              >
                <div className="cnt-divider">
                  <div className="carac-list">
                    <ul>
                      <li>
                        <div className="cara-lft">
                          <div className="ls-lft">
                            <i className="icon duracion" style={{marginLeft: "0.5rem"}}></i>
                            <h5 style={{marginLeft: "0.4rem"}}>Duration</h5>
                          </div>
                          <div className="ls-rgt">
                            <span>From 14 to 21 days </span>
                          </div>
                        </div>

                        <div className="cara-rgt">
                          <div className="ls-lft">
                            <i className="icon habit"></i>
                            <h5>Instruction language</h5>
                          </div>
                          <div className="ls-rgt">
                            <strong className="lang-box text-white">
                              Spanish, English, French
                            </strong>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="cara-lft">
                          <div className="ls-lft">
                            <i className="icon horas-trabajo" style={{marginLeft: "0.5rem"}}></i>
                            <h5 style={{marginLeft: "0.4rem"}}>Arrival time</h5>
                          </div>
                          <div className="ls-rgt">15:00h</div>
                        </div>

                        <div className="cara-rgt">
                          <div className="ls-lft">
                            <i className="icon horas-trabajo" style={{marginLeft: "0.5rem"}}></i>
                            <h5 style={{marginLeft: "0.4rem"}}>Departure Time</h5>
                          </div>
                          <div className="ls-rgt"> 12:00h</div>
                        </div>
                      </li>
                    </ul>
                    <div className="cara-full">
                      <ul>
                        <li>
                          <div className="cara-full-lft">
                            <i className="icon yoga" style={{marginLeft: "0.4rem"}}></i>
                            <h5 style={{marginLeft: "0.2rem"}}>Types of Yoga</h5>
                          </div>
                          <div className="cara-full-rgt">
                            <ul>
                              <li>
                                <span className="tick-lst">Ashtanga</span>
                              </li>
                              <li>
                                <span className="tick-lst">Hatha</span>
                              </li>
                              <li>
                                <span className="tick-lst">Kundalini</span>
                              </li>
                              <li>
                                <span className="tick-lst">Vinyasa</span>
                              </li>
                              <li>
                                <span className="tick-lst">Nidra</span>
                              </li>
                              <li>
                                <span className="tick-lst">Ayurveda</span>
                              </li>
                              <li>
                                <span className="tick-lst">Integral</span>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <div className="cara-full-lft">
                            <i className="icon meditacion"></i>
                            <h5>Types of Meditation</h5>
                          </div>
                          <div className="cara-full-rgt">
                            <ul>
                              <li>
                                <span className="tick-lst">Chakra</span>
                              </li>
                              <li>
                                <span className="tick-lst">Mantra</span>
                              </li>
                              <li>
                                <span className="tick-lst">Guided</span>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="cara-full">
                      <ul>
                        <li>
                          <div className="cara-full-lft">
                            <i className="icon act"></i>
                            <h5>Activities</h5>
                          </div>
                          <div className="cara-full-rgt">
                            <ul>
                              <li>
                                <span className="tick-lst">Talks</span>
                              </li>
                              <li>
                                <span className="tick-lst">
                                  Meditation Sessions
                                </span>
                              </li>
                              <li>
                                <span className="tick-lst">Yoga Sessions</span>
                              </li>
                              <li>
                                <span className="tick-lst">Hiking</span>
                              </li>
                              <li>
                                <span className="tick-lst">
                                  Mindful Movement Exercises
                                </span>
                              </li>
                              <li>
                                <span className="tick-lst">
                                  Mindful Cooking
                                </span>
                              </li>
                              <li>
                                <span className="tick-lst">
                                  Therapy Reservation
                                </span>
                              </li>
                              <li>
                                <span className="tick-lst">
                                  Beach and Montana Tours
                                </span>
                              </li>
                              <li>
                                <span className="tick-lst">
                                  Breathing Techniques
                                </span>
                              </li>
                              <li>
                                <span className="tick-lst">
                                  Relaxation Techniques
                                </span>
                              </li>
                              <li>
                                <span className="tick-lst">
                                  Personal Trainer Reservation
                                </span>
                              </li>
                              <li>
                                <span className="tick-lst">
                                  Ayurveda Nutrition Workshop Reservation
                                </span>
                              </li>
                              <li>
                                <span className="tick-lst">
                                  Reserve Yoga Science Workshops
                                </span>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <ul>
                      <li>
                        <div className="cara-lft">
                          <div className="ls-lft">
                            <i className="icon nivel"></i>
                            <h5>Level</h5>
                          </div>
                          <div className="ls-rgt">None Required</div>
                        </div>

                        <div className="cara-rgt">
                          <div className="ls-lft">
                            <i className="icon formato"></i>
                            <h5>Max. group size</h5>
                          </div>
                          <div className="ls-rgt">6</div>
                        </div>
                      </li>

                      <li>
                        <div className="cara-lft">
                          <div className="ls-lft">
                            <i className="icon publico"></i>

                            <h5>Appropriate for</h5>
                          </div>
                          <div className="ls-rgt">Open to All</div>
                        </div>

                        <div className="cara-rgt">
                          <div className="ls-lft">
                            <i className="icon tiporetiro"></i>
                            <h5>Type</h5>
                          </div>
                          <div className="ls-rgt">Group</div>
                        </div>
                      </li>

                      <li>
                        <div className="cara-lft">
                          <div className="ls-lft">
                            <i className="icon aceptan-mascotas"></i>

                            <h5>Pet Friendly</h5>
                          </div>
                          <div className="ls-rgt">Yes</div>
                        </div>
                      </li>
                    </ul>
                  </div>{" "}
                </div>
                {/* <button className="toggle-btn">MORE INFORMATION</button> */}
              </div>
            </div>
          </div>

          <div id="facilitador" className="white-box-lft white-box-tit">
            <h2>Facilitators</h2>
            <ul className="facil-lst retiro">
              <li>
                <div className="ret-tit-lft">
                  <div className="cont-div">
                    <h3>
                      <span>Mava</span>
                    </h3>
                    <div className="lft-img">
                      <img
                        className=""
                        data-src="https://inspyria.com/storage/media/2021/02/vanepic-medium.jpg"
                        alt="Mava"
                        src="https://inspyria.com/storage/media/2021/02/vanepic-medium.jpg"
                      />
                    </div>
                    <div className="escrib my-4">
                      Specialist in Nutrition and Ayurvedic Lifestyle, and also
                      as a Yoga Teacher <br/>(500 hours YAI)
                    </div>
                    <p className="vermas">
                      I have been a passionate Yoga &amp; Ayurveda practitioner
                      for the past 10 years. I recently became professionally
                      certified as Ayurvedic Nutrition and Lifestyle Specialist,
                      and also as Yoga Teacher (500 YAI hours) both from
                      institutions in India. Among my other TOP passions are my
                      family, traveling and Brand Development &amp; Hotels. I
                      invite you to contact me and join one of our private
                      retreats. I am always happy to help other people discover
                      a new level of health and lifestyle.&nbsp;{" "}
                    </p>
                    {/* <a className="vermas">
                      View more
                      <img
                        className="arrow-see-more"
                        src="https://inspyria.com/Themes/ETR/images/icons/arrow-down-gray.svg"
                        alt="View more"
                        title="View more"
                      />
                    </a> */}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Accommodation */}
          <BeachAccomodation/>

          {/* cancel box */}
          <div
            id="cancel-box"
            className="white-box-lft white-box-tit hidm white-box-para acordeon-box"
          >
            <h2>Cancellation Policy</h2>
            {/* <img
              alt="View more"
              className="acordeon"
              data-src="https://inspyria.com/Themes/ETR/images/slide_next.svg"
              src="https://inspyria.com/Themes/ETR/images/slide_next.svg"
              
            /> */}

            <div className="txt-full">
              <div>
                <ul className="benef-lst">
                  <li>
                    If you cancel <strong>more than 10</strong> days before the
                    retreat’s arrival date: The entire deposit amount will be
                    exchanged for an MAVA VIDA VOUCHER.
                  </li>
                  <li>
                    If you cancel <strong>less than 10</strong> days before the
                    retreat’s start date: The deposit is lost.
                  </li>
                  <li>
                    If there is a cancellation due to COVID-19 or serious and
                    verifiable accident up to one day before the retreat begins,
                    an MAVA VIDA VOUCHER will be provided.
                  </li>
                  <li>
                    The MAVA VIDA VOUCHER is valid for reserving any other
                    Mava Vida experience whenever you want.
                  </li>
                </ul>
              </div>
              <p style={{ clear: "both" }}>
                If the retreat or event is cancelled due to a situation of force
                majeure, the full deposit is reimbursed.
              </p>
            </div>
          </div>

          {/* FAQ */}
       
        </div>

        {/* right side */}
        <div className="retro-rgt rigthside-desktop">
          {/* <form> */}
          
            <div className="box-reserva-flexible white-box-rgt lateral-reserva">
              <div className="book-btn-container mobile-version-btn">
                
                <button
                  onClick={() => setSetPackageNumb(4)}
                  className={
                    packageNumb === 4
                      ? "book-btn-container-selected"
                      : "book-btn-container-select"
                  }
                >
                  4 days
                </button>
                
                <button
                  onClick={() => setSetPackageNumb(7)}
                  className={
                    packageNumb === 7
                      ? "book-btn-container-selected"
                      : "book-btn-container-select"
                  }
                >
                  7-14 days
                </button>
                <button
                  onClick={() => setSetPackageNumb(14)}
                  className={
                    packageNumb === 14
                      ? "book-btn-container-selected"
                      : "book-btn-container-select"
                  }
                >
                  14-20 days
                </button>
                <button
                  onClick={() => setSetPackageNumb(21)}
                  className={
                    packageNumb === 21
                      ? "book-btn-container-selected"
                      : "book-btn-container-select"
                  }
                >
                  21-28 days
                </button>
              </div>
              <div className="price-no">
              {packageNumb === 4 && <span className="diasnoche"> {packageNumb} days </span>}
               {packageNumb === 7 &&  <span className="diasnoche">From {packageNumb} to 14 days</span>} 
               {packageNumb === 14 &&  <span className="diasnoche">From {packageNumb} to 21 days</span>} 
               {packageNumb === 21 &&  <span className="diasnoche">From {packageNumb} to 28 days</span>} 

                <div className="precio-dias">
                  <h4 style={{ display: " inline-block" }}>{totalCost == 0 ? "Please select dates and rooms below" :  `€ ${totalCost}`}</h4>
                </div>
                <input
                  type="hidden"
                  id="form_deposito-dsk"
                  name="deposito"
                  value="1240"
                />
              </div>

              <div>
                <h5>Dates Already Booked: {datesBooked}</h5>
                

                {booking.map((d,index) => {
                  var options = {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  };
                  return <p key={index}>{new Date(d).toLocaleDateString("en-US", options)}</p>;
                })}
              </div>

              <div className="dat-select cal">
                <h5>Select a start date:</h5>
                <DateRangePickers
                  dates={dates}
                  setDates={setDates}
                  handleSetDate={handleSetDate}
                />

                <div
                  className="frase-fecha-select"
                  id="frase-fecha-select-dsk"
                ></div>

                <h5>Wish to customize your duration? </h5>
                <div className="duration-select">
                  {/* first package */}
                  
                  {packageNumb === 4 && (
                    <Autocomplete
                      value={pack4[0]}
                      onChange={(e) => {
                        handlePackage(parseInt(e.target.value));
                      }}
                      //  inputValue={pack4[0]}
                      onInputChange={(event, newInputValue) => {
                        handlePackage(parseInt(newInputValue));
                      }}
                      id="controllable-states-demo"
                      options={pack4}
                      sx={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField {...params} label="4 days" />
                      )}
                    />
                  )}

                  {/* second package */}
                  {packageNumb === 7 && (
                    <Autocomplete
                      value={pack7[0]}
                      onChange={(e) => {
                        handlePackage(parseInt(e.target.value));
                      }}
                      //  inputValue={pack7vals}
                      onInputChange={(event, newInputValue) => {
                        handlePackage(parseInt(newInputValue));
                      }}
                      id="controllable-states-demo"
                      options={pack7}
                      sx={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField {...params} label="7-14 days" />
                      )}
                    />
                  )}

                  {/* third package */}

                  {packageNumb === 14 && (
                    <Autocomplete
                      value={pack14[0]}
                      onChange={(e) => {
                        handlePackage(parseInt(e.target.value));
                      }}
                      // inputValue={pack14vals}
                      onInputChange={(event, newInputValue) => {
                        handlePackage(parseInt(newInputValue));
                      }}
                      id="controllable-states-demo"
                      options={pack14}
                      sx={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField {...params} label="14-20 days" />
                      )}
                    />
                  )}

                  {/* fourth package */}
                  {packageNumb === 21 && (
                    <Autocomplete
                      value={pack21[0]}
                      onChange={(e) => {
                        handlePackage(parseInt(e.target.value));
                      }}
                      //  inputValue={pack21vals}
                      onInputChange={(event, newInputValue) => {
                        handlePackage(parseInt(newInputValue));
                      }}
                      id="controllable-states-demo"
                      options={pack21}
                      sx={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField {...params} label="14-20 days" />
                      )}
                    />
                  )}
                </div>
              </div>

              <div className="dat-select edit-person rooms-sel">
                <h5>Select participants:</h5>
                <div className="selection-person">
                  <img
                    className="logo-persons-selection"
                    data-src="https://inspyria.com/Themes/ETR/images/icons/AVATAR_empty.svg"
                    src="https://inspyria.com/Themes/ETR/images/icons/AVATAR_empty.svg"
                    alt=""
                  />
                  <div
                    onClick={() => handleSetParticipants(1)}
                    data-num="1"
                    className={
                      participants === 1
                        ? "item-person " + "selected "
                        : "item-person"
                    }
                  >
                    1
                  </div>
                  <div
                    onClick={() => handleSetParticipants(2)}
                    data-num="2"
                    className={
                      participants === 2
                        ? "item-person " + "selected "
                        : "item-person"
                    }
                  >
                    2
                  </div>
                </div>
              </div>

              <div className="dat-select edit-person ">
                <h5>Select room:</h5>

                <ul className="list-offers-dsk ">
                {participants === 1 && (
                    <>
                      <li
                        className="offer bck persons-1"
                        data-price_disscount_day="155"
                        data-price_day="155"
                        data-price_disscount_day_low_seasson=""
                        data-price_day_low_seasson=""
                        data-price_disscount_day_high_seasson=""
                        data-price_day_high_seasson=""
                        data-expired=""
                      >
                        <div className="select-name">
                          <input
                            id="offer-0-p-2-dsk"
                            type="radio"
                            name="offer"
                            onClick={(e) => setInd(1)}
                            value="1"
                          
                          />
                        </div>
                        <div className="edit-pers ">
                          <label htmlFor="offer-0-p-1-dsk" style={{width: "65%"}}>
                            <h2>{roomList[0]}</h2>
                          </label>

                          <small></small>

                          <small className="hab-compartida">
                            <img
                              className="mr-9"
                              data-src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png"
                              src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png"
                              alt=""
                            />{" "}
                            {/* <span className="uso-privado-room">Individual Use</span> */}
                          </small>
                          <div className="shortcuts-btn">
                            <div>
                          
                            <a
                              className="shortcut-item fancybox9826 show sm:"
                              // href="#poup-txt9826"
                              onClick={toggleModal2}
                            >
                              View photos
                            </a>

                        
                            </div>
                            {openModal2 && <Modal2/>}
                            <input
                              type="submit"
                              className="shortcut-item"
                              value="Reserve"
                            />
                          </div>
                        </div>
                        <div
                          className="edit-price "
                          data-uso="Private"
                          data-person="1"
                          data-price="2480"
                          data-deposit_percent="0.5"
                          data-deposit="1240"
                          data-moneda="€"
                        >
                          <span className="numpers">
                            <img
                              className="logo-numpers"
                              data-src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png"
                              src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png"
                              alt=""
                            />{" "}
                            1
                          </span>
                          <span className="price">€{roomCost1}</span>
                          <small>Total Price</small>
                        </div>
                      </li>
                      <li
                        className="offer bck persons-1"
                        data-price_disscount_day="155"
                        data-price_day="155"
                        data-price_disscount_day_low_seasson=""
                        data-price_day_low_seasson=""
                        data-price_disscount_day_high_seasson=""
                        data-price_day_high_seasson=""
                        data-expired=""
                      >
                        <div className="select-name">
                          <input
                            id="offer-0-p-2-dsk"
                            type="radio"
                            name="offer"
                            onClick={(e) => setInd(2)}
                            value="2"
                          />
                        </div>
                        <div className="edit-pers">
                          <label htmlFor="offer-0-p-1-dsk" >
                            <h2  style={{width: "65%"}}>{roomList[1]}</h2>
                          </label>

                          <small></small>

                          <small className="hab-compartida">
                            <img
                              className="mr-9"
                              data-src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png"
                              src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png"
                              alt=""
                            />{" "}
                            {/* <span className="uso-privado-room">Individual Use</span> */}
                          </small>
                          <div className="shortcuts-btn">

                            <div onClick={toggleModal3}>
                            <a
                              className="shortcut-item fancybox9826 show"
                              href="#poup-txt9826"
                           
                            >
                              View photos
                            </a>
                            {openModal3 && <Modal3/>}
                            </div>
                            <input
                              type="submit"
                              className="shortcut-item"
                              value="Reserve"
                            />
                          </div>
                        </div>
                        <div
                          className="edit-price"
                          data-uso="Private"
                          data-person="1"
                          data-price="2480"
                          data-deposit_percent="0.5"
                          data-deposit="1240"
                          data-moneda="€"
                        >
                          <span className="numpers">
                            <img
                              className="logo-numpers"
                              data-src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png"
                              src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png"
                              alt=""
                            />{" "}
                            1
                          </span>
                          <span className="price">€{roomCost2}</span>
                          <small>Total Price</small>
                        </div>
                      </li>


                      <li className="offer bck persons-1" 
                      data-price_disscount_day="155" 
                      data-price_day="155" data-price_disscount_day_low_seasson="" 
                      data-price_day_low_seasson="" 
                      data-price_disscount_day_high_seasson=""
                      data-price_day_high_seasson="" 
                      data-expired="">
                        <div className="select-name">
                          <input id="offer-0-p-2-dsk" type="radio" name="offer" onClick={(e) => setInd(3)}
                            value="3"/>
                          </div><div className="edit-pers">
                            <label htmlFor="offer-0-p-1-dsk" style={{width: "65%"}}>
                              <h2>{roomList[2]}</h2>
                              </label><small></small><small className="hab-compartida">
                                <img className="mr-9" data-src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png" src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png" alt=""/> 
                                </small><div className="shortcuts-btn">
                                  <div onClick={toggleModal2}>
                                  <a className="shortcut-item fancybox9826 show" href="#poup-txt9826" >
                                    View photos
                                    </a>
                                    </div>
                                  <input type="submit" className="shortcut-item" value="Reserve" fdprocessedid="sv652"/>
                                  </div></div>
                                  <div 
                                  className="edit-price" 
                                  data-uso="Private" 
                                  data-person="1" 
                                  data-price="2480" 
                                  data-deposit_percent="0.5" d
                                  ata-deposit="1240" 
                                  data-moneda="€">
                                    <span className="numpers">
                                      <img className="logo-numpers" data-src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png" src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png" alt=""/> 
                                      1</span><span className="price">€{roomCost3}</span><small>Total Price</small></div>
                            </li>

                            
                    <li
                      className="offer bck  persons-2"
                      data-price_disscount_day="310"
                      data-price_day="310"
                      data-price_disscount_day_low_seasson=""
                      data-price_day_low_seasson=""
                      data-price_disscount_day_high_seasson=""
                      data-price_day_high_seasson=""
                      data-expired=""
                    >
                      <div className="select-name">
                        <input
                          id="offer-0-p-2-dsk"
                          type="radio"
                          name="offer"
                          value="0-p-2"
                          onClick={(e) => setInd(5)}
                        />
                        <input
                          type="hidden"
                          name="habitacion[0-p-2]"
                          value="9826"
                        />
                        <input
                          type="hidden"
                          className="inputPrice"
                          name="precio[0-p-2]"
                          value="4960"
                        />
                      </div>


                      <div className="edit-pers">
                        <label htmlFor="offer-0-p-2-dsk" style={{width: "65%"}}>
                          <h2>{roomList[4]}</h2>
                        </label>

                        <input type="hidden" name="personas[0-p-2]" value="2" />

                        <small></small>

                        <small className="hab-compartida">
                          <img
                            className=""
                            data-src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png"
                            src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png"
                            alt=""
                          />{" "}
                          <span className="uso-privado-room"></span>
                        </small>
                        <div className="shortcuts-btn">
                          <div onClick={toggleModal1}>
                          <a
                            className="shortcut-item fancybox9826 show"
                            href="#poup-txt9826"
                          >
                            View photos
                          </a>
                          {openModal1 && <Modal1/>}
                          </div>
                          <input
                            type="submit"
                            className="shortcut-item"
                            value="Reserve"
                          />
                        </div>
                      </div>

                      <div
                        className="edit-price"
                        data-uso="Private"
                        data-person="2"
                        data-price="4960"
                        data-deposit_percent="0.5"
                        data-deposit="2480"
                        data-moneda="€"
                      >
                        <span className="numpers">
                          <img
                            className="logo-numpers"
                            data-src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png"
                            src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png"
                            alt=""
                          />{" "}
                          1
                        </span>
                        <span className="price">€{roomCost5}</span>
                        <small>Total Price</small>
                      </div>
                    </li>


{/*                     
                            <li className="offer bck persons-1" 
                      data-price_disscount_day="155" 
                      data-price_day="155" data-price_disscount_day_low_seasson="" 
                      data-price_day_low_seasson="" 
                      data-price_disscount_day_high_seasson=""
                      data-price_day_high_seasson="" 
                      data-expired="">
                        <div className="select-name">
                          <input id="offer-0-p-2-dsk" type="radio" name="offer" onClick={(e) => setInd(4)}
                            value="4"/>
                          </div><div className="edit-pers">
                            <label htmlFor="offer-0-p-1-dsk" style={{width: "65%"}}>
                              <h2>{roomList[3]}</h2>
                              </label><small></small><small className="hab-compartida-two">
                                <img className="mr-9" data-src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png" src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png" alt=""/> 
                                </small><div className="shortcuts-btn">
                                  <a className="shortcut-item fancybox9826 show" href="#poup-txt9826">View photos</a>
                                  <input type="submit" className="shortcut-item" value="Reserve" fdprocessedid="sv652"/>
                                  </div></div>
                                  <div 
                                  className="edit-price" 
                                  data-uso="Private" 
                                  data-person="1" 
                                  data-price="2480" 
                                  data-deposit_percent="0.5" d
                                  ata-deposit="1240" 
                                  data-moneda="€">
                                    <span className="numpers">
                                      <img className="logo-numpers" data-src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png" src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png" alt=""/> 
                                      1</span><span className="price">€{roomCost4}</span><small>Total Price</small></div>
                            </li> */}
                          
                    </>

                    

                    
                  )}

{participants === 2 && (
                    <>
                    <li
                      className="offer bck  persons-2"
                      data-price_disscount_day="310"
                      data-price_day="310"
                      data-price_disscount_day_low_seasson=""
                      data-price_day_low_seasson=""
                      data-price_disscount_day_high_seasson=""
                      data-price_day_high_seasson=""
                      data-expired=""
                    >
                      <div className="select-name">
                        <input
                          id="offer-0-p-2-dsk"
                          type="radio"
                          name="offer"
                          value="0-p-2"
                          onClick={(e) => setInd(4)}
                        />
                        <input
                          type="hidden"
                          name="habitacion[0-p-2]"
                          value="9826"
                        />
                        <input
                          type="hidden"
                          className="inputPrice"
                          name="precio[0-p-2]"
                          value="4960"
                        />
                      </div>


                      <div className="edit-pers">
                        <label htmlFor="offer-0-p-2-dsk" style={{width: "65%"}}>
                          <h2>{roomList[3]}</h2>
                        </label>

                        <input type="hidden" name="personas[0-p-2]" value="2" />

                        <small></small>

                        <small className="hab-compartida">
                          <img
                            className=""
                            data-src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png"
                            src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png"
                            alt=""
                          />{" "}
                          <span className="uso-privado-room">Shared Use</span>
                        </small>
                        <div className="shortcuts-btn">
                          <div onClick={toggleModal3}>
                          <a
                            className="shortcut-item fancybox9826 show"
                            href="#poup-txt9826"
                          >
                            View photos
                          </a>
                          {openModal3 && <Modal3/>}
                          </div>
                          <input
                            type="submit"
                            className="shortcut-item"
                            value="Reserve"
                          />
                        </div>
                      </div>


                      
                    
                                  
                     

                      <div
                        className="edit-price"
                        data-uso="Private"
                        data-person="2"
                        data-price="4960"
                        data-deposit_percent="0.5"
                        data-deposit="2480"
                        data-moneda="€"
                      >
                        <span className="numpers">
                          <img
                            className="logo-numpers"
                            data-src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png"
                            src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png"
                            alt=""
                          />{" "}
                          2
                        </span>
                        <span className="price">€{roomCost4}</span>
                        <small>Total Price</small>
                      </div>
                    </li>




                    <li className="offer bck persons-1" 
                      data-price_disscount_day="155" 
                      data-price_day="155" data-price_disscount_day_low_seasson="" 
                      data-price_day_low_seasson="" 
                      data-price_disscount_day_high_seasson=""
                      data-price_day_high_seasson="" 
                      data-expired="">
                        <div className="select-name">
                          <input id="offer-0-p-2-dsk" type="radio" name="offer" onClick={(e) => setInd(6)}
                            value="6"/>
                          </div><div className="edit-pers">
                            <label htmlFor="offer-0-p-1-dsk" style={{width: "65%"}}>
                              <h2>{roomList[5]}</h2>
                              </label><small></small><small className="hab-compartida">
                                <img className="mr-9" data-src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png" src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png" alt=""/> 
                                </small><div className="shortcuts-btn">
                                  <div onClick={toggleModal1}>
                                  <a className="shortcut-item fancybox9826 show" href="#poup-txt9826">
                                    View photos
                                  </a>
                                  </div>
                                  {openModal1 && <Modal1/>}
                                  <input type="submit" className="shortcut-item" value="Reserve" fdprocessedid="sv652"/>
                                  </div></div>
                                  <div 
                                  className="edit-price" 
                                  data-uso="Private" 
                                  data-person="1" 
                                  data-price="2480" 
                                  data-deposit_percent="0.5" d
                                  ata-deposit="1240" 
                                  data-moneda="€">
                                    <span className="numpers">
                                      <img className="logo-numpers" data-src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png" src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png" alt=""/> 
                                      1</span><span className="price">€{roomCost6}</span><small>Total Price</small></div>
                            </li>


                    
                            <li className="offer bck persons-1" 
                      data-price_disscount_day="155" 
                      data-price_day="155" data-price_disscount_day_low_seasson="" 
                      data-price_day_low_seasson="" 
                      data-price_disscount_day_high_seasson=""
                      data-price_day_high_seasson="" 
                      data-expired="">
                        <div className="select-name">
                          <input id="offer-0-p-2-dsk" type="radio" name="offer" onClick={(e) => setInd(7)}
                            value="7"/>
                          </div><div className="edit-pers">
                            <label htmlFor="offer-0-p-1-dsk" style={{width: "65%"}}>
                              <h2>{roomList[6]}</h2>
                              </label><small></small><small className="hab-compartida"> {/*hab-compartida-two for bigger size */}
                                <img className="mr-9" data-src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png" src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png" alt=""/> 
                                </small><div className="shortcuts-btn">
                                <div onClick={toggleModal1}>
                                  <a className="shortcut-item fancybox9826 show" href="#poup-txt9826">
                                    View photos
                                  </a>
                                  {openModal1 && <Modal1/>}
                                  </div>
                                  <input type="submit" className="shortcut-item" value="Reserve" fdprocessedid="sv652"/>
                                  </div></div>
                                  <div 
                                  className="edit-price" 
                                  data-uso="Private" 
                                  data-person="1" 
                                  data-price="2480" 
                                  data-deposit_percent="0.5" d
                                  ata-deposit="1240" 
                                  data-moneda="€">
                                    <span className="numpers">
                                      <img className="logo-numpers" data-src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png" src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png" alt=""/> 
                                      1</span><span className="price">€{roomCost7}</span><small>Total Price</small></div>
                            </li>
                          



                     
                      <li className="offer bck persons-1" 
                      data-price_disscount_day="155" 
                      data-price_day="155" data-price_disscount_day_low_seasson="" 
                      data-price_day_low_seasson="" 
                      data-price_disscount_day_high_seasson=""
                      data-price_day_high_seasson="" 
                      data-expired="">
                        <div className="select-name">
                          <input id="offer-0-p-2-dsk" type="radio" name="offer" onClick={(e) => setInd(8)}
                            value="7"/>
                          </div><div className="edit-pers">
                            <label htmlFor="offer-0-p-1-dsk" style={{width: "65%"}}>
                              <h2>{roomList[7]}</h2>
                              </label><small></small><small className="hab-compartida">
                                <img className="mr-9" data-src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png" src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png" alt=""/> 
                                </small><div className="shortcuts-btn">
                                  <div onClick={toggleModal1}>
                                  <a className="shortcut-item fancybox9826 show" href="#poup-txt9826">
                                    View photos
                                  </a>
                                  </div>
                                  {openModal1 && <Modal1/>}
                                  <input type="submit" className="shortcut-item" value="Reserve" fdprocessedid="sv652"/>
                                  </div></div>
                                  <div 
                                  className="edit-price" 
                                  data-uso="Private" 
                                  data-person="1" 
                                  data-price="2480" 
                                  data-deposit_percent="0.5" d
                                  ata-deposit="1240" 
                                  data-moneda="€">
                                    <span className="numpers">
                                      <img className="logo-numpers" data-src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png" src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png" alt=""/> 
                                      1</span><span className="price">€{roomCost8}</span><small>Total Price</small></div>
                            </li>
                          

                    </>
                    
                  )}


                  {participants === 3 && (
                    <li
                      className="offer bck  persons-3 bck-orange"
                      data-price_disscount_day="465"
                      data-price_day="465"
                      data-price_disscount_day_low_seasson=""
                      data-price_day_low_seasson=""
                      data-price_disscount_day_high_seasson=""
                      data-price_day_high_seasson=""
                      data-expired=""
                      style={{ display: "flex" }}
                    >
                      <div className="select-name">
                        <input
                          id="offer-0-p-3-dsk"
                          type="radio"
                          name="offer"
                          value="0-p-3"
                          checked
                        />
                        <input
                          type="hidden"
                          name="habitacion[0-p-3]"
                          value="9826"
                        />
                        <input
                          type="hidden"
                          className="inputPrice"
                          name="precio[0-p-3]"
                          value="7440"
                        />
                      </div>
                      <div className="edit-pers">
                        <label htmlFor="offer-0-p-3-dsk">
                          <h2>Double room</h2>
                        </label>

                        <input type="hidden" name="personas[0-p-3]" value="3" />

                        <small></small>

                        <small className="hab-compartida">
                          <img
                            className=""
                            data-src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png"
                            src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png"
                            alt=""
                          />{" "}
                          <span className="uso-privado-room">Shared</span>
                        </small>
                        <div className="shortcuts-btn">
                          <div onClick={toggleModal1}>
                          <a
                            className="shortcut-item fancybox9826 show"
                            href="#poup-txt9826"
                          >
                            View photos
                          </a>
                          {openModal1 && <Modal1/>}
                          </div>
                          <input
                            type="submit"
                            className="shortcut-item"
                            value="Reserve"
                          />
                        </div>
                      </div>
                      <div
                        className="edit-price"
                        data-uso="Shared"
                        data-person="3"
                        data-price="7440"
                        data-deposit_percent="0.5"
                        data-deposit="3720"
                        data-moneda="€"
                      >
                        <span className="numpers">
                          <img
                            className="logo-numpers"
                            data-src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png"
                            src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png"
                            alt=""
                          />{" "}
                          3
                        </span>
                        <span className="price">€7440</span>
                        <small>Total Price</small>
                      </div>
                    </li>
                  )}

                  {participants === 4 && (
                    <li
                      className="offer bck  persons-4"
                      data-price_disscount_day="620"
                      data-price_day="620"
                      data-price_disscount_day_low_seasson=""
                      data-price_day_low_seasson=""
                      data-price_disscount_day_high_seasson=""
                      data-price_day_high_seasson=""
                      data-expired=""
                    >
                      <div className="select-name">
                        <input
                          id="offer-0-p-4-dsk"
                          type="radio"
                          name="offer"
                          value="0-p-4"
                          checked
                        />
                        <input
                          type="hidden"
                          name="habitacion[0-p-4]"
                          value="9826"
                        />
                        <input
                          type="hidden"
                          className="inputPrice"
                          name="precio[0-p-4]"
                          value="9920"
                        />
                      </div>
                      <div className="edit-pers">
                        <label htmlFor="offer-0-p-4-dsk">
                          <h2>Double room</h2>
                        </label>

                        <input type="hidden" name="personas[0-p-4]" value="4" />

                        <small></small>

                        <small className="hab-compartida">
                          <img
                            className="bed-img"
                            data-src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png"
                            src="https://inspyria.com/Themes/ETR/images/icons/icon-habitacion-cama-min.png"
                            alt=""
                          />{" "}
                          <span className="uso-privado-room">Shared</span>
                        </small>
                        <div className="shortcuts-btn">
                          <div onClick={toggleModal1}>
                          <a
                            className="shortcut-item fancybox9826 show"
                            href="#poup-txt9826"
                          >
                            View photos
                          </a>
                          {openModal1 && <Modal1/>}
                          </div>
                          <input
                            type="submit"
                            className="shortcut-item"
                            value="Reserve"
                          />
                        </div>
                      </div>
                      <div
                        className="edit-price"
                        data-uso="Shared"
                        data-person="4"
                        data-price="9920"
                        data-deposit_percent="0.5"
                        data-deposit="4960"
                        data-moneda="€"
                      >
                        <span className="numpers">
                          <img
                            className="logo-numpers"
                            data-src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png"
                            src="https://inspyria.com/Themes/ETR/images/icons/AVATAR-min.png"
                            alt=""
                          />{" "}
                          4
                        </span>
                        <span className="price">€9920</span>
                        <small>Total Price</small>
                      </div>
                    </li>
                  )}
                </ul>
              </div>

              <div className="info-form">
                <h3>Please Fill Up the form</h3>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <label htmlFor="name">Name:</label> <br />
                <input
                  onChange={handleChange}
                  type="text"
                  id="name"
                  name="name"
                  style={{border:'1px solid rgba(0, 0, 0, 0.23)'}}
                />{" "}
                <br />
                <label htmlFor="email">Email:</label> <br />
                <input
                  onChange={handleChange}
                  type="email"
                  id="email"
                  name="email"
                  style={{border:'1px solid rgba(0, 0, 0, 0.23)'}}
                />{" "}
                <br />
                <label htmlFor="mobile">Mobile:</label> <br />
                <input
                  onChange={handleChange}
                  type="text"
                  id="mobile"
                  name="mobile"
                  style={{border:'1px solid rgba(0, 0, 0, 0.23)'}}
                />{" "}
                <br />
                <label htmlFor="info">Additional Info:</label> <br />
                <textarea
                  onChange={handleChange}
                  type="text"
                  id="info"
                  name="info"
                  style={{border:'1px solid rgba(0, 0, 0, 0.23)'}}
                />{" "}
                <br />
                {/* <div>
                  <button onClick={createNewBooking}>Book</button>
                </div> */}
              </div>
              <div className="dat-select total">
                <div className="resu-txt">
                  <h5 onClick={createNewBooking}>Pay now</h5>

                    {/* <button onClick={createNewBooking}>Test</button> */}

                </div>
                <div className="resu-price">
                  <span id="precio_total-dsk" data-total="2480">
                    {totalCost}
                  </span>
                </div>
              </div>

              <div id="btn-reserva" className="dat-select disclaimer">
                <ul>
                  <li></li>
                  <li>
                    <h5 className="cancel-policy">
                      <strong>
                        <a href="#cancel-box" style={{ color: "orange" }}>
                          For your peace of mind
                        </a>
                      </strong>{" "}
                      <span className="free">Flexible Reservation</span> until
                      10 days before the retreat
                    </h5>
                  </li>
                </ul>

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
          {/* </form> */}
        </div>
      </div>
    </section>
  );
}

