import React from 'react';
import { useRouter } from 'next/router';

export default function Sucess(){
 
    const router = useRouter();
    const {name,mobile} = router.query 

    function createNewBooking(){
        console.log('test: ',name,mobile)
    }
    
    React.useEffect(() => {
        if (name && mobile) {
            createNewBooking()
        }
    },[name, mobile])


    return(
        <div
        style={{
            width: "200px",
            height: "50px",
            margin: "10rem",
            padding: "1rem",
            backgroundColor: "green"
        }}
    >
        Success
    </div>
    )
}