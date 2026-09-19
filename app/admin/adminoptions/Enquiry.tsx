"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import { Dialgobox } from "@/app/Components/Dialogbox";

const Enquiry = () => {
  interface data {
    id: number;
    name: string;
    email: string;
    interestedin: string;
    mobilenumber: string;
  }

  const [data, setData] = useState<data[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedid, setSelectedId] = useState<number | null>();
  const [loading,setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/enquiry/message`,
          {
            method: "GET",
            credentials: "include",
          },
        );

        if (!response.ok) {
          throw new Error(`Api Error:${response.statusText}`);
        }

        const fetcheddata = await response.json();
        setData(fetcheddata);
      } catch (error) {
        throw new Error(
          error instanceof Error ? error.name : "Internal Server Error",
        );
      }
    };

    fetchdata();
  }, []);

  const handledelete = async (id: number) => {
    setLoading(true)
    setOpen(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/enquiry/${id}`,
        {
          method: "DELETE",
          credentials: "include",
        },
      );

      if (!response.ok) {
        toast.error(`API error:${response.statusText}`);
      }

      setData(data.filter((item) => item.id !== id));
      toast.success("Enquiry Deleted Successfully");
      setOpen(!open)

    } catch (error) {
      toast.error(
        error instanceof Error ? error.name : "Internal Server Error",
      );
    }finally{
      setLoading(false)
    }
  };

  return (
    <main>
      <ToastContainer/>
      <h1 className="text-white p-2 rounded-md max-w-xs text-4xl font-medium primary-bg-color text-center">
        Student's Enquiry
      </h1>
      <section className="pb-10">
        <p className="text-gray-400 pt-4">
          Manage all the enquires of the Students
        </p>
      </section>

      <section>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-25">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead className="text-right">Interestedin</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="w-full ">
            {data.map((data) => (
              <TableRow key={data.id}>
                <TableCell className="font-medium ">{data.name}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.mobilenumber}</TableCell>
                <TableCell className="text-right">
                  {data.interestedin}
                </TableCell>
                <TableCell
                  className="text-right text-red-500 hover:cursor-pointer hover:text-red-600"

                  onClick={() => {
                    (setSelectedId(data.id), setOpen(!open));
                  }}
                >
                  <Trash size={16} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <Dialgobox
        open={open}
        onOpenChange={setOpen}
        title="Delete Enquiry"
        description="Are you sure want to delete this enquiry"
        confirmText= {loading ? "wait" : "Delete"}
        onConfirm={() => {
          if (selectedid != null) {
            handledelete(selectedid);
          }
        }}
      />
    </main>
  );
};

export default Enquiry;
