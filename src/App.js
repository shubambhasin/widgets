import React from "react";
import Accordion from "./Component/Accordion";
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

export default function App() {
  return (
    <div className="">
      <br />
      <Accordion items={items} />
    </div>
  );
}
