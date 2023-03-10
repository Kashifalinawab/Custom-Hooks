import React, { useState } from "react";
import useDebounce from "./useDebounce";

function TestingDebounce(props) {
  const array = ["Kashif", "Aquib", "Naveed", "Zeshaan", "Tahoor", "Aarsih"];
  const [state, setState] = useState("");
  const [display, setdisplay] = useState(array);
  const debounce = useDebounce(display, 5000);

  const changeEvent = (e) => {
    setState(e.target.value);

    setdisplay(newContent);
  };
  const newContent = debounce.filter((data) =>
    data.toLocaleLowerCase().includes(state)
  );

  return (
    <div>
      <input
        type="text"
        value={state}
        onChange={(e) => changeEvent(e)}
        placeholder="type for testing hook"
      />
      <div>
        {debounce.map((data, index) => {
          return (
            <ul key={index}>
              <li>{data}</li>
            </ul>
          );
        })}
      </div>
      {/* <div>{debounce}</div> */}
    </div>
  );
}

export default TestingDebounce;
