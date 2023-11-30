import React from "react";
import WhiteButton from "../UI/whiteButton";
import Button from "../UI/button";
import Card from "../UI/card";
import RatingScale from "./Scale/ratingScale";
import ShareLink from "../UI/shareLink";

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
      <div className="text-center mb-4">
        <h1 className="text-xl font-bold">Jméno dotazníku</h1>
        <p>Text otázky</p>
      </div>

      <div className="flex justify-between items-center mb-4">
        <span>Agree</span>
        <RatingScale
          maxRating={5}
          onRatingSelect={handleRatingSelect}
          className="mx-2"
        />
        <span>Disagree</span>
      </div>

      <div className="flex justify-between gap-4 mx-6">
        <WhiteButton to="/questions" onClick={handlePrevious} className="w-28">
          Previous
        </WhiteButton>
        {/* <button
          className="bg-black text-white py-2 px-4 rounded shadow"
          onClick={handleOk}
        >
          Ok
        </button> */}
        <WhiteButton to="/questions" onClick={handleNext} className="w-28">
          Next
        </WhiteButton>
      </div>
      <ShareLink />
    </Card>
  );
};

export default Questions;
