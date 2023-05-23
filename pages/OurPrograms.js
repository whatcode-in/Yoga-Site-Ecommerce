import React from "react";
import data from "./api/yoga/Programs/OurProgramsData"
import styles from "../styles/OurPrograms.module.css"
import { useRouter } from 'next/router'


function CategoryCards(props) {
    const router = useRouter();
  
    const handleKnowMoreClick = (event) => {
      event.stopPropagation();
      props.setKnowMoreTrue(props.id);
    };
  
    const handleCloseClick = (event) => {
      event.stopPropagation();
      props.setKnowMoreFalse(props.id);
    };
  
    return (
      <div
        className={styles.venues_main_container}
        style={{ marginBottom: '6rem' }}
        onClick={() => props.toggleCardClicked(props.id)}
      >
        <div className={styles.venues_img_container}>
          <img src={props.image} />
          <button onClick={() => router.push(props.route)}>Book Now</button>
        </div>
  
        <div onClick={handleKnowMoreClick} className={styles.category_text_container_expanded}>
        
          <div style={{marginBottom: "1rem"}}>{props.name}</div>
          <button className={styles.programs_know_more}>Know More</button>
         
        </div>

        
  
        {props.knowMore && (
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={() => props.setKnowMoreFalse(props.id)}
          >
            <div className="absolute inset-0"></div>
            <div className="bg-white rounded-lg p-4">
              <h2 className="text-lg font-bold mb-4">{props.name}</h2>
              {/* <p className="mb-4">Modal content goes here...</p> */}
              <p className="mb-4">Option 1 : Ayurvedic Fasting with Soups and Herbal Water<br/>Option 2 : Fresh Organic Juices<br/>
Option 3 : Natural Spring Water <br/>
Menu Type: <br/>
Lunch & dinner: (Option 1) Selection of delicious and light broths/ (Option 2) Juices/(Option 3) 
Spring Water. Breakfast and between meals: All options include Herbal Waters Detox 5 
Elements. In our programs we use fresh organically grown fruits and vegetables from local 
farmers. All preparations include healing herbs and spices. A marvel for the senses and health. 
 
FOR WHO. For those looking for a deeper release of toxins, weight loss and lightness. You will 
benefit from a greater rest of the digestive system, where our internal intelligence will derive 
its efforts to cleanse, heal and balance wherever it is needed. This rest helps to optimize our 
functional systems and regulate them. </p>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer"
                onClick={handleCloseClick}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
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
                knowMore={card.knowMore}
                setKnowMoreTrue={setKnowMoreTrue}
                setKnowMoreFalse={setKnowMoreFalse}
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

    function setKnowMoreTrue(id){
        setCategoryCardsData(previousData => {
            return previousData.map((card) => {
              if(card.id === id){
                 return {...card,knowMore: true}
              }
              return {...card,knowMore: false}
            })
         })
    }

    function setKnowMoreFalse(id){
        console.log('index: ',id)
        setCategoryCardsData(previousData => {
            return previousData.map((card) => {
              if(card.id === id){
                 return {...card,knowMore: false}
              }
              return {...card,knowMore: false}
            })
         })
    }


    return (
        <div className={styles.venue_main_container} style={{marginTop: "5rem"}}>

           <div className={styles.venue_heading}>Our Programs</div>

            <div className={styles.venues_container}>
                {categoryCards}
                <h1 style={{paddingLeft : '40px' }}>A holistic, natural and integrative cure that heals from Inside and outside in a magical 
environment. Detox Healing Retreat based on Nutrition and Lifestyle of Ayurvedic and Yoga 
science.<br/> All our programs help you improve well-being and balance of the 5 bodies, Physical, Mental, 
Emotional, Psychic and Spiritual. <br/>
Any of our programs can be combined with each other. Upon your arrival we will design your 
specific program, according to your needs, objectives and general health conditions. The 
fasting period includes the entry or preparation, permanence and exit of it on the days of the 
program that each person performs, to help make the best adjustment in the desired time. <br/>
In our programs we use fresh organically grown fruits and vegetables from local farmers. All our preparations include healing herbs and spices. A marvel for the senses and health.
</h1>
            </div>

        </div>
    )
}