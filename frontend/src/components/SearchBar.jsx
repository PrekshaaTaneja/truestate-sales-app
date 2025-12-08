import { useState } from "react";

function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    // Trigger parent handler immediately
    onSearch(newValue);
  };

  return (
    <div className="w-full flex justify-end">
      <input
        type="text"
        placeholder="Search Name, Phone no..."
        value={value}
        onChange={handleInput}
        className="w-full md:w-96 px-4 py-2 border border-gray-300 rounded-lg shadow-sm
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default SearchBar;
