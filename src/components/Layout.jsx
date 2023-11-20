import React from "react";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-6 grid-rows-6 h-fit gap-5 p-5 m-5">
      {children}
    </div>
  );
}
