import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import { useState } from "react";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React",
    content: "react is front end javaScript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite js library among engineer",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating componets",
  },
];

const options = [
  {
    label: "The Color red",
    value: "red",
  },
  {
    label: "The color green",
    value: "green",
  },
  {
    label: "the shades of blue",
    value: "blue",
  },
];

// const showAccordion = () => {
//   if (window.location.pathname === "/") {
//     return <Accordion items={items} />;
//   }
// };

// const showList = () => {
//   if (window.location.pathname === "/list") {
//     return <Search />;
//   }
// };

// const showDropdown = () => {
//   if (window.location.pathname === "/dropdown") {
//     return <Dropdown />;
//   }
// };

// const showTranslate = () => {
//   if (window.location.pathname === "/translate") {
//     return <Translate />;
//   }
// };

export default function App() {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="ui container">
      <Header />
      {/* <Accordion items={items} />
      <Search /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle button
      </button> */}
      {/* {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null} */}
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>

      {/* <Translate /> */}
    </div>
  );
}
