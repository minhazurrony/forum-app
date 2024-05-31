import Link from "next/link";
import React from "react";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center bg-base-100 shadow-xl sticky top-0 z-10 px-4 md:px-12 h-14">
      <Link href={"/"} className="font-bold">
        Forum App
      </Link>
      <button className="btn btn-sm">Login</button>
    </div>
  );
}
