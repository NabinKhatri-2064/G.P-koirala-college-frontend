import {
  Info,
  ShieldCheck,
  SquareArrowOutUpRight,
  UserCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Caution = () => {
  return (
    <main className="max-w-screen z-20 primary-bg-color fixed  w-full max-h-16 h-full flex  justify-center items-center">
      <section className="flex justify-between px-10 items-center w-full">
        <div className="flex  items-center gap-4 text-white  ">
          <div>
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

        <div className="text-white">
          <Link
            className="text-sm gap-2 items-center bg-white/20 flex  p-2 rounded-md"
            href="/"
          >
            <SquareArrowOutUpRight size={16} /> Visit Website
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Caution;
