import React, { useState } from "react";
//date range issue pending
import DateRangePickers from "./api/yoga/Booking/DateRangePickers";
// import emailjs from "@emailjs/browser";


export default function BookTwo() {
  const [startDateData, setStartDatesData] = useState("Select Start Date");
  const [endDateData, setEndDatesData] = useState("Select End date");
  const [data, setData] = useState({
    name: "",
    mobile: "",
    email: "",
    info: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const handleSetDate = (value) => {
    const startDate =
      value[0].startDate.getDate() +
      "-" +
      value[0].startDate.getMonth() +
      "-" +
      value[0].startDate.getFullYear();
    const endDate =
      value[0].endDate.getDate() +
      "-" +
      value[0].endDate.getMonth() +
      "-" +
      value[0].endDate.getFullYear();
    setStartDatesData(startDate);
    setEndDatesData(endDate);
    setDates(value);
    console.log("date picker", value, startDate);
  };

  const handleSendEmail = () => {
    const messageTwo=`Name:${data.name} , email:${data.email} mobile:${data.mobile} Info:${data.info} start:${startDateData} end:${endDateData}`
    emailjs
      .send(
        "service_oyac08p",
        "template_33heapt",
        {from_name:'tanvir',to_name:'nurul',reply_to:'ni163034@gmail.com',message:messageTwo},
        "WUMFgN-AKEjhdZoco"
      )
      .then(
        (result) => {
          console.log('emailjs',result.text);
        },
        (error) => {
          console.log('emailjs',error.text);
        }
      );
  };

  console.log('book two data',data);
  return (
    <>
      <div className="container" style={{marginTop: '5rem'}}>
        <div className="row pt-5">
          <div className="col-md-6 booking-two-input-container">
            <h3>Please Fill Up the form</h3>
            <label htmlFor="name">Name:</label> <br />
            <input onChange={handleChange} type="text" id="name" name="name" /> <br />
            <label htmlFor="email">Email:</label> <br />
            <input onChange={handleChange} type="email" id="email" name="email" /> <br />
            <label htmlFor="mobile">Mobile:</label> <br />
            <input onChange={handleChange} type="text" id="mobile" name="mobile" /> <br />
            <label htmlFor="info">Additional Info:</label> <br />
            <textarea onChange={handleChange} type="text" id="info" name="info" /> <br />
            <div>
              <button onClick={handleSendEmail}>Book</button>
            </div>
          </div>
          <div className="col-md-6">
            <h3>Select date</h3>

            <DateRangePickers
              dates={dates}
              setDates={setDates}
              handleSetDate={handleSetDate}
            />

          </div>
        </div>
      </div>
    </>
  );
}

