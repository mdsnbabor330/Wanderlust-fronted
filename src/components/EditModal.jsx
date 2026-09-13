"use client";

import { useState } from "react";
import { redirect } from "next/navigation";
import { BiEdit } from "react-icons/bi";

export default function EditModal({ destinationDetails }) {
  const {
    _id,
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    imageUrl,
    description,
  } = destinationDetails;

  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const destination = Object.fromEntries(formData.entries());
    console.log(destination);

    const res = await fetch(`http://localhost:5001/destinations/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(destination),
    });

    const data = await res.json();
    console.log("after insert", data);

    setIsOpen(false);
    redirect(`/destinations/${_id}`);
  };

  const inputClass =
    "w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm";
  const labelClass = "text-sm font-medium text-gray-700 mb-1 block";

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-md px-4 py-2 text-sm font-medium transition-colors"
      >
        <BiEdit />
        Edit
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl my-4">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900">Edit Destination</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 transition-colors text-xl"
              >
                ✕
              </button>
            </div>

            <form onSubmit={onSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Destination Name */}
                <div className="md:col-span-2">
                  <label className={labelClass}>Destination Name</label>
                  <input
                    name="destinationName"
                    required
                    defaultValue={destinationName}
                    placeholder="Bali Paradise"
                    className={inputClass}
                  />
                </div>

                {/* Country */}
                <div>
                  <label className={labelClass}>Country</label>
                  <input
                    name="country"
                    required
                    defaultValue={country}
                    placeholder="Indonesia"
                    className={inputClass}
                  />
                </div>

                {/* Category */}
                <div>
                  <label className={labelClass}>Category</label>
                  <select
                    name="category"
                    required
                    defaultValue={category}
                    className={inputClass}
                  >
                    <option value="" disabled>Select category</option>
                    <option value="Beach">Beach</option>
                    <option value="Mountain">Mountain</option>
                    <option value="City">City</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Luxury">Luxury</option>
                  </select>
                </div>

                {/* Price */}
                <div>
                  <label className={labelClass}>Price (USD)</label>
                  <input
                    name="price"
                    type="number"
                    required
                    defaultValue={price}
                    placeholder="1299"
                    className={inputClass}
                  />
                </div>

                {/* Duration */}
                <div>
                  <label className={labelClass}>Duration</label>
                  <input
                    name="duration"
                    required
                    defaultValue={duration}
                    placeholder="7 Days / 6 Nights"
                    className={inputClass}
                  />
                </div>

                {/* Departure Date */}
                <div className="md:col-span-2">
                  <label className={labelClass}>Departure Date</label>
                  <input
                    name="departureDate"
                    type="date"
                    required
                    defaultValue={departureDate}
                    className={inputClass}
                  />
                </div>

                {/* Image URL */}
                <div className="md:col-span-2">
                  <label className={labelClass}>Image URL</label>
                  <input
                    name="imageUrl"
                    type="url"
                    required
                    defaultValue={imageUrl}
                    placeholder="https://example.com/bali-paradise.jpg"
                    className={inputClass}
                  />
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <label className={labelClass}>Description</label>
                  <textarea
                    name="description"
                    required
                    defaultValue={description}
                    placeholder="Describe the travel experience..."
                    className={`${inputClass} min-h-[100px]`}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2.5 rounded-lg text-gray-700 hover:bg-gray-100 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-600 text-white font-medium transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
