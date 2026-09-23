"use client";
import { authClient } from "@/lib/auth-client";
import { ArrowRight } from "@gravity-ui/icons";
import { redirect } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const Booking = ({ destinationDetails }) => {
  const handleBooking = async (destinationDetails) => {
    const bookingData = destinationDetails;

    const { data: tokenData } = await authClient.token();

    

    const res = await fetch("http://localhost:5001/booking", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    if (data) {
      toast.success("Booking successful");
      redirect("/destinations");
    }
    console.log(bookingData);
  };
  return (
    <button
      onClick={() => handleBooking(destinationDetails)}
      className="text-white bg-sky-500 hover:bg-sky-600 transition-colors rounded-xl font-bold w-full py-4 flex justify-center items-center gap-2"
    >
      BOOK NOW <ArrowRight className="-rotate-45" />
    </button>
  );
};

export default Booking;
