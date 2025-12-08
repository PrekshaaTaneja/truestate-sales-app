import React from "react";

function StatsCards({ totalUnits, totalAmount, totalDiscount }) {
  return (
    <div className="flex flex-wrap gap-4">

      {/* Total Units Sold */}
      <div className="bg-white px-5 py-3 rounded-full shadow border text-sm font-medium flex items-center gap-2">
        <span className="text-gray-600">Total units sold:</span>
        <span className="font-bold text-black">{totalUnits}</span>
      </div>

      {/* Total Amount */}
      <div className="bg-white px-5 py-3 rounded-full shadow border text-sm font-medium flex items-center gap-2">
        <span className="text-gray-600">Total Amount:</span>
        <span className="font-bold text-black">₹{totalAmount}</span>
      </div>

      {/* Total Discount */}
      <div className="bg-white px-5 py-3 rounded-full shadow border text-sm font-medium flex items-center gap-2">
        <span className="text-gray-600">Total Discount:</span>
        <span className="font-bold text-black">₹{totalDiscount}</span>
      </div>

    </div>
  );
}

export default StatsCards;
