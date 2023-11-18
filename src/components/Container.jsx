import React from "react";

export default function Container({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="shadow bg-neutral-900 w-1/2 py-3.5">
        <div className="flex flex-auto mx-auto px-4">{children}</div>
      </div>
    </div>
  );
}
