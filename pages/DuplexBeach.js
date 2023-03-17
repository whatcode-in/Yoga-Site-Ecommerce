import React from "react";
import BeachImages from "./api/yoga/Booking/BeachImages";
import BeachMainSection from "./api/yoga/Booking/BeachMainSection";

export default function DuplexBeach(){
    return(
        <div style={{marginTop: "6rem"}}>
            <BeachImages/>   
            <BeachMainSection/>
        </div>
    )
}