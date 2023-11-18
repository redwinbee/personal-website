import React, { useEffect } from "react";
import "./Card.css";
import TextScramble from "../../utilities/TextScramble";

export default function Card({ title, subtitle, phrases, children }) {
  useEffect(() => {
    const element = document.querySelector(".scrambled");
    const scrambler = new TextScramble(element);

    let counter = 0;
    const next = () => {
      scrambler.setText(phrases[counter]).then(() => {
        setTimeout(next, 1600);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();
  }, [phrases]);

  return (
    <div className="row-span-3 flex flex-col flex-auto justify-center text-center">
      <h1 className="scrambled font-bold text-2xl text-neutral-300">{title}</h1>
      <h6 className="font-light text-sm text-neutral-400 max-w-xl">
        {subtitle}
      </h6>
      <div>{children}</div>
    </div>
  );
}
