import { useState } from 'react';
import { useEffect } from 'react';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

export default function Navbar() {
  const [theme, setTheme] = useState('');
  const myHtml = document.querySelector('html');

  const handleToggle = (e) => {
    if (e.target.checked) {
      myHtml.classList.add('dark');
      localStorage.theme = 'dark';
      setTheme('dark');
    } else {
      myHtml.classList.remove('dark');
      localStorage.theme = 'light';
      setTheme('light');
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      myHtml.classList.add('dark');
      setTheme('dark');
    } else {
      myHtml.classList.remove('dark');
      setTheme('light');
    }
  }, [myHtml.classList]);

  return (
    <>
      <div className="navbar py-5 px-6 shadow dark:bg-slate-800 bg-white transition-colors duration-300 ">
        <div className="navbar-start"></div>
        <div className="navbar-center">
          <div className="font-semibold bg-clip-text text-transparent bg-gradient-to-br from-red-400 to-indigo-600 text-2xl md:text-3xl">
            Z-WordCounter
          </div>
        </div>
        <div className="navbar-end"></div>
        <label htmlFor="toggleDarkMode" className="swap swap-rotate">
          <input
            id="toggleDarkMode"
            type="checkbox"
            aria-label="Toggle Dark Mode"
            onChange={handleToggle}
            checked={theme === 'light' ? false : true}
          />
          <BsSunFill className="swap-on fill-current w-10 text-yellow-300 h-10 p-2 bg-slate-700 rounded-full" />
          <BsMoonStarsFill className="swap-off fill-current w-10 rounded-full text-black shadow-md h-10 p-2" />
        </label>
      </div>
    </>
  );
}
