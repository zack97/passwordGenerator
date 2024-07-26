import React from "react";

const Slider = ({ length, setLength, generatePassword }) => {
  const handleChange = (e) => {
    setLength(e.target.value);
    generatePassword();
  };

  return (
    <div className="pass-length">
      <div className="details">
        <label className="title">Password Length</label>
        <span>{length}</span>
      </div>
      <input
        type="range"
        min="1"
        max="30"
        value={length}
        onChange={handleChange}
      />
    </div>
  );
};

export default Slider;
