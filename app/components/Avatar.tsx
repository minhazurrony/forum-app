import React from "react";
import { getFirstLetterOfText } from "../utils";

type AvatarProps = {
  name: string;
  email: string;
};

export default function Avatar({ name, email }: AvatarProps) {
  return (
    <div className="flex items-center space-x-3 mb-3">
      <div className="avatar placeholder">
        <div className="bg-neutral text-neutral-content rounded-full w-8">
          <span className="text-xs">{getFirstLetterOfText(name || "")}</span>
        </div>
      </div>
      <div>
        <h2 className="text-sm">{name}</h2>
        <h3 className="text-xs">{email}</h3>
      </div>
    </div>
  );
}
