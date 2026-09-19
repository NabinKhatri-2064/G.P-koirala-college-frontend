import { HandFist } from "lucide-react";
import Image from "next/image";
import React from "react";
import { whyChooseUs } from "../data/whychooseus";

const Whychooseus = () => {
  return (
    <main className="pt-10 max-w-7xl mx-auto  flex flex-row  min-h-screen ">
      <section className="relative  h-172 max-w-md w-full   hidden lg:inline-block  ">
        <Image
          src="/krisholiya.png"
          alt="whychooseus-image"
          height={400}
          width={400}
          
          loading="lazy"
          className="relative object-fit h-full w-full"
        />
        
      </section>

      <div className="flex flex-col gap-18 lg:w-[80%] lg:px-4 px-4 pb-4">
        <section className="flex flex-col gap-6  items-center justify-center w-full">
          <h1 className="lg:text-6xl text-3xl font-medium">
            Why{" "}
            <span className="lg:text-5xl text-3xl rounded-md primary-bg-color font-medium p-2 text-white">
              choose
            </span>{" "}
            Us ?{" "}
          </h1>
          <p className=" text-gray-400">
            we are committed to providing quality education ,moder facilities.
              and a supportive environment to help you achieve your dreams
          </p>
        </section>

        <section className="w-full grid lg:grid-cols-3 relative grid-cols-1  gap-3  lg:max-h-72 h-full">
          {whyChooseUs.map((choose, index) => (
            <div className="group p-4 border relative rounded-md flex flex-col  gap-4 hover: hover:shadow-2xl hover:shadow-purple-200 overflow-hidden " key={index}>

              <div
              className="
              absolute
              inset-0
              bg-linear-to-r from-purple-800 to-blue-800
              translate-x-full
              transition-transform
              group-hover:translate-x-0
              duration-200  
              "
              >

              </div>

              <div className="relative">
                <p className="flex gap-3 group-hover:text-white">
                  <choose.icon className="primary-bg-color rounded-md p-1 text-white" />
                  {choose.title}
                </p>
              </div>
              <div className="relative">
                <p className="group-hover:text-white! text-xs text-gray-500 ">{choose.description}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Whychooseus;
