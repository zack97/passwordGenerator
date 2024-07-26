import React, { useState } from "react";
import PasswordInput from "./PasswordInput";
import StrengthIndicator from "./StrengthIndicator";
import Slider from "./Slider";
import Options from "./Options";

const characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!$%&|[](){}:;.,*+-#@<>~",
};

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(15);
  const [options, setOptions] = useState({
    lowercase: true,
    uppercase: false,
    numbers: false,
    symbols: false,
    excDuplicate: false,
    spaces: false,
  });

  const generatePassword = () => {
    let staticPassword = "",
      randomPassword = "",
      excludeDuplicate = options.excDuplicate;

    for (let key in options) {
      if (options[key] && key !== "excDuplicate" && key !== "spaces") {
        staticPassword += characters[key];
      } else if (key === "spaces" && options[key]) {
        staticPassword += `  ${staticPassword}  `;
      }
    }

    for (let i = 0; i < length; i++) {
      let randomChar =
        staticPassword[Math.floor(Math.random() * staticPassword.length)];
      if (excludeDuplicate) {
        !randomPassword.includes(randomChar) || randomChar === " "
          ? (randomPassword += randomChar)
          : i--;
      } else {
        randomPassword += randomChar;
      }
    }
    setPassword(randomPassword);
  };

  const updateOptions = (option, value) => {
    setOptions((prev) => ({ ...prev, [option]: value }));
    generatePassword();
  };

  return (
    <div className="wrapper">
      <PasswordInput password={password} />
      <StrengthIndicator length={length} options={options} />
      <Slider
        length={length}
        setLength={setLength}
        generatePassword={generatePassword}
      />
      <Options options={options} updateOptions={updateOptions} />
      <button className="generate-btn" onClick={generatePassword}>
        Generate Password
      </button>
    </div>
  );
};

export default PasswordGenerator;
