import DeleteBooking from "@/components/DeleteBooking";
import { auth } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyBookings = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await fetch("http://localhost:5001/booking", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const bookingData = await res.json();

  return (
    <div className="max-w-4xl mx-auto mt-28 mb-16 px-6">
      {/* Page Header */}
      <div className="mb-3">
        <h1 className="text-4xl font-bold text-gray-900">My Bookings</h1>
        <p className="text-gray-500 mt-1 text-sm">
          Manage and view your upcoming travel plans
        </p>
      </div>

      <hr className="border-gray-200 my-5" />

      {/* Empty State */}
      {bookingData.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <p className="text-lg mb-4">You have no bookings yet.</p>
          <Link
            href="/destinations"
            className="inline-block text-sky-500 font-semibold underline hover:text-sky-600 transition-colors"
          >
            Browse Destinations
          </Link>
        </div>
      )}

      {/* Booking Cards */}
      <div className="flex flex-col divide-y divide-gray-100">
        {bookingData.map((booking) => {
          const status = booking.status || "Confirmed";
          const isConfirmed = status === "Confirmed";
          const isPending = status === "Pending";

          const badgeClass = isConfirmed
            ? "bg-emerald-100 text-emerald-800"
            : isPending
              ? "bg-amber-100 text-amber-800"
              : "bg-red-100 text-red-800";

          const dotClass = isConfirmed
            ? "bg-emerald-500"
            : isPending
              ? "bg-amber-400"
              : "bg-red-500";

          return (
            <div
              key={booking._id}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5 py-6"
            >
              {/* Image */}
              <div className="shrink-0 w-full sm:w-[260px] h-[175px] overflow-hidden rounded-lg">
                <Image
                  src={booking.imageUrl}
                  alt={booking.destinationName}
                  width={280}
                  height={175}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                {/* Status Badge */}
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-3 ${badgeClass}`}
                >
                  <span className={`w-2 h-2 rounded-full ${dotClass}`}></span>
                  {status}
                </span>

                {/* Name */}
                <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                  {booking.destinationName}
                </h2>

                {/* Meta Info */}
                <div className="flex flex-col gap-1 mb-3">
                  <p className="flex items-center gap-2 text-sm text-gray-600 m-0">
                    <span>📅</span>
                    Departure: {booking.departureDate || "May 15, 2026"}
                  </p>
                  <p className="flex items-center gap-2 text-sm text-gray-600 m-0">
                    <span>📍</span>
                    Booking ID: {booking._id?.slice(-6) || "b1"}
                  </p>
                </div>

                {/* Price */}
                <p className="text-2xl font-bold text-sky-500">
                  ${booking.price}
                </p>
              </div>

              {/* Actions */}
              <div className="flex sm:flex-col gap-2.5 sm:min-w-[110px]">
                <DeleteBooking booking={booking} />
                <Link
                  href={`/destinations/${booking._id}`}
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold rounded-md border-2 border-sky-500 transition-colors"
                >
                  <span>👁</span> View
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyBookings;
