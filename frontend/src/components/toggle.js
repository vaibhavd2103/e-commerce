// ToggleThemeButton.jsx
import React from "react";
import { useTheme } from "../context/ThemeContext";

const ToggleThemeButton = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      style={{
        backgroundColor: isDark ? "cyan" : "purple",
      }}
      onClick={toggleTheme}
    >
      Switch to {isDark ? "Light" : "Dark"} Mode
    </button>
  );
};

export default ToggleThemeButton;
