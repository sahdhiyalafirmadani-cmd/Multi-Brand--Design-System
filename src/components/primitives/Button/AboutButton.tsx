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
  width?: string; // allow width from spacing
}

const AboutButton: React.FC<ButtonProps> = ({ text, onClick, className, colors, width }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-medium transition-colors ${className || ""}`}
      style={{
        width: width || "auto",
        backgroundColor: isActive ? colors.buttonHoverBg : colors.buttonBg,
        color: isActive ? colors.buttonHoverText : colors.buttonText,
      }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
      onTouchCancel={() => setIsActive(false)}
    >
      {text}
    </button>
  );
};

export default AboutButton;
