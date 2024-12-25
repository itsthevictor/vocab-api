import { useEffect, useState } from "react";

const ThemeToggle = ({ theme }) => {
  const [selectedTheme, setSelectedTheme] = useState(theme);

  const setDark = () => {
    console.log("set dark", theme);
    document.querySelector("body").setAttribute("data-theme", "dark");
    setSelectedTheme(true);
    localStorage.setItem("dark-theme", true);
  };

  const setLight = () => {
    console.log("set light", theme);
    document.querySelector("body").removeAttribute("data-theme", "dark");
    setSelectedTheme(false);
    localStorage.removeItem("dark-theme");
  };

  return (
    <button
      className="mode-btn"
      onClick={
        selectedTheme === null || selectedTheme === false ? setDark : setLight
      }
    >
      <p>
        {selectedTheme === null || selectedTheme === false ? "luna" : "soarele"}
      </p>
    </button>
  );
};
export default ThemeToggle;
