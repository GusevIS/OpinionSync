import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function OutlinedButtonBlack({buttonText, to, customWidth, customHeight}) {
    return (
        <Link to={to}>
            <Button variant="outlined" style={{ borderColor: '#0A2440', color: '#0A2440', borderWidth: 3, fontSize: "1.3rem", fontFamily: "Sen, sans-serif", width: customWidth, height: customHeight}}>{buttonText}</Button>
        </Link>
    );
}