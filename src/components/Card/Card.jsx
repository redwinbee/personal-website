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
        }, 7200);
      });
    };

    next();

    // Cleanup function to stop the animation when the component unmounts
    return () => scrambler.dispose();
  }, [phrases]);

  return (
    <div className="card flex flex-col flex-auto justify-center text-center h-full pl-12 pr-12 pt-6 pb-6 rounded-xl shadow-xl">
      <h1
        ref={elementRef}
        className="scrambled font-bold text-2xl text-cyan-500"
      >
        {title}
      </h1>
      <div className="font-light text-sm text-neutral-400">
        <h6 className="p-2">{subtitle}</h6>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
