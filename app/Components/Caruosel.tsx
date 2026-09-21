"use client";

import * as React from "react";
import { teammembers } from "../data/teammember";

import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export function CarouselDemo() {
  return (
    <section className="w-full">
      <p className="hidden">Hellp</p>
      <div className="mx-auto flex min-h-screen h-full w-full max-w-7xl flex-col items-center justify-center gap-10 px-4 py-4 sm:px-6 lg:gap-14 lg:px-8 lg:py-20">

        {/* Heading */}
        <div className="text-center">
          <p className="text-2xl font-medium sm:text-3xl md:text-4xl lg:text-5xl">
            Message from{" "}
            <span className="rounded-md px-3 py-1 text-white primary-bg-color sm:px-4">
              Our
            </span>{" "}
            Team
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          className="w-full"
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent className="ml-0">
            {teammembers.map((m) => (
              <CarouselItem
                key={m.id}
                className="basis-full pl-0"
              >
                <div className="h-full px-1 sm:px-2">

                  {/* Card */}
                  <Card
                    className="
                      flex
                      min-h-[620px]
                      w-full
                      flex-col-reverse
                      overflow-hidden
                      border-l-4
                      border-blue-800
                      bg-background
                      shadow-sm

                      sm:min-h-[600px]

                      lg:min-h-[450px]
                      lg:flex-row
                      lg:items-stretch
                    "
                  >

                    {/* Content */}
                    <CardContent
                      className="
                        flex
                        w-full
                        flex-1
                        flex-col
                        justify-center
                        gap-5
                        p-6

                        sm:p-8

                        lg:w-[65%]
                        lg:p-10
                        xl:p-12
                      "
                    >
                      {/* Starting message */}
                      <p className="text-sm leading-7 sm:text-base lg:text-lg">
                        {m.starting}
                      </p>

                      {/* First paragraph */}
                      <p className="text-xs italic leading-6 text-gray-500 sm:text-sm lg:text-base lg:leading-7">
                        {m.Firstparagraph}
                      </p>

                      {/* Second paragraph */}
                      <p className="text-xs italic leading-6 text-gray-500 sm:text-sm lg:text-base lg:leading-7">
                        {m.Secondparagraph}
                      </p>

                      {/* Signature */}
                      <div className="flex w-fit flex-col gap-1 text-xs sm:text-sm">
                        <p>Regards</p>

                        <p className="w-fit rounded-md px-3 py-1 text-white primary-bg-color">
                          {m.membername}
                        </p>

                        <p className="text-gray-600">
                          {m.position}
                        </p>
                      </div>
                    </CardContent>

                    {/* Image */}
                    <div
                      className="
                        flex
                        w-full
                        items-center
                        justify-center
                        p-6

                        sm:p-8

                        lg:w-[35%]
                        lg:p-8
                      "
                    >
                      <div
                        className="
                          relative
                          aspect-square
                          w-[220px]
                          overflow-hidden
                          rounded-full

                          sm:w-[260px]

                          md:w-[300px]

                          lg:w-full
                          lg:max-w-[320px]

                          xl:max-w-[360px]
                        "
                      >
                        <Image
                          src={m.picture}
                          alt={m.membername}
                          fill
                          priority
                          
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Hidden controls */}
          <CarouselPrevious className="hidden" />
          <CarouselNext className="hidden" />
        </Carousel>
      </div>
      <hr className="max-w-7xl mx-auto h-2"/>
    </section>
  );
}