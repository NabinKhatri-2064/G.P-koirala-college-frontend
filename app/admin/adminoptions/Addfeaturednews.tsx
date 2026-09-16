"use client";

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

  const [image, setImage] = useState<File | null>(null);

  const handlesubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
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

      console.log(form.category)
      console.log(form.headline)
      console.log(form.firstparagraph)
      console.log(form.secondparagraph) 

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
      toast.error(error instanceof Error ? error.message : "Internal Server Error!");
    } finally {
      setLoading(false);
    }
  };

  interface Featurednews {
    id: number;
    label: string;
    type: string;
    name: keyof Form;
  }

  const options: Featurednews[] = [
    { id: 1, label: "category", type: "text", name: "category" },
    { id: 2, label: "headline", type: "text", name: "headline" },
    { id: 3, label: "firstparagraph", type: "text", name: "firstparagraph" },
    { id: 4, label: "secondparagraph", type: "text", name: "secondparagraph" },
  ];

  return (
    <main className="max-h-92">
      <ToastContainer/>
      <section className="pb-10">
        {/* FOR CATEGORY,HEADLINE,FIRSTPARAGRAPH,SECONDPARAGRAPH */}
        <form onSubmit={handlesubmit}>
          <div className="flex flex-col gap-2">
            {options.map((option) => (
              <div className="flex flex-col gap-2  " key={option.id}>
                <label className="text-sm">{option.label}</label>
                <input
                  value={form[option.name]}
                  onChange={(e) =>
                    setForm({ ...form, [option.name]: e.target.value })
                  }
                  type={option.type}
                  className="bg-gray-100 border p-2 rounded-md"
                />
              </div>
            ))}

            {/* FOR IMAGE */}
            <input
              type="file"
              required
              onChange={(e) => setImage(e.target.files?.[0] ?? null)}
              accept="image/*"
              className="bg-gray-100 p-2 rounded-md max-w-xs hover:cursor-pointer hover:bg-gray-300"
            />

            {image && (
              <Image
                src={URL.createObjectURL(image)}
                width={300}
                height={300}
                alt="featurednews-image"
                className="rounded-md"
              />
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
