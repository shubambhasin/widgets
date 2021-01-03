import React, { useState } from "react";
import Accordion from "./Component/Accordion";
import Dropdown from "./Component/Dropdown";
import Search from "./Component/Search";
import "./styles.css";

var items = [
  {
    title: "What is HTML",
    content: "It is a HYPER TEXT MARKUP LANGUAGE"
  },
  {
    title: "What is React",
    content: "It is a Javascript library to make UI"
  },
  {
    title: "What is Angular",
    content: "It is a Javascript framework fro making uis"
  }
];

const options = [
  {
    label: "The  red color",
    value: "red"
  },
  {
    label: "The green color",
    value: "green"
  },
  {
    label: "The blue color",
    value: "blue"
  }
];

export default function App() {
  const [selected, setSelected] = useState(options[0]);
  const [showDropDown, setSetShowDropDown] = useState(true);

  return (
    <div className="">
      <button onClick={() => setSetShowDropDown(!showDropDown)}>
        Toggle dropdown
      </button>
      {showDropDown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        /> // there is ternary expression above
      ) : null}
    </div>
  );
}
