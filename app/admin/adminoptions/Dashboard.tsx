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

const Dashboard = () => {
  const [newslength, setNewsLength] = useState<number>(0);
  const [totalenquiry, setTotalEnquiry] = useState<number>();
  const [currentadmin, setCurrentAdmin] = useState<string>("Nabin Khatri");

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
          credentials: "include"
        });

        if (!res.ok) {
          throw new Error("Error while fetching data");
        }

        const data = await res.json();
        setTotalEnquiry(data.length);
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
            credentials: "include"
          },
        );

        if (!res.ok) {
          throw new Error("Error while fetching data");
        }
        const data = await res.json();
        setInfo(data)

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
      <section className="grid grid-cols-3 gap-4 max-w-lg">
        {Dashboard.map((d, index) => (
          <div
            className="flex border p-2 rounded-md flex-col justify-center items-center"
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

      

      <section className="pt-12 flex flex-col gap-8">
        {/* RECENT ENQUIRIES SECTION */}
        <h1 className="text-5xl font-medium text-gray-600">Recent Enquiries</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-25">Name</TableHead>
              <TableHead>email</TableHead>
              <TableHead>contact</TableHead>
              <TableHead className="text-right">Intrestedin</TableHead>
            </TableRow>
          </TableHeader>

          {info.map((i) => (
            
              <TableBody 
              key={i.id}
              className="border-b"
              >
                <TableRow >
                  <TableCell className="font-medium">{i.name}</TableCell>
                  <TableCell>{i.email}</TableCell>
                  <TableCell>{i.mobilenumber}</TableCell>
                  <TableCell className="text-right">{i.interestedin}</TableCell>
                </TableRow>
              </TableBody>
          ))}
        </Table>
      </section>
    </main>
  );
};

export default Dashboard;
