import React, { useState } from "react";
import axios from "axios";

import Card from "../UI/card";
import BasicTextFields from "./textFields/outlinedTextField";
import ContainedButton from "./buttons/containedButton";

const Registration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registrationError, setRegistrationError] = useState(null);

    const handleRegistration = (e) => {
        e.preventDefault();
        axios.post('http://localhost/zs2324/01/Jusko/OpinionSyncBackend/registration.php', { name, email, password })
        // axios.post('http://localhost/OpinionSyncBackend/registration.php', { name, email, password })
            .then(response => {
                    // Handle successful registration
                    console.log("Registrace byla úspěšná:", response.data);
                    // 1. Show confirmation message to the user
                    alert("Registrace byla úspěšná. Můžete se přihlásit.");
                    window.location.href = "/login";
                })

            .catch(error => {
                // Handle registration error
                console.error("Registrace neproběhla, zkuste to prosím znovu:", error);
                setRegistrationError("Registrace neproběhla, zkuste to prosím znovu.");
            });
    };

    return (
        <Card>
            <div className="flex flex-col gap-2">
                <BasicTextFields
                    label="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    customWidth="416px"
                    customHeight="56px"
                />
                <BasicTextFields
                    label="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    customWidth="416px"
                    customHeight="56px"
                />
                <BasicTextFields
                    label="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    customWidth="416px"
                    customHeight="56px"
                />
                <ContainedButton
                    buttonText="Sign up"
                    onClick={handleRegistration}
                    customWidth="416px"
                    customHeight="56px"
                />
                {registrationError && <p className="text-red-500">{registrationError}</p>}
            </div>
        </Card>
    );
};

export default Registration;
