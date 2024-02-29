import axios from 'axios';

const API_KEY = '12a09bd9c27f1af4b424c5d02c13db11';

export const fetchTrending = async () => {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

  const response = await axios.get(url, {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data.results;
};


export const fetchMovies = async (query) => {
  const url = 'https://api.themoviedb.org/3/search/movie';
  
  const response = await axios.get(url, {
    params: {
      api_key: API_KEY,
      query,
    }
  });

  return response.data.results;
};



export const fetchMovieDetails = async (movieId) => {
  const url = 'https://api.themoviedb.org/3/movie';
  
  const response = await axios.get(`${url}/${movieId}`, {
    params: {
      api_key: API_KEY,
    }
  });

  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const url = 'https://api.themoviedb.org/3/movie';
  
  const response = await axios.get(`${url}/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    }
  });

  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const url = 'https://api.themoviedb.org/3/movie';
  
  const response = await axios.get(`${url}/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    }
  });

  return response.data.results;
};