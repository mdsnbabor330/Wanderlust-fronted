"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const DeleteBooking = ({booking}) => {
  const {
    _id,
    destinationName,
  } = booking;

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handelDelete = async () => {
      const res = await fetch(`http://localhost:5001/booking/${_id}`, {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json'
          }
      });
      const data = await res.json();
      console.log(data, "deleted");

      router.push("/my-bookings");
      router.refresh();
    };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center gap-1.5 px-5 py-2 bg-white text-red-500 text-sm font-semibold rounded-md border-2 border-red-400 hover:bg-red-50 transition-colors cursor-pointer"
      >
        🗑 Cancel
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-2xl shrink-0">
                  ⚠️
                </div>
                <h3 className="text-xl font-bold text-gray-900">Cancel Booking?</h3>
              </div>
              <p className="text-gray-600 mb-6">
                This will permanently cancel your booking for <strong>{destinationName}</strong>.
                This action cannot be undone.
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2.5 rounded-lg text-gray-700 hover:bg-gray-100 font-medium transition-colors"
                >
                  Keep Booking
                </button>
                <button
                  onClick={handelDelete}
                  className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition-colors"
                >
                  Yes, Cancel It
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteBooking;
