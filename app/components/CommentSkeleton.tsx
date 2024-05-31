import React from "react";

export default function CommentSkeleton() {
  return (
    <div className="flex flex-col gap-2 w-full mb-4 shadow-xl bg-gray-800 rounded p-3">
      <div className="flex gap-2 items-center mb-2">
        <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
        <div className="flex flex-col gap-2">
          <div className="skeleton h-2 w-28"></div>
          <div className="skeleton h-2 w-16"></div>
        </div>
      </div>
      <div className="skeleton h-2 w-full"></div>
      <div className="skeleton h-2 w-full"></div>
      <div className="skeleton h-2 w-1/2 mb-2"></div>
      <div className="skeleton h-2 w-24"></div>
    </div>
  );
}
