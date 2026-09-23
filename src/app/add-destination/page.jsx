'use client';
import { redirect } from 'next/navigation';
import React from 'react';

const AddDestination = () => {
    const onSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const destination = Object.fromEntries(formData.entries());
        console.log(destination);

        const res= await fetch ('http://localhost:5001/destination',{
            method : 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(destination)
        })

        const data = await res.json()
        console.log('after insert',data);

        redirect("/");
    }

    return (
        <form onSubmit={onSubmit}
            className="w-full max-w-4xl mx-auto my-30 p-4 md:p-8 space-y-8 border border-gray-200 shadow-sm rounded-2xl"
          >
            <h1 className='text-3xl font-bold'>Add Destination</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Destination Name */}
              <div className="md:col-span-2 flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">Destination Name</label>
                  <input name="destinationName" required placeholder="Bali Paradise" className="rounded-2xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>

              {/* Country */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Country</label>
                <input name="country" required placeholder="Indonesia" className="rounded-2xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>

              {/* Category */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Category</label>
                <select
                  name="category"
                  required
                  className="rounded-2xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-sky-500 w-full"
                >
                  <option value="" disabled selected>Select category</option>
                  <option value="Beach">Beach</option>
                  <option value="Mountain">Mountain</option>
                  <option value="City">City</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Cultural">Cultural</option>
                  <option value="Luxury">Luxury</option>
                </select>
              </div>

              {/* Price */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Price (USD)</label>
                <input
                  name="price"
                  type="number"
                  required
                  placeholder="1299"
                  className="rounded-2xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              {/* Duration */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Duration</label>
                <input
                  name="duration"
                  required
                  placeholder="7 Days / 6 Nights"
                  className="rounded-2xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              {/* Departure Date */}
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Departure Date</label>
                <input name="departureDate" type="date" required className="rounded-2xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>

              {/* Image URL */}
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Image URL</label>
                <input
                  name="imageUrl"
                  type="url"
                  required
                  placeholder="https://example.com/bali-paradise.jpg"
                  className="rounded-2xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              {/* Description */}
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  required
                  placeholder="Describe the travel experience..."
                  className="rounded-3xl border border-gray-300 p-3 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>

            {/* Buttons */}
            <button
              type="submit"
              className="rounded-md p-3 w-full bg-cyan-500 hover:bg-cyan-600 transition-colors text-white font-medium shadow-sm"
            >
              Add Destination
            </button>
          </form>
    );
};

export default AddDestination;