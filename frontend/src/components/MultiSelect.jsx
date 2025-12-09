import React, { useState, useRef, useEffect } from "react";

export default function MultiSelect({ label, options, selected, onChange }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // HANDLE SELECT / UNSELECT
  const toggleOption = (value) => {
    let newValues;

    if (selected.includes(value)) {
      newValues = selected.filter((v) => v !== value);
    } else {
      newValues = [...selected, value];
    }

    onChange(newValues.join(","));
  };


  const displayLabel =
    selected.length > 0 ? `${label} (${selected.length})` : label;

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="border px-3 py-2 rounded bg-white shadow-sm text-sm hover:bg-gray-50 min-w-[160px] text-left"
      >
        {displayLabel}
      </button>

      {/* DROPDOWN MENU */}
      {open && (
        <div className="absolute left-0 mt-1 w-56 bg-white border shadow-lg rounded max-h-64 overflow-y-auto z-20">
          {options.map((opt) => (
            <label
              key={opt}
              className="flex items-center px-3 py-2 hover:bg-gray-50 text-sm cursor-pointer select-none"
            >
              <input
                type="checkbox"
                checked={selected.includes(opt)}
                onChange={() => toggleOption(opt)}
                className="mr-2"
              />
              {opt}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}