import React from "react";

export default function Container({ children }) {
  return (
    <div className="flex items-center justify-center mt-8 mb-8 ml-72 mr-72">
      <div className="bg-neutral-900 rounded-xl shadow-2xl">{children}</div>
    </div>
  );
}
