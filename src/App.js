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

const showDropDown = () => {
  if (window.location.pathname === "/dropdown") {
    return (
      <Dropdown
      // selected={selected}
      // onSelectedChange={setSelected}
      // options={options}
      />
    );
  }
};

const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
};

const showSearch = () => {
  if (window.location.pathname === "/search") {
    return <Search />;
  }
};

export default function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="">
      {showAccordion}
      {showDropDown}
      {showSearch}
    </div>
  );
}
