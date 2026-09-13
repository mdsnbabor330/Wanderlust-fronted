"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/Wanderlast.png";
import { AiOutlineUser, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { authClient } from "@/lib/auth-client";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-sky-500">
            {isMobileMenuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700">
          <li>
            <Link href={"/"} className="hover:text-sky-500 transition-colors">Home</Link>
          </li>
          <li>
            <Link href={"/destinations"} className="hover:text-sky-500 transition-colors">Destinations</Link>
          </li>
          <li>
            <Link href={"/my-bookings"} className="hover:text-sky-500 transition-colors">My Bookings</Link>
          </li>
          <li>
            <Link href={"/add-destination"} className={`${user?'block':'hidden'} hover:text-sky-500 transition-colors`}>Add Destination</Link>
          </li>
        </ul>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href={"/"} onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src={Logo}
              alt="Wanderlust Logo"
              width={160}
              height={45}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Auth Section (Desktop) */}
        <div className="hidden md:flex items-center">
          {isPending ? (
            <div className="animate-pulse w-20 h-5 bg-gray-200 rounded"></div>
          ) : user ? (
            <div className="flex items-center gap-4">
              <span className="font-medium text-sm text-gray-700 hidden sm:block">
                Hello, {user?.name}
              </span>
              <div className="w-10 h-10 rounded-full border border-gray-200 overflow-hidden bg-gray-50 flex items-center justify-center shrink-0">
                {user?.imageurl ? (
                  <Image
                    src={user.imageurl}
                    alt={user.name}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <FaUserCircle size={24} className="text-gray-400" />
                )}
              </div>
              <button
                onClick={async () => {
                  await authClient.signOut({
                    fetchOptions: {
                      onSuccess: () => {
                        window.location.href = "/login";
                      },
                    },
                  });
                }}
                className="bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <ul className="flex gap-6 items-center text-sm font-semibold text-gray-700">
              <li>
                <Link href={"/profile"} className={`${user?'block':'hidden'} hover:text-sky-500 transition-colors flex items-center gap-1.5 `}>
                  <AiOutlineUser className="text-lg" />
                  Profile
                </Link>
              </li>
              <li>
                <Link href={"/login"} className="hover:text-sky-500 transition-colors">
                  Log In
                </Link>
              </li>
              <li>
                <Link href={"/signup"} className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2.5 rounded-full transition-colors">
                  Sign Up
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-md flex flex-col px-6 py-6 space-y-6">
          <ul className="flex flex-col gap-4 text-base font-semibold text-gray-700">
            <li>
              <Link href={"/"} onClick={toggleMobileMenu} className="hover:text-sky-500 block">Home</Link>
            </li>
            <li>
              <Link href={"/destinations"} onClick={toggleMobileMenu} className="hover:text-sky-500 block">Destinations</Link>
            </li>
            <li>
              <Link href={"/my-bookings"} onClick={toggleMobileMenu} className="hover:text-sky-500 block">My Bookings</Link>
            </li>
            <li>
              <Link href={"/add-destination"} onClick={toggleMobileMenu} className="hover:text-sky-500 block">Add Destination</Link>
            </li>
          </ul>
          
          <hr className="border-gray-100" />
          
          {/* Mobile Auth */}
          <div className="flex flex-col gap-4">
            {isPending ? (
              <div className="animate-pulse w-20 h-5 bg-gray-200 rounded"></div>
            ) : user ? (
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-gray-200 overflow-hidden bg-gray-50 flex items-center justify-center shrink-0">
                    {user?.imageurl ? (
                      <Image
                        src={user.imageurl}
                        alt={user.name}
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <FaUserCircle size={24} className="text-gray-400" />
                    )}
                  </div>
                  <span className="font-medium text-sm text-gray-700">
                    Hello, {user?.name}
                  </span>
                </div>
                <button
                  onClick={async () => {
                    await authClient.signOut({
                      fetchOptions: {
                        onSuccess: () => {
                          window.location.href = "/login";
                        },
                      },
                    });
                  }}
                  className="bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold py-3 rounded-full transition-colors text-center"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3 font-semibold text-gray-700">
                <Link href={"/profile"} onClick={toggleMobileMenu} className="flex items-center gap-1.5 hover:text-sky-500">
                  <AiOutlineUser className="text-lg" />
                  Profile
                </Link>
                <Link href={"/login"} onClick={toggleMobileMenu} className="hover:text-sky-500 block">
                  Log In
                </Link>
                <Link href={"/signup"} onClick={toggleMobileMenu} className="bg-sky-500 hover:bg-sky-600 text-white text-center py-3 rounded-full transition-colors mt-2">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
