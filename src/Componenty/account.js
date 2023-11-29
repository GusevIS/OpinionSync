import { Link } from "react-router-dom";
import Button from "../UI/button";

const Account = () => {
    return (
       <>
        <div style={styles.box_email}>
            <p style={styles.text}>*User email*</p>
        </div>

    <div style={styles.box_username}>
        <p style={styles.text}>*Username*</p>
    </div>
           <div className="mt-80 flex flex-row items-center gap-2">
           <Button to="" className="w-40">
               Change email
           </Button>
               <Button to="" className="w-29">
                   Change password
               </Button>
           </div>
       </>

    );
}
    const styles = {
        box_email: {
            border: '2px solid #000000',
            padding: '15px',
            borderRadius: '5px',
            backgroundColor: '#cbd5e1',
            width: '322px',
            position: 'relative',
            top: '300px'
        },
        box_username:
            {
                border: '2px solid #000000',
                padding: '15px',
                borderRadius: '5px',
                backgroundColor: '#cbd5e1',
                width: '322px',
                position: 'relative',
                top: '310px'

            },
        text: {
            color: '#000000',
            fontSize: '16px',
            margin: '0',
            textAlign: 'center'
        }
    }
export default Account;