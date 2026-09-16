import Navbar from "@/app/Components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Visions } from "@/app/data/college";
import { CarouselDemo } from "@/app/Components/Caruosel";

const page = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto pt-30 ">
        <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-4 gap-6 ">
          <div className="flex flex-col gap-4 justify-center bg-[#3f06b0] p-4 text-white rounded-lg ">
            <div className="flex flex-col justify-center items-center">
              <p className="lg:text-4xl md:text-2xl text-lg font-bold">
                Key Facts
              </p>
            </div>
            <div className="flex  flex-col justify-center items-center gap-1">
              <p className="lg:text-4xl md:text-xl text-lg font-bold">25 +</p>
              <p className="text-sm md:text-base">Years of Experience</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <p className="lg:text-4xl md:text-xl text-lg font-bold">100+</p>
              <p className="text-sm md:text-base">International Partnerships</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <p className="lg:text-4xl md:text-xl text-lg font-bold">15000+</p>
              <p className="text-sm md:text-base">Students Graduated</p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-1 p-4">
            <div className="flex flex-col justify-center text-purple-800  gap-1">
              <p className="lg:text-2xl md:text-xl text-lg font-bold">
                GP Koirala
              </p>
              <p className="lg:text-2xl md:text-xl text-lg font-bold">
                Memorial College
              </p>
            </div>
            <div>
              <p className="lg:text-lg md:text-base text-sm italic border-l-2 border-purple-900 p-2">
                "Education is the foundation of progress.it empowers individuals
                and societies to reach their full potential..."
              </p>
            </div>
            <div>
              <p className="text-gray-500">
                GPKMC aims to develop responsible and capable individuals who
                can contribute meaningfully to society and the wider community.
                Through a supportive and inspiring learning environment, the
                college encourages students to think critically, embrace
                challenges, and transform opportunities into meaningful
                achievements while becoming future professionals and visionary
                leaders.
              </p>
            </div>

            <div className="flex justify-center items-center">
              <Link
                href="/"
                className="bg-[#3f06b0] text-white w-full  text-center py-2 px-4 rounded hover:bg-[#5a18c2]"
              >
                Read More
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/sujan sir.png"
              width={500}
              height={500}
              alt="College Image"
              className="lg:inline-block hidden rounded-lg "
            />
          </div>
        </section>

        {/* OUR VISION SECTION */}
        <section className="py-20 px-4">
          {/* Section Heading */}
          <div className="mb-12">
            <p className="text-center text-3xl md:text-4xl font-bold text-purple-800">
              Our Vision
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-10">
            {/* Sticky Left Side */}
            <div className="lg:sticky lg:top-24 self-start h-fit">
              <div className="bg-[#3f06b0] text-white rounded-lg p-8">
                <p className="text-3xl font-bold">Our Vision</p>

                <p className="mt-4 text-white/80 leading-7">
                  To create an inspiring learning environment that empowers
                  students with knowledge, skills, and values to become
                  responsible citizens and successful professionals.
                </p>
              </div>
            </div>

            {/* Right Side - 4 Vision Cards */}
            <div className="grid grid-cols-2 gap-6">
              {Visions.map((vision) => (
                <div
                  key={vision.id}
                  className="group rounded-lg bg-gray-100 p-8 flex flex-col hover:bg-purple-800 transition-all duration-200 ease-in-out"
                >
                  <p className="text-purple-800 text-xl font-bold group-hover:text-white">
                    {vision.title}
                  </p>

                  <p className="mt-3 text-gray-600 leading-7 group-hover:text-white">
                    {vision.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
              <CarouselDemo/>
        </section>
      </main>
    </>
  );
};

export default page;
