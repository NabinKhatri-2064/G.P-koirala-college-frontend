"use client";

import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { urls } from "@/app/data/socialdata";
import { cards } from "@/app/data/socialdata";
import { inputfields } from "@/app/data/socialdata";
import Image from "next/image";
import {toast , ToastContainer} from "react-toastify"

const BASE_URL =process.env.NEXT_PUBLIC_API_URL

const page = () => {
  type FormData = {
    name: string;
    mobilenumber: string;
    email: string;
    interestedin: string;
  };

  const [form, setForm] = useState<FormData>({
    name: "",
    mobilenumber: "",
    email: "",
    interestedin: "",
  });

  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
       const response = await fetch(`${BASE_URL}/admission`, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok)
      {
        return toast.error("Error while submitting form")
      }

      setForm({
        name: "",
        mobilenumber: "",
        email: "",
        interestedin: "",
      });
      toast.success("Form sent Successfully!")
    } catch (error) {
      toast.error("Unable to connect to server");
    }
  };

  return (
    <main className="max-w-7xl mx-auto min-h-screen flex flex-col pt-40">
      <ToastContainer/>
      <section>
        {/* SOCIAL AND CONNECT US SECTION */}
        <section className="flex justify-between items-center px-8 py-2">
          <div>
            <h1 className="primary-font-color lg:text-5xl md:text-3xl font-bold">
              Social and Connect us
            </h1>
          </div>
          <div className="flex gap-2">
            {urls.map((url) => (
              <div key={url.id}>
                <SocialIcon url={url.url} />
              </div>
            ))}
          </div>
        </section>

        {/* GRID BOXES CONTAINING INFORMATION SECTION */}
        <section className="grid lg:grid-cols-4 lg:px-4 md:px-8 px-10 md:grid-cols-2 grid-cols-1 gap-8  w-full h-55 pt-16    ">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group flex bg-gray-50  flex-col gap-4 border-2 px-4 py-2 rounded-md  items-start hover:bg-linear-to-r from-[#32048f] to-blue-800  transition-all "
            >
              <div className="flex gap-4  ">
                <span className=" primary-font-color group-hover:text-white!">
                  {card.icons}
                </span>
                <p className="font-bold primary-font-color group-hover:text-white!">
                  {card.name}
                </p>
              </div>
              <div>
                <p className="flex flex-col group-hover:text-white">
                  {card.description}
                  <span>{card.additionaldescription}</span>
                </p>
              </div>
            </div>
          ))}
        </section>

        <section className="flex lg:flex-row flex-col pt-20 py-10 items-stretch  px-8  justify-between relative ">
          <div className="lg:w-[40%] w-full  flex flex-col gap-4  border-t-4 border-t-purple-800  px-10 py-6 rounded-md shadow-2xl ">
            <div className="flex flex-col gap-4">
              <p className="primary-font-color font-bold text-3xl">
                Inquire Now
              </p>
              <p className="text-gray-500 font-regular text-lg">
                Start Your Future with GCM - we're here to help
              </p>
            </div>
            <form onSubmit={handlesubmit} className="flex flex-col gap-4 ">
              {inputfields.map((inputfield) => (
                <div className="flex flex-col gap-2" key={inputfield.id}>
                  <label
                    className="primary-font-color font-semibold text-sm"
                    htmlFor={inputfield.label}
                  >
                    {inputfield.label}
                    <sup>* </sup>
                  </label>
                  <input
                    required
                    name={inputfield.name}
                    value={form[inputfield.name]}
                    onChange={(e) =>
                      setForm({ ...form, [inputfield.name]: e.target.value })
                    }
                    type={inputfield.type}
                    placeholder={inputfield.placeholder}
                    className="outline-2 focus:outline-purple-800 px-2 py-2 rounded-md placeholder:text-sm"
                  />
                </div>
              ))}
              <button
                type="submit"

                className="primary-bg-color px-2 py-2 rounded-md text-white w-full hover:bg-blue-900!  hover:cursor-pointer hover:scale-105 transition-all"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="w-full lg:w-[40%]">
            <Image
              src="/sujan sir.png"
              width={500}
              height={500}
              alt="admission-enquiry-image"
              className="w-full h-full     lg:inline-block hidden rounded-md object-cover "
            />
          </div>
        </section>
      </section>
    </main>
  );
};

export default page;
