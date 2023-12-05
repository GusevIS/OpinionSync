import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields({ label, className, customHeight }) {
  return (
    <Box noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        className={`${className}`}
        style={{
          backgroundColor: "white",
          height: customHeight,
          marginBottom: "0px",
          marginTop: "0px",
        }}
        InputProps={{
          focused: false,
        }}
        InputLabelProps={{
          focused: false,
          style: { fontFamily: "Sen, sans-serif", fontSize: "18px" },
        }}
      />
    </Box>
  );
}
