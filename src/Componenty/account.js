import { Link } from "react-router-dom";
import React from 'react';

const Account = () => {
    return (
        <div style={styles.box}>
            <p style={styles.text}>Hello, this is some text in a box!</p>
        </div>
    );
}
    const styles = {
        box: {
            border: '1px solid #000000',
            padding: '15px',
            borderRadius: '5px',
            backgroundColor: '#f4f4f4',
            width: '300px',
            margin: '20px',
        },
        text: {
            color: '#333',
            fontSize: '16px',
            margin: '0',
        }
    }
export default Account;