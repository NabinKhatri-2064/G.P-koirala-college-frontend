"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import LatestNewsSkeleton from "./components/Latestnewsloading";
import Featurednewsloading from "./components/Featurednewsloading";

const page = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [featurednewsloading, setFeaturedNewsLoading] = useState<boolean>(true);

  interface Featurednews {
    id: number;
    category: string;
    headline: string;
    firstparagraph: string;
    secondparagraph: string;
    image: string;
  }

  const [featurednews, setFeaturedNews] = useState<Featurednews[]>([]);
  useEffect(() => {
    const fetchfeaturednews = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/featurednews`,
          {
            method: "GET",
          },
        );

        if (!response.ok) {
          throw new Error(`Api Error:${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);
        setFeaturedNews(data);
      } catch (error) {
        throw new Error(
          error instanceof Error ? error.name : "Internal Server Error!",
        );
      } finally {
        setFeaturedNewsLoading(false);
      }
    };

    fetchfeaturednews();
  }, []);

  interface newsdata {
    id: number;
    category: string;
    title: string;
    description: string;
    image: string;
    date: string;
  }

  const [news, setNews] = useState<newsdata[]>([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/news`,
          {
            method: "GET",
          },
        );

        const data = await response.json();
        setNews(data.news);
      } catch (error) {
        toast.error(
          error instanceof Error ? error.name : "Internal server Error",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchdata();
  }, []);

  return (
    <main className="pt-30 max-w-7xl mx-auto pb-10">
      <section className="flex flex-col gap-12 px-2 items-center pb-20">
        <div className="flex flex-col gap-2 items-start  w-full">
          <h1 className=" lg:text-5xl md:text-3xl sm:text-2xl font-bold primary-font-color transition-all">
            Featured News ?
          </h1>
          <p className="text-gray-500 flex flex-col">
            Stay connected with the latest happenings, achievements,
            <span>and updates from our campus.</span>{" "}
          </p>
        </div>

        {/* FEATURED NEWS */}

        {featurednewsloading ? (
          <div className="w-full flex justify-center">
          <Featurednewsloading/>

          </div>
        ) : (
          <div className="group flex md:flex-row flex-col lg:flex-row gap-4 border rounded-md lg:w-full md:w-200 hover:-translate-y-10 overflow-hidden duration-300 lg:h-128">
            {featurednews.map((featurednews) => (
              <div
                className="relative flex justify-between w-full lg:flex-row flex-col"
                key={featurednews.id}
              >
                <div className="relative lg:w-5xl lg:h-128 h-90  overflow-hidden">
                  <Image
                    src={featurednews.image}
                    fill
                    alt="featured news Image"
                    className="w-full h-full object-cover  rounded-md group-hover:scale-105 transition-all"
                  />
                  <p className="absolute top-2 left-2 bg-white p-2 rounded-md font-semibold primary-font-color text-xs">
                    {featurednews.category}
                  </p>
                </div>

                <div className="flex flex-col  lg:min-h-full h-full w-full   justify-between p-4  lg:gap-4 ">
                  <h3 className="lg:text-3xl text-2xl primary-font-color font-bold">
                    {featurednews.headline}
                  </h3>
                  <div className="flex flex-col gap-4 w-full ">
                    <p className="italic text-gray-500 lg:text-md text-sm ">
                      {featurednews.firstparagraph}
                    </p>
                    <p className="italic text-gray-500 lg:text-md text-sm">
                      {featurednews.secondparagraph}
                    </p>
                  </div>

                  <button className="primary-bg-color px-4 py-2 text-white rounded-md">
                    ReadMore
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <hr className="max-w-7xl mx-auto border-gray-300 w-full h-2" />

      {/* LATEST NEWS SECTION */}
      <section className="pt-10  justify-center">
        <div className="flex flex-col items-center gap-8">
          <h1 className="lg:text-6xl font-bold primary-font-color">
            Latest{" "}
            <span className="primary-bg-color text-white p-2 rounded-md">
              News
            </span>
          </h1>
          <div className="flex items-center flex-col pt-4 pb-8">
            <p className="text-gray-500 text-lg ">Stay informed with</p>
            <p className="text-gray-500 text-lg">
              the latest happenings from our campus
            </p>
          </div>
        </div>

        {/* GRID CARDS */}

        {loading ? (
          <LatestNewsSkeleton />
        ) : (
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {news.map((news) => (
              <div
                className="min-h-136 h-full rounded-md border-2 transition-all duration-300 hover:-translate-y-3"
                key={news.id}
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={news.image}
                    width={500}
                    height={500}
                    alt="news-image"
                    className="h-full w-full rounded-md object-cover"
                  />

                  <p className="absolute left-2 top-2 rounded-md bg-white p-2 text-xs font-semibold primary-font-color">
                    {news.category}
                  </p>
                </div>

                <div className="relative flex h-full max-h-62 flex-col gap-4 px-4 pt-5">
                  <p className="font-semibold primary-font-color">
                    {news.title}
                  </p>

                  <p className="text-sm">{news.description}</p>

                  <p className="absolute bottom-5 left-4 font-semibold primary-font-color">
                    {news.date}
                  </p>
                </div>

                <div className="w-full px-4">
                  <button className="w-full rounded-md px-2 py-2 text-white primary-bg-color">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <section></section>
    </main>
  );
};

export default page;
