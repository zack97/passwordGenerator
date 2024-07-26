import React, { useState } from "react";
import { FaRegCopy, FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({ password }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="input-box">
      <input type={visible ? "text" : "password"} value={password} readOnly />
      <span className="copy" onClick={copyPassword}>
        <FaRegCopy />
      </span>
      <span className="toggle-pass" onClick={toggleVisibility}>
        {visible ? <FaEyeSlash /> : <FaEye />}
      </span>
    </div>
  );
};

export default PasswordInput;
