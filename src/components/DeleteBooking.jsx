"use client";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

const DeleteBooking = ({ booking }) => {
  const { _id, destinationName } = booking;

  const [isOpen, setIsOpen] = useState(false);

  const handelDelete = async (e) => {
    const { data: tokenData } = await authClient.token();
    e.preventDefault();

    const res = await fetch(`http://localhost:5001/booking/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
    });
    const data = await res.json();
    console.log(data);

    window.location.reload();
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-red-500 hover:bg-red-600 text-white rounded-md px-10 py-5 transition-colors font-medium"
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
                <h3 className="text-xl font-bold text-gray-900">
                  Cancel Booking?
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                This will permanently cancel your booking for{" "}
                <strong>{destinationName}</strong>. This action cannot be
                undone.
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
