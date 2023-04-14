import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import ReviewForm from './components/ReviewForm';
import ReviewList from './components/ReviewList';
import ReviewDelete from './components/ReviewDelete';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch movies data
    fetch('http://localhost:9292/movies')
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  const handleSelectMovie = (movieId) => {
    // Fetch movie detail
    fetch(`http://localhost:9292/movies/${movieId}`)
      .then((response) => response.json())
      .then((data) => setSelectedMovie(data))
      .catch((error) => console.error('Error fetching movie detail:', error));

    // Fetch reviews for selected movie
    fetch(`http://localhost:9292/movies/${movieId}/reviews`)
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error('Error fetching reviews:', error));
  };

  const handleSubmitReview = (reviewData) => {
    // Fetch to submit review
    fetch(`http://localhost:9292/movies/${selectedMovie.id}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    })
      .then((response) => response.json())
      .then((data) => setReviews([...reviews, data]))
      .catch((error) => console.error('Error submitting review:', error));
  };

  const handleDeleteReview = (reviewId) => {
    // Fetch to delete review
    fetch(`http://localhost:9292/reviews/${reviewId}`, {
      method: 'DELETE',
    })
      .then(() => setReviews(reviews.filter((review) => review.id !== reviewId)))
      .catch((error) => console.error('Error deleting review:', error));
  };

  return (
    <div>
      <Header />
      <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
      {selectedMovie && (
        <div>
          <MovieDetail movie={selectedMovie} />
          <ReviewForm onSubmitReview={handleSubmitReview} />
          <ReviewList reviews={reviews} />
          <ReviewDelete onDeleteReview={handleDeleteReview} />
        </div>
      )}
    </div>
  );
};

export default App;