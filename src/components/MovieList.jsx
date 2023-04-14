import React from 'react';

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie, index) => (
          <li className="list-group-item"
          key={movie.id} onClick={() => onSelectMovie(movie.id)}>
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
