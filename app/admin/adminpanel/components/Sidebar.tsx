import { GlobeCheck, LayoutFreeform, LucideIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {

    interface adminpage  {
        id: number;
        icon: LucideIcon;
        url: string;
        name:string;
    }

  





  return (
    <main className="absolute h-full right-0 w-64 bg-gray-600 p-4 top-16 ">
      
      <section>
        <p className="text-white text-center text-3xl">Options</p>
        <div className="flex justify-center pt-4 w-full">
          <Link
            className="flex text-white gap-2 hover:bg-gray-100/20 p-2 rounded-md w-full justify-center"
            href="/"
          >
            <GlobeCheck />
            Back to Website
          </Link>
        </div>
      </section>


        {/* PAGES SECTION */}
      <section className="pt-6">
        <p className="text-white text-center text-3xl">Admin Pages</p>
        <div className="flex justify-center pt-6 w-full">
          <Link
            className="flex text-white gap-2 hover:bg-gray-100/20 p-2 rounded-md w-full justify-center"
            href="/"
          >
            <GlobeCheck />
            Back to Website
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Sidebar;
