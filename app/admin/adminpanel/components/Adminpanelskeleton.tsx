import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function Adminpanelskeleton() {
  return (
     <main className="min-h-screen h-full pb-20 overflow-scroll">
       <section className="w-full">
        <Skeleton className="w-full h-20"/>
      </section>

      <section className="flex flex-row gap-20 h-full pt-10">

          <div className="flex flex-col gap-4">
              <Skeleton className="w-64 h-20"/>
              <Skeleton className="w-64 h-64"/>
          </div>
          <div className="border rounded-md outline outline-gray-200">
            <Skeleton className="h-256 w-300"/>
          </div>
      </section>
     </main>
  );
}

export default Adminpanelskeleton;
