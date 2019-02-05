import React from 'react';
import { createCache, createResource } from 'react-cache';
import { popularMovies } from '../../query';
import MovieItem from './movie-item';

const cache = createCache();
const result = createResource(popularMovies);

function PopularMovies() {
  const movies = result.read(cache);
  if (movies.results) {
    return (
      <div>
        {movies.results.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
  return null;
}

export default React.memo(PopularMovies);
