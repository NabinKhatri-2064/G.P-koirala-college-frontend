import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function Featurednewsloading() {
  return (
    <div className="group flex md:flex-row flex-col lg:flex-row gap-4 border rounded-md w-full  overflow-hidden lg:h-128 lg:px-0 mx-2">
      <div className="relative flex justify-between w-full lg:flex-row flex-col">
        
        {/* IMAGE */}
        <div className="relative lg:w-5xl lg:h-128 h-90 w-full overflow-hidden">
          <Skeleton className="w-full h-full rounded-md" />

          {/* CATEGORY */}
          <Skeleton className="absolute top-2 left-2 w-20 h-8 rounded-md" />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col lg:min-h-full h-full w-full md:w-lg justify-between p-4 lg:gap-4">

          {/* HEADLINE */}
          <div className="space-y-2">
            <Skeleton className="w-full h-8" />
            <Skeleton className="w-4/5 h-8" />
          </div>

          {/* PARAGRAPHS */}
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-4/5 h-4" />
            </div>

            <div className="space-y-2">
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-full h-4" />
              <Skeleton className="w-3/4 h-4" />
            </div>
          </div>

          {/* BUTTON */}
          <Skeleton className="w-28 h-10 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default Featurednewsloading;