import { ArrowRight, Calendar } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";

const Destinations = async () => {
  const res = await fetch("http://localhost:5001/destinations");

  const destinations = await res.json();

  console.log(destinations);

  return (
    <div className="w-300 mx-auto  m-16 p-5">
      <h2 className="text-3xl font-medium text-black">
        Explore All Destinations
      </h2>
      <p className="text-gray-500">
        Find your prefect travel experience from our curated collection
      </p>
      <div className="grid grid-cols-3 w-full gap-4 mt-8">
        {destinations.map((destination) => {
          return (
            <div
              key={destination._id}
              className="bg-white shadow-sm border border-gray-100 p-2 h-full space-y-2 hover:scale-101 duration-75"
            >
              <div className="w-auto h-50 overflow-hidden">
                <Image
                  src={destination.imageUrl}
                  width={500}
                  height={200}
                  alt={destination.destinationName}
                />
              </div>

              <p className="flex items-center gap-2">
                <CiLocationOn />
                {destination.country}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-[22px] font-medium">
                  {destination.destinationName}
                </p>
                <p>
                  ${destination.price}/
                  <span className="text-[14px] font-normal text-gray-700">
                    Person
                  </span>
                </p>
              </div>
              <p className="flex items-center gap-2">
                <Calendar /> {destination.duration} Days
              </p>

              <button>
                <Link
                  className="text-sky-600 flex items-center gap-2"
                  href={`destinations/${destination._id}`}
                >
                  BOOK NOW < ArrowRight className="-rotate-45"/>
                </Link>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Destinations;
