// import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { fetchTrending } from '../../services/api';
import PageTitle from '../../components/PageTitle/PageTitle';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function getTrendingMovies() {
      try {
        setLoading(true);
        setError(false);
        const fetchedTrending = await fetchTrending();
        setMovies(fetchedTrending);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getTrendingMovies();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <PageTitle>Trending today</PageTitle>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <MovieList movies={movies} />
    </div>
  );
}
