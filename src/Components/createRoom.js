import Button from "../UI/button";
import Card from "../UI/card";
import ShareLink from "../UI/shareLink";
import Switch from "react-switch";

import React, { useState } from "react";

const RoomCreationForm = () => {
  const [roomName, setRoomName] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [questions, setQuestions] = useState([""]);

  const handleCreateRoom = () => {
    // Logic to handle room creation
    console.log({ roomName, isPrivate, questions });
  };

  const addQuestion = () => {
    setQuestions([...questions, ""]);
  };

  const removeQuestion = (index) => {
    setQuestions(questions.filter((_, idx) => idx !== index));
  };

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
  };

  const handleToggle = (checked) => {
    setIsPrivate(checked);
  };

  return (
    <Card>
      <div className="mb-4 mx-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="roomName"
        >
          Room Name
        </label>
        <div className="flex flex-col">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="roomName"
            type="text"
            placeholder="Room name"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />

          <div
            htmlFor="privacy-switch"
            className="flex ml-1 flex-col gap-1 justify-start"
          >
            <p className="text-sm text-gray-600 m-0 mt-1">
              {isPrivate ? "Private" : "Public"}
            </p>
            <Switch
              onChange={handleToggle}
              checked={isPrivate}
              id="privacy-switch"
              offColor="#888"
              onColor="#4C51BF"
              handleDiameter={50}
              height={28}
              width={50}
              className="react-switch flex "
            />
          </div>
        </div>
      </div>
      {questions.map((question, index) => (
        <div key={index} className=" flex flex-col items-center">
          <div className="flex flex-row">
            {questions.length > 1 && (
              <button onClick={() => removeQuestion(index)} className="mr-2">
                {/* Replace with minus icon */}➖
              </button>
            )}
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter a question"
              value={question}
              onChange={(e) => handleQuestionChange(index, e.target.value)}
            />
          </div>
          {index === questions.length - 1 && (
            <button onClick={addQuestion} className="mt-4">
              {/* Replace with plus icon */}➕
            </button>
          )}
        </div>
      ))}
      <Button onClick={handleCreateRoom} to="/questions" className="mt-0">
        Create
      </Button>
      <ShareLink />
    </Card>
  );
};

export default RoomCreationForm;
