import React, { ReactNode } from "react";

type ReactionProps = {
  icon: ReactNode;
  count?: number;
  label?: string;
};

export default function Reaction({ icon, count, label }: ReactionProps) {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      {count && label && (
        <p className="text-xs font-light">
          {count} {label}
        </p>
      )}
    </div>
  );
}
