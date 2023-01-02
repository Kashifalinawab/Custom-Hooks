import React, { useState } from "react";
import useDebo from "./useDebo";

// usage
function TestingDebo() {
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearchInput = useDebo(searchInput, 250);

  return (
    <div>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <p>Debounced input: {debouncedSearchInput}</p>
    </div>
  );
}
export default TestingDebo;
