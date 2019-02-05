import queryString from 'query-string';

const getRequest = async function(url) {
  const request = await fetch(`${process.env.REACT_APP_BASE_URL}/${url}`);
  const json = await request.json();
  return json;
};

export const searchMovies = async function(keyword) {
  const url = `search/movie`;
  const query = queryString.stringify({
    query: keyword,
    api_key: process.env.REACT_APP_API_KEY
  });
  return getRequest(`${url}?${query}`);
};

export const movieDetails = async function(id) {
  const url = `movie/${id}`;
  const query = queryString.stringify({
    api_key: process.env.REACT_APP_API_KEY
  });
  return getRequest(`${url}?${query}`);
};

export const popularMovies = async function() {
  const url = `movie/popular`;
  const query = queryString.stringify({
    api_key: process.env.REACT_APP_API_KEY
  });
  return getRequest(`${url}?${query}`);
};
