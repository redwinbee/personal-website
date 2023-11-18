import React, {useState} from "react";
import "./Card.css";

export default function Card({ title, children }) {
    const [isHovered, setIsHovered] = useState(false);

    const unscrambleText = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const scrambleText = (text) => {
        return text.split("").sort(() => Math.random() - 0.5).join("");
    }

    return (
        <div className={`grid place-content-center text-center text-white text-base w-1/2 whitespace-pre-line ${isHovered ? "unscramble" : ""}`}
             onMouseEnter={unscrambleText}
             onMouseLeave={handleMouseLeave}>
            <h1>{isHovered ? title : scrambleText(title)}</h1>
            <div className="text-xs text-neutral-400">
                {children}
            </div>
        </div>
    )
}