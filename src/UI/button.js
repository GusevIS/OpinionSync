import React from "react";
import { Link } from "react-router-dom";

const Button = ({ to, children, className = "" }) => {
  return (
    <Link
      to={to}
      className={`bg-black text-white font-semibold no-underline py-2 px-3 flex items-center justify-center border border-gray-700  rounded shadow ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
