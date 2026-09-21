"use client";

import { BellRing, FaceSlightlyFrowning, Menu, Settings2, ShieldCheck, SquareArrowRight, X } from "lucide-react";
import React, { useState } from "react";

import { adminoption, adminpages, options } from "@/app/data/admindata/adminoptions";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";

const page = () => {
  const [currentpage, setCurrentPage] = useState<adminoption>("Dashboard");
  const [open , setOpen] = useState<boolean>(false)
  const [show , setShow] = useState<boolean>(false);


  return (
    <main className="h-full min-h-screen pb-18 ">
       <section className="max-w-screen z-20 primary-bg-color fixed  w-full max-h-16 h-full flex  justify-center items-center ">
      <section className="flex justify-between px-10 items-center  w-full">
        <div className="flex  items-center gap-4 text-white  ">
          <div onClick={() => redirect("/")} className="hover:cursor-pointer">
            <Image
              width={48}
              height={48}
              alt="college-logo"
              src="/collegelogo.png"
            />
          </div>

          <div>
            <p className="font-medium text-sm">GPKMC</p>
            <p className="text-xs">G.P Koirala Memorial College</p>
          </div>
          <p className="lg:inline-block hidden">| </p>

          <div className="lg:inline-block hidden">
            <p className="flex text-sm">
              <ShieldCheck size={16} />
              Admin Portal
            </p>
          </div>
        </div>

        <div className=" items-center gap-4 flex ">
          <div className="bg-gray-100/20 md:flex flex-col hidden  items-center  rounded-full p-2 relative hover:bg-gray-100/30 ">
            <BellRing
            onClick={()=> setShow(!show)}
            color="white" size={16} className="hover:cursor-pointer" />
            {show ? <p className="w-64 h-32 bg-white outline outline-gray-200 p-2  flex flex-col items-center justify-center rounded-md bottom-0 top-10  absolute text-gray-400">
              {" "}
              <FaceSlightlyFrowning className="text-gray-400" />
              No notifications
            </p> : ""}
          </div>

          <div className="text-white md:inline-block hidden">
            <Link
              className="text-sm gap-2 items-center bg-white/20 hover:bg-gray-100/30 flex  p-2 rounded-md"
              href="/"
            >
              <SquareArrowRight size={16} /> Visit Website
            </Link>

          </div>
            <button 
            onClick={()=> setOpen(!open)}
            className="inline-block lg:hidden transition-transform duration-200">
              {open ? <X color="white"/> : <Menu color="white"/>}
              </button>
        </div>
      </section>
    </section>
      <section className="lg:flex gap-8 px-4 relative">
        <aside className="relative w-64 lg:flex flex-col gap-8">
          <h1 className=" w-full lg:flex hidden items-center justify-center gap-2 rounded-md px-2 py-2 text-xl font-semibold text-white primary-bg-color">
            <Settings2 size={30} />
            Admin options
          </h1>

          <div className="w-full rounded-md bg-gray-100 lg:inline-block hidden">
            {options.map((option) => (
              <div
                key={option.id}
                onClick={() => setCurrentPage(option.options)}
                className="flex w-full px-2 hover:cursor-pointer"
              >
                <div className="flex w-full items-center justify-center">
                  <p
                    className={`${option.styling} flex w-full items-center justify-start gap-4 text-xs`}
                  >
                    <span>
                      <option.icon />
                    </span>
                    {option.options}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </aside>




            {open ? <div className="right-2 top-16 rounded-md bg-gray-100 lg:hidden inline-block fixed w-48 z-20">
            {options.map((option) => (
              <div
                key={option.id}
                onClick={() => setCurrentPage(option.options)}
                className="flex w-full px-2 hover:cursor-pointer "
              >
                <div className="flex w-full items-center justify-center">
                  <p
                    className={`${option.styling} flex w-full items-center justify-start gap-4 text-xs`}
                  >
                    <span>
                      <option.icon />
                    </span>
                    {option.options}
                  </p>
                </div>
              </div>
            ))}
          </div> : "" }
            


        <section className=" flex-1 rounded-md border p-4 pt-26">
          {adminpages.map((adminpage) => (
            <div key={adminpage.alt}>
              {currentpage === adminpage.alt && adminpage.page}
            </div>
          ))}
        </section>
      </section>


    </main>
  );
};

export default page;
