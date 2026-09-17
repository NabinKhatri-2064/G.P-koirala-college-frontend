"use client";

import { useRouter } from "next/navigation";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center">

        {/* 404 */}
        <div className="relative inline-block">
          <h1 className="text-[140px] md:text-[200px] font-black text-purple-100">
            404
          </h1>

          {/* Pulsing circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute h-28 w-26 md:h-40 md:w-40 rounded-full bg-purple-500/10 animate-ping" />

            <div className="relative h-20 w-24 md:h-32 md:w-26 rounded-full primary-bg-color flex items-center justify-center shadow-xl">
              <span className="text-white text-2xl md:text-4xl font-bold">
                ?
              </span>
            </div>
          </div>
        </div>

        {/* Text */}
        <h2 className="mt-6 text-2xl md:text-3xl font-bold text-gray-900">
          Page Not Found
        </h2>

        <p className="mt-3 max-w-md mx-auto text-gray-500">
          Looks like this page took a wrong turn. The page you're looking for
          doesn't exist or may have been moved.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-5 py-3 font-medium text-gray-700 hover:cursor-pointer transition hover:bg-gray-50"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <button
            onClick={() => router.push("/")}
            className="flex items-center justify-center gap-2 rounded-lg primary-bg-color hover:cursor-pointer   px-5 py-3 font-medium text-white transition hover:bg-purple-700"
          >
            <Home size={18} className=""/>
            Back to Home
          </button>
        </div>
      </div>
    </main>
  );
}
