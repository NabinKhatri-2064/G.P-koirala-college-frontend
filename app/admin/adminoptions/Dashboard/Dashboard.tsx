"use client"

import {
  Form,
  LucideIcon,
  LucideNewspaper,
  LucidePartyPopper,
  UserCheck2,
} from "lucide-react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Dashboardskeleton from "../LoadinSkeletons/Dashboardskeleton";

const Dashboard = () => {
  const [newslength, setNewsLength] = useState<number>(0);
  const [totalenquiry, setTotalEnquiry] = useState<number>();
  const [currentadmin, setCurrentAdmin] = useState<string>("Nabin Khatri");
  const [loading, setLoading] = useState<boolean>(true);
  interface datastructure {
    id: number | null;
    email: string;
    name: string;
    interestedin: string;
    mobilenumber: string;
    createdAt: string;
  }

  const [info, setInfo] = useState<datastructure[]>([]);
  // FETCHES THE TOTAL ENQUIRY LENGTH
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enquiry`, {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          throw new Error("Error while fetching data");
        }

        const data = await res.json();
        setTotalEnquiry(data.length);
        setLoading(false);
      } catch (error) {
        toast.error("Internal Server error");
      }
    };

    fetchdata();
  }, []);

  // FETCHES ALL THE ENQUIRY STUDENT INFORMATION
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/enquiry/message`,
          {
            method: "GET",
            credentials: "include",
          },
        );

        if (!res.ok) {
          throw new Error("Error while fetching data");
        }
        const data = await res.json();
        setInfo(data);
      } catch (error) {
        toast.error("Internal Server error");
      }
    };
    fetchdata();
  }, []);

  interface dashboard {
    icon: LucideIcon;
    heading: string;
    entries?: number | string;
  }

  const Dashboard: dashboard[] = [
    {
      icon: LucideNewspaper,
      heading: "Today News",
      entries: newslength,
    },
    {
      icon: LucidePartyPopper,
      heading: "Total enquiry",
      entries: totalenquiry,
    },
    {
      icon: UserCheck2,
      heading: "Current Admin",
      entries: currentadmin,
    },
  ];

  return (
    <main>
      <section className="grid lg:grid-cols-3 grid-cols-1 gap-4 ">
        {Dashboard.map((d, index) => (
          <div
            className="flex border hover:bg-gray-100/70  p-2 rounded-md flex-col justify-center items-center"
            key={index}
          >
            <div>
              <p className="flex gap-2 text-sm">
                <d.icon className="primary-font-color" size={16} /> {d.heading}
              </p>
            </div>
            <div>
              <p className="text-sm">{d.entries}</p>
            </div>
          </div>
        ))}
      </section>

      {loading ? (
        <Dashboardskeleton />
      ) : (
        <section className="pt-12 flex flex-col gap-8">
          {/* RECENT ENQUIRIES SECTION */}
          <h1 className="lg:text-5xl text-xl font-medium text-gray-600">
            Recent Enquiries
          </h1>
          <Table>
            <TableHeader>
              <TableRow >
                <TableHead className="w-25 ">Name</TableHead>
                <TableHead>email</TableHead>
                <TableHead>contact</TableHead>
                <TableHead className="text-right">Intrestedin</TableHead>
              </TableRow>
            </TableHeader>

            {info.map((i) => (
              <TableBody key={i.id} className="border-b">
                <TableRow>
                  <TableCell className="font-medium text-xs">{i.name}</TableCell>
                  <TableCell className="text-xs">{i.email}</TableCell>
                  <TableCell className="text-xs">{i.mobilenumber}</TableCell>
                  <TableCell className="text-right text-xs">{i.interestedin}</TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
        </section>
      )}
    </main>
  );
};

export default Dashboard;
