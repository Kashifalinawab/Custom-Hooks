import { useState, useEffect } from "react";

export default function useThro(value, limit) {
  const [throttledValue, setThrottledValue] = useState(value);
  useEffect(() => {
    let timeoutHandle = setTimeout(() => {
      setThrottledValue(value);
    }, limit);
    return () => {
      clearTimeout(timeoutHandle);
    };
  }, [value, limit]);
  return throttledValue;
}
