import { Link } from "react-router-dom";
import Button from "../UI/button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Account = () => {
    return (
       <>
           <div style={styles.greeting}>
               <p>Welcome User!</p>
           </div>

            <div style={styles.icon}>
                <img src="https://icon-library.com/images/blank-person-icon/blank-person-icon-7.jpg" alt="person"/>
            </div>

           <div style={styles.box_email}>
            <p style={styles.text}>*User email*</p>
        </div>

    <div style={styles.box_username}>
        <p style={styles.text}>*Username*</p>
    </div>
           <div className="mt-52 flex flex-row items-center gap-2">
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
            top: '190px'
        },
        box_username:
            {
                border: '2px solid #000000',
                padding: '15px',
                borderRadius: '5px',
                backgroundColor: '#cbd5e1',
                width: '322px',
                position: 'relative',
                top: '200px'

            },
        text: {
            color: '#000000',
            fontSize: '16px',
            margin: '0',
            textAlign: 'center'
        },
        greeting: {
            color: '#000000',
            fontSize: '45px',
            position: 'relative',
            right: '200px',
            top: '80px'
        },
        icon:{
            height: '300px',
            width: '220px',
            position: 'relative',
            left: '43px',
            top: '250px'
        }
    }
export default Account;