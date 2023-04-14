import React from 'react';

const ReviewList = ({ reviews }) => {
  return (
    <div>
      <h2>Review List</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
