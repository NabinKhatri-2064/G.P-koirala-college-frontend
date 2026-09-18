"use client";

import {
  CameraIcon,
  ImagePlus,
  ListSortDescending,
  LucideIcon,
  Newspaper,
  Rows3,
  X,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Addfeaturednews = () => {
  const [loading, setLoading] = useState<boolean>(false);

  type Form = {
    category: string;
    headline: string;
    firstparagraph: string;
    secondparagraph: string;
  };

  const [form, setForm] = useState<Form>({
    category: "",
    headline: "",
    firstparagraph: "",
    secondparagraph: "",
  });

  const handlesubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formdata = new FormData();
      if (image) {
        formdata.append("image", image);
      }

      formdata.append("category", form.category);
      formdata.append("headline", form.headline);
      formdata.append("firstparagraph", form.firstparagraph);
      formdata.append("secondparagraph", form.secondparagraph);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/featurednews`,
        {
          method: "POST",
          body: formdata,
        },
      );

      if (!response.ok) {
        throw new Error(`API error:${response.statusText} `);
      }

      const data = await response.json();
      toast.success("News added Successfully!");
      setForm({
        category: "",
        headline: "",
        firstparagraph: "",
        secondparagraph: "",
      });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Internal Server Error!",
      );
    } finally {
      setLoading(false);
    }
  };

  interface Featurednews {
    id: number;
    label: string;
    type: string;
    name: keyof Form;
    icon: LucideIcon;
    placeholder: string;
  }

  const options: Featurednews[] = [
    {
      id: 1,
      label: "category",
      type: "text",
      name: "category",
      icon: ListSortDescending,
      placeholder: "e.g Achievements,Sports",
    },
    {
      id: 2,
      label: "headline",
      type: "text",
      name: "headline",
      icon: Newspaper,
      placeholder: "Enter title of the featured News",
    },
    {
      id: 3,
      label: "firstparagraph",
      type: "text",
      name: "firstparagraph",
      icon: Rows3,
      placeholder: "Enter first brief section of news (25-30 words)",
    },
    {
      id: 4,
      label: "secondparagraph",
      type: "text",
      name: "secondparagraph",
      icon: Rows3,
      placeholder: "Enter second brief section of news (25-30 words)",
    },
  ];

  const [image, setImage] = useState<File | null>(null);
  const [imagepreview, setImagePreview] = useState("");

  const handleimagechange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    try {
      const file = e.target.files?.[0] ?? null;

      if (!file) return null;

      const preview = URL.createObjectURL(file);
      setImagePreview(preview);
    } catch (error) {
      return { message: "Error while uploading image" };
    }
  };

  

  return (
    <main className="min-h-screen">
      <ToastContainer />
      <section className="pb-10">
        <h1 className="text-3xl text-center font-medium primary-bg-color p-2 rounded-md text-white lg:max-w-[20%] ">
          Featured News
        </h1>

        {/* FOR CATEGORY,HEADLINE,FIRSTPARAGRAPH,SECONDPARAGRAPH */}
        <form onSubmit={handlesubmit}>
          <div className="flex flex-col gap-4 pt-10">
            {options.map((option) => (
              <div className="flex flex-col gap-2  " key={option.id}>
                <label className="text-sm flex gap-2 items-center">
                  <option.icon size={16} />
                  {option.label}
                </label>
                <input
                  placeholder={option.placeholder}
                  value={form[option.name]}
                  onChange={(e) =>
                    setForm({ ...form, [option.name]: e.target.value })
                  }
                  type={option.type}
                  className="bg-gray-100 border p-2 rounded-md outline-1 placeholder:text-sm outline-accent"
                />
              </div>
            ))}

            {/* FOR IMAGE */}

            <p className="flex gap-2"  ><CameraIcon/>Upload an Image</p>

            {imagepreview ? (
              <div className="relative overflow-hidden w-64 h-64">
                <Image
                  src={imagepreview}
                  fill
                  alt="image"
                  className="object-cover "
                />
                <X 
                onClick={()=> setImagePreview("")}
                className="absolute top-2 right-2 bg-black text-white rounded-full p-1 hover:cursor-pointer hover:bg-black/80 "/>
              </div>
            ) : (
              <div className="w-64 h-64">
                <label
                  htmlFor="uploadimage"
                  className="flex bg-gray-100 hover:cursor-pointer hover:bg-gray-100/70 items-center justify-center rounded-md p-2 max-w-xs h-full border-dotted border-2 border-black"
                >
                  <ImagePlus />
                  Upload an Image
                </label>
                <input
                  id="uploadimage"
                  type="file"
                  onChange={handleimagechange}
                  className="hidden"
                />
              </div>
            )}

            <div className="pt-6 w-full ">
              <button
                type="submit"
                disabled={loading}
                className="
                
        primary-bg-color text-white px-2 py-2 rounded-md w-full hover:cursor-pointer hover:bg-purple-950! "
              >
                {loading ? "Wait..." : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Addfeaturednews;
