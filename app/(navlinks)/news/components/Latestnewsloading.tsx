import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function LatestNewsSkeleton() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="min-h-136 w-full overflow-hidden rounded-md border-2"
        >
          {/* Image */}
          <Skeleton className="h-60 w-full" />

          {/* Content */}
          <div className="flex flex-col gap-4 px-4 pt-5">
            {/* Title */}
            <Skeleton className="h-5 w-3/4" />

            {/* Description */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/6" />
            </div>

            {/* Date */}
            <Skeleton className="h-4 w-24" />
          </div>

          {/* Button */}
          <div className="mt-8 w-full px-4">
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default LatestNewsSkeleton;
