import React, { useState } from 'react';

const ReviewForm = ({ onSubmitReview }) => {
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitReview({ rating, comment });
    setRating('');
    setComment('');
  };

  return (
    <div>
      <h2>Review Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          value={rating}
          min='1' max='10'
          onChange={(e) => setRating(e.target.value)}
        />
        <br />
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <br />
        <button id='btn' type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
