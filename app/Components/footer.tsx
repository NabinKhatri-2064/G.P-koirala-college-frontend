import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-purple-800 to-blue-800 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2  justify-items-center lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* College Logo */}
          <div className="flex items-start gap-4  ">
            <Image
              src="/collegelogo.png"
              alt="College Logo"
              width={72}
              height={72}
              className="object-contain"
            />

            <p className="text-gray-300 leading-6">G.P. Koirala Memorial College (GPKMC) is a leading educational institution dedicated to academic excellence, practical learning, and the overall development of students. We aim to inspire young minds with the knowledge, skills, and confidence needed to succeed in a changing world.
</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="transition hover:text-white">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/programs" className="transition hover:text-white">
                  Programs
                </Link>
              </li>

              <li>
                <Link href="/news-events" className="transition hover:text-white">
                  News & Events
                </Link>
              </li>

              <li>
                <Link href="/admissions" className="transition hover:text-white">
                  Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Opening Hours
            </h3>

            <div className="space-y-3 text-sm text-white/80">
              <p>
                <span className="font-medium text-white">
                  Sunday – Friday
                </span>
                <br />
                6:00 AM – 5:00 PM
              </p>

              <p>
                <span className="font-medium text-white">
                  Saturday
                </span>
                <br />
                Closed
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm text-white/80">
              <div>
                <p className="font-medium text-white">
                  Phone
                </p>
                <a
                  href="tel:+9779812345678"
                  className="transition hover:text-white"
                >
                  +977 9812345678
                </a>
              </div>

              <div>
                <p className="font-medium text-white">
                  Email
                </p>
                <a
                  href="mailto:info@college.edu.np"
                  className="transition hover:text-white"
                >
                  info@college.edu.np
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/20 pt-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} G.P Koirala Memorial College. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
