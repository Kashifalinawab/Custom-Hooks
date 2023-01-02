import React from "react";
// import TestingDebounce from "./Hooks/Debounce/TestingDebounce";
import TestingThrollte from "./Hooks/Throtlle/TestingThrotlle";
import TestingUseThr from "./Hooks/Throtlle/TestingUseThr";
import TestingDebo from "./Hooks/Debounce/TestingDebo";
function App() {
  return (
    <div className="App">
      {/* <TestingDebounce /> */}
      <TestingDebo />
      <TestingThrollte />
      {/* <TestingUseThr /> */}
    </div>
  );
}

export default App;
