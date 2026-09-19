import { TestimonialsSection } from "@/components/ui/testimonials-section";

export default function Testimonialsectionhero() {
  return (
    <>
      <div className="w-full flex flex-col min-h-screen overflow-hidden p-4 items-center gap-36 pt-16 h-full  ">
        <div className="flex flex-col lg:gap-12 gap-8">
          <h1 className="lg:text-5xl text-3xl font-medium flex items-center justify-center">
            What our{" "}
            <span className="primary-bg-color lg:text-5xl text-3xl p-2 rounded-md text-white">
              Student
            </span>{" "}
            Says?{" "}
          </h1>
          <div className="flex flex-col items-center">
            <p className="text-gray-400 lg:text-sm text-md">
              Every student has a unique journey, and GPKMC helps make it
              meaningful.Hear from our students about their experiences, growth,
              and journey at GPKMC
            </p>
          </div>
        </div>

        <TestimonialsSection />
      </div>

      <hr className="max-w-7xl mx-auto h-2 pt-12" />
    </>
  );
}
