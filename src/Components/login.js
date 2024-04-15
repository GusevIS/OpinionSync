import React, { useState } from "react";
import axios from "axios";
import Card from "../UI/card";
import ContainedButton from "./buttons/containedButton";
import BasicTextFields from "./textFields/outlinedTextField";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null); // State to handle login errors


  const handleLogin = (e) => {
    e.preventDefault();
    // Send login request to backend
    // axios.post('http://localhost/zs2324/01/Jusko/OpinionSyncBackend/login.php', { email, password })
    axios.post('https://ete32e.pef.czu.cz/zs2324/01/Jusko/OpinionSyncBackend/login.php', { email, password })
        .then(response => {
          // Handle successful login
          console.log("Login successful:", response.data);
          // Redirect to account page or perform other actions
          window.location.href = "/zs2324/01/Jusko/build/account";
        })
        .catch(error => {
          // Handle login error
          console.error("Login failed:", error);
          // Set login error state to display error message to the user
          setLoginError("Login failed. Please check your email and password.");
        });
  };

  return (
      <Card>
        <div className="flex flex-col gap-2">
          <BasicTextFields
              label="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-96 md:w-[416px]"
              customHeight="56px"
          />
          <BasicTextFields
              label="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-96 md:w-[416px]"
              customHeight="56px"
          />

          <ContainedButton
              onClick={handleLogin}
              buttonText="Log in"
              className="w-96 md:w-[416px]"
              customHeight="56px"
          />
          <ContainedButton
              buttonText="Sign up"
              to="/registration"
              className="w-96 md:w-[416px]"
              customHeight="56px"
          />
          {loginError && <p className="text-red-500">{loginError}</p>} {/* Display login error message */}
        </div>
      </Card>
  );
};

export default LoginForm;
