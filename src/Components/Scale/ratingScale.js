import React, { useState } from "react";

const RatingScale = ({ maxRating = 5, onRatingSelect }) => {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleSetRating = (rate) => {
    setSelectedRating(rate);
    if (onRatingSelect) {
      onRatingSelect(rate); // Callback function to pass the rating up to the parent component
    }
  };

  return (
    <div className="flex space-x-1 justify-center">
      {[...Array(maxRating)].map((_, index) => {
        const rateValue = index + 1; // Define a 1-based rating value
        return (
          <button
            key={index}
            className={`w-6 h-6 rounded-full ${
              selectedRating === rateValue ? "bg-gray-900" : "bg-gray-600"
            }`}
            onClick={() => handleSetRating(rateValue)}
            aria-label={`Rate ${rateValue}`}
          />
        );
      })}
    </div>
  );
};

export default RatingScale;
