"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const nonavbarlink = ["/admin/login", "/admin/adminpanel"];
  const pathname = usePathname();

  interface navlinks {
    id: number;
    label: string;
    styling: string;
    href: string;
  }

  const navbarlinks: navlinks[] = [
    {
      id: 1,
      label: "Home",
      styling:
        "text-xs font-medium border-b-2 p-1 border-transparent hover:text-blue-900 text-gray-800 hover:border-b-blue-900 transition",
      href: "/",
    },
    {
      id: 2,
      label: "About us",
      styling:
        "text-xs font-medium border-b-2 p-1 border-transparent text-gray-800 hover:text-blue-900 hover:border-b-blue-900 transition",
      href: "/about",
    },
    {
      id: 3,
      label: "Programs",
      styling:
        "text-xs font-medium border-b-2 p-1 border-transparent text-gray-800 hover:text-blue-900 hover:border-b-blue-900 transition",
      href: "/programs",
    },
    {
      id: 4,
      label: "News and Events",
      styling:
        "text-xs font-medium border-b-2 p-1 border-transparent text-gray-800 hover:text-blue-900 hover:border-b-blue-900 transition",
      href: "/news",
    },
    {
      id: 5,
      label: "Admission",
      styling:
        "text-xs font-medium border-b-2 p-1 border-transparent text-gray-800 hover:text-blue-900 hover:border-b-blue-900 transition",
      href: "/admission",
    },
  ];

  const hidenavbar = nonavbarlink.includes(pathname);
  return (
    <main
      className={
        hidenavbar
          ? "hidden"
          : "fixed top-0 left-0 z-50  w-full bg-white shadow-md primary-bg-color"
      }
    >
      {/* MAIN WRAPPER */}
      <section className="lg:max-w-7xl lg:mx-auto w-full lg:px-0 px-4 ">
        <div className="flex items-center justify-between lg:h-24 h-16">
          {/* LOGO + COLLEGE INFO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative overflow-hidden w-12 h-12 lg:w-18 lg:h-18">
              <Image
                src="/collegelogo.png"
                alt="College Logo"
                fill
                className="object-cover h-full w-full"
              />
            </div>

            <div className="leading-tight">
              <p className="text-white lg:text-lg text-sm font-semibold">G.P Koirala</p>

              <p className="text-white lg:text-sm text-xs font-semibold">
                Memorial Community College
              </p>

              <p className="text-white text-xs font-light mt-1">
                Sifal,Kathmandu
              </p>
            </div>
          </Link>

          {/* NAV LINKS */}
          <section className=" items-center gap-12 bg-white px-9 py-3 rounded-2xl  shadow-lg lg:flex hidden">
            {navbarlinks.map((navitems) => (
              <Link
                key={navitems.id}
                className={navitems.styling}
                href={navitems.href}
              >
                {navitems.label}
              </Link>
            ))}
          </section>

          {/* COLLEGE LOCATION */}
          <section className="hover:scale-105 transition hidden lg:inline-block">
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
