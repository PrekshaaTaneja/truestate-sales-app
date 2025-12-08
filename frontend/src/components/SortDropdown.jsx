import React from "react";

function SortDropdown({ onSortChange }) {
  return (
    <select
      className="border px-3 py-2 rounded-md shadow-sm"
      onChange={(e) => onSortChange(e.target.value)}
    >
      <option value="date">Sort by: Date (Newest First)</option>
      <option value="name">Sort by: Customer Name (A–Z)</option>
      <option value="quantity">Sort by: Quantity</option>
    </select>
  );
}

export default SortDropdown;
