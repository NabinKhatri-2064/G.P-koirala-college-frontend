import {
  BellRing,
  FaceSlightlyFrowning,
  Info,
  ShieldCheck,
  SquareArrowOutUpRight,
  UserCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const Caution = () => {
  const [show , setShow] = useState<boolean>(false);

  return (
    <main className="max-w-screen z-20 primary-bg-color fixed  w-full max-h-16 h-full flex  justify-center items-center">
      <section className="flex justify-between px-10 items-center w-full">
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
          <p>| </p>

          <div>
            <p className="flex text-sm">
              <ShieldCheck size={16} />
              Admin Portal
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-gray-100/20 flex flex-col  items-center  rounded-full p-2 relative hover:bg-gray-100/30 ">
            <BellRing
            onClick={()=> setShow(!show)}
            color="white" size={16} className="hover:cursor-pointer" />
            {show ? <p className="w-64 h-32 bg-white outline outline-gray-200 p-2  flex flex-col items-center justify-center rounded-md bottom-0 top-10  absolute text-gray-400">
              {" "}
              <FaceSlightlyFrowning className="text-gray-400" />
              No notifications
            </p> : ""}
          </div>

          <div className="text-white">
            <Link
              className="text-sm gap-2 items-center bg-white/20 hover:bg-gray-100/30 flex  p-2 rounded-md"
              href="/"
            >
              <SquareArrowOutUpRight size={16} /> Visit Website
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Caution;
