import React, { Suspense } from 'react';
import { Router } from '@reach/router';
import Movies from './components/movies';
import Header from './components/header';
import PopularMovies from './components/movies/movie-popular';
import './App.css';

const MovieDetails = React.lazy(() => import('./components/movies/movie-detail'));

function Main() {
  return (
    <div>
      <h1>Popular movies</h1>
      <Suspense fallback={<div>Loading popular movies...</div>}>
        <PopularMovies />
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main" style={{ padding: '1rem' }}>
        <Suspense fallback={<div>Loading page...</div>}>
          <Router>
            <Main path="/" />
            <Movies path="/movies" />
            <MovieDetails path="/movies/:id" />
          </Router>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
