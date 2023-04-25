import React from 'react';
import { useRouter } from 'next/router';

export default function ConfirmBooking() {

  const router = useRouter();
  const { data } = router.query;

  let parsedData = {}
  
  if(data){
    parsedData = JSON.parse(data)
  }


 
  function handleCheckOut(){
    fetch("https://blushing-plum-belt.cyclic.app/api/admin/test-checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: 
          {
            name: parsedData.typeOfRetreat,
            quantity: 1,
            price: parsedData.totalCost * 100,
            bookingData: {
              name: parsedData.name,
              mobile: parsedData.mobile,
              email: parsedData.email,
              participants: parsedData.participants,
              info: parsedData.info,
              day: parsedData.day,
              night: parsedData.night,
              packageNumber: parsedData.packageNumber,
              typeOfRetreat: parsedData.typeOfRetreat,
              typeOfRoom: parsedData.typeOfRoom,
              totalCost: parsedData.totalCost,
              startDate: parsedData.startDate,
              paymentMade: false
            }
          },
        
      }),
    })
      .then(res => {
        if (res.ok) return res.json()
        return res.json().then(e => Promise.reject(e))
      })
      .then(({ url }) => {
        window.location = url
      })
      .catch(e => {
        console.error(e.error)
      })}


    function handleCancel(){
        router.push('/Venues')
    }

  return (
     <div>
      {parsedData.name &&  <div className='ml-8 flex flex-col items-center justify-center text-lg mt-48 w-[60%]'>
      <div className='mb-8'>
        <div><span className="font-bold">Name:</span> {parsedData.name}</div>
        <div><span className="font-bold">Mobile Number:</span> {parsedData.mobile}</div>
        <div><span className="font-bold">Email:</span> {parsedData.email}</div>
        <div><span className="font-bold">Participants:</span> {parsedData.participants}</div>
        <div><span className="font-bold">Info:</span> {parsedData.info}</div>
        <div><span className="font-bold">Day:</span> {parsedData.day}</div>
        <div><span className="font-bold">Night:</span> {parsedData.night}</div>
        <div><span className="font-bold">Package Number:</span> {parsedData.packageNumber}</div>
        <div><span className="font-bold">Type Of Retreat:</span> {parsedData.typeOfRetreat}</div>
        <div><span className="font-bold">Type Of Room:</span> {parsedData.typeOfRoom}</div>
        <div><span className="font-bold">Total Cost:</span> {parsedData.totalCost}</div>
        <div><span className="font-bold">Start Date:</span> {parsedData.startDate}</div>


        <button 
          style=
          {{
          backgroundColor: "#c0a664",
          color: '#455010',
          padding: "0.5rem",
          fontWeight: '600',
          borderRadius: '5px',
          marginTop: "2rem"
          }}
          onClick={handleCheckOut}
        >
          Checkout 
        </button>

        <button 
          style=
          {{
          backgroundColor: "#c0a664",
          color: '#455010',
          padding: "0.5rem",
          fontWeight: '600',
          borderRadius: '5px',
          marginTop: "2rem",
          marginLeft: "2rem"
          }}
          onClick={handleCancel}
        >
          Cancel
        </button>

        </div>
        </div>
      }

    {!parsedData.name  && <div
      style={{
        width: "400px",
        height: "400px",
        fontSize: "18px",
        fontWeight: 500,
      
      }}>
      Booking not made yet
    </div>}
      
    </div>
  );
}