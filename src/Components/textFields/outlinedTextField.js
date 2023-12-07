import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function BasicTextFields({
  label,
  customWidth,
  customHeight,
  className,
}) {
  return (
    <Box
      component="form"
      //   sx={{
      //     "& > :not(style)": { m: 1, width: "25ch" },
      //   }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        className={`${className}`}
        label={label}
        variant="outlined"
        style={{
          backgroundColor: "white",
          width: customWidth,
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
