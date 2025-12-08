import React from "react";

function SalesTable({ data, loading }) {
  return (
    <div className="relative overflow-x-auto shadow border rounded-lg bg-white">

      {/* LOADING OVERLAY */}
      {loading && (
        <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-10">
          <div className="animate-spin h-8 w-8 border-4 border-blue-400 border-t-transparent rounded-full"></div>
        </div>
      )}

      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-100 text-gray-700 text-sm">
        <tr>
            <th className="p-3 border-b">Date</th>
            <th className="p-3 border-b">Customer ID</th>
            <th className="p-3 border-b">Customer Name</th>
            <th className="p-3 border-b">Phone Number</th>
            <th className="p-3 border-b">Gender</th>
            <th className="p-3 border-b">Age</th>
            <th className="p-3 border-b">Product Category</th>
            <th className="p-3 border-b">Quantity</th>
            <th className="p-3 border-b">Total Amount</th>
            <th className="p-3 border-b">Customer Region</th>
            <th className="p-3 border-b">Product ID</th>
            <th className="p-3 border-b">Employee Name</th>
        </tr>
        </thead>


        <tbody className="text-sm">
        {!loading && data.length === 0 && (
            <tr>
            <td colSpan="13" className="text-center py-6 text-gray-500">
                No results found.
            </td>
            </tr>
        )}

        {!loading &&
            data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
                <td className="p-3 border-b">{new Date(item.date).toLocaleDateString()}</td>
                <td className="p-3 border-b">{item.customerId}</td>
                <td className="p-3 border-b">{item.customerName}</td>
                <td className="p-3 border-b">{item.phoneNumber}</td>
                <td className="p-3 border-b">{item.gender}</td>
                <td className="p-3 border-b">{item.age}</td>
                <td className="p-3 border-b">{item.productCategory}</td>
                <td className="p-3 border-b font-semibold">{item.quantity}</td>
                <td className="p-3 border-b font-semibold">₹{item.finalAmount}</td>
                <td className="p-3 border-b">{item.customerRegion}</td>
                <td className="p-3 border-b">{item.productId}</td>
                <td className="p-3 border-b">{item.employeeName}</td>
            </tr>
            ))}
        </tbody>

      </table>
    </div>
  );
}

export default SalesTable;
