import React from 'react';
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

const ContainedButton = ({onClick, buttonText, to, customWidth, customHeight}) => {
    return (
        <Link to={to}>
            <Button onClick={onClick} variant="contained" style={{ backgroundColor: '#28954E', color: 'white', borderWidth: 3, fontSize: "1.3rem", fontFamily: "Sen, sans-serif", width: customWidth, height: customHeight }}>{buttonText}</Button>
        </Link>
    );
};

export default ContainedButton;