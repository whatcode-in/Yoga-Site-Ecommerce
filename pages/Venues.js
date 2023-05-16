import React from "react";
import './OurPrograms'
import data from "./api/yoga/Programs/VenueData"
import styles from "../styles/OurPrograms.module.css"
import { useRouter } from 'next/router'

function VenueCards(props){
    const router = useRouter()

    return(
        <div className={styles.venues_main_container} 
        onClick={() => props.toggleCardClicked(props.id)}>

            <div className={styles.venues_img_container}>
                <img src={props.image}/>
                <button onClick={() => router.push(props.route)}>Book Now</button>
            </div>
            <div className={styles.venues_text_container_expanded}>
               {props.name}
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
                route={card.route}
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

         <div className={styles.venues_description}>
         Our retreat program takes place in 3 venues, 10 min distance from each other. For those who
        prefer to be located right o the beach we offer a beautiful beach Duplex with Panoramic sea
        views. At just 5 minutes walking distance you will find yourself in the wild beach of Manilva. If
        you are not bringing your car, not an issue since we offer daily transfer from the Duplex to the
        main Villa.
        <br></br>
        <br></br>


Those of you who prefer to be rounded by lush greens, can be accommodated in our beautiful
Garden Villas located in the heart of the Natural Cork Park, with beautiful swimming pools
and mature Zen gardens overlooking the forest and only just 7 minutes by car from the beach.
We have complimentary daily transfer to the beach and we also get to do Yoga and walks in
the beach, upon the day schedule.Those of you who prefer to be rounded by lush greenery we suggest.

<br></br>
<br></br>


All activities take place between the main villa and outdoor spaces like Yoga on the beach,
Yoga on the river, Yoga on the forrest..with the after walks on those outdoor spaces.
Participants with reduced mobility can also join since special activities will be arranged for
them.
<br></br>
<br></br>


Meals can be taken in the main Villa or in the Duplex itself, according to the guest’s
preference. Some days we will have outdoors picnic in beautiful natural surroundings and or
villages. Every meal will be provided according to the individual’s nutrition plan * Detox,
Fasting, Balance…*

<br></br>
<br></br>


Those who want to be more on their own can relax and chill at any time, as well as decide to
spend more time reading, meditating, walking on their own...Those who want to spend more
time doing activities, can add extra activities like horse riding, 4 hrs long walks, additional
cooking classes, additional Yoga classes, Painting workshops, Kayak in the river, Golf, Tenis, 4x4
wheel excursions.

<br></br>
<br></br>


All our venues are highly appreciated by our participants, once here you can also distribute
your retreat time within the different venues if you like.
         </div>
         
     </div>
    )
}