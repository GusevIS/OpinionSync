import React from "react";

const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`${className}  my-4 p-4 border border-gray-300 shadow-lg rounded-md flex items-center flex-col gap-3`}
    >
      {children}
    </div>
  );
};

export default Card;
