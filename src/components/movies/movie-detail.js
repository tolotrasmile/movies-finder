import React from 'react';
import { createCache, createResource } from 'react-cache';
import { movieDetails } from '../../query';
import { getImageUrl } from '../utils';
import List from '../../shared/components/List';
import day from 'dayjs';

const cache = createCache();
const result = createResource(movieDetails);

export default function MovieDetail({ id }) {
  const movie = result.read(cache, id);
  return (
    <div>
      <div>
        <div>
          <div>
            <img src={getImageUrl(movie.poster_path)} alt="Poster" />
          </div>
          <h1>{movie.title}</h1>
          <a href={movie.homepage}>{movie.homepage}</a>
          <p>{MovieDetail.tagline}</p>
          <p>{movie.overview}</p>
          <div>
            <ul>
              <li>{day(movie.release_date).format('DD MMMM YYYY')}</li>
            </ul>
          </div>
          <List items={movie.production_companies} keyPath="id">
            {item => <li>{item.name}</li>}
          </List>
          <List items={movie.genres} keyPath="id">
            {item => <li>{item.name}</li>}
          </List>
          <List items={movie.spoken_languages}>{item => <li>{item.name}</li>}</List>
        </div>
      </div>
      <div>
        <List items={movie.production_countries}>{item => <li>{item.name}</li>}</List>
      </div>
    </div>
  );
}
