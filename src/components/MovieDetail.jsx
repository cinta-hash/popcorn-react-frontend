import React from 'react';

const MovieDetail = ({ movie }) => {
  return (
    <div>
      <h5>Movie Detail</h5>
      <h5>Title: {movie.title}</h5>
      <p>Release Year: {movie.release_date}</p>
      <p>Genre: {movie.genre}</p>
      <p>Reviews: {movie.reveiws}</p>
      {movie.image_url ? (
        <img src={movie.image_url} alt={movie.title} id='img'/>
      ) : (
        <img src='public/Fotor_AI（1）.png' alt={movie.title} />
      )}
      <p>Synopsis: {movie.plot_summary}</p>
    </div>
  );
};

export default MovieDetail;
