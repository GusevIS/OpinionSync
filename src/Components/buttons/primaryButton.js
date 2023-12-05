import * as React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function PrimaryButton({
  buttonText,
  to,
  className,
  customHeight,
}) {
  return (
    <Link to={to}>
      <Button
        className={`${className}`}
        variant="outlined"
        style={{
          borderColor: "#28954E",
          color: "#28954E",
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
}
