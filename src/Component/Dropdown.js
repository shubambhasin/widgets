import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", () => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }

      setOpen(false);
    });
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null; // return null when one color is selected

      //, so doesnt show anyting on the screen/
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form ">
      <div className="field">
        <label className="label">Select a color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? `visible active` : ""}`}
        >
          <i className="dropdown icon" />
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? `visible transition` : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>

      <h2 style={{ color: selected.value }}>The color is {selected.value}</h2>
    </div>
  );
};
export default Dropdown;
