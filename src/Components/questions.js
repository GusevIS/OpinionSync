import React from "react";
import Card from "../UI/card";
import RatingScale from "./Scale/ratingScale";
import ShareLink from "../UI/shareLink";
import PrimaryButtons from "./buttons/primaryButton";

const Questions = () => {
  // Placeholder functions for button clicks
  const handlePrevious = () => {
    console.log("Previous clicked");
  };

  const handleNext = () => {
    console.log("Next clicked");
  };

  const handleOk = () => {
    console.log("Ok clicked");
  };

  // Inside your component
  const handleRatingSelect = (rating) => {
    console.log(`Selected rating is: ${rating}`); // Or any other action you want to take
  };

  return (
    <Card>
      <div
        className="text-center mb-4 md:min-w-[640px]"
        style={{ textAlign: "center" }}
      >
        <h1 className="default-text mb-8">Název místnosti</h1>
        <p
          style={{
            maxWidth: "640px",
            wordWrap: "break-word",
            margin: "0 auto",
          }}
        >
          Všichni sdílíme stejnou realitu a interpretujeme ji pouze jinak
        </p>
      </div>

      <div className="flex justify-between items-center mb-4">
        <span className="small-text">Agree</span>
        <RatingScale
          maxRating={5}
          onRatingSelect={handleRatingSelect}
          className="mx-2"
        />
        <span className="small-text">Disagree</span>
      </div>

      <div className="flex justify-between gap-4 mx-6">
        {/* <button
          className="bg-black text-white py-2 px-4 rounded shadow"
          onClick={handleOk}
        >
          Ok
        </button> */}
        <PrimaryButtons
          onClick={handlePrevious}
          buttonText="předchozí"
          to="/questions"
          customWidth="144px"
          customHeight="64px"
        >
          {}
        </PrimaryButtons>

        <PrimaryButtons
          buttonText="další"
          to="/questions"
          customWidth="144px"
          customHeight="64px"
        >
          {}
        </PrimaryButtons>
      </div>
      <PrimaryButtons
        buttonText="Výsledky"
        to="/results"
        customWidth="312px"
        customHeight="64px"
      >
        {}
      </PrimaryButtons>

      <ShareLink />
    </Card>
  );
};

export default Questions;
