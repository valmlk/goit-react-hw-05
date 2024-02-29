import { Suspense, useEffect, useState, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/api';
import Loader from '../../components/Loader/Loader';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import BackLink from '../../components/Backlink/BackLink';

export default function MovieDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location.state);

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        setError(false);
        const fetchedMovieDetails = await fetchMovieDetails(movieId);
        setMovie(fetchedMovieDetails);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [movieId]);


  return (
    <div>
    <BackLink href={backLinkRef.current ?? '/'}>Go back</BackLink>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movie && <MovieDetails movie={movie} />}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
