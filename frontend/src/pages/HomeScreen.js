import React from "react";
import "../styles/HomeScreen.css";
import ToggleThemeButton from "../components/toggle";

function HomeScreen() {
  return (
    <div>
      <ToggleThemeButton />
      <button>Welcome</button>
      <p className="title">E-commerce app</p>
    </div>
  );
}

export default HomeScreen;
