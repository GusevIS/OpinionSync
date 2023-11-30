import { Link } from "react-router-dom";
import Button from "../UI/button";

const Registration = () => {
  return (
    <>
      <div style={styles.box_name}>
        <p style={styles.text}>*Name*</p>
      </div>

      <div style={styles.box_email}>
        <p style={styles.text}>*email*</p>
      </div>

      <div style={styles.box_password}>
        <p style={styles.text}>*password*</p>
      </div>

      <div className="mt-52 flex flex-col items-center gap-2">
        <Button to="/login" className="w-full">
          Log in
        </Button>
        <Button to="" className="w-full">
          Sign in
        </Button>
      </div>
    </>
  );
};
const styles = {
  box_name: {
    border: "2px solid #000000",
    padding: "15px",
    borderRadius: "5px",
    backgroundColor: "#cbd5e1",
    width: "322px",
    position: "relative",
    top: "170px",
  },
  box_email: {
    border: "2px solid #000000",
    padding: "15px",
    borderRadius: "5px",
    backgroundColor: "#cbd5e1",
    width: "322px",
    position: "relative",
    top: "180px",
  },
  box_password: {
    border: "2px solid #000000",
    padding: "15px",
    borderRadius: "5px",
    backgroundColor: "#cbd5e1",
    width: "322px",
    position: "relative",
    top: "190px",
  },
  text: {
    color: "#000000",
    fontSize: "16px",
    margin: "0",
    textAlign: "center",
  },
  greeting: {
    color: "#000000",
    fontSize: "45px",
    position: "relative",
    right: "200px",
    top: "80px",
  },
  icon: {
    height: "300px",
    width: "220px",
    position: "relative",
    left: "43px",
    top: "250px",
  },
};
export default Registration;
