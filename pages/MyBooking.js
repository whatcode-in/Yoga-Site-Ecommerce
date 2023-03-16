import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

export default function MyBooking() {
const [myBooking,setMyBooking]=useState([]);


  return (
    <>
<div style={{marginTop: "4rem"}}>
<Table striped bordered hover>
      <thead>
        <tr>
          <th>Booking No</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Cost</th>
          <th>Package</th>
 
        </tr>
      </thead>
      <tbody>
   {/* {
    myBooking.map((d,ind)=>     <tr>
    <td>{ind+1}</td>
    <td>{d?.start}</td>
    <td>{d?.end}</td>
    <td>{d?.cost}</td>
    <td>{d?.package}</td>
   
  </tr>)
   } */}
      
      </tbody>
    </Table>
</div>
    </>
  )
}