import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function Dashboardskeleton() {
  return (
    <section className="pt-12 flex flex-col gap-8">
        {/* RECENT ENQUIRIES SECTION */}
        <Skeleton className="w-32 h-16"/>
            <Skeleton className="flex">
              <Skeleton className="w-25"/>
              <Skeleton className="w-25"/>
              <Skeleton className="w-25"/>
              <Skeleton className="w-25"/>
              
            </Skeleton>

          {Array.from({length:6}).map((_,index) => (
            
              <div 
              key={index}
              className="border-b w-full"
              >
                <Skeleton className="space-y-2 flex w-full">
                  <Skeleton className="w-2 h-2 "/>
                  <Skeleton className="w-2 h-2"/>
                  <Skeleton className="w-2 h-2"/>
                  <Skeleton className="w-2 h-2"/>
                </Skeleton>
              </div>
          ))}
      </section>
  );
}

export default Dashboardskeleton;
