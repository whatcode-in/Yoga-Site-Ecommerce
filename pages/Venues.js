import React from "react";
import './OurPrograms'
import data from "./api/yoga/Programs/VenueData"
import styles from "../styles/OurPrograms.module.css"

function VenueCards(props){
    return(
        <div className={props.clicked? styles.venues_main_container_expanded : styles.venues_main_container} 
        onClick={() => props.toggleCardClicked(props.id)}>

            <div className={styles.venues_img_container}>
                <img src={props.image}/>
                {props.clicked && <button>Book Now</button>}
            </div>
            <div className={props.clicked ? styles.venues_text_container_expanded : styles.venues_text_container}>
               {props.clicked ? props.name : props.id}
            </div>

        </div>
    )
}


export default function Venues(){

    const [venueCardsData,setVenueCardsData] = React.useState(data)

    const venueCards = venueCardsData.map((card) => {
        return <VenueCards 
                key={card.id} 
                image={card.image} 
                name={card.name} 
                id={card.id}
                clicked={card.clicked}
                toggleCardClicked={toggleCardClicked}
                />
    })

    function toggleCardClicked(id){
        setVenueCardsData(previousData => {
           return previousData.map((card) => {
             if(card.id === id){
                return {...card,clicked: true}
             }
             return {...card,clicked: false}
           })
        })
    }

    return (
        <div className={styles.venue_main_container}>
            
        <div className={styles.venue_heading}>Venues</div>

         <div className={styles.venues_container}>
             {venueCards}
         </div>
         
     </div>
    )
}