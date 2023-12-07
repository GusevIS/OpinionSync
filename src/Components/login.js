import React, { useState } from "react";
import Card from "../UI/card";
import ContainedButton from "./buttons/containedButton";
import BasicTextFields from "./textFields/outlinedTextField";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    // Implement login logic here
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Signing in with:", { email, password });
    // Implement sign-in logic here
  };

  return (
    <Card>
      <div className="flex flex-col gap-2">
        <BasicTextFields
          label="email"
          className="w-96 md:w-[416px]"
          // customWidth="416px"
          customHeight="56px"
        >
          {}
        </BasicTextFields>
        <BasicTextFields
          label="password"
          className="w-96 md:w-[416px]"
          // customWidth="416px"
          customHeight="56px"
        >
          {}
        </BasicTextFields>

        <ContainedButton
          // onClick={handleLogin} - future feature
          buttonText="Log in"
          to="/account"
          className="w-96 md:w-[416px]"
          // customWidth="416px"
          customHeight="56px"
        >
          {}
        </ContainedButton>
        <ContainedButton
          buttonText="Sign up"
          to="/registration"
          className="w-96 md:w-[416px]"
          // customWidth="416px"
          customHeight="56px"
        >
          {}
        </ContainedButton>
      </div>
    </Card>
  );
};

export default LoginForm;
