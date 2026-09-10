import DeleteBooking from '@/components/DeleteBooking';
import Image from 'next/image';
import React from 'react';

const MyBookings =async () => {

    const res= await fetch('http://localhost:5001/booking')
    const bookingData = await res.json();
    console.log(bookingData);

    return (
        <div className='w-300 mx-auto  m-16 p-5'>
            {
                bookingData.map((booking)=>{
                    return(
                        <div
                            key={booking._id}
                            className='bg-white flex items-center gap-7 mb-8 shadow-sm border border-gray-100 p-2 h-full space-y-2 hover:scale-101 duration-75'
                        >   
                        <div className='w-auto h-50 overflow-hidden'>
                            <Image
                                src={booking.imageUrl} 
                                alt={booking.destinationName}
                                width={500}
                                height={200} 
                            />
                        </div>
                        <div>
                             <p className='flex items-center gap-2'>
                            {booking.country}
                        </p>
                        <div className='flex items-center justify-between'>
                            <p className='text-[22px] font-medium'>{booking.destinationName}</p>
                            </div>
                        <p className='flex items-center gap-2'>
                            {booking.duration} Days
                        </p>

                        <p className='flex items-center gap-2'>
                            ${booking.price}/
                            <span className='text-[14px] font-normal text-gray-700'>
                                person
                            </span>
                        </p>
                        </div>
                        <DeleteBooking booking={booking}></DeleteBooking>
                       
                    </div>
                );
                })
            }
            
        </div>
    );
};

export default MyBookings;