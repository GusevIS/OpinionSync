import React, { useState } from "react";
import Button from "../UI/button";
import Card from "../UI/card";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { name, email, password });
    // Implement login logic here
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Signing in with:", { name, email, password });
    // Implement sign-in logic here
  };

  return (
    <form className="space-y-4 p-4 flex items-center flex-col">
      <Card>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none"
        />
        <div className="flex flex-col space-y-2">
          <Button onClick={handleLogin} className="w-80" to="/login">
            Log in
          </Button>
          <Button onClick={handleSignIn} className="w-80" to="/registration">
            Zaregistrovat se
          </Button>
        </div>
      </Card>
    </form>
  );
};

export default LoginForm;
