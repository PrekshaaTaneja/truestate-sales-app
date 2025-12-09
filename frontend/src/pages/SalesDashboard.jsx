import React from "react";

import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import StatsCards from "../components/StatsCards";
import SortDropdown from "../components/SortDropdown";
import SalesTable from "../components/SalesTable";
import Pagination from "../components/Pagination";

import useSalesData from "../hooks/useSalesData";

function SalesDashboard() {

  const {
    data,
    totalUnits,
    totalAmount,
    totalDiscount,

    page,
    totalPages,
    setPage,

    setSearch,
    setRegion,
    setGender,
    setAgeRange,
    setCategory,
    setTags,
    setPayment,
    setStartDate,
    setEndDate,
    setSortBy,
    loading
  } = useSalesData();


  return (
    <div className="p-4 max-w-[1400px] mx-auto">

        {/* PAGE TITLE */}
        <h1 className="text-2xl font-semibold mb-4">
            Sales Management System
        </h1>

      {/* SEARCH BAR */}
      <div className="mb-4">
        <SearchBar onSearch={(val) => {
          setPage(1);  // reset page when new search
          setSearch(val);
        }} />
      </div>

      {/* FILTER BAR */}
      <div className="mb-4">
        <FilterBar
          onRegionChange={(val) => { setPage(1); setRegion(val); }}
          onGenderChange={(val) => { setPage(1); setGender(val); }}
          onAgeChange={(val) => { setPage(1); setAgeRange(val); }}
          onCategoryChange={(val) => { setPage(1); setCategory(val); }}
          onTagsChange={(val) => { setPage(1); setTags(val); }}
          onPaymentChange={(val) => { setPage(1); setPayment(val); }}
          onDateChange={(type, date) => {
            setPage(1);
            if (type === "start") setStartDate(date);
            if (type === "end") setEndDate(date);
          }}
        />

      </div>

      {/* STATS CARDS */}
      <div className="mb-6">
        <StatsCards
          totalUnits={totalUnits}
          totalAmount={totalAmount}
          totalDiscount={totalDiscount}
        />
      </div>

      {/* SORT DROPDOWN */}
      <div className="flex justify-end mb-9 mt-[-70px]">
        <SortDropdown onSortChange={(val) => {
          setPage(1);
          setSortBy(val);
        }} />
      </div>

      {/* SALES TABLE */}
      <SalesTable data={data} loading={loading} />

      {/* PAGINATION */}
      <div className="mt-6">
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={(newPage) => setPage(newPage)}
        />
      </div>

    </div>
  );
}

export default SalesDashboard;
