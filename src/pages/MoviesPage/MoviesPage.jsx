import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from '../../services/api';
import { Toaster } from 'react-hot-toast';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchMovies = async newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setMovies([]);
  };

  const [params, setParams] = useSearchParams();
  const search = params.get('query') ?? '';

  const changeSearch = newQuery => {
    params.set('query', newQuery);
    setParams(params);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function searchMovies() {
      try {
        setLoading(true);
        setError(false);
        const fetchedMovies = await fetchMovies(query.split('/')[1]);

        setMovies(prevMovies => [...prevMovies, ...fetchedMovies]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    searchMovies();
  }, [query]);

  return (
    <div>
      <SearchBar onSearch={searchMovies} value={search} onChange={changeSearch}></SearchBar>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <MovieList movies={movies}></MovieList>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}
