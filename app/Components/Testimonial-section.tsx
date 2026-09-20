import { TestimonialsSection } from "@/components/ui/testimonials-section";

export default function Testimonialsectionhero() {
  return (
    <>
      <div className="w-full flex flex-col h-screen  p-4 items-center gap-20    ">
        <div className="flex flex-col lg:gap-12 gap-8">
          <h1 className="lg:text-5xl text-3xl font-medium flex items-center justify-center">
            What our{" "}
            <span className="primary-bg-color lg:text-5xl text-2xl p-2 rounded-md text-white">
              Student
            </span>{" "}
            Says?{" "}
          </h1>
          <div className="flex flex-col items-center  gap-16 lg:gap-20">
            <p className="text-gray-400  md:text-md text-sm">
              Every student has a unique journey, and GPKMC helps make it
              meaningful.Hear from our students about their experiences, growth,
              and journey at GPKMC
            </p>
          <TestimonialsSection />
          </div>
        </div>
      </div>

      <hr className="max-w-7xl mx-auto h-2 mt-40 lg:mt-10 " />
    </>
  );
}
