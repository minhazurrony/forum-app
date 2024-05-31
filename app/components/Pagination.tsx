import React from "react";

type PaginationProps = {
  totalCount: number;
  limit: number;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  activePage: number;
};

export default function Pagination({
  totalCount,
  limit,
  handleClick,
  activePage,
}: PaginationProps) {
  const totalPages = Math.ceil(totalCount / limit);

  return (
    <div className="join flex flex-wrap gap-y-2">
      {[...Array(totalPages)].map((_, idx: number) => {
        return (
          <button
            key={idx}
            className={`join-item btn ${
              activePage === idx + 1 && "btn-active"
            }`}
            onClick={(e) => handleClick(e)}>
            {idx + 1}
          </button>
        );
      })}
    </div>
  );
}
