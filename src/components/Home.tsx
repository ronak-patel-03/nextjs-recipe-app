import React from "react";
import { useDarkMode } from "./DarkModeContext";

const Home: React.FC = () => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`flex justify-start items-center h-3/4 ${
        darkMode ? "bg-gray-1000 text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`flex justify-start items-center h-3/4 ${
          darkMode ? "dark-mode" : ""
        }`}
      >
        <div
          className={`bg-white shadow-md-bottom p-8 font-serif w-full ${
            darkMode ? "dark-mode" : ""
          }`}
        >
          <div
            className={`flex-auto items-baseline ${
              darkMode ? "dark-mode" : ""
            }`}
          >
            <h1
              className={`text-3xl font-bold mr-2 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              YumYard
            </h1>
            <p
              className={`text-gray-700 ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Delve into the world of yumminess!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
