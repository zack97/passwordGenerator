import React from "react";

const StrengthIndicator = ({ length, options }) => {
  const calculateStrength = () => {
    let strength = 0;
    if (options.lowercase) strength++;
    if (options.uppercase) strength++;
    if (options.numbers) strength++;
    if (options.symbols) strength++;
    if (length >= 8) strength++;
    if (length >= 16) strength++;

    return strength <= 2 ? "weak" : strength <= 4 ? "medium" : "strong";
  };

  return <div className={`pass-indicator ${calculateStrength()}`}></div>;
};

export default StrengthIndicator;
