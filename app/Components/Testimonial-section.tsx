import { TestimonialsSection } from "@/components/ui/testimonials-section";

export default function Testimonialsectionhero() {
  return (
    <>
    
    <div className="w-full flex flex-col h-screen overflow-hidden p-4 items-center gap-36 pt-16 ">
      <div className="flex flex-col gap-12">
        <h1 className="text-5xl font-medium">
          What our{" "}
          <span className="primary-bg-color text-5xl p-2 rounded-md text-white">
            Student
          </span>{" "}
          Says?{" "}
        </h1>
        <div className="flex flex-col items-center">
          <p className="text-gray-400">
            Every student has a unique journey, and GPKMC helps make it
            meaningful.
          </p>
          <p className="text-gray-400">
            Hear from our students about their experiences, growth, and journey
            at GPKMC.
          </p>
        </div>
      </div>

      <TestimonialsSection />

    </div>
    
      <hr className="max-w-7xl mx-auto h-2 pt-12" />

    
    </>
    
  );
}
