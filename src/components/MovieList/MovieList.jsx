import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css'
import { GiFilmProjector } from "react-icons/gi";

const MovieList = ({movies}) => {
  const location = useLocation();

  console.log(location)
  
  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <li key={movie.id}>
          <GiFilmProjector size={18} className={css.icon}/>
          <Link to={`/movies/${movie.id}`} state={location} className={css.item}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
