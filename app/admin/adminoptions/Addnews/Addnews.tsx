"use client";

import { Dialgobox } from "@/app/Components/Dialogbox";
import { datatypes, useformdata } from "@/app/data/admindata/addnewsdata";
import { ImagePlus, X } from "lucide-react";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Addnews = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { formdata, setFormData } = useformdata();

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setImage(null);
    setPreview(null);
  };

  //HANDLE SUBMITTING LOGIC
  const handlesubmit = async () => {
    setLoading(true);
    try {
      const form = new FormData();

      if (image) {
        form.append("image", image);
      }

      form.append("title", formdata.title);
      form.append("category", formdata.category);
      form.append("description", formdata.description);
      form.append("date", formdata.date);
      console.log(form);

     

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`, {
        method: "POST",
        body: form,
        credentials: "include"
      });

      if (!response.ok) {
        throw new Error(`API ERROR:${response.statusText}`);
      }

      const data = await response.json();
      toast.success("News added Succssfully!");
      setFormData({
        category: "",
        description: "",
        title: "",
        date: "",
      });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.name : "Internal Server Error",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <ToastContainer />
      <h1 className="max-w-sm rounded-md primary-bg-color p-2 text-center text-5xl font-medium text-white">
        Add News
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <section className="flex flex-col gap-4 pb-10 pt-10">
          {datatypes.map((item, index) => (
            <div className="flex flex-col gap-1" key={index}>
              <label
                className="flex items-center gap-2 text-sm"
                htmlFor={item.name}
              >
                <item.icon size={16} />
                {item.label}
              </label>

              <input
                id={item.name}
                required
                type={item.type}
                className="rounded-md border bg-gray-50 p-2 outline-2 focus:outline-purple-900 placeholder:text-sm"
                placeholder={item.placeholder}
                value={formdata[item.name]}
                onChange={(e) =>
                  setFormData({ ...formdata, [item.name]: e.target.value })
                }
              />
            </div>
          ))}
        </section>

        {/* Image */}
        <section className="flex flex-col gap-2">
          <label
            htmlFor="news-image"
            className="flex items-center gap-2 text-sm"
          >
            <ImagePlus size={16} />
            News Image
          </label>

          {!preview ? (
            <label
              htmlFor="news-image"
              className="flex h-64 w-64 cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
            >
              <ImagePlus className="size-8 text-gray-400" />

              <span className="text-sm font-medium">Choose Image</span>
            </label>
          ) : (
            <div className="relative h-64 w-64 overflow-hidden rounded-md border">
              <img
                src={preview}
                alt="News preview"
                className="h-full w-full object-cover"
              />

              <button
                type="button"
                onClick={removeImage}
                className="absolute right-2 top-2 flex size-8 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black"
              >
                <X size={16} />
              </button>
            </div>
          )}

          <input
            id="news-image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="hidden"
          />
        </section>

        <div className="pt-10">
          <button
            disabled={loading}
            className="primary-bg-color w-full rounded-md p-2 text-white hover:cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {loading ? "Wait..." : "Add news"}
          </button>
        </div>
      </form>

      <Dialgobox
        open={open}
        onOpenChange={setOpen}
        title="Add News"
        description="Are you sure want to publish this news?"
        confirmText="Yes, Add news"
        onConfirm={handlesubmit}
      />
    </main>
  );
};

export default Addnews;
