import React, { useState } from "react";

import Card from "../UI/card";
import BasicTextFields from "./textFields/outlinedTextField";
import ContainedButton from "./buttons/containedButton";

const Registration = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
      <Card>
          <div className="flex flex-col gap-2">
              <BasicTextFields label="name" customWidth="416px" customHeight="56px">
                  {}
              </BasicTextFields>
              <BasicTextFields label="email" customWidth="416px" customHeight="56px">
                  {}
              </BasicTextFields>
              <BasicTextFields label="password" customWidth="416px" customHeight="56px">
                  {}
              </BasicTextFields>

              <ContainedButton buttonText="Sign up" to="/login" customWidth="416px" customHeight="56px">
                  {}
              </ContainedButton>
          </div>
      </Card>
  );
};

export default Registration;
