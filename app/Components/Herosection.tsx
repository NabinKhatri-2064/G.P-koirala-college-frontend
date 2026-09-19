"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

import Gridline from "./Gridlines";
import { heroSectionData } from "../data/herosectiondata";

const Herosection = () => {
  const { affiliation, heading, description, features, buttons, image } =
    heroSectionData;

  const AffiliationIcon = affiliation.icon;

  return (
    <main className="min-h-screen w-full flex flex-col overflow-x-hidden gap-20 pt-20 ">
      <section className="relative w-full min-h-screen overflow-visible flex">
        <Gridline />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex">
          <div className="flex min-h-[80vh] gap-10 w-full items-center">
            <div className="w-full lg:w-[58%] z-20 ">
              <section className="flex flex-col gap-8">
                <div>
                  <p className="flex lg:w-[60%] w-full bg-linear-to-r from-purple-900 to-blue-800 justify-center items-center gap-4 rounded-full px-2 py-1 text-white lg:text-sm">
                    <AffiliationIcon className="w-8 h-8 shrink-0" />
                    {affiliation.text}
                  </p>
                </div>

                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl flex flex-col font-bold leading-tight">
                    {heading.firstLine}
                    <span>
                      {heading.secondLine}{" "}
                      <span className="primary-font-color">
                        {heading.highlightedText}
                      </span>
                    </span>
                  </h1>
                </div>

                <div>
                  <p className="text-base lg:text-md flex flex-col text-gray-700 leading-relaxed">
                    {description.firstLine}
                    <span>{description.secondLine}</span>
                  </p>
                </div>

                <div className="grid lg:grid-cols-4 grid-cols-2 lg:justify-items-center w-full">
                  {features.map((feature) => {
                    const FeatureIcon = feature.icon;

                    return (
                      <div
                        key={feature.id}
                        className="flex lg:flex-row flex-row items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:border-purple-500 transition bg-gray-100"
                      >
                        <FeatureIcon className="text-purple-900 w-4 h-4 shrink-0" />
                        <p className="flex flex-col text-xs w-full">
                          {feature.title}
                          <span>{feature.subtitle}</span>
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="flex lg:flex-row flex-col gap-4 mt-6">
                  {buttons.map((button) => (
                    <Link
                      key={button.id}
                      href={button.href}
                      className={
                        button.variant === "primary"
                          ? "flex items-center justify-center bg-[#3f06b0] text-white px-10 py-3 rounded-md hover:bg-[#2b037d] transition text-sm"
                          : "flex items-center justify-center border border-purple-500 primary-font-color px-10 py-3 rounded-md hover:bg-[#2e077b] hover:text-white! transition text-sm"
                      }
                    >
                      {button.label}
                      <ChevronRight className="ml-1" />
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            <div className="hidden lg:block relative w-[50%] aspect-square shrink-0">
              <div className="relative w-full h-full overflow-hidden rounded-full shadow-2xl shadow-purple-900">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Herosection;
