import React, { useState } from "react";
import RatingStars from "./RatingStars";
import Button from "../ui/Button";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log({ rating, message });

    alert("Feedback submitted!");
    setRating(0);
    setMessage("");
  };

  return (
    <div className="max-w-xl mx-auto bg-slate-900 p-6 rounded-3xl border border-slate-800">
      <h2 className="text-xl font-bold text-white mb-4">Submit Feedback</h2>

      <p className="text-sm text-slate-400 mb-3">
        How helpful was this documentation?
      </p>

      <RatingStars onChange={setRating} />

      <textarea
        placeholder="Write your feedback..."
        className="w-full mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 text-white"
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <Button className="mt-4 w-full" onClick={handleSubmit}>
        Submit Feedback
      </Button>
    </div>
  );
};

export default FeedbackForm;
