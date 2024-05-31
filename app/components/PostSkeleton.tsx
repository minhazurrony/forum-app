import React from "react";

export default function PostSkeleton() {
  return (
    <div className="flex gap-4 w-full bg-base-100 p-3 rounded mb-4 shadow-xl">
      <div className="skeleton h-32 w-full basis-1/5"></div>
      <div className="basis-4/5 flex gap-2 flex-col">
        <div className="skeleton h-3 w-full mb-2"></div>
        <div className="skeleton h-2 w-full"></div>
        <div className="skeleton h-2 w-full"></div>
        <div className="skeleton h-2 w-56 mb-2"></div>
        <div className="flex justify-between items-end">
          <div className="flex gap-2 items-center mb-2">
            <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
            <div className="flex flex-col gap-2">
              <div className="skeleton h-2 w-28"></div>
              <div className="skeleton h-2 w-16"></div>
            </div>
          </div>
          <div className="skeleton h-2 w-28"></div>
        </div>
      </div>
    </div>
  );
}
