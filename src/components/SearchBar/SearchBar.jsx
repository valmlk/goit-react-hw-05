import toast from 'react-hot-toast';
import { BsFillSearchHeartFill } from 'react-icons/bs';
import css from './SearchBar.module.css'

const SearchBar = ({ value, onSearch, onChange }) => {
    const handleSubmit = e => {
      e.preventDefault();
  
      if (e.target.elements.query.value.trim() === '') {
        toast.error('EMPTY STRING!');
        return;
      }
  
      onSearch(e.target.elements.query.value);
      e.target.reset();
    };
  
    return (
      <div className={css.header}>
        <form onSubmit={handleSubmit} className={css.form}>
          <input
            type="text"
            name="query"
            value={value}
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            className={css.input}
            onChange={evt => onChange(evt.target.value)}
          />
          <button type="submit" className={css.button}>
            <BsFillSearchHeartFill className={css.icon} size={18} />
          </button>
        </form>
      </div>
    );
  };

export default SearchBar;