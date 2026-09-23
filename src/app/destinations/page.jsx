import { ArrowRight, Calendar } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { CiLocationOn } from "react-icons/ci";

export const dynamic = 'force-dynamic';

const Destinations = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  let destinations = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations`, {
      cache: "no-store",
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    if (Array.isArray(data)) {
      destinations = data;
    }
  } catch (err) {
    console.error("Error fetching destinations:", err);
  }

  console.log(destinations);

  return (
    <div className="w-full max-w-7xl mx-auto mt-28 mb-16 px-6 py-8">
      <h2 className="text-3xl font-bold text-gray-900">Explore All Destinations</h2>
      <p className="text-gray-500 mt-1">
        Find your perfect travel experience from our curated collection
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {destinations.map((destination) => (
          <Link
            key={destination._id}
            href={`destinations/${destination._id}`}
            className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col"
          >
            {/* Image */}
            <div className="w-full h-48 overflow-hidden">
              <Image
                src={destination.imageUrl}
                width={500}
                height={200}
                alt={destination.destinationName}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-2 flex-1">
              <p className="flex items-center gap-1.5 text-sm text-gray-500">
                <CiLocationOn className="text-base shrink-0" />
                {destination.country}
              </p>

              <div className="flex items-start justify-between gap-2">
                <p className="text-lg font-semibold text-gray-900 leading-snug">
                  {destination.destinationName}
                </p>
                <p className="text-base font-bold text-sky-500 whitespace-nowrap">
                  ${destination.price}
                  <span className="text-xs font-normal text-gray-500">/Person</span>
                </p>
              </div>

              <p className="flex items-center gap-1.5 text-sm text-gray-500">
                <Calendar className="shrink-0" /> {destination.duration} Days
              </p>

              <div className="mt-auto pt-3">
                <span className="inline-flex items-center gap-1.5 text-sky-600 font-semibold text-sm group-hover:gap-2.5 transition-all">
                  BOOK NOW <ArrowRight className="-rotate-45" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
