import React from "react";
import { Link } from "react-router-dom";

const whiteButton = ({ to, children, className = "" }) => {
  return (
    <Link
      to={to}
      className={`text-black font-semibold py-2 px-4 flex items-center justify-center border border-gray-700 hover:bg-slate-400 no-underline rounded shadow ${className}`}
    >
      {children}
    </Link>
  );
};

export default whiteButton;
