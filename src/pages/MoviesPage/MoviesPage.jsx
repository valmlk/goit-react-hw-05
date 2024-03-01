import { useEffect, useState } from 'react';
import { useSearchParams} from 'react-router-dom';
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
  const [params, setParams] = useSearchParams();

  // const location = useLocation();

  const searchMovies = async query => {
    // params.set('query', );
    setQuery(query);
    setParams({query});
  };

  useEffect(() => {
    async function getMovies() {
      const query = params.get('query');
      if (!query) return;
      try {
        setLoading(true);
        setError(false);
        const fetchedMovies = await fetchMovies(query);
        setMovies(fetchedMovies)
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getMovies()
  }, [query, params]);

  return (
    <div>
      <SearchBar onSearch={searchMovies}></SearchBar>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <MovieList movies={movies}></MovieList>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
}
