import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

export default function Navbar() {
  const [theme, setTheme] = useState("");
  const myHtml = document.querySelector("html");
  const handleToggle = (e) => {
    if (e.target.checked) {
      myHtml.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    } else {
      myHtml.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      myHtml.classList.add("dark");
      setTheme("dark");
    } else {
      myHtml.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  return (
    <>
      <div className="navbar py-5 px-6 shadow  dark:bg-slate-800 bg-white transition-colors duration-300 ">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <a className="font-semibold bg-clip-text text-transparent bg-gradient-to-br from-red-400 to-indigo-600 text-3xl">
            Z-WordCounter
          </a>
        </div>
        <div className="navbar-end"></div>
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "light" ? false : true}
          />
          <BsSunFill className="swap-on fill-current w-12 text-yellow-300 h-12 p-2 bg-slate-700 rounded-full" />
          <BsMoonStarsFill className="swap-off fill-current w-12  rounded-full  text-black shadow-md h-12 p-2" />
        </label>
      </div>
    </>
  );
}
