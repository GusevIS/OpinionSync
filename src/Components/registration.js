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
        axios.post('/OpinionSyncBackend/registration.php', { name, email, password })
            .then(response => {
                    // Handle successful registration
                    console.log("Registration successful:", response.data);

                    // 1. Show confirmation message to the user
                    alert("Registration successful. You can now log in.");

                    // 2. Redirect the user to the login page
                    // Replace "/login" with the actual URL of your login page
                    window.location.href = "/login";
                })

            .catch(error => {
                // Handle registration error
                console.error("Registration failed:", error);
                setRegistrationError("Registration failed. Please try again.");
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
