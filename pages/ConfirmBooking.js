import React from "react";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function ConfirmBooking() {
  const router = useRouter();
  const { data } = router.query;
  const [loading, setLoading] = React.useState(false);

  let parsedData = {};

  if (data) {
    parsedData = JSON.parse(data);
  }

  function handleCheckOut() {
    setLoading(true);
    const templateParams = {
      to_name: parsedData.name,
      type_of_retreat: parsedData.typeOfRetreat,
      mobile: parsedData.mobile,
      booking_email: parsedData.email,
      participants: parsedData.participants,
      info: parsedData.info,
      night: parsedData.night,
      day: parsedData.day,
      total_cost: parsedData.totalCost,
      start_date: parsedData.startDate,
      type_of_room: parsedData.typeOfRoom,
      reply_to: " info@mavavida.com",
      to_email: parsedData.email,
      from_email: "info@mavavida.com",
    };

    emailjs
      .send(
        "service_ax2i22k",
        "template_6swq34t",
        templateParams,
        "KDlc-b-ZVfV0uovZs"
      )
      .then(
        function (response) {
          console.log("testing 11");
          console.log("SUCCESS!", response.status, response.text);
          sendSecondMail();
        },
        function (err) {
          console.log("FAILED...", err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error in booking",
          });
          return null;
        }
      );
  }

  function sendSecondMail() {
    const templateParams = {
      to_name: "mava vida ",
      from_name: "admin",
      type_of_retreat: parsedData.typeOfRetreat,
      mobile: parsedData.mobile,
      booking_email: parsedData.email,
      participants: parsedData.participants,
      info: parsedData.info,
      night: parsedData.night,
      day: parsedData.day,
      total_cost: parsedData.totalCost,
      start_date: parsedData.startDate,
      type_of_room: parsedData.typeOfRoom,
      reply_to: "info@mavavida.com",
    };

    emailjs
      .send(
        "service_ax2i22k",
        "template_vktuv8q",
        templateParams,
        "KDlc-b-ZVfV0uovZs"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          connectToStripe();
        },
        function (err) {
          console.log("FAILED...", err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error in booking",
          });
          return null;
        }
      );
  }

  function connectToStripe() {
    fetch("https://blushing-plum-belt.cyclic.app/api/admin/test-checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: {
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
            paymentMade: false,
          },
        },
      }),
    })
      .then((res) => {
        setLoading(false);
        if (res.ok) return res.json();
        return res.json().then((e) => Promise.reject(e));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        setLoading(false);
        console.error(e.error);
      });
  }

  function handleCancel() {
    router.push("/Venues");
  }

  return (
    <div>
      {parsedData.name && (
        <div className="ml-8 flex flex-col items-center justify-center text-lg mt-48 w-[60%]">
          <div className="mb-8">
            <div>
              <span className="font-bold">Name:</span> {parsedData.name}
            </div>
            <div>
              <span className="font-bold">Mobile Number:</span>{" "}
              {parsedData.mobile}
            </div>
            <div>
              <span className="font-bold">Email:</span> {parsedData.email}
            </div>
            <div>
              <span className="font-bold">Participants:</span>{" "}
              {parsedData.participants}
            </div>
            <div>
              <span className="font-bold">Info:</span> {parsedData.info}
            </div>
            <div>
              <span className="font-bold">Day:</span> {parsedData.day}
            </div>
            <div>
              <span className="font-bold">Night:</span> {parsedData.night}
            </div>
            <div>
              <span className="font-bold">Package Number:</span>{" "}
              {parsedData.packageNumber}
            </div>
            <div>
              <span className="font-bold">Type Of Retreat:</span>{" "}
              {parsedData.typeOfRetreat}
            </div>
            <div>
              <span className="font-bold">Type Of Room:</span>{" "}
              {parsedData.typeOfRoom}
            </div>
            <div>
              <span className="font-bold">Total Cost:</span>{" "}
              {parsedData.totalCost}
            </div>
            <div>
              <span className="font-bold">Start Date:</span>{" "}
              {parsedData.startDate}
            </div>

            <button
              style={{
                backgroundColor: "#c0a664",
                color: "#455010",
                padding: "0.5rem",
                fontWeight: "600",
                borderRadius: "5px",
                marginTop: "2rem",
              }}
              onClick={handleCheckOut}
            >
              {!loading ? "Checkout" : "Loading..."}
            </button>

            <button
              style={{
                backgroundColor: "#c0a664",
                color: "#455010",
                padding: "0.5rem",
                fontWeight: "600",
                borderRadius: "5px",
                marginTop: "2rem",
                marginLeft: "2rem",
              }}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {!parsedData.name && (
        <div
          style={{
            width: "400px",
            height: "400px",
            fontSize: "18px",
            fontWeight: 500,
          }}
        >
          Booking not made yet
        </div>
      )}
    </div>
  );
}
