import React, { useEffect } from "react";
import { useRouter } from "next/router";

export default function SuccessOrder() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
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

    if (id) {
      updatePayment();
    }
  }, [id]);

  return (
    <div
      style={{
        width: "200px",
        height: "50px",
        margin: "10rem",
        padding: "1rem",
        backgroundColor: "green",
      }}
    >
      Success Order {id}
    </div>
  );
}
