import { auth } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";

const FeaturedDestinations = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  let destinations = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    if (Array.isArray(data)) {
      destinations = data;
    }
  } catch {
    destinations = [];
  }

  const featured = destinations.slice(0, 5);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 font-sans">
      {/* Section Header */}
      <div className="flex items-start justify-between gap-4 mb-10 flex-wrap">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-1">
            Featured Destinations
          </h2>
          <p className="text-gray-500 text-sm">
            Handpicked travel experiences for the adventure seekers
          </p>
        </div>
        <Link
          href="/destinations"
          className="bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold tracking-widest px-5 py-2.5 rounded transition-colors duration-200 whitespace-nowrap"
        >
          ALL DESTINATIONS &nbsp;→
        </Link>
      </div>

      {/* Cards Grid */}
      {featured.length === 0 ? (
        <p className="text-center text-gray-400 py-16">
          No destinations found. Make sure the backend server is running.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((dest) => (
              <div
                key={dest._id}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={dest.imageUrl}
                    alt={dest.destinationName}
                    fill
                    className="object-cover"
                  />
                  {/* Rating Badge */}
                  <span className="absolute top-3 right-3 bg-black/55 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    ⭐ {dest.rating || "4.8"}
                  </span>
                </div>

                {/* Body */}
                <div className="p-4">
                  <p className="text-gray-400 text-xs mb-1">
                    📍 {dest.country}
                  </p>

                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-lg font-bold text-gray-900 truncate">
                      {dest.destinationName}
                    </h3>
                    <p className="text-sm whitespace-nowrap shrink-0">
                      <span className="font-bold text-gray-900">
                        ${dest.price}
                      </span>
                      <span className="text-gray-400 text-xs">/Person</span>
                    </p>
                  </div>

                  <p className="text-gray-400 text-xs mb-4">
                    📅 {dest.duration} Days / Nights
                  </p>

                  <Link
                    href={`/destinations/${dest._id}`}
                    className="text-sky-500 hover:text-sky-700 font-bold text-xs tracking-widest transition-colors duration-150"
                  >
                    BOOK NOW →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Row */}
          <div className="flex items-center justify-between mt-8 pt-5 border-t border-gray-100">
            <span className="text-sm text-gray-400">
              1 / {Math.ceil(destinations.length / 5)}
            </span>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-500 flex items-center justify-center transition-colors">
                ‹
              </button>
              <button className="w-8 h-8 rounded-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-500 flex items-center justify-center transition-colors">
                ›
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default FeaturedDestinations;
