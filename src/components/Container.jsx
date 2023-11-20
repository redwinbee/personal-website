import React from "react";

export default function Container({ children }) {
  return (
    <div className="flex items-center justify-center mx-48 my-8">
      <div className="bg-neutral-900 rounded-xl shadow-2xl">{children}</div>
    </div>
  );
}
