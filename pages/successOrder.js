import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function SuccessOrder() {
  const router = useRouter();
  const { id } = router.query;

  const updatePayment = async () => {
    try {
      const res = await fetch(`https://blushing-plum-belt.cyclic.app/api/admin/update-order-payment/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ paymentMade: true }),
      });

      if (res.ok) {
        console.log("Payment updated successfully!");
      } else {
        console.log("Failed to update payment.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {

    if (id) {
      updatePayment();
    }
  }, [id]);

  return (
    <div className='stripe-success-container'>
       <div className='stripe-success-div'><img src='favicon.png'/> <span>Order and payment successfull</span></div> 
    </div>
  );
}
