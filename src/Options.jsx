import React from "react";

const Options = ({ options, updateOptions }) => {
  return (
    <div className="pass-settings">
      <label className="title">Pass Settings</label>
      <ul className="options">
        {Object.keys(options).map((option) => (
          <li className="option" key={option}>
            <input
              type="checkbox"
              id={option}
              checked={options[option]}
              onChange={(e) => updateOptions(option, e.target.checked)}
            />
            <label htmlFor={option}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Options;
