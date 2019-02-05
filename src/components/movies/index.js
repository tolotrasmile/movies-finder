import React, { Suspense } from 'react';
import MoviesList from './movies-list';
import { navigate } from '@reach/router';
import { useDebounceState, useQuery } from '../../shared/hooks';
import './index.css';

function Movies() {
  const query = useQuery();
  const [value, setValue, debounceValue] = useDebounceState(query, 500);

  function handleChange(event) {
    setValue(event.target.value);
    navigate(`/movies?query=${event.target.value}`);
  }

  return (
    <div className="movies">
      <input type="text" value={value} onChange={handleChange} placeholder="Search..." />
      <div>
        <Suspense fallback={<div>loading...</div>}>
          <MoviesList query={debounceValue} />
        </Suspense>
      </div>
    </div>
  );
}

export default React.memo(Movies);
