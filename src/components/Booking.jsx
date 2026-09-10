'use client';
import { ArrowRight } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import { redirect } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const Booking = ({ destinationDetails }) => {
    const handleBooking = async (destinationDetails) => {
        const bookingData = destinationDetails;
         const res= await fetch('http://localhost:5001/booking', {
            method: 'POST',
            headers: {
                'Content-type' :'application/json'
            },
            body:JSON.stringify(bookingData)
        });
        const data = await res.json();
        if(data){
             toast.success("Booking successful");
             redirect('/destinations');
        }
        console.log(bookingData);
    }
    return (
                <Button onClick={() => handleBooking(destinationDetails)}
                  className="text-white bg-sky-500 w-full p-3 flex items-center gap-2"
                >
                  BOOK NOW < ArrowRight className="-rotate-45"/>
                </Button>
    );
};

export default Booking;