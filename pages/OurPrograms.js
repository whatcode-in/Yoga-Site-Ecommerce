import React from "react";
import data from "./api/yoga/Programs/OurProgramsData"
// import {useNavigate} from "react-router-dom"
import styles from "../styles/OurPrograms.module.css"
import { useRouter } from 'next/router'

function CategoryCards(props){

    const router = useRouter()

    return(
        <div className={props.clicked ? styles.category_main_container_expanded : styles.category_main_container} 
        onClick={() => props.toggleCardClicked(props.id)}
>

            <div className={styles.category_img_container}>
                <img src='six.jpg'/>
                {props.clicked && <button onClick={() => router.push(props.route)}>Book Now</button>}
            </div>
            <div className={props.clicked ? styles.category_text_container_expanded : styles.category_text_container}>
               {props.clicked ? props.name : props.id}
            </div>

        </div>
    )
}

export default function OurPrograms(){

    const [categorgyCardsData,setCategoryCardsData] = React.useState(data)

    const categoryCards = categorgyCardsData.map((card) => {
        return <CategoryCards 
                key={card.id} 
                image={card.image} 
                name={card.name} 
                id={card.id}
                clicked={card.clicked}
                toggleCardClicked={toggleCardClicked}
                route={card.route}
                />
    })    

    function toggleCardClicked(id){
        setCategoryCardsData(previousData => {
           return previousData.map((card) => {
             if(card.id === id){
                return {...card,clicked: true}
             }
             return {...card,clicked: false}
           })
        })
    }


    return (
        <div className={styles.our_programs_main_container} style={{marginTop: "5rem"}}>

           <div className={styles.our_programs_heading}>Our Programs</div>

            <div className={styles.our_programs_categories_container}>
                {categoryCards}
            </div>
            
        </div>
    )
}