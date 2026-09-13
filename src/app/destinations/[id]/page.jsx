import { ArrowLeft, ArrowRight } from "@gravity-ui/icons";

import Image from "next/image";
import Link from "next/link";

import { CiLocationOn } from "react-icons/ci";
import EditModal from "@/components/EditModal";
import DeleteModal from "@/components/DeleteModal";
import Booking from "@/components/Booking";

const DestinationDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5001/destinations/${id}`);
  const destinationDetails = await res.json();

  console.log(id);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 my-8 md:my-16">
      
      <div className="flex justify-between items-center px-2 py-3 shadow mb-5">
          <Link href={"/"} className="flex gap-3 items-center text-gray-500 bg-white">
            <ArrowLeft />
            Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <EditModal destinationDetails={destinationDetails}/>
            <DeleteModal destinationDetails={destinationDetails}/>
          </div>
        </div>
      <div className="p-5 shadow">
        <div className="w-full h-64 md:h-120 overflow-hidden object-cover">
          <Image
            src={destinationDetails.imageUrl}
            alt={destinationDetails.destinationName}
            width={1200}
            height={100}
            className=""
          />
        </div>
        <hr></hr>
        <div className="grid grid-cols-1 md:grid-cols-3 my-5 gap-6">
          <div className="md:col-span-2">
            <p className="flex items-center gap-2">
              <CiLocationOn />
              {destinationDetails.country}
            </p>

            <p className="text-[36px] font-medium">{destinationDetails.destinationName}</p>

            <p>{destinationDetails.duration} Days</p>

            <p className="mt-4">{destinationDetails.description}</p>
          </div>
          <div>
            <div className="p-3 shadow-md">
              <div>
                <p>Starting from</p>
                <p className="text-[38px] font-bold text-sky-500">
                  ${destinationDetails.price}
                </p>
                <p>Per Person</p>
              </div>
              <div></div>
              <Booking destinationDetails={destinationDetails}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
