"use client";

import Gridline from "@/app/Components/Gridlines";
import { EyeClosed, EyeOff, TriangleAlert } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Adminportal from "./components/Adminportal";

const page = () => {
  const router = useRouter();
  const [showpassword, setShowPassword] = useState<Boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handlesubmit = async (e: React.FormEvent) => {
    console.log("Handle submit Running");
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/login`,
        {
          method: "POST",
          body: JSON.stringify({ username, password }),
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        },
      );

      if (!response.ok) {
        throw new Error("Invalid username or password!");
      }

      const data = await response.json();
      router.push("/admin/adminpanel")
      setUsername("");
      setPassword("");
      toast.success("Logged in successfully");
    } catch (error) {
      console.log(error);
      toast.error(
        error instanceof Error ? error.message : "Internal Server Error",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className=" flex-col gap-2 ">
      <Gridline />
      <ToastContainer />

      <Adminportal />
      <section className="flex lg:flex-row flex-col  rounded-md border-2 justify-between  min-h-screen gap-4  border-gray-200 pb-10 pt-16 ">
        <div className="relative flex flex-col items-center justify-center md:min-w-xs  w-full bg-[#32048f]/80 rounded-md gap-4 p-4 overflow-hidden rounded-br-[50%]">
          <Image
            src="/sujan sir.png"
            height={1200}
            width={1200}
            alt="sir"
            className="absolute -z-10 h-full w-full object-cover "
          />
          <div className="relative w-32">
            <Image
              src="/collegelogo.png"
              width={400}
              height={400}
              alt="college-logo"
              className="object-cover"
            />
          </div>
          <p className="lg:text-4xl text-2xl text-white font-bold">GPKMC</p>
          <p className="lg:text-4xl text-2xl text-white font-bold">
            Admin Login
          </p>

          <p className="text-white lg:text-sm text-xs">
            All rights reserved &#xA9; 2024 GP koirala College.
          </p>
        </div>

        {/* ACTUAL FORM STARTING */}
        <div className="flex flex-col md:min-w-3xl w-full px-4 justify-center h-full  ">
          <form
            className="flex  flex-col  gap-8 border border-gray-2 bg-gray-100  shadow-2xl p-8 rounded-md"
            onSubmit={handlesubmit}
          >
            <div className="flex flex-col gap-2">
              <h1 className="lg:text-3xl md:text-xl  font-bold">
                Welcome Back,Administrator
              </h1>
              <p className="md:text-sm text-xs  text-gray-400 ">
                Sign in to manage the GPKMC administration portal
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="primary-font-color font-medium text-sm"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="eg.admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required

                className="px-2 py-2 rounded-md font-medium text-sm bg-gray-100 outline-1 outline-gray-200 focus:outline-purple-800"
              />
            </div>

            <div className="flex flex-col pb-6 gap-2">
              <label
                className="primary-font-color font-regular text-sm font-medium"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative w-full">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showpassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="eg.admin@123"
                  className="px-2 py-2 rounded-md font-medium text-sm bg-gray-100 outline-1 outline-gray-200 focus:outline-purple-800 w-full "
                />
                {showpassword ? (
                  <EyeOff
                    size={16}
                    onClick={() => setShowPassword(!showpassword)}
                    className="absolute top-2 right-2 hover:cursor-pointer hover:text-purple-800"
                  />
                ) : (
                  <EyeClosed
                    size={16}
                    onClick={() => setShowPassword(!showpassword)}
                    className="absolute top-2 right-2 hover:cursor-pointer hover:text-purple-800"
                  />
                )}
              </div>
            </div>

            <hr className="max-w-lg mx-auto  w-full" />

            {/* SUBMIT BUTTON */}
            <div className="hover:bg-purple-950! hover:cursor-pointer w-full rounded-md primary-bg-color px-4 py-2">
              <button
                disabled={loading}
                type="submit"
                className=" text-white rounded-md text-center w-full hover:cursor-pointer font-medium text-sm"
              >
                {loading ? "wait..." : " Login as Administrator"}
              </button>
            </div>
            <div className="flex gap-2">
              <span>
                <TriangleAlert size={18} color="red" />{" "}
              </span>
              <p className="text-sm ">
                <span className="font-medium  ">Security Notice:</span> Please
                use your designated credentials.Unauthorized access attempts are
                monitored
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default page;
