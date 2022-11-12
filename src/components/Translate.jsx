import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "French",
    value: "fr",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Tamil",
    value: "ta",
  },
  {
    label: "Sweden",
    value: "sv",
  },
  {
    label: "Norweigian",
    value: "no",
  },
  {
    label: "Finnish",
    value: "fi",
  },
  {
    label: "Japanese",
    value: "ja",
  },
  {
    label: "German",
    value: "de",
  },
  {
    label: "Russian",
    value: "ru",
  },
  {
    label: "Spanish",
    value: "es",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
        label="select a language"
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
