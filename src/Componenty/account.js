import { Link } from "react-router-dom";

const Account = () => {
    return (
       <>
        <div style={styles.box_email}>
            <p style={styles.text}>*User email*</p>
        </div>

    <div style={styles.box_username}>
        <p style={styles.text}>*Username*</p>
    </div>
       </>
    );
}
    const styles = {
        box_email: {
            border: '1px solid #000000',
            padding: '15px',
            borderRadius: '5px',
            backgroundColor: '#000000',
            width: '300px',
            margin: '500px',
        },
        box_username:
            {
                border: '1px solid #000000',
                padding: '15px',
                borderRadius: '5px',
                backgroundColor: '#000000',
                width: '300px',
                margin: '500px',
                position: 'absolute',
                top: '150px'

            },
        text: {
            color: '#FFFFFF',
            fontSize: '16px',
            margin: '0',
            textAlign: 'center'
        }
    }
export default Account;