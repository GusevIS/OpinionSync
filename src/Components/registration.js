import Button from "../UI/button";
import React, { useState } from "react";

import Card from "../UI/card";

const Registration = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Card>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none"
      />

      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none"
      />

      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 border border-gray-400 rounded focus:outline-none"
      />

      <div className="mt-3 flex flex-col items-center gap-2">
        <Button to="/account" className="w-80">
          Registrovat se
        </Button>
      </div>
    </Card>
  );
};

export default Registration;
