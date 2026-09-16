"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";



const Navbar = () => {

  const nonavbarlink = ["/admin/login","/admin/adminpanel"]
const pathname = usePathname()

const hidenavbar = nonavbarlink.includes(pathname);
  return (
    <main className={hidenavbar ? "hidden" :"fixed top-0 left-0 z-50  w-full bg-white shadow-md" }>
      {/* MAIN WRAPPER */}
      <section className="max-w-7xl mx-auto w-full  ">
        <div className="flex items-center justify-between h-24">
          {/* LOGO + COLLEGE INFO */}
          <Link href="/" className="flex items-center gap-3">
            <div>
              <Image
                src="/collegelogo.png"
                alt="College Logo"
                width={78}
                height={78}
              />
            </div>

            <div className="leading-tight">
              <p className="text-purple-900 text-lg font-semibold">
                G.P Koirala
              </p>

              <p className="text-purple-800 text-sm font-semibold">
                Memorial Community College
              </p>

              <p className="text-purple-700 text-xs font-light mt-1">
                Sifal,Kathmandu
              </p>
            </div>
          </Link>

          {/* NAV LINKS */}
          <section className=" items-center gap-12 bg-white px-9 py-3 rounded-2xl shadow-purple-100 shadow-lg lg:flex hidden">
            <Link
              className="text-xs font-medium border-b-2 p-1 border-transparent text-gray-800 hover:border-b-purple-500 transition"
              href="/"
            >
              Home
            </Link>

            <Link
              className="text-xs font-medium border-b-2 p-1 border-transparent text-gray-800 hover:border-b-purple-500 transition"
              href="/about"
            >
              About us
            </Link>

            <Link
              className="text-xs font-medium border-b-2 p-1 border-transparent text-gray-800 hover:border-b-purple-500 transition"
              href="/programs"
            >
              Programs
            </Link>

            <Link
              className="text-xs font-medium border-b-2 p-1 border-transparent text-gray-800 hover:border-b-purple-500 transition"
              href="/news
              "
            >
              News and Events
            </Link>

            <Link
              className="text-xs font-medium border-b-2 p-1 border-transparent text-gray-800 hover:border-b-purple-500 transition"
              href="/admission"
            >
              Admission
            </Link>
          </section>

          {/* COLLEGE LOCATION */}
          <section className="hover:scale-105 transition">
            <Link
              href="/collegelocation"
              className="
              bg-[#3f06b0] text-white px-6 py-2 rounded-lg
              text-xs font-medium  hover:bg-[#32048f]  "
            >
              College Location
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Navbar;
