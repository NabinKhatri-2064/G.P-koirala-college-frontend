
"use client";

import { Settings2 } from "lucide-react";
import React, { useState } from "react";

import {
  adminoption,
  adminpages,
  options,
} from "@/app/data/admindata/adminoptions";

const page = () => {

  const [loading , isloading] = useState<boolean>(true);


  const [currentpage, setCurrentPage] =
    useState<adminoption>("Dashboard");

  return (
    <main className="pt-30 pb-18 min-h-screen h-full">
  <section className="flex gap-8 px-4">
    
    <aside className="w-64 shrink-0 flex flex-col gap-8">
      
      <h1 className="flex text-xl justify-center font-semibold w-full items-center gap-2 text-white primary-bg-color px-2 py-2 rounded-md shrink-0">
        <Settings2 size={30} />
        Admin options
      </h1>

      <div className="w-full bg-gray-100 rounded-md">
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => setCurrentPage(option.options)}
            className="w-full flex px-2 hover:cursor-pointer"
          >
            <div className="flex justify-center items-center w-full">
              <p
                className={`${option.styling} gap-4 text-xs flex items-center justify-start w-full`}
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

    <section className="flex-1 min-w-0 border p-4 rounded-md">
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
