"use client";

import React, { useState } from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  colors: {
    buttonBg: string;
    buttonText: string;
    buttonHoverBg: string;
    buttonHoverText: string;
  };
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className, colors }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-medium transition-colors ${className || ""}`}
      style={{
        backgroundColor: isActive ? colors.buttonHoverBg : colors.buttonBg,
        color: isActive ? colors.buttonHoverText : colors.buttonText,
      }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
    >
      {text}
    </button>
  );
};

export default Button;
