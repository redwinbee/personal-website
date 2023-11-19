import React, { useEffect, useRef } from "react";
import "./Card.css";
import TextScramble from "../../utilities/TextScramble";

export default function Card({ title, subtitle, phrases, children }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    const scrambler = new TextScramble(element);

    let counter = 0;
    const next = () => {
      scrambler.setText(phrases[counter]).then(() => {
        setTimeout(() => {
          counter = (counter + 1) % phrases.length;
          next();
        }, 1600);
      });
    };

    next();

    // Cleanup function to stop the animation when the component unmounts
    return () => scrambler.dispose();
  }, [phrases]);

  return (
    <div className="card flex flex-col flex-auto justify-center text-center h-full p-5 rounded-xl shadow-xl">
      <h1
        ref={elementRef}
        className="scrambled font-bold text-2xl text-neutral-300"
      >
        {title}
      </h1>
      <div className="font-light text-sm text-neutral-400">
        <h6>{subtitle}</h6>
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
}
