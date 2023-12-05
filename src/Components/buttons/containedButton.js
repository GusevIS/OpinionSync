import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const ContainedButton = ({
  onClick,
  buttonText,
  to,
  className,
  customHeight,
}) => {
  return (
    <Link to={to}>
      <Button
        className={`${className}`}
        onClick={onClick}
        variant="contained"
        style={{
          backgroundColor: "#28954E",
          color: "white",
          borderWidth: 3,
          fontSize: "1.3rem",
          fontFamily: "Sen, sans-serif",
          height: customHeight,
        }}
      >
        {buttonText}
      </Button>
    </Link>
  );
};

export default ContainedButton;
