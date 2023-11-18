import React from "react";

export default function Container({ children }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid gap-5 p-5 grid-cols-1 grid-rows-3 justify-items-center w-11/12 h-5/6 bg-neutral-900 rounded-xl shadow-2xl">
        {children}
      </div>
    </div>
  );
}
