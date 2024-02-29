import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/api';

import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import css from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg'

  useEffect(() => {
    async function fetchCast() {
      try {
        setLoading(true);
        setError(false);
        const fetchedCast = await fetchMovieCast(movieId);
        setCast(fetchedCast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchCast();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {cast.length > 0 && (
        <ul className={css.list}>
          {cast.map(character => (
            <li key={character.id} className={css.item}>
              <img
              src={
                character.profile_path ?
                `https://image.tmdb.org/t/p/w500/${character.profile_path}` :  defaultImg
               }
                alt={character.name}
                width={120}
              />
              <div className={css.castinfo}>
              <p>{character.name}</p>
              <p>Character: {character.character}</p>
              </div>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
