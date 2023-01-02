import React, { useEffect, useState } from "react";

function useDebounce(value, milliseconds) {
  const [debounce, setDebounce] = useState(value);
  useEffect(() => {
    const deBounceHandle = setTimeout(() => {
      setDebounce(value);
    }, 1000);
    return () => {
      clearTimeout(deBounceHandle);
    };
  }, [value, milliseconds]);

  return debounce;
}

export default useDebounce;
