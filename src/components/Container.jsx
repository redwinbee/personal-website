import React from "react";

export default function Container({ children }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-11/12 h-5/6 bg-neutral-900 rounded-xl shadow-2xl">
        {children}
      </div>
    </div>
  );
}
