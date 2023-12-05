import TextField from '@mui/material/TextField';

export default function DisabledTextField({text}) {
    const inputStyles = {
        color: '#0A2440',
        fontFamily: 'Sen, sans-serif',
    };
    return (
        <TextField disabled value={text} variant="outlined" InputProps={{
                       className: 'default-text'
        }} />
    );
}