import React from 'react';
import './movie-item.css';
import { navigate } from '@reach/router';
import Img from '../../shared/components/Img';
import { getImageUrl } from '../utils';

export default function MovieItem({ movie }) {
  return (
    <div className="movie-item" onClick={() => navigate(`/movies/${movie.id}`)}>
      <div className="movie-item-image">
        <Img style={{ width: 100 }} src={getImageUrl(movie.poster_path, 150)} alt="poster" />
      </div>
      <div className="movie-item-content">
        <h1>{movie.title}</h1>
        {movie.overview && <p>{movie.overview}</p>}
      </div>
    </div>
  );
}
