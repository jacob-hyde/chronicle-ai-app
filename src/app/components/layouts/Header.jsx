"use client";

import { useState } from "react";
import MenuItems from "./MenuItems";

export default function Header({ isLoggedIn = false }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="border-b border-solid border-b-[#f0f2f4] sm:px-4 md:py-3">
      <div className="flex items-center justify-between sm:flex-row flex-col">
        <div className="flex sm:flex-col flex-row w-full justify-between px-2 sm:py-0 py-4">
          <div className="flex items-center gap-2 text-[#111418]">
            <div className="size-4">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_6_535)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                    fill="currentColor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_535">
                    <rect width="48" height="48" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
              WriteMaster
            </h2>
          </div>

          {isLoggedIn && (
            <button className="sm:hidden" onClick={toggleAccordion}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
              </svg>
            </button>
          )}
        </div>

        {isLoggedIn && (
          <div
            className={`sm:flex ${
              isOpen ? "block" : "hidden"
            } flex-col sm:flex-row sm:justify-end justify-between w-full`}
          >
            <label className="flex justify-center flex-col w-full sm:min-w-40 sm:!h-12 h-12 md:max-w-64 mt-4 sm:mt-0 px-4">
              <div className="flex w-full h-full items-center rounded-xl">
                <div className="text-[#637588] h-full flex items-center justify-center pl-4 bg-[#f0f2f4] rounded-l-xl border-r-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                  </svg>
                </div>
                <input
                  placeholder="Search"
                  className="form-input flex w-full rounded-xl rounded-l-none text-[#111418] border-none bg-[#f0f2f4] h-full px-4 placeholder:text-[#637588] text-base"
                />
              </div>
            </label>

            <div className="flex sm:flex-row flex-col gap-2 sm:mt-0">
              <MenuItems />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
