import React from "react";

function Pagination({ page, totalPages, onPageChange }) {
  const isFirst = page === 1;
  const isLast = page === totalPages || totalPages === 0;

  return (
    <div className="flex items-center justify-center gap-3 mt-4">

      {/* Previous Button */}
      <button
        disabled={isFirst}
        onClick={() => onPageChange(page - 1)}
        className={`px-4 py-2 rounded-md border shadow-sm 
          ${isFirst ? "bg-gray-200 cursor-not-allowed" : "bg-white hover:bg-gray-50"}
        `}
      >
        Previous
      </button>

      {/* Page Indicator */}
      <span className="px-4 py-2 bg-white border rounded-md shadow-sm text-sm">
        Page {page} of {totalPages || 1}
      </span>

      {/* Next Button */}
      <button
        disabled={isLast}
        onClick={() => onPageChange(page + 1)}
        className={`px-4 py-2 rounded-md border shadow-sm 
          ${isLast ? "bg-gray-200 cursor-not-allowed" : "bg-white hover:bg-gray-50"}
        `}
      >
        Next
      </button>

    </div>
  );
}

export default Pagination;
