import { Button } from "bootstrap";
import React from "react";
import { useEffect, useState } from "react";
import "../index.css";

export default function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(backToTopButton);
      if (window.scrollY > 100) {
        setBackToTopButton(true);
        setIsPageLoaded(false);
      } else {
        setBackToTopButton(false);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={
        isPageLoaded
          ? "completlyhidden"
          : backToTopButton
          ? "show arrow-up"
          : "hidden arrow-up"
      }
      onClick={scrollUp}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="currentColor"
        class="bi bi-arrow-up"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
        />
      </svg>
    </div>
  );
}
