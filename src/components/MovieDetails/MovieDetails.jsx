import { Link } from 'react-router-dom';
import { PiFilmSlate } from "react-icons/pi";
import { MdOutlineReviews } from "react-icons/md";
import css from './MovieDetails.module.css';

const MovieDetails = ({ movie }) => {
  const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg'

  
  return (
    <div className={css.details}>
      <div className={css.general}>
      <img
      src={
        movie.poster_path ?
        `https://image.tmdb.org/t/p/w500/${movie.poster_path}` :  defaultImg
       }
        alt={movie.title}
        height={350}
        width={250}
      />
      <div>
        <h1>{movie.original_title}</h1>
        <p>User score : {movie.vote_average}</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h2>Genres</h2>
        {movie.genres && <h3>{movie.genres.map(genre => genre.name).join(', ')}</h3>}
      </div>
      </div>
      

      <h2>Additional information</h2>
      <ul className={css.list}>
        <li>
        <PiFilmSlate size={18}/>
          <Link to="cast" className={css.item}>Cast</Link>
        </li>
        <li>
        <MdOutlineReviews size={18} />
          <Link to="reviews" className={css.item}>Reviews</Link>
        </li>
      </ul>
    </div>
  );
};

export default MovieDetails;
