import React from 'react';

const ReviewDelete = ({ onDeleteReview }) => {
  const handleDelete = (reviewId) => {
    onDeleteReview(reviewId);
  };

  return (
    <div>
      <h2>Review Delete</h2>
      <p>Click on a review to delete:</p>
      <ul>
        <li onClick={() => handleDelete(1)}>Review 1</li>
        <li onClick={() => handleDelete(2)}>Review 2</li>
        {/* Add more reviews to delete */}
      </ul>
    </div>
  );
};

export default ReviewDelete;
