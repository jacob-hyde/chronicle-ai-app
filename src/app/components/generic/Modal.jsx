"use client";

import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function Modal({ children, show, title, onCloseButtonClick }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!show) {
    return null;
  }

  return mounted
    ? ReactDOM.createPortal(
        <div className="block fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50">
          <div className="flex justify-center items-center w-full h-full">
            <div className="relative sm:w-1/2 sm:mx-0 mx-4 w-full bg-white rounded-xl shadow-lg">
              <div className="flex justify-between items-center p-4 border-b border-solid borde-[#f0f2f4]">
                <h2 className="text-[#111418] text-lg font-bold leading-tight">
                  {title}
                </h2>
                <button onClick={onCloseButtonClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.343 6.343a.5.5 0 0 1 .708 0L12 11.293l5.95-5.95a.5.5 0 0 1 .708.708L12.707 12l5.95 5.95a.5.5 0 0 1-.708.708L12 12.707l-5.95 5.95a.5.5 0 0 1-.708-.708L11.293 12 5.343 6.05a.5.5 0 0 1 0-.707z"></path>
                  </svg>
                </button>
              </div>
              <div className="p-4">{children}</div>
            </div>
          </div>
        </div>,
        document.getElementById("modal-root")
      )
    : null;
}
