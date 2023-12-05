import Card from "../UI/card";
import ShareLink from "../UI/shareLink";
import Switch from "react-switch";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import React, { useState } from "react";
import BasicTextFields from "./textFields/outlinedTextField";
import ContainedButton from "./buttons/containedButton";

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
      <div className=" mx-6">
        <div className="flex flex-col mt-8">
          <BasicTextFields
            onChange={(e) => setRoomName(e.target.value)}
            label="Room name"
            value={roomName}
            customWidth="416px"
            customHeight="56px"
          >
            {}
          </BasicTextFields>

          <div
            htmlFor="privacy-switch"
            className="flex ml-1 flex-column gap-1 items-center justify-center mt-12"
          >
            <Switch
              onChange={handleToggle}
              checked={isPrivate}
              id="privacy-switch"
              offColor="#EF7068"
              onColor="#28954E"
              handleDiameter={24}
              height={28}
              width={50}
              className="react-switch flex "
            />
            <p className="small-text">{isPrivate ? "Private" : "Public"}</p>
          </div>
        </div>
      </div>
      {questions.map((question, index) => (
        <div key={index} className=" flex flex-col items-center">
          {questions.length > 1 && (
            <button onClick={() => removeQuestion(index)} className="mr-2">
              <RemoveIcon
                fontSize="large"
                style={{ color: "#EF7068" }}
              ></RemoveIcon>
            </button>
          )}
          <BasicTextFields
            label="Enter a question"
            className="w-80 sm:w-[700px]"
            customHeight="56px"
          >
            {}
          </BasicTextFields>
          {index === questions.length - 1 && (
            <button onClick={addQuestion} className="mt-4 mb-8">
              <AddIcon fontSize="large" style={{ color: "#28954E" }}></AddIcon>
            </button>
          )}
        </div>
      ))}
      <ContainedButton
        onClick={handleCreateRoom}
        buttonText="Create"
        to="/questions"
        className="w-60"
        customHeight="56px"
      >
        {}
      </ContainedButton>
      <ShareLink />
    </Card>
  );
};

export default RoomCreationForm;
