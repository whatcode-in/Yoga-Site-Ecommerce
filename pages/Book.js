import React from "react";
import Gallery from "./api/yoga/Booking/Gallery";
import MainSection from "./api/yoga/Booking/MainSection";

export default function Book(){
    return(
    <div style={{marginTop: "5rem"}}>
     <Gallery/>
     <MainSection/>
     <div className="container">
        <h3 className="book-now-title">
          You are one more step closer to the most <br/> transformative experience
        </h3>
      </div>
    </div>
    )
}