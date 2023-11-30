import React from "react";

const Card = ({ children }) => {
  return (
    <div className="  my-4 p-4 border border-gray-300 shadow-lg rounded-md">
      {children}
    </div>
  );
};

export default Card;
