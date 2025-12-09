import React, { useState } from "react";
import MultiSelect from "./MultiSelect";

export default function FilterBar({
  onRegionChange,
  onGenderChange,
  onAgeChange,
  onCategoryChange,
  onTagsChange,
  onPaymentChange,
  onDateChange,
}) {
  const [region, setRegion] = useState([]);
  const [gender, setGender] = useState([]);
  const [category, setCategory] = useState([]);
  const [tags, setTags] = useState([]);
  const [payment, setPayment] = useState([]);

  return (
    <div className="flex flex-wrap gap-3">

      <MultiSelect
        label="Customer Region"
        options={["North", "South", "East", "West", "Central"]}
        selected={region}
        onChange={(val) => {
          const arr = val ? val.split(",") : [];
          setRegion(arr);
          onRegionChange(val);
        }}
      />

      <MultiSelect
        label="Gender"
        options={["Male", "Female", "Other"]}
        selected={gender}
        onChange={(val) => {
          const arr = val ? val.split(",") : [];
          setGender(arr);
          onGenderChange(val);
        }}
      />

      <MultiSelect
        label="Product Category"
        options={["Clothing", "Beauty", "Electronics", "Sports", "Accessories"]}
        selected={category}
        onChange={(val) => {
          const arr = val ? val.split(",") : [];
          setCategory(arr);
          onCategoryChange(val);
        }}
      />

      <MultiSelect
        label="Tags"
        options={["fashion", "organic", "wireless", "home", "unisex", "smart"]}
        selected={tags}
        onChange={(val) => {
          const arr = val ? val.split(",") : [];
          setTags(arr);
          onTagsChange(val);
        }}
      />

      <MultiSelect
        label="Payment Method"
        options={["Cash", "Credit", "UPI", "Card"]}
        selected={payment}
        onChange={(val) => {
          const arr = val ? val.split(",") : [];
          setPayment(arr);
          onPaymentChange(val);
        }}
      />

      {/* AGE RANGE */}
      <select
        onChange={(e) => onAgeChange(e.target.value)}
        className="border px-3 py-2 rounded text-sm min-w-[160px]"
      >
        <option value="">Age Range</option>
        <option value="18-25">18–25</option>
        <option value="26-35">26–35</option>
        <option value="36-50">36–50</option>
        <option value="51-70">51–70</option>
      </select>

      {/* DATE RANGE */}
      <input
        type="date"
        className="border rounded px-2 py-2 text-sm"
        onChange={(e) => onDateChange("start", e.target.value)}
      />

      <input
        type="date"
        className="border rounded px-2 py-2 text-sm"
        onChange={(e) => onDateChange("end", e.target.value)}
      />
    </div>
  );
}