import React, { useState } from "react";
import useThro from "./useThro";

export default function TestingUseThr() {
  const [value, setValue] = useState("");
  const throttledValue = useThro(value, 1000);

  return (
    <>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <p>Throttled value: {throttledValue}</p>
    </>
  );
}
