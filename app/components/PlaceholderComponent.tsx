"use client";
import React, { ReactNode } from "react";

type PlaceholderData = {
  icon: ReactNode | any;
  title: string;
  subTitle: string;
};

type PlaceholderComponentProps = {
  title: string;
  data?: PlaceholderData[];
};

export default function PlaceholderComponent({
  title,
  data,
}: PlaceholderComponentProps) {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title capitalize text-white mb-6">{title}</h2>
        {data?.map((item) => {
          return (
            <div key={item.title} className="flex items-center space-x-4 mb-2">
              <div>{item.icon}</div>
              <div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="font-semibold text-xs">{item.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
