import React from "react";

function FilterBar({
  onRegionChange,
  onGenderChange,
  onAgeChange,
  onCategoryChange,
  onTagsChange,
  onPaymentChange,
  onDateChange
}) {
  return (
    <div className="flex flex-wrap gap-3 bg-white p-4 rounded-lg shadow-sm border">

      {/* Region */}
      <select
        className="border px-3 py-2 rounded-md"
        onChange={(e) => onRegionChange(e.target.value)}
      >
        <option value="">Customer Region</option>
        <option value="North">North</option>
        <option value="South">South</option>
        <option value="East">East</option>
        <option value="West">West</option>
      </select>

      {/* Gender */}
      <select
        className="border px-3 py-2 rounded-md"
        onChange={(e) => onGenderChange(e.target.value)}
      >
        <option value="">Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      {/* Age Range */}
      <select
        className="border px-3 py-2 rounded-md"
        onChange={(e) => onAgeChange(e.target.value)}
      >
        <option value="">Age Range</option>
        <option value="18-25">18–25</option>
        <option value="25-35">25–35</option>
        <option value="35-50">35–50</option>
      </select>

      {/* Product Category */}
      <select
        className="border px-3 py-2 rounded-md"
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">Product Category</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Grocery">Grocery</option>
      </select>

      {/* Tags */}
      <select
        className="border px-3 py-2 rounded-md"
        onChange={(e) => onTagsChange(e.target.value)}
      >
        <option value="">Tags</option>
        <option value="Premium">Premium</option>
        <option value="Hot">Hot</option>
        <option value="Discount">Discount</option>
      </select>

      {/* Payment Method */}
      <select
        className="border px-3 py-2 rounded-md"
        onChange={(e) => onPaymentChange(e.target.value)}
      >
        <option value="">Payment Method</option>
        <option value="UPI">UPI</option>
        <option value="Cash">Cash</option>
        <option value="Card">Card</option>
      </select>

      {/* Date Range */}
      <input
        type="date"
        className="border px-3 py-2 rounded-md"
        onChange={(e) => onDateChange("start", e.target.value)}
      />

      <input
        type="date"
        className="border px-3 py-2 rounded-md"
        onChange={(e) => onDateChange("end", e.target.value)}
      />

    </div>
  );
}

export default FilterBar;
