import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Account from "../account";
import { Link } from "react-router-dom";

export default function TextButton({buttonText, onClick}) {
    return (
        <Button onClick={onClick}  variant="text" style={{ color: '#0A2440', fontSize: "1.3rem", fontFamily: "Sen, sans-serif"}}>{buttonText}</Button>
    );
}