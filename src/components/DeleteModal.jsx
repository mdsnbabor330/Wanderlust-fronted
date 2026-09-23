"use client";

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { useState } from "react";

const DeleteModal = ({ destinationDetails }) => {
  const { _id, destinationName } = destinationDetails;

  const [isOpen, setIsOpen] = useState(false);

  const handelDelete = async (e) => {
    const { data: tokenData } = await authClient.token();
    e.preventDefault();

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
    });
    const data = await res.json();
    console.log(data);

    redirect("/destinations");
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2 transition-colors font-medium text-sm"
      >
        Delete
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
                  Delete Destination permanently?
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                This will permanently delete <strong>{destinationName}</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2.5 rounded-lg text-gray-700 hover:bg-gray-100 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handelDelete}
                  className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition-colors"
                >
                  Delete Destination
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModal;
