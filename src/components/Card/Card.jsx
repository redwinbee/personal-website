import React, { useState } from "react";
import "./Card.css";

export default function Card({ title, subtitle, children }) {
  const [isHovered, setIsHovered] = useState(false);

  const unscrambleText = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const scrambleText = (text) => {
    return text
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
  };

  return (
    <div className="row-span-3 flex flex-col flex-auto justify-center text-center">
      <h1
        className="font-bold text-2xl text-neutral-300"
        onMouseEnter={unscrambleText}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered ? title : scrambleText(title)}
      </h1>
      <h6 className="font-light text-sm text-neutral-400 max-w-xl">
        {subtitle}
      </h6>
      <div>{children}</div>
    </div>
  );
}
