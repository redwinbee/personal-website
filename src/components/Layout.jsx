import React from "react";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-5 grid-rows-5 h-full gap-5 p-5">
      {children}
    </div>
  );
}
