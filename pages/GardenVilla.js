import React from "react";
import GardenVillaImages from "./api/yoga/Booking/GardenVillaImages";
import GardenMainSection from "./api/yoga/Booking/GardenMainSection";


export default function GardenVilla(){
    return(
        <div style={{marginTop: "6rem"}}>
            <GardenVillaImages/>
            <GardenMainSection/>
        </div>
    )
}