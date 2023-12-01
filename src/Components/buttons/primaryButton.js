import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Account from "../account";
import { Link } from "react-router-dom";

export default function PrimaryButton({buttonText, to, customWidth, customHeight}) {
    return (
        <Link to={to}>
            <Button variant="outlined" style={{ borderColor: '#28954E', color: '#28954E', borderWidth: 3, fontSize: "1.3rem", fontFamily: "Sen, sans-serif", width: customWidth, height: customHeight }}>{buttonText}</Button>
        </Link>
    );
}