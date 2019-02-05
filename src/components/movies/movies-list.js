import React from 'react';
import { searchMovies } from '../../query';
import MovieItem from './movie-item';
import { createCache, createResource } from 'react-cache';

const cache = createCache();
const result = createResource(searchMovies);

function MovieList({ query }) {
  if (query) {
    const movies = result.read(cache, query);
    if (movies.results) {
      return (
        <div>
          {movies.results.map(movie => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      );
    } else {
      return 'No result';
    }
  }
  return <h2>'Waiting for your search'</h2>;
}

export default React.memo(MovieList);
