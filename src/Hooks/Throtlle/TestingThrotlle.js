import React, { useState } from "react";
import useThrottle from "./useThrottle";

function TestingThrollte() {
  const [text, setText] = useState("Hello");
  const throttledText = useThrottle(text, 1000);
  return (
    <div>
      <input
        defaultValue={"Hello"}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <p>Actual value: {text}</p>
      <p>Throttled value: {throttledText}</p>
    </div>
  );
}
export default TestingThrollte;
