import React, { useState } from "react";
import { Star } from "lucide-react";

const RatingStars = ({ onChange }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((num) => (
        <Star
          key={num}
          onClick={() => {
            setRating(num);
            onChange(num);
          }}
          className={`cursor-pointer ${
            num <= rating ? "text-yellow-400 fill-yellow-400" : "text-slate-500"
          }`}
        />
      ))}
    </div>
  );
};

export default RatingStars;
